<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\FruitController;
use App\Http\Controllers\JWT\UserController;
use Illuminate\Support\Facades\Route;


Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {

    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);



});

Route::group(['middleware' => 'jwt.auth'], function () {
    Route::get('/fruits', FruitController::class);
});


Route::group(['prefix' => 'users'], function () {
    Route::post('/', [UserController::class, 'store']);
});
