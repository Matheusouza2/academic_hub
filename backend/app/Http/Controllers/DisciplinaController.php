<?php

namespace App\Http\Controllers;

use App\Models\Disciplina;
use Illuminate\Http\Request;
use App\Models\Curso;

class DisciplinaController extends Controller
{
    /*
        Exibir uma lista dos recursos
    */
    public function index()
    {
        //
    }

    /*
        Mostrar o formulário para a criação de um novo recurso
    */

    public function create()
    {
        //
    }

    /*
    Armazene um recurso recém-criado no armazenamento
    */

    public function store(Request $request)
    {

        //O método validate é chamado para validar os dados fornecidos, ou seja, se eles atendem aos criterios pre-estabelecidos
        $request->validate([
            'nome' => 'required|unique:disciplinas', //valida se o campo nome é único e obrigatório
            'codigo' => 'required|unique:disciplinas', //valida se o campo codigo é único e obrigatório
            'curso_id' => 'required|exists:cursos,id', // valida se o valor de curso_id existe na tabela cursos
            'ch_teorica' => 'required',
            'ch_pratica' => 'required',
            'sigla' => 'required',
            'ementa' => 'required'
        ]);

        //Se a validação for bem-sucedida, uma nova disciplina será adicionada
        $disciplina = Disciplina::create([
            'nome' => $request->nome,
            'codigo' => $request->codigo,
            'curso_id' => $request->curso_id,
            'ch_teorica' => $request->ch_teorica,
            'ch_pratica' => $request->ch_pratica,
            'sigla' => $request->sigla,
            'ementa' => $request->ementa,
            'ativa' => true // cada disiciplina criada, por padrão, é ativa
        ]);

        // Retorna uma resposta JSON com os dados da nova disciplina criada
        return response()->json([
            'message' => 'Disciplina criada com sucesso',
            'disciplina' => $disciplina
        ]);
    }

    public function listarDiciplinaPorCurso($curso_id)
{

    $curso = Curso::find($curso_id);

    if (!$curso) {
        return response()->json(['message' => 'Curso não encontrado'], 404);
    }

    $disciplinas = Disciplina::where('curso_id', $curso_id)->get()->toArray();

    return response()->json($disciplinas);
}
}
