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
        Schema::create('conteudo_programatico', function (Blueprint $table) {
            $table->id();
            $table->date('data_aula');
            $table->string('conteudo');
            $table->time('horario_aula');
            $table->unsignedBigInteger('professor_id');
            $table->unsignedBigInteger('disciplina_id');
            $table->unsignedBigInteger('periodoLetivo_id');
            $table->timestamps();
            $table->foreign('disciplina_id')->references('id')->on('disciplinas');
            $table->foreign('periodoLetivo_id')->references('id')->on('periodo_letivo');
            $table->foreign('professor_id')->references('id')->on('professores');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('conteudo_programatico');
    }
};
