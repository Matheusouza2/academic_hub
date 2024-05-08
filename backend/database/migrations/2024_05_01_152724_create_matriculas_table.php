<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('matriculas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('nro_matricula')->unique(); //nro_matricula é único
            $table->date('data_da_matricula'); //quando foi feita a matricula
            $table->unsignedBigInteger('aluno_id');
            $table->foreign('aluno_id')->references('id')->on('alunos'); //cada matricula esta associada a um aluno
            $table->unsignedBigInteger('disciplina_id');
            $table->foreign('disciplina_id')->references('id')->on('disciplinas'); //cada matricula esta associada a um aluno
            $table->unsignedBigInteger('turma_id');
            $table->foreign('turma_id')->references('id')->on('turma'); //cada matricula tem uma turma
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('matriculas');
    }
};
