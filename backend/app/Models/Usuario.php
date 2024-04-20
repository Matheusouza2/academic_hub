<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Facades\JWTAuth;

class Usuario extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;

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

    protected $casts = [
        'senha' => 'hashed',
    ];

    public function endereco()
    {
        return $this->hasOne(Endereco::class, 'id', 'endereco');
    }

    public function tipoUsuario()
    {
        return $this->hasOne(TipoUsuario::class, 'id', 'tipo_usuario');
    }

    public function login($credentials)
    {
        if (!$token = JWTAuth::attempt($credentials)) {
            throw new \Exception("Credencias incorretas, verifique-as e tente novamente.", -404);
        }
        return $token;
    }
      
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
}
