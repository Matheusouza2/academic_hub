<?php

namespace App\Http\Controllers;

use App\Http\Requests\UsuarioRequest;
use App\Models\Usuario;
use App\Models\Endereco;
use App\Models\TipoUsuario;
use App\Models\User;
use App\Models\Aluno;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Contracts\Providers\JWT;
use Tymon\JWTAuth\Facades\JWTAuth;

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
        $validated = $request->validate([
            'cpf' => 'required',
            'nome' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'senha' => 'required|min: 8',
            'rg' => 'required',
            'data_nascimento' => 'required|date_format:Y-m-d',
            'sexo' => 'required|string|size:1',
            'tipo_usuario' => 'required|numeric'
        ]);

        // recebe a validade e da o create
        Usuario::create($validated);
        return response()->json(["message" => "usuario cadastrado"], 200);
    }

    // Função para listagem de usuário
    public function show()
    {

        $usuario = Usuario::join('endereco', 'endereco.id', 'usuario.endereco')->join('tipo_usuario', 'tipo_usuario.id', 'usuario.tipo_usuario')->paginate(20);
        //return ($usuario);
    }

    public function edit(string $id)
    {
    }

    // Função paara atualizar dados do usuario
    public function update(UsuarioRequest $request, Usuario $usuario)
    {
        $validated = $request->validated();

        if (empty($validated))
            return response()->json(["message" => "É necessário enviar algum parametro para alteração"], 400);

        $usuario->update($validated);

        return response()->json(["message" => "usuário alterado!"], 200);
    }


    public function destroy(Request $request, string $id)
    {
        // verifica quem é o usuario que esta fazendo a requisição
        $usuario = Usuario::find($id);
        // Se o usuario for aluno representado por "2" ele não pode deletar nenhum usuario
        if ($usuario->tipo_usuario == '2') {
            return response()->json(['message' => 'Alunos não podem deletar.'], 400);
        }
        /*
            user_id pega o id do usuario que vai ser deletado
            user_delete procura o usuario no banco de dados
            user_type verifica o tipo de usuario que vai ser apagado

        */
        $user_id = $request->id;
        $user_delete = Usuario::find($user_id);
        $user_type = $user_delete->tipo_usuario;

        //verifica se o usuario existe
        if (!$user_delete) return response()->json(['message' => 'Usuario não encontrado.'], 404);

        // se for admin ele pode apagar qualquer usuario
        if ($usuario->tipo_usuario == '0') {
            try {
                $user_delete->delete();
            } catch (Exception $e) {
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

            return response()->json(['message' => 'Usuario deletado com sucesso.'], 200);
        }
        // se for professor vai deletar somente alunos
        if ($usuario->tipo_usuario == '1') {
            if ($user_type == '0' || $user_type == '1') return response()->json(['message' => 'Não é possivel deletar esse usuario'], 403);

            try {
                $user_delete->delete();
            } catch (Exception $e) {
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

            return response()->json(['message' => 'Aluno deletado com sucesso.'], 200);
        }
    }
    //Função para validar Login
    public function validateLogin(Request $request)
    {

        $request->validate([
            'cpf' => ['required'],
            'senha' => ['required'],
        ]);

        $usuario = Usuario::where('cpf', $request->cpf)->first(); //Buscar usuario pelo cpf digitado pelo usuário

        if (!$usuario)
            return response()->json(['message' => 'Usuário inválido. Tente novamente.'], 400);;

        $credentials = ['cpf' => $request->cpf, 'password' => $request->senha];

        $token = JWTAuth::attempt($credentials);
       
        if(!$token) 
            return response()->json(['message' => 'Senha incorreta. Tente novamente.'], 400);

        return response()->json([
            'data' => [
                'token' => $token,
                'message' => 'Login realizado com sucesso.'
            ]
        ], 200);
    }
}
