<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Mockery;

class CursosControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_store(): void
    {
        // Cria um mock do modelo Curso
        $cursoMock = Mockery::mock('overload:App\Models\Curso');
        $cursoMock->shouldReceive('create')
            ->once()
            ->with([
                'nome' => 'Curso de Teste',
                'coordenador_id' => '1',
            ])
            ->andReturn((object) [
                'id' => '123',
                'nome' => 'Curso de Teste',
                'coordenador_id' => '1',
            ]);
    
        // Faz uma requisição POST para a rota de criação de cursos
        $response = $this->postJson('/cursos', [
            'nome' => 'Curso de Teste',
            'coordenador_id' => '1',
        ]);
    
        // Verifica se a resposta tem o status HTTP 201
        $response->assertStatus(201);
    
        // Verifica se a resposta tem a estrutura esperada
        $response->assertJson([
            'message' => 'Curso criado com sucesso',
            'curso' => [
                'id' => '123',
                'nome' => 'Curso de Teste',
                'coordenador_id' => '1',
            ],
        ]);
    }

}
