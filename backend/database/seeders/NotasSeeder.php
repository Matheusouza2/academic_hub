<?php

namespace Database\Seeders;

use App\Models\Nota;
use Illuminate\Database\Seeder;

class NotasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Nota::create([

            'nota' => 8.5,
            'aluno_id' => 1, // ID do aluno associado
            'disciplina_id' => 1, // ID da disciplina associada
            'periodo_letivo_id' => 1, // ID do período letivo associado

        ]);
        Nota::create([
            'nota' => 7.2,
            'aluno_id' => 1, // ID do aluno associado
            'disciplina_id' => 2, // ID da disciplina associada
            'periodo_letivo_id' => 1, // ID do período letivo associado
        ]);

        Nota::create([

            'nota' => 10.0,
            'aluno_id' => 2, // ID do aluno associado
            'disciplina_id' => 1, // ID da disciplina associada
            'periodo_letivo_id' => 1, // ID do período letivo associado

        ]);
        Nota::create([
            'nota' => 10.0,
            'aluno_id' => 2, // ID do aluno associado
            'disciplina_id' => 2, // ID da disciplina associada
            'periodo_letivo_id' => 1, // ID do período letivo associado
        ]);
    }
}
