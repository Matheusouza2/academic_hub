<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Disciplina;

class PreRequisitos extends Model
{
    use HasFactory;

    protected $table = 'pre_requisitos';
    protected $fillable = ['id', 'disciplina_id', 'pre_requisito_id'];

    public function diciplina()
    {
        return $this->belongsTo(Disciplina::class, 'disciplina_id', 'id');
    }

    public function id_requisito()
    {
        return $this->belongsTo(Disciplina::class, 'pre_requisito_id', 'id');
    }
}
