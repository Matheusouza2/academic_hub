<?php

namespace App\Http\Controllers;

<<<<<<< Updated upstream
=======
use App\Http\Controllers\Controller;
>>>>>>> Stashed changes
use Illuminate\Http\Request;

class PeriodoLetivoController extends Controller
{
<<<<<<< Updated upstream
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
        //
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
=======
    public function index()
    {
        // Retorne todos os pré-requisitos
    }

    public function create()
    {
        // Retorne a view para criar um novo pré-requisito
    }

    public function store(Request $request)
    {
        // Valide e salve o novo pré-requisito
    }

    public function show($id)
    {
        // Retorne a view para mostrar um único pré-requisito
    }

    public function edit($id)
    {
        // Retorne a view para editar um pré-requisito existente
    }

    public function update(Request $request, $id)
    {
        // Valide e atualize o pré-requisito
    }

    public function destroy($id)
    {
        // Exclua o pré-requisito
    }

>>>>>>> Stashed changes
}
