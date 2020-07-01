<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Market;
use App\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class WelcomeController extends Controller
{
    /**
     * id = market_id
     */
    
    public function news_main($id)
    {
        $tab= array();
       $articles = DB::table('payments')
       ->join('farmers','payments.farmer_id','=','farmers.id')
       ->join('articles','articles.farmer_id','farmers.id')
       ->join('farmer_market','farmer_market.farmer_id','farmers.id')
       ->join('units','units.id','articles.unit_id')
       //'payments.id as maxid',
       ->join('articleimages','articleimages.article_id','articles.id')
       ->select('farmers.name as FarmerName','articles.name AS ArticleName','articles.price')
       ->addselect('units.name as UnitName','articleimages.image','articles.id')
       ->whereIn('payments.id',[DB::raw('Select max(id) FROM payments GROUP BY farmer_id')])
       ->where('farmer_market.market_id',$id)
       ->where('payments.ispaid',1)
       
       ->where('articleimages.isdefault',1)
       ->whereNull('articleimages.deleted_at')
       ->whereDate('payments.stopdata','>=',Carbon::now()->isoFormat('YYYY-MM-DD'))
       ->orderBy('articles.created_at','desc')
        ->take(4)
        ->get();

        foreach($articles as $art) {
            $art->name=$art->ArticleName;
            //unset($art[1]);
            $art->unit = ['name' => $art->UnitName ];
            $art->farmer = ['name' => $art->FarmerName];
            //usuwa z tablicy $art
            unset($art->UnitName);
            unset($art->ArticleName);
            unset($art->FarmerName);
        }
        // dd($tab);
       return $articles;
    } 
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function news_main_old($id)
    {
        $tab = array();

      $farmers = Market::find($id)->farmers;
       foreach($farmers as $farmer) {
        //    $data = DB::table('farmers')
        //    ->join('payments','farmers.id','=','payments.farmer_id')
        //     ->select('farmers.name','payments.ispaid','payments.stopdata')->get();
        //     $tab[]=$data;
        $data  = $farmer->payments->last();
        // dd($data->stopdata);
        //dd(Carbon::now()->isoFormat('YYYY-MM-DD'));
        $today = Carbon::now()->isoFormat('YYYY-MM-DD');
        if($data->stopdata >= $today && $data->ispaid) {
            //id rolników którzy opłacili abonament i są aktywni
            $tab[] = $farmer->id;
           
        }
       }
        // whereIntegerInRaw
        $products = DB::table('articles')
        ->join('articleimages','articles.id','=','articleimages.article_id')
        ->join('units','articles.unit_id','=','units.id')
        ->join('farmers','articles.farmer_id','=','farmers.id')
        ->select('articles.id','articles.name','articles.desc','articles.price','articles.created_at')
        ->addSelect('articleimages.image')
        ->addselect('units.name as Unit','farmers.name as FarmerName','farmers.id as FarmerId')
        ->where('articleimages.isdefault',1)
        ->orderBy('articles.created_at','desc')
        ->whereIntegerInRaw('articles.farmer_id',$tab)->take(4)
        ->get();
       
    // do obiektu art dodaje pole "images"
    // foreach($products as $art) {
    //     $art->images = Article::find($art->id)->articleimages()->get(['id','image','isdefault']);
    // }
    return $products;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }
    public function register2 (Request $request) {
        return response()->json(['Success'],Response::HTTP_OK);
    }

}
