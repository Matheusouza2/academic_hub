<?php

namespace Database\Seeders;

use App\Models\Professor;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProfessorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Professor::create([
            'nome' => 'João Silva',
            'siape' => '1234567',
            'sexo' => 'M',
            'data_nascimento' => '1980-05-15',
        ]);

        Professor::create([
            'nome' => 'Maria Oliveira',
            'siape' => '9876543',
            'sexo' => 'F',
            'data_nascimento' => '1975-12-10',
        ]);
    }
}
