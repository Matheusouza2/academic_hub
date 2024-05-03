<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Turma extends Model
{
    use HasFactory;
    protected $table = "turma";

    protected $fillable = [
        'id',
        'nome',
        'periodoLetivo_id'
    ];

    //função que define o relacionamento entre turmas e periodo letivo
    public function periodo_letivo()
    {
        return $this->hasOne(PeriodoLetivo::class, 'periodoLetivo_id', 'id');
    }
}
