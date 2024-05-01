<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Professor extends Model
{
    use HasFactory;

    protected $table = "professores";

    protected $fillable = [
        'nome',
        'siape',
        'sexo',
        'data_nascimento'
    ];

    //função que define o relacionamento entre disciplina e professor
    public function disciplines()
    {
        return $this->belongsToMany('App\Models\Disciplina');
    }
  
}
