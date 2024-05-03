<?php

namespace Database\Seeders;

use App\Models\PeriodoLetivo;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PeriodoLetivoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PeriodoLetivo::create([

            'descricao' => 'Período Letivo 1',
            'dataInicio' => '2024-06-01',
            'dataTermino' => '2024-12-15',

        ]);
        PeriodoLetivo::create([
            'descricao' => 'Período Letivo 2',
            'dataInicio' => '2025-02-01',
            'dataTermino' => '2025-05-15',
        ]);
    }
}
