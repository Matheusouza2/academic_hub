<?php

namespace App\Http\Controllers;

use App\Models\Disciplina;
use App\Models\DisciplinaProfessor;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

use function Psy\debug;

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
        // Verificar se existe a disciplina requisitada no BD
        if (DisciplinaProfessor::where('disciplinas_id', $request->disciplinas_id)->exists()) {
            Log::debug('Disciplina já atribuída a um professor');
            return response()->json([
                'message' => 'Essa disciplina já foi atribuída a um professor'
            ], 400);
        }
        try {
            DisciplinaProfessor::create([
                'disciplinas_id' => $request->disciplinas_id,
                'professores_id' => $request->professores_id
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Erro ao atribuir disciplina ao professor',
            ], 500);
        }

        return response()->json([
            'message' => 'Disciplina atribuída ao Professor com sucesso',
        ], 200);
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
