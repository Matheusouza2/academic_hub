<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Curso;
use App\Models\PeriodoLetivo;

class Disciplina extends Model
{
    use HasFactory;

    //nome da tabela
    protected $table = 'disciplinas';

    //campos que podem ser atribuídos em massa
    protected $fillable = ['id', 'nome', 'sigla', 'codigo', 'ch_teorica', 'ch_pratica', 'ementa', 'curso_id', 'periodo_letivo_id', 'ativa'];

    //cast do campo ativa para um valor booleano
    protected $casts = ['ativa' => 'boolean'];

    //função que define o relacionamento entre disciplinas e cursos do tipo pertence a
    public function cursos()
    {
        return $this->belongsTo(Curso::class, 'curso_id', 'id');
    }

    //função que define o relacionamento entre disciplina e professor
    public function professors()
    {
        return $this->belongsToMany('App\Models\Professor');
    }

    public function periodo_letivo()
    {
        return $this->belongsTo(PeriodoLetivo::class, 'periodo_letivo_id', 'id');
    }

    public function preRequisitos()
    {
        return $this->hasManyThrough(Disciplina::class, PreRequisitos::class, "disciplina_id", "id", "id", "pre_requisito_id")->select(["disciplinas.id", "nome"]);
    }
}
