<?php

namespace Database\Seeders;

use App\Models\Aluno as ModelsAluno;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AlunoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
            ModelsAluno::create();
    }
}
