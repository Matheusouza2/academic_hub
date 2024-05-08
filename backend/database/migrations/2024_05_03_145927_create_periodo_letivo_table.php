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
        Schema::create('periodo_letivo', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('ano_semestre');
            $table->unsignedBigInteger('semestre');
            $table->date('inicio');
            $table->date('fim');
            $table->timestamps();


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
