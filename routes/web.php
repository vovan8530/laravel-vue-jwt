<?php

use App\Http\Controllers\IndexController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

//Route::get('/', function () {
//    return view('welcome');
//});

//Auth::routes();

Route::get('/{vue_capture?}', IndexController::class)->where('vue_capture', '[\/\w\.-]*');
