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
Route::get('bookables/{bookable}/reviews', 'Api\BookableReviewController')
    ->name('bookables.reviews.show');
Route::get('bookables/{bookable}/price', 'Api\BookablePriceController')
    ->name('bookable.price.show');

Route::get('/booking-by-review/{reviewKey}', 'Api\BookingByReviewController')
    ->name('booking.by-review.show');    

Route::apiResource('reviews', 'Api\ReviewController')->only(['show', 'store']);

Route::post('checkout', 'Api\CheckoutController')->name('checkout');
