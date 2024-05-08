<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConteudoProgramatico extends Model
{
    use HasFactory;
    protected $table = "conteudo_programatico";

    protected $fillable = [
        'id',
        'data_aula',
        'conteudo',
        'horario_aula',
        'disciplina_id',
        'periodoLetivo_id'
    ];

    //cast dos campos data_aula para um valor date e horario_aula para time
    protected $casts = ['data_aula'=>'date' , 'horario_aula'=>'time'];

    //funções que definem os relacionamentos entre conteudo_programatico, periodo letivo, professor e disciplina
    public function periodo_letivo()
    {
        return $this->hasOne(PeriodoLetivo::class, 'periodoLetivo_id', 'id');
    }

    public function professor()
    {
        return $this->hasOne(professores::class, 'professor_id', 'id');
    }

    public function disciplina()
    {
        return $this->hasOne(disciplinas::class, 'disciplina_id', 'id');
    }
}
