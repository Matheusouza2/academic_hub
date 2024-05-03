<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Aluno;
use App\Models\Disciplina;
use App\Models\Turma;



class Matriculas extends Model
{
    use HasFactory;

    //nome da tabela
    protected $table = 'matriculas';

    //campos que podem ser atribuídos em massa
    protected $fillable =['id','data_da_matricula', 'aluno_id', 'disciplina_id', 'turma_id'];

    //função que define o relacionamento entre matricula e aluno do tipo pertence a
    public function alunos()
    {
        return $this->belongsTo(Aluno::class, 'aluno_id', 'id');
    }

    //função que define o relacionamento entre matricula e disciplina do tipo pertence a
    public function disciplinas()
    {
        return $this->belongsTo(Disciplina::class, 'disciplina_id', 'id');
    }

    //função que define o relacionamento entre matricula e turma do tipo pertence a
    public function turmas()
    {
        return $this->belongsTo(Turma::class, 'turma_id', 'id');
    }

}
