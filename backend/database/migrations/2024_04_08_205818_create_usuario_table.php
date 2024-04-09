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
        Schema::create('usuario', function (Blueprint $table) {
            $table->id();
            $table->string("cpf", 14)->unique();
            $table->string("rg", 12)->nullable();
            $table->string("nome");
            $table->string("email");
            $table->date("data_nascimento");
            $table->char("sexo", 1);
            $table->string("senha");

            $table->bigInteger("endereco")->unsigned()->nullable();
            $table->foreign('endereco')->references('id')->on('endereco')->onDelete('cascade');


            $table->bigInteger("tipo_usuario")->unsigned()->nullable();
            $table->foreign('tipo_usuario')->references('id')->on('tipo_usuario')->onDelete('cascade');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuario');
    }
};
