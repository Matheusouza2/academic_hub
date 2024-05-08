<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Mockery;
use Tests\TestCase;

class UserStoreTeste extends TestCase
{

    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    function test_store_user()
    {
        /* $cursoMock = Mockery::mock('overload:App\Models\Usuario');
        $cursoMock->shouldReceive('create')
            ->once()
            ->with([
                'cpf' => 111111,
                'rg' => 1111,
                'nome' => 'Usuário Teste',
                'email' => 'emailteste',
                'data_nascimento' => '2000-01-01',
                'sexo' => 'M',
                'senha' => 'Teste',
                'endereco' => 1,
                'tipo_usuario' => 1,
            ])
            ->andReturn((object) [
                'id' => '1',
                'cpf' => 111111,
                'rg' => 1111,
                'nome' => 'Usuário Teste',
                'email' => 'emailteste',
                'data_nascimento' => '2000-01-01',
                'sexo' => 'M',
                'senha' => 'Teste',
                'endereco' => 1,
                'tipo_usuario' => 1,
            ]); */

        $response = $this->postJson('/v1/cadastrar', [
            'cpf' => 111111,
            'rg' => 1111,
            'nome' => 'Usuário Teste',
            'email' => 'emailteste',
            'data_nascimento' => '2000-01-01',
            'sexo' => 'M',
            'senha' => 'Teste',
            'endereco' => 1,
            'tipo_usuario' => 1,
        ]);


        $response->assertStatus(200);

        // Verifica se a resposta tem a estrutura esperada
        $response->assertJson([
            'message' => 'usuario cadastrado',
        ]);
    }
}
