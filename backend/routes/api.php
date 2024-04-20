<?php

use App\Http\Controllers\AlunoController;
use App\Http\Controllers\CursosController;
use App\Http\Controllers\DisciplinaController;
use App\Http\Controllers\UsuarioController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('v1/cadastrar', [AlunoController::class, 'store']);


Route::prefix('v1')->group(function () {

    Route::prefix('user')->group(function () {

        Route::patch('/edit/{usuario}', [UsuarioController::class, 'update']);

        Route::delete('delete/{id}', [UsuarioController::class,'destroy']);

    });
  
  Route::prefix('cursos')->group(function(){
      Route::post('store', [CursosController::class, 'store']);
      // Para alteração de curso:
      Route::post('update/{curso}', [CursosController::class, 'update']);
  });

  Route::prefix('disciplinas')->group(function(){
      Route::post('store', [DisciplinaController::class, 'store']);
  });

  Route::post('login', [UsuarioController::class, 'validateLogin']);
  
});


