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
