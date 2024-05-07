<?php

use App\Http\Controllers\FruitController;
use App\Http\Controllers\JWT\UserController;
use Illuminate\Support\Facades\Route;

//Route::get('/user', function (Request $request) {
//    return $request->user();
//})->middleware('auth:sanctum');


Route::get('/fruits', FruitController::class);

Route::group(['prefix' => 'users'], function () {
    Route::post('/', [UserController::class, 'store']);
});
