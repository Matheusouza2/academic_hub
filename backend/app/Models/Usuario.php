<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;

    protected $table = "usuario";

    protected $fillable = [
        'cpf',
        'rg',
        'nome',
        'email',
        'data_nascimento',
        'sexo',
        'senha',
        'endereco',
        'tipo_usuario',
    ];

    protected $hidden = ['senha'];

    public function endereco()
    {
        return $this->hasOne(Endereco::class);
    }

    public function tipoUsuario()
    {
        return $this->hasOne(TipoUsuario::class);
    }
}
