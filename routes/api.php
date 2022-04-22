<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\guest\ProjectGuestController;
use App\Http\Controllers\API\RegisterController;
use App\Http\Controllers\Api\admin\ProjectController;

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

Route::controller(RegisterController::class)->group(function(){
    Route::post('register', 'register');
    Route::post('login', 'login');
});

//admin routes
Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('admin/projects', ProjectController::class)->middleware('XSS');
});

//guest routes
Route::apiResource('guest/projects', ProjectGuestController::class)->except('store', 'update', 'destroy');
