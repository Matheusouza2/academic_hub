<?php

namespace App\Http\Controllers;

use App\Models\Nota;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Psy\Readline\Hoa\Console;

class NotaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function showGrades(Request $request)
    {
        $grades = Nota::with("periodo_letivo:id,descricao")
            ->with("disciplina:id,nome,sigla,ch_teorica,ch_pratica")
            ->where("aluno_id", $request->id)
            ->get()
            ->setHidden(["created_at", "updated_at", "disciplina_id", "periodo_letivo_id", "aluno_id"]);

        if($grades->isEmpty())
            return response()->json(["message"=>"Aluno não contem nenhuma nota"],404);
        

        return response()->json($this->formatterGradles($grades));
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
                "disciplina_nome" => $grade->disciplina->nome,
                "disciplina_sigla" => $grade->disciplina->sigla
            ]);
        }

        $returnGrades["coeficiente_de_rendimento"] = (float)number_format($coefficient, 2);

        return $returnGrades;
    }
}
