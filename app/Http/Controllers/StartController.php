<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use App\Market;
use Illuminate\Cookie\CookieJar;
// use Illuminate\Http\Response;
// use Symfony\Component\HttpFoundation\Cookie;


class StartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $markets = Market::all();
        // jak nie ma ustawionego ryneczku to otwórz widok w Vue i ustaw 
        // rynek w localStorage i cookie
        if (!$request->cookie('market')) {
            return view('front.welcome2',compact('markets'));
        } else {
            return view('front.store');
        }
    }

    public function setCookie(Request $request) {
        
        // $mymarket = Market::find($id);
        $minutes = 10000;
        // return redirect()->route('start')->withCookie(cookie()->forever('market',$mymarket));
        // $data = [
        //     'id' => $mymarket->id,
        //     'name' => $mymarket->name,
        //     'city' => $mymarket->city
        // ];
        // $json = json_encode($data);
        //dd($json);
        $cookie = cookie('name', 'DUPA', $minutes);
        
        // $cookie = cookie()->queue('name', 1, $minutes);
        return response('Hello World')->cookie($cookie);
        //return redirect()->route('start')->cookie('market', $json, $minutes, null, null, false, false);
        //return redirect()->route('start')->withCookie(cookie()->forever('market',$mymarket));
    }
    public function getCookie(Request $request) {

        echo $request->cookie('name');
    }

    
    
}
