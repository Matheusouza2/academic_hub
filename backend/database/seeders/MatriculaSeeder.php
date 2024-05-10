<?php

namespace Database\Seeders;

use App\Models\Matriculas;
use Illuminate\Database\Seeder;

class MatriculaSeeder extends Seeder
{
    public function run(): void
    {
        Matriculas::create([
            'nro_matricula' => 12023023,
            'data_da_matricula' => "2024-05-08",
            'aluno_id' => 1,
            'disciplina_id' => 1,
            'turma_id' => 1,
            'aprovado' => true
        ]);
    }
}
