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

    public function checkLogin(Request $request)
    {
        $request->validate([
            'cpf' => ['required'],
            'senha' => ['required'],
        ]);
        
        $usuarios = Usuario::all();
        
        $validoCpf = false;
        $validaSenha = false;

        $count = 0;
        $countCpf = 0;
        $countSenha = 0;
        
        foreach ($usuarios as $usuario) {
            if($usuarios[$count]->cpf === $request->cpf) {
                $validoCpf = true;
                $countCpf = $count;
            }
            if($usuarios[$count]->senha === $request->senha) {
                $validaSenha = true;
                $countSenha = $count;
            }
            $count++;
        }
        

        if(($validoCpf && !$validaSenha) || ($countCpf != $countSenha)) return response()->json(["error" => "Senha Inválida"], 400);
            elseif(!$validoCpf) return response()->json(["error" => "Usuário Inválido"], 400);
        else return response()->json(["success" => "Login de Usuário realizado"],200);
    }
}
