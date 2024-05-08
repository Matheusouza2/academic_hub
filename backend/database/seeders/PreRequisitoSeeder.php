<?php

namespace Database\Seeders;

use App\Models\PreRequisitos;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PreRequisitoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PreRequisitos::create([
            "disciplina_id" => 2,
            "pre_requisito_id" => 1,
        ]);
    }
}
