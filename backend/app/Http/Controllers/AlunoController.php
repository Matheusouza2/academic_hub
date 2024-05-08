<?php

namespace App\Http\Controllers;

use App\Models\Disciplina;
use App\Models\Matriculas;
use App\Models\Aluno;
use Illuminate\Http\Request;

class AlunoController extends Controller
{
    public function store(Request $request)
    {
        dd($request->aluno);
    }

    public function availableSubjects(Request $resquest, int $id)
    {
        $disciplinasDoPeriodoAtual = Disciplina::whereRelation("periodo_letivo", "descricao", "like", $resquest->periodo)
            ->with("preRequisitos")
            ->select(["id", "nome", "periodo_letivo_id"])
            ->get()
            ->toArray();

        $aprovados = Matriculas::where([["aluno_id", "=", $id], ["aprovado", "=", true]])
            ->select(['id'])
            ->get()
            ->toArray();

        $ids_aprovados = [];

        foreach ($aprovados as $aprovado) array_push($ids_aprovados, $aprovado["id"]);

        $listaFinal = [];
        $add = false;

        foreach ($disciplinasDoPeriodoAtual as $valor) {
            foreach ($valor["pre_requisitos"] as $pre_requisito) {
                if (in_array(!$pre_requisito["id"], $ids_aprovados)) break;
                $add = true;
            }

            if ($add) array_push($listaFinal, $valor);

            $add = false;
        }

        return response()->json($listaFinal);
    }
}
