<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\VeterinaireResource;
use App\Models\Veterinaire;
use App\Http\Controllers\VeterinaireController;


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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/veterinaires/{id}', function ($id) {
    return new VeterinaireResource(Veterinaire::findOrFail($id));
});


Route::get('/veterinaires', function () {
    return VeterinaireResource::collection(Veterinaire::all());
});


Route::post('/veterinaires', [VeterinaireController::class, 'store']);
Route::put('/veterinaires/{id}', [VeterinaireController::class, 'update']);
Route::delete('/veterinaires/{id}', [VeterinaireController::class, 'destroy']);

