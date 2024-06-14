<?php

namespace App\Http\Controllers;

use App\Models\Nota;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use App\Models\Disciplina;
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

    public function listStudentsGradesDiscipline(Request $request){
        $request->validate(['disciplina_id' => 'required']);

        // Verifica se a disciplina existe e busca o nome do professor
        $disciplina = Disciplina::with('professor:nome')->find($request->disciplina_id);
        if (!$disciplina) {
            return response()->json(['error' => 'Disciplina não encontrada'], 404);
        }

        // Busca os alunos matriculados na disciplina especificada e suas notas
        $notas = Nota::with('aluno:id,nome')
            ->where('disciplina_id', $request->disciplina_id)
            ->get();

        // Verifica se alguma nota foi encontrada
        if ($notas->isEmpty()) {
            return response()->json(['message' => 'Nenhum aluno matriculado ou nota encontrada para a disciplina especificada'], 404);
        }

        // Formata as notas
        $notasFormatadas = [];
        foreach ($notas as $nota) {
            $nota_1 = $nota->nota_1 ?? null;
            $nota_2 = $nota->nota_2 ?? null;
            $exfn = $nota->exfn ?? null;
            $media = ($nota_1 !== null && $nota_2 !== null) ? ($nota_1 + $nota_2) / 2 : null;
            $mfin = ($media !== null && $exfn !== null) ? ($media + $exfn) / 2 : null;

            $notasFormatadas[] = [
                'aluno_id' => $nota->aluno->id,
                'aluno_nome' => $nota->aluno->nome,
                'nota_1' => $nota_1,
                'nota_2' => $nota_2,
                'media' => $media,
                'exfn' => $exfn,
                'mfin' => $mfin,
                'sit' => $nota->sit ?? 'Não definida',
                'faltas' => $nota->faltas ?? 'Não definida',
            ];
        }

        // Estrutura da resposta final
        $response = [
            'disciplina_id' => $disciplina->id,
            'disciplina_nome' => $disciplina->nome,
            'professor_nome' => $disciplina->professor->nome,
            'quantidade_avaliacoes' => 2,
            'notas' => $notasFormatadas,
        ];

        // Retorna a resposta final
        return response()->json($response);
    }

}
