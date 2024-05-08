<?php

namespace Database\Seeders;

use App\Models\Disciplina;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DisciplinaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Disciplina::create([

            'nome' => 'Matemática Discreta',
            'sigla' => 'MAT',
            'codigo' => 'MAT101',
            'ch_teorica' => 60,
            'ch_pratica' => 30,
            'ementa' => 'Estudo de conceitos matemáticos avançados.',
            'curso_id' => 1,
            'ativa' => true,

        ]);

        Disciplina::create([
            'nome' => 'Lógica para Computação',
            'sigla' => 'MAT',
            'codigo' => 'MAT102',
            'ch_teorica' => 60,
            'ch_pratica' => 30,
            'ementa' => 'Estudo de conceitos matemáticos avançados.',
            'curso_id' => 1,
            'ativa' => true,
        ]);
    }
}
