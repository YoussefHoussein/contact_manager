<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::post('/add-contact',[ContactController::class , 'addContact']);
Route::post('/delete-contact',[ContactController::class , 'deleteContact']);
Route::post('/edit-contact',[ContactController::class , 'editContact']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
