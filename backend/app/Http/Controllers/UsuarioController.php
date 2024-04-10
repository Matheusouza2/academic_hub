<?php

namespace App\Http\Controllers;

use App\Http\Requests\UsuarioRequest;
use App\Models\Usuario;
use Exception;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    public function index()
    {
    }

    public function create()
    {
    }

    public function store(Request $request)
    {
    }

    public function show(string $id)
    {
    }

    public function edit(string $id)
    {
    }

    // Função paara atualizar dados do usuario
    public function update(UsuarioRequest $request, Usuario $usuario)
    {
        $validated = $request->validated();

        if (empty($validated)) return response()->json(["message" => "É necessário enviar algum parametro para alteração"], 400);

        $usuario->update($validated);

        return response()->json(["message" => "usuario alterado!"], 200);
    }

    public function destroy(string $id)
    {
    }
}
