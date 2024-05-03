<?php

namespace App\Http\Controllers;

use App\Models\DisciplinaProfessor;

use Illuminate\Http\Request;

class CoordenadorController extends Controller
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

        DisciplinaProfessor::create([
            'disciplinas_id' => $request->professor_id,
            'professores_id' => $request->disciplina_id
        ]);

        return response()->json([
            'message' => 'Disciplina atribuída ao Professor com sucesso',
        ]);

    }

   /**
    * Display the specified resource.
    */
    public function show(string $id)
    {
       //
    }

   /**
    * Show the form for editing the specified resource.
    */
    public function edit(string $id)
    {
       //
    }

   /**
    * Update the specified resource in storage.
    */
    public function update(Request $request, string $id)
    {
       //
    }

   /**
    * Remove the specified resource from storage.
    */
    public function destroy(string $id)
    {
       //
    }
}
