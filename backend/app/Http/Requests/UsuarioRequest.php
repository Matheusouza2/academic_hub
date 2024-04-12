<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;

class UsuarioRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Validação do request
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nome' => 'string|max:255|regex:/^\p{L}[\p{L}\s]*\p{L}$/u',
            'email' => 'email|max:255',
            'rg' => 'regex:/^\d{2}\.\d{3}\.\d{3}-\d{1}$/',
            'data_nascimento' => 'date|date_format:Y-m-d',
            'endereco' => 'numeric',
            'tipo_usuario' => 'numeric',
            'sexo' => 'string|size:1',
        ];
    }

    public function messages()
    {
        return [
            'nome.regex' => 'O campo nome só pode conter letras e espaços entre o nome ou sobrenome.',
            'nome.max' => 'Tamanho máximo excedido',
            'email.email' => "informe um email válido",
            'email.max' => "Tanhamo máximo excedido",
            'rg.regex' => 'RG inválido',
            'data_nascimento.date_format' => 'data deve ser da forma Y-m-d',
            'data_nascimento.date' => "data_nascimento deve ser uma data",
            'endereco.numeric' => "Endereço deve ser um número de id",
            'tipo_usuario.numeric' => 'tipo_usuario deve ser um número de id'
        ];
    }

    // Retorno caso não passe na validação
    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['errors' => $validator->errors()], JsonResponse::HTTP_UNPROCESSABLE_ENTITY));
    }
}
