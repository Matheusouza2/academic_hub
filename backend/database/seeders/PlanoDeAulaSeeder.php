<?php

namespace Database\Seeders;

use App\Models\PlanoDeAula;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlanoDeAulaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PlanoDeAula::create([
            "disciplina_id" => 1,
            "metodologia" => "O que eu quiser",
            "objetivo" => "O que eu quiser",
            "forma_de_avaliacao" => "O que eu quiser",
            "referencia_bibliografica" => "O que eu quiser",
            "aulas_ids" => "{'1':1}",
            "status" => 2
        ]);
    }
}
