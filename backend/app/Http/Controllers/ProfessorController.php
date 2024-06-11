<?php

namespace App\Http\Controllers;

use App\Models\Professor;
use Illuminate\Http\Request;

class ProfessorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return response()->json(['message' => 'Usuário cadastrado com sucesso!'], 200);
    }

    /**
     * Display the specified resource.
     */


     public function show(Request $request)
     {
         try {
             $professors = Professor::all();
             return response()->json($professors, 200);
         } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {

             return response()->json(['error' => 'Professor não encontrado'], 404);
         } catch (\Illuminate\Database\QueryException $e) {

             return response()->json(['error' => 'Falha ao consultar o banco de dados'], 500);
         } catch (\Exception $e) {
             return response()->json(['error' => $e->getMessage()], 500);
         }
     }

  

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Professor $professor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Professor $professor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Professor $professor)
    {
        //
    }
}
