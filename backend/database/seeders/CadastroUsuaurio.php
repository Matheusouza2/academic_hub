<?php

namespace Database\Seeders;

use App\Models\Usuario;
use Illuminate\Database\Seeder;

class CadastroUsuaurio extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Usuario::create([
            'cpf' => "123.456.789-00",
            'nome' => "Eladio Alves",
            'email' => "eladio@seed.com",
            "data_nascimento" => "2000-03-21",
            "sexo" => "M",
            "senha" => bcrypt("euOdeioPython"),
        ]);

        Usuario::create([
            'cpf' => "123.456.989-00",
            'nome' => "Elanio Alves",
            'email' => "elanio@seed.com",
            "data_nascimento" => "2000-03-21",
            "sexo" => "M",
            "senha" => bcrypt("euOdeioJava"),
        ]);
    }
}
