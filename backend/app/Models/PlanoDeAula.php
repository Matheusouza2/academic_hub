<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlanoDeAula extends Model
{
    use HasFactory;
    protected $fillable = [
        'disciplina_id',
        'metodologia',
        'objetivo',
        'forma_de_avaliacao',
        'referencia_bibliografica',
        'aulas_ids',
        'status',
    ];

    protected $casts = [
        'aulas_ids' => 'array',
    ];

    public function disciplina()
    {
        return $this->belongsTo(Disciplina::class);
    }
}
