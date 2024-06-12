<?php

namespace App\Http\Controllers;

use App\Models\Disciplina;
use Illuminate\Http\Request;
use App\Models\Curso;
use App\Models\DisciplinaProfessor;
use App\Models\Professor;

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

    public function listarDiciplinaPorProfessor($professor_id)
    {

        $disciplinas = DisciplinaProfessor::join('disciplinas','disciplinas.id','disciplines_professors.disciplinas_id')->where('professores_id', $professor_id)->get()->toArray();

        if (count($disciplinas) == 0) {
            return response()->json(['message' => 'Esse Professor não possui nenhuma disciplina vinculada a ele'], 404);
        }

        return response()->json(['message' => 'Disciplinas buscadas com sucesso', 'disciplinas' => $disciplinas], 200);
    }

    public function alteraçãoDisciplina(Request $request, $id)
    {
        $disciplina = Disciplina::find($id);

        if(!$disciplina){
            return response()->json(['message' => 'Disciplina não encontrada']);
        }

        $disciplina->nome = $request->input('nome');
        $disciplina->codigo = $request->input('codigo');
        $disciplina->ch_pratica = $request->input('ch_pratica');
        $disciplina->ch_teorica = $request->input('ch_teorica');
        $disciplina->sigla = $request->input('sigla');
        $disciplina->ementa = $request->input('ementa');

        $disciplina->save();

        return response()->json(['message' => 'Disciplina atualizada com sucesso']);

    }

}
