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
        Schema::table('notas',function (Blueprint $table){
            $table->renameColumn("periodoLetivo_id","periodo_letivo_id");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('notas',function (Blueprint $table){
            $table->renameColumn("periodo_letivo_id","periodoLetivo_id");
        });
    }
};
