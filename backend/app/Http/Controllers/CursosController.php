<?php

namespace App\Http\Controllers;

use App\Models\Professor;
use Illuminate\Http\Request;
use App\Models\Curso;

class CursosController extends Controller
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
        $request->validate([
            'nome' => 'required',
            'coordenador_id' => 'required'
        ]);

        if (!Professor::find($request->coordenador_id)) {
            return response()->json(['message' => 'Professor não encontrado'], 404);
        }

        $curso = Curso::create([
            'nome' => $request->nome,
            'coordenador_id' => $request->coordenador_id,
        ]);

        return response()->json(['message' => 'Curso criado com sucesso', 'curso' => $curso], 201);
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
