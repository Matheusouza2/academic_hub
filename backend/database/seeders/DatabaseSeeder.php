<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            CadastroUsuaurio::class,
            
            AlunoSeeder::class,
            ProfessorSeeder::class,
            CursoSeeder::class,
            DisciplinaSeeder::class,
            PeriodoLetivoSeeder::class,
            NotasSeeder::class,
        ]);
    }
}
