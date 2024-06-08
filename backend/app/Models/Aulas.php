<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Usuario;

class Aulas extends Model
{
    use HasFactory;
    protected $table = 'aulas';
    protected $fillable = ['id', 'data_aula', 'assunto', 'professor_id', 'disciplina_id'];

    public function professor()
    {
        return $this->hasOne(Professor::class, 'id', 'professor_id');
    }

    public function disciplina()
    {
        return $this->hasOne(Disciplina::class, 'id', 'disciplina_id');
    }
}
