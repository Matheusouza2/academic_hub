<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Aulas;

class AulasController extends Controller
{
    /**
     * Ex.
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
        $request->validate([
            'professor_id' => 'required|numeric',
            'disciplina_id' => 'required|numeric',
            'data_aula' => 'required|string',
            'assunto' => 'required|string',
        ]);

        $aula = Aulas::create([
            'assunto' => $request->nome,
            'data_aula' => $request->data_aula,
            'professor_id' => $request->professor_id,
            'disciplina_id' => $request->disciplina_id,
        ]);

        return response()->json(['message' => 'Aula registrada com sucesso', 'aula' => $aula], 201);
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
    public function update(Request $request, Aulas $aula)
    {
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
