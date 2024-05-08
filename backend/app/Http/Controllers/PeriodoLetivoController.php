<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PeriodoLetivoController extends Controller
{
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

}
