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
            PeriodoLetivoSeeder::class,
            DisciplinaSeeder::class,
            NotasSeeder::class,
            PreRequisitoSeeder::class,
            TurmaSeeder::class,
            MatriculaSeeder::class,
            PlanoDeAulaSeeder::class,
        ]);
    }
}
