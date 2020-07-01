<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
// Route::domain('api.localhost')->group(['namespace'=>'api'],function () {
Route::get('/market/{id}','Api\MarketController@index');
Route::get('/category','Api\CategoryController@index');

 //Route::get('/category','Api\CategoryController@index');
// Route::get('{marketslug}/category/{id_category}','Api\CategoryController@show');
// Route::get('{marketslug}/farmer/{farmername}','Api\FarmerController@show');
Route::get('/news_main/{id}','Api\WelcomeController@news_main'); // strona startowa - news (4 rekordy)
// Route::get('/bestsellers_main/{id}','Api\WelcomeController@bestsellers_main'); // strona startowa - Bestseller
// Route::get('/promotions_main/{id}','Api\WelcomeController@promotions_main'); // strona startowa - Bestseller 

Route::get('{marketslug}/news/','Api\NewsController@index'); // strona News
// Route::get('/bestsellers/{id}','Api\BestsellersController@index'); // strona Bestsellers 
// Route::get('/promotions/{id}','Api\PromotionsController@index'); // strona Bestsellers 


// Route::post('/login2','Api\AuthController@login2');
// Route::post('/register','Api\AuthController@register');


// dla Sancrum
// Route::post('/register','Api\AuthController@register');
// Route::post('/register2','Api\WelcomeController@register2');
Route::post('/login','Api\AuthController@login');

// fitry
Route::get('{marketslug}/filter/news','Api\FilterController@news');
Route::get('{marketslug}/filter/{id_category}','Api\FilterController@filterByCategory');

//Route::middleware('auth:api')->get('/current','Api\AuthController@currentUser');

Route::get('/product/{id}','Api\ProductController@getProduct');

//  Route::post('/order','Api\OrderController@store');
// Route::post('/order2','Api\OrderController@store');
//Route::middleware('auth:api')->post('/order2','Api\OrderController@store');
// });
Route::middleware('auth:sanctum')->post('/order','Api\OrderController@store');
