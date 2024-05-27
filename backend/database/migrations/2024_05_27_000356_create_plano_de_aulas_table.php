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
        Schema::create('plano_de_aulas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('disciplina_id');
            $table->text('metodologia');
            $table->text('objetivo');
            $table->text('forma_de_avaliacao');
            $table->text('referencia_bibliografica');
            $table->json('aulas_ids');
            $table->enum('status', ['ativo', 'inativo'])->default('ativo');

            // Disciplina ID
            $table->foreign('disciplina_id')->references('id')->on('disciplinas');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('plano_de_aulas');
    }
};
