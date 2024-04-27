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
        'periodoLetivo_id'
    ];

    //função que define o relacionamento entre notas, periodo letivo, alunos e disciplina
    public function periodo_letivo()
    {
        return $this->hasOne(PeriodoLetivo::class, 'periodoLetivo_id', 'id');
    }

    public function aluno()
    {
        return $this->hasOne(alunos::class, 'aluno_id', 'id');
    }

    public function disciplina()
    {
        return $this->hasOne(disciplinas::class, 'disciplina_id', 'id');
    }
}
