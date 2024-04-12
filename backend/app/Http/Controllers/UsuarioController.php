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
        $request->validate([
            'name'=>'required|string',
            'email'=>'required|email|unique:users,email',
            'password'=>'required|min: 8',
            'rg'=>'required|unique',
            'data_nascimento' =>'required',
            'sexo'=>'required',
            'user_typer'=>'required',
        ]);

        User::create([
            'nome' => $request->nome
        ]);
    }

    public function show(string $id)
    {
    }

    public function edit(string $id)
    {
    }

    // Função paara atualizar dados do usuario
    public function update(UsuarioRequest $request, string $id)
    {

        $validated = $request->validated();
        try {
            $usuario = Usuario::find($id);

            if ($usuario == null) return response()->json(["error" => "user not found"], 404);

            $usuario->update($validated);
        } catch (Exception $e) {
            return response()->json(["user_id" => $validated], 502);
        }

        return response()->json(["user_id" => $validated]);
    }

    public function destroy(string $id)
    {
    }
}
