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
        //valida a entrada
        $validated=$request->validate([
            'cpf'=>'required',
            'nome'=>'required|string',
            'email'=>'required|email|unique:users,email',
            'senha'=>'required|min: 8',
            'rg'=>'required',
            'data_nascimento' =>'required|date_format:Y-m-d',
            'sexo'=>'required|string|size:1',
            'tipo_usuario'=>'required|numeric'
        ]);

        // recebe a validade e da o create
        Usuario::create($validated);
        return response()->json(["message" => "usuario cadastrado"], 200);
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
