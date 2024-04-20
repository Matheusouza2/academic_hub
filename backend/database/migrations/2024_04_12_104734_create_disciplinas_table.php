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
        Schema::create('disciplinas', function (Blueprint $table) {
            $table->id();
            $table->string('nome')->unique();
            $table->string('sigla');
            $table->string('codigo')->unique();
            $table->string('ch_teorica');
            $table->string('ch_pratica');
            $table->string('ementa');
            $table->unsignedBigInteger('curso_id');
            $table->boolean('ativa'); //campo flag que auxiliará em caso que seja necessário desativar alguma disciplina
            $table->timestamps();
            $table->foreign('curso_id')->references('id')->on('cursos');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('disciplinas');
    }
};
