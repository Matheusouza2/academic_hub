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
        Schema::create('turma', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->unsignedBigInteger('periodoLetivo_id');
            $table->timestamps();
            $table->foreign('periodoLetivo_id')->references('id')->on('periodo_letivo');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('turma');
    }
};
