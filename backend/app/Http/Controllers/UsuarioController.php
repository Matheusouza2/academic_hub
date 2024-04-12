<?php

namespace App\Http\Controllers;

use App\Http\Requests\UsuarioRequest;
use App\Models\Usuario;
use App\Models\Aluno;
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

    public function destroy(Request $request, string $id){
        $usuario = Usuario::find($id);
        if($usuario->tipo_usuario == '2'){
            return response()->json(['message'=> 'Alunos não podem deletar.'], 400);
        }

        $user_id = $request->id;
        $user_delete = Usuario::find($user_id);
        $user_type = $user_delete->tipo_usuario;

        if(!$user_delete) return response()->json(['message'=> 'Usuario não encontrado.'], 404);

        if($usuario->tipo_usuario == '0'){
            try{
                $user_delete->delete();
            } catch(Exception $e) {
                $user_delete->cpf = null;
                $user_delete->rg = null;
                $user_delete->nome = null;
                $user_delete->email = null;
                $user_delete->data_nascimento = null;
                $user_delete->sexo = null;
                $user_delete->senha = null;
                $user_delete->endereco = null;
                $user_delete->save();
            }

            return response()->json(['message'=> 'Usuario deletado com sucesso.'], 200);
        }

        if($usuario->tipo_usuario == '1'){
            if($user_type == '0' || $user_type == '1') return response()->json(['message'=> 'Não é possivel deletar esse usuario'], 403);

            try{
                $user_delete->delete();
            } catch(Exception $e) {
                $user_delete->cpf = null;
                $user_delete->rg = null;
                $user_delete->nome = null;
                $user_delete->email = null;
                $user_delete->data_nascimento = null;
                $user_delete->sexo = null;
                $user_delete->senha = null;
                $user_delete->endereco = null;
                $user_delete->save();
            }

            return response()->json(['message'=> 'Aluno deletado com sucesso.'], 200);
        }
    }

}

