<?php

namespace App\Http\Controllers;

use App\Models\Nota;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use PhpParser\Node\Expr\Cast\Double;
use Ramsey\Uuid\Type\Integer;

class AlunoController extends Controller
{
    public function store(Request $request)
    {
        dd($request->aluno);

        return response()->json(['message' => 'aluno cadastrado com sucesso !'], 200);
    }

    public function showGrades(Request $request)
    {
        $grades = Nota::with("periodo_letivo:id,descricao")
            ->with("disciplina:id,nome,ch_teorica,ch_pratica")
            ->where("aluno_id", $request->id)
            ->get()
            ->setHidden(["created_at", "updated_at", "disciplina_id", "periodo_letivo_id", "aluno_id"]);


        return response()->json($this->formatterGradles($grades));
        // return response()->json($grades);

    }

    private function coefficientCalculation(Collection $grades)
    {
        $weighTotal = 0;
        $sumTotal = 0;
        foreach ($grades as $grade) {
            $weigh_teoric = $grade->disciplina->ch_teorica / 100;
            $weigh_pratic = $grade->disciplina->ch_pratica / 100;
            $res = (1 - abs($weigh_teoric + $weigh_pratic)) / 2;
            $weigh_teoric += $res;
            $weigh_pratic += $res;
            $weighTotal += $weigh_pratic + $weigh_teoric;
            $sumTotal += ($weigh_pratic * $grade->nota) + ($weigh_teoric * $grade->nota);
        }

        return $sumTotal / $weighTotal;
    }

    private function formatterGradles(Collection $grades)
    {
        $coefficient = $this->coefficientCalculation($grades);
        $returnGrades = [];

        foreach ($grades as $grade) {
            array_push($returnGrades, [
                "id" => $grade->id,
                "nota" => $grade->nota,
                "periodo_letivo" => $grade->periodo_letivo->descricao,
                "disciplina" => $grade->disciplina->nome
            ]);
        }

        $returnGrades["coeficiente_de_rendimento"] = (float)number_format($coefficient,2);

        return $returnGrades;
    }
}
