<?php

namespace App\Http\Controllers\Farmer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Farmer;
use App\Region;
use App\Plan;
use App\User;
use DateTime;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
//use Image;
use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Support\Facades\Storage;

class FarmerController extends Controller
{
    private $fileName;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       
        // echo asset('storage/rolnicy/farmer-20200617.webp');
        $authuser = Auth::user();
        $farmer= $authuser->farmer;
       
        // nie mam jeszcze danych
        if($authuser->isFarmer() && $authuser->farmer == null ) {
            // brak uzupoełnionego profilu
            return redirect()->route('farmer.profil.create');
        }
       
        if($authuser->farmer()->first()->payments->isEmpty()) {
            echo "nie ma oplat";
                return redirect()->route('farmer.payment.create');
                // $plans = Plan::all();
                // return view('farmer.payment.create',compact('authuser','plans'));
             }
            
        
        // dd($img);
        // echo asset('storage/file.txt');
        // $img = $this->getAvatar('dd.jpg');
        return view('farmer.profil.index',compact('farmer'));
       // dd($authuser->roles[0]->name);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //echo "test";
        $region = Region::pluck('name','id');
        return view('farmer.profil.create',compact('region'));
    }

    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store2(Request $request)
    {
        $request->validate([
            'name' => 'required|min:5',
            'city' => 'required',
           // 'phone' =>'required',
            'image'  => 'required|mimes:jpg,jpeg,png,webp,svg|max:2048',
            'region_id' => 'required'
          
        ]);
        $today = date('Ymd');
        if ($request->file('image')) {

            $imagePath = $request->file('image');
            $fileName = 'farmer-'.$today;
            $this->fileName = $fileName;
            $filenameExt = $fileName.'.webp';
            $filenamejpg = 'farmer-'.$today.'.jpg';
            $destinationPath = storage_path().'/app/public/rolnicy/';
            $destinationPath_thumb = storage_path().'/app/public/rolnicy/thumbnail';
            //$request->file('image')->storeAs('rolnicy', $fileName, 'public');
            
            Image::make($imagePath->getRealPath())->resize(350, 350, function ($constraint) {
            $constraint->aspectRatio();
                 })
                ->save($destinationPath.'/'.$filenameExt);
                // ->save($destinationPath.'/'.$filenamejpg);
            //     ->save(storage_path().'/app/public/rolnicy/'.$filenamejpg);
            Image::make($imagePath->getRealPath())->resize(150, 150, function ($constraint) {
            $constraint->aspectRatio();
                        })
                ->save($destinationPath_thumb.'/'.$filenameExt);
            //     // ->save($destinationPath_thumb.'/'.$filenamejpg);
            //       ->save('storage/app/public/rolnicy/thumbnail/'.$filenamejpg);
            // $path = $request->file('image')->storeAs('uploads', $imageName, 'public');
        }

           //dd($request->all());

        $data = $request->all();
        // //podmieniam z file na swoją nazwę
        $data['image']= $this->fileName;
        // // $data['image'] = $fileName;
        // // dd($request->all());
        //  dd($data);
   
        $request->user()->farmer()->create($data);
        
        return redirect()->route('farmer.profil.index');
       
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $farmer = Farmer::find($id);
        
        $region = Region::pluck('name','id');
        return view('farmer.profil.edit',compact('region','farmer'));
    }


    public function update(Request $request, $id) {
        $user = Auth::user();
        if($request->hasFile('image')) {
            $image = $request->file('image');
            $filenamewithextension = $request->image->getClientOriginalName();
            $ext = $request->image->getClientOriginalExtension();
            $filename = uniqid().'.'.$ext;
            // $request->image->storeAs('public',$filenamewithextension);
           // $image->move(public_path().'/images/',$filenamewithextension);
          //$filePath = $image->storeAs('obrazki',$filename,'public');
            $destination_path = 'public/images';
            // $path = $image->storeAs($destination_path,$filename);
             $image->move(public_path().'/rolnicy/',$filename);
          $farmer = Farmer::find($id);
          
            $data = $request->all();
            $data['image']= $filename;
                   
            $farmer->update($data);
            return redirect()->route("farmer.profil.index");
           //Storage::delete("/public/pics/{$user->image}");
          
        }
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update2(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|min:10',
            'image'  => 'required|mimes:jpg,jpeg,png,webp,svg|max:2048',
            'city' => 'required',
           // 'phone' =>'required',
            'region_id' => 'required' 
        ]);
        
        if($request->hasFile('image')) {
            //get filename with extension
            $filenamewithextension = $request->file('image')->getClientOriginalName();
    
            //get filename without extension
            $filename = pathinfo($filenamewithextension, PATHINFO_FILENAME);
    
            //get file extension
            $extension = $request->file('image')->getClientOriginalExtension();
    
            //filename to store
            $filenametostore = $filename.'_'.time().'.'.$extension;
            
            $image = $request->file('image');
            //Upload File
            // save to storage/app/rolnik 
          //  $upload = $request->file('image')->storeAs('public', $filenametostore);
            
           // $destinationPath = public_path('/thumbnail_images');

           // $img = Image::make($request->file('image')->getRealPath());
          //  $img->resize(200,200);

            $destinationPath = storage_path();
            $img = Image::make($image->getRealPath());
            $img->resize(100,100,function($constraint){
                $constraint->aspectRatio();
            })->save($destinationPath. '/'. $filenametostore);

            //zapisuje oryginał zdjęcia bez zmian
           $destinationPath = storage_path('/rolnik');
          // $destinationPath = storage_path();
           $image->move($destinationPath,$filenamewithextension);

            // Route::get('storage/{filename}', function ($filename)
            // {
            //     return Image::make(storage_path('public/' . $filename))->response();
            // });
            $request->image = $filenametostore;
            $farmer = Farmer::find($id);
            $farmer->update($request->all());
            return redirect()->route("farmer.profil.index");
               
        }
        
        
    }

    public function getAvatar($value) {
        return asset("storage/".$value);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
