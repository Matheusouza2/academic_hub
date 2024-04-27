<?php

namespace Database\Seeders;

use App\Models\Curso;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CursoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Curso::create([

            'nome' => 'Engenharia da Computação',
            'coordenador_id' => 1, // ID do coordenador associado (pode ser um professor)
            'carga_horaria' => 3600, // em horas
            'sigla' => 'EC',
        ]);

        Curso::create([
            'nome' => 'Ciência da Computação',
            'coordenador_id' => 2, // ID do coordenador associado (pode ser um professor)
            'carga_horaria' => 3200, // em horas
            'sigla' => 'CC',
        ]);
    }
}
