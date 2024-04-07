<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Professor;

class Curso extends Model
{
    use HasFactory;
    protected $table = 'cursos';
    protected $fillable = ['id', 'nome', 'coordenador_id'];

    public function coordenador()
    {
        return $this->belongsTo(Professor::class);
    }
}
