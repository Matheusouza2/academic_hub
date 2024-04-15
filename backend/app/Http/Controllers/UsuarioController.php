<?php

namespace App\Http\Controllers;

use App\Http\Requests\UsuarioRequest;
use App\Models\Usuario;
use App\Models\Endereco;
use App\Models\TipoUsuario;
use App\Models\User;
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

    // Função para listagem de usuário
    public function show()
    {

        $usuario = Usuario::join('endereco', 'endereco.id', 'usuario.endereco')->join('tipo_usuario', 'tipo_usuario.id', 'usuario.tipo_usuario')->paginate(20);
        return($usuario);

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


