<?php

namespace App\Http\Controllers;

use App\Models\PlanoDeAula;
use Illuminate\Http\Request;

class PlanoDeAulaController extends Controller
{
    // Método para enviar um plano de aula
    public function submit(Request $request)
    {
        //O método validate é chamado para validar os dados fornecidos, ou seja, se eles atendem aos criterios pre-estabelecidos
        $request->validate([
            'disciplina_id' => 'required|exists:disciplinas,id',
            'metodologia' => 'required',
            'objetivo' => 'required',
            'forma_de_avaliacao' => 'required',
            'referencia_bibliografica' => 'required',
            'aulas_ids' => 'required|array',
            'aulas_ids.*' => 'exists:aulas,id', // Valida cada ID no array
        ]);

        if($request->has('planoAula_id')){
        $plano_aula = PlanoDeAula::create([
            'disciplina_id' => $request->disciplina_id,
            'metodologia' => $request->metodologia,
            'objetivo' => $request->objetivo,
            'forma_de_avaliacao' => $request->forma_de_avaliacao,
            'referencia_bibliografica' => $request->referencia_bibliografica,
            'aulas_ids' => $request->aulas_ids
        ]);

        $message = 'Plano de aula criado e enviado com sucesso!';

         }else{

            $plano_aula = PlanoDeAula::findOrFail($request->planoAula_id);
            $plano_aula->update([
                'disciplina_id' => $request->disciplina_id,
                'metodologia' => $request->metodologia,
                'objetivo' => $request->objetivo,
                'forma_de_avaliacao' => $request->forma_de_avaliacao,
                'referencia_bibliografica' => $request->referencia_bibliografica,
                'aulas_ids' => $request->aulas_ids
            ]);

            $message = 'Plano de aula atualizado e enviado com sucesso!';
        }

            return response()->json(['message' => $message], 200);

    }

    //Método para aprovar um Plano de aula
    public function approve(Request $request){

        $request->validate([
            'id' => 'required' //valida se o id passado existe na tabela
        ]);

        $plano_aula =  PlanoDeAula::find($request->id); //é buscado a respectiva tabela do id especificado
        if(!$plano_aula){
            return response()->json(['message' => 'Plano de aula não encontrado!'], 400);
        }
        $plano_aula->status = 1; // status = ativo, é denotado como aprovado de forma idem à migration
        $plano_aula->save();

        return response()->json(['message' => 'Plano de aula aprovado!'], 200);
    }

    public function giveBack(Request $request){

        $request->validate([
            'id' => 'required' //valida se o id passado existe na tabela
        ]);

        $plano_aula =  PlanoDeAula::find($request->id); //é buscado a respectiva tabela do id especificado
        if(!$plano_aula){
            return response()->json(['message' => 'Plano de aula não encontrado!'], 400);
        }
        $plano_aula->status = 2; // status = inativo, é denotado como não aprovado de forma idem à migration
        $plano_aula->save();

        return response()->json(['message' => 'Plano de aula devolvido!'], 200);

    }

}
