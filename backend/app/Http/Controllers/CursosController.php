<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Curso;
use App\Models\Usuario;

class CursosController extends Controller
{

    public function index()
    {
        //
    }

    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        //  o método validate do objeto request é chamado para garantir que os dados enviados atenda aos criterios
        $request->validate([
            'nome' => 'required|unique:cursos', // O campo 'nome' e obrigatório e deve ser único na tabela 'cursos'.
            'coordenador_id' => ['required', 'exists:professores,id'], // O campo 'coordenador_id' é obrigatório e deve existir como 'id' na tabela 'professores'.
            'carga_horaria' => 'required',
            'sigla' => 'required'
        ]);

        // se a validação passar, um novo registro curso é criado no banco de dados usando os dados da solicitação.
        $curso = Curso::create([
            'nome' => $request->nome,
            'coordenador_id' => $request->coordenador_id,
            'carga_horaria' => $request->carga_horaria,
            'sigla' => $request->sigla,
        ]);

        // uma resposta json é retornada e o código de status 201 é retornado para indicar que um novo curso foi criado
        return response()->json(['message' => 'Curso criado com sucesso', 'curso' => $curso], 201);
    }

     // funcao para listar os cursos
    public function show()
    {
        $cursos = Curso::paginate(20);
        return response()->json($cursos);
    }


    public function edit(string $id)
    {
        //
    }

    public function update(Request $request, $id)
{
    try {
        // Encontre o curso pelo id
        $curso = Curso::find($id);

        // Verifique se o curso existe
        if (!$curso) {
            return response()->json(['message' => 'Curso não encontrado.'], 404);
        }

        // Validação dos dados de atualização
        $request->validate([
            'nome' => 'required|unique:cursos,nome,' . $curso->id, // O campo 'nome' é obrigatório e deve ser único na tabela 'cursos', exceto para o curso atual.
            'coordenador_id' => ['required', 'exists:professores,id'], // O campo 'coordenador_id' é obrigatório e deve existir como 'id' na tabela 'professores'.
            'carga_horaria' => 'required',
            'sigla' => 'required'
        ]);

        // Atualização dos dados do curso
        $curso->update($request->all());

        return response()->json(['message' => 'Alteração de curso bem-sucedida.', 'curso' => $curso], 200);

    } catch (\Exception $e) {
        return response()->json(['message' => 'Erro ao atualizar curso.', 'error' => $e->getMessage()], 500);
    }
}



    public function destroy(string $id)
    {
        //
    }

    public function designarCoordenador(Request $request, string $user_id, string $curso_id) {

        $user = Usuario::find($user_id);
        $curso = Curso::find($curso_id);

        if(!$user || !$curso) {
            return response()->json(['message' => 'Usuário ou curso não encontrado'], 404);
        }

        // Verifique se o usuário é um administrador
        if($user->tipo_usuario != 0) {
            return response()->json(['message' => 'Apenas administradores podem designar coordenadores'], 403);
        }

        // Atualize o coordenador_id do curso
        $curso->coordenador_id = $user_id;
        $curso->save();

        return response()->json(['message' => 'Coordenador designado com sucesso para o curso']);
    }

}
