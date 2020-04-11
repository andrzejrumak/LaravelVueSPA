<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user(); 
});

//Route::get('bookables', 'Api\BookableController@index'  );
//Route::get('bookables/{id}', 'Api\BookableController@show'  );

Route::apiResource('bookables', 'Api\BookableController');
Route::get('bookables/{bookable}/availability', 'Api\BookableAvailabilityController')
    ->name('bookables.availability.show');