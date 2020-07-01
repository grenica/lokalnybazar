<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Role;
use App\Client;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Api\Response;

class AuthController extends Controller
{
    public function login(Request $request) {
        $user= User::where('email', $request->email)->first();
        
            if (!$user || !Hash::check($request->password, $user->password)) {
                return response([
                    'message' => ['These credentials do not match our records.']
                ], 404);
            }
        
             $token = $user->createToken('authToken')->plainTextToken;
        
            $response = [
                'user' => $user,
                'token' => $token
            ];
        
             return response($response, 201);
    }
   
    // public function login(Request $request) {
    //     $user = User::where('email', $request->email)->first();
    // }
    // public function register(Request $request) {
        
    //     // $role = Role::where('name','Klient')->first();
    //     //$user= User::create($request->all());
    //     // $user = User::create([
    //     //     'name' => $request->name,
    //     //     'email' => $request->email,
    //     //     'password' => Hash::make($request->password),
    //     // ]);
    //     // $user->client()->create(['city'=>' ']);

    //     // $user = new User();
    //     // $user->name = $request->name;
    //     // $user->email = $request->email;
    //     // $user->password = $request->password;
    //     // $user->save();
    //     // $u = User::where('name',$request->name)->where('email',$request->email)
    //     // $us->client()->create(['city'=>' ']);

    //     //łacze użytkownika z rolą "Klient"
    //     // $user->roles()->attach($role);
        
    //     // dodaje do tabeli Clients
    //     // $user->client()->create([

    //     // ]);
    //     //dodaje ślepy rekord w klientach
        
        
    //     // $accessToken = $user->createToken('authToken')->plainTextToken;
    //     // $response = [
    //     //     'user' => $user,
    //     //     'token' => $accessToken
    //     // ];
    //     //return response($response,201);
    //     return response()->json(['Success'],Response::HTTP_OK);
    // }
    /**
     * rejestruj działa dla Passport
     */
    public function register_old(Request $request)
    {
        $valid= $request->validate([
            'name' => 'required',
            'email' => 'email|required',
            'password' =>'required|confirmed'
        ]);
        $user = User::create($valid);
        $accessToken = $user ->createToken('authToken')->accessToken;
        return response(['user'=> $user, 'access_token'=> $accessToken]);
    }
    /**
     * Display a listing of the resource. Passport
     *
     * @return \Illuminate\Http\Response
     */
    public function login_old(Request $request)
    {
        $valid= $request->validate([
            'email' => 'email|required',
            'password' =>'required'
        ]);
        if(!auth()->attempt($valid)) {
            return response(['message' => 'Niewlasciwe logowanie']);
        }
        $accessToken = auth()->user()->createToken('authToken')->accessToken;
        return response(['user'=> auth()->user(), 'access_token'=> $accessToken]);
    }

    public function currentUser()
    {
        return Auth::user();
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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
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
