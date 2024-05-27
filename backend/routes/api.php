<?php

use App\Http\Controllers\AlunoController;
use App\Http\Controllers\CursosController;
use App\Http\Controllers\DisciplinaController;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\AulasController;
use App\Http\Controllers\CoordenadorController;
use App\Http\Controllers\NotaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfessorController;
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

Route::prefix('v1')->group(function () {
    /**
    * Rota responsável pelo LOGIN
    */
    Route::post('login', [UsuarioController::class, 'validateLogin']);

   /**
   *  Rotas para o controller de Usuário
   */
    Route::prefix('user')->group(function () {
        Route::patch('/edit/{usuario}', [UsuarioController::class, 'update']);
        Route::post('/cadastrar', [UsuarioController::class, 'store']);
        Route::delete('delete/{id}', [UsuarioController::class, 'destroy']);
        Route::get('/list', [UsuarioController::class, 'show']);
    });

   /**
   * Rotas para o controller de Cursos
   */
    Route::prefix('cursos')->group(function () {
        Route::post('store', [CursosController::class, 'store']);
        Route::post('update/{curso}', [CursosController::class, 'update']);
        Route::get('/list-curso', [CursosController::class, 'show']);
    });

    /**
     * Rotas para o Controller do Professor
     */
    Route::prefix('professor')->group(function () {
        Route::post('store', [ProfessorController::class, 'store']);
        Route::get('list', [ProfessorController::class, 'show']);
    });
    /**
    * Rotas para o controller de Alunos
    */
    Route::prefix('aluno')->group(function () {
        Route::get('/notas/show/{id}', [NotaController::class, 'showGrades']);
        Route::get('/{id}/disciplinas-disponiveis', [AlunoController::class, 'availableSubjects']);
    });

    /**
    * Rotas para o controller de Aulas
    */
    Route::prefix('aulas')->group(function () {
        Route::post('/criar', [AulasController::class, 'store']);
    });

    /**
    * Rotas para o controller de Disciplinas
    */
    Route::prefix('disciplinas')->group(function () {
        Route::post('store', [DisciplinaController::class, 'store']);
        Route::get('lista/{id}', [DisciplinaController::class, 'listarDiciplinaPorCurso']);
    });

    /**
    * Rotas para o controller de Coordenador
    */
    Route::prefix('coordenador')->group(function () {
      Route::post('/atribuir-diciplinas', [CoordenadorController::class, 'store']);
    });
});