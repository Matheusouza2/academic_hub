<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DisciplinaProfessor extends Model
{
    use HasFactory;

    protected $table = "disciplines_professors";

    protected $fillable = [
        'disciplinas_id',
        'professores_id'
    ];

}
