<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Curso;

class Disciplina extends Model
{
    use HasFactory;

    //nome da tabela
    protected $table = 'disciplinas';

    //campos que podem ser atribuídos em massa
    protected $fillable = ['id', 'nome', 'sigla', 'codigo', 'ch_teorica', 'ch_pratica', 'ementa', 'curso_id','ativa'];

    //cast do campo ativa para um valor booleano
    protected $casts = ['ativa'=>'boolean'];

    //função que define o relacionamento entre disciplinas e cursos do tipo pertence a
    public function cursos()
    {
        return $this->belongsTo(Curso::class, 'curso_id', 'id');
    }

}
