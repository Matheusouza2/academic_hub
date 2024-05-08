<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PeriodoLetivo extends Model
{
    use HasFactory;
    protected $table = "periodo_letivo";

    protected $fillable = [
        'id',
        'descricao',
        'dataInicio' => 'date',
        'dataTermino' => 'date',
    ];
}
