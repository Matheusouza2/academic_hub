<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Nota extends Model
{
    use HasFactory;
    protected $table = "notas";

    protected $fillable = [
        'id',
        'nota',
        'aluno_id',
        'disciplina_id',
        'periodo_etivo_id'
    ];

    //função que define o relacionamento entre notas, periodo letivo, alunos e disciplina
    public function periodo_letivo()
    {
        return $this->hasOne(PeriodoLetivo::class, "id", 'periodo_letivo_id');
    }

    public function aluno()
    {
        return $this->hasOne(Aluno::class, 'id', 'aluno_id');
    }

    public function disciplina()
    {
        return $this->hasOne(Disciplina::class,'id', 'disciplina_id');
    }
}
