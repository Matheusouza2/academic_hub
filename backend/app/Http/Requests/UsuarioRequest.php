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
            'nome' => 'string|alpha|max:255',
            'email' => 'email|max:255',
            'rg' => 'regex:/^\d{2}\.\d{3}\.\d{3}-\d{1}$/|',
            'data_nascimento' => 'date|date_format:Y-m-d',
            'endereo' => 'numeric',
            'tipo_usuario' => 'numeric',
            'sexo' => 'string|size:1',
        ];
    }

    // Retorno caso não passe na validação
    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['errors' => $validator->errors()], JsonResponse::HTTP_UNPROCESSABLE_ENTITY));
    }
}
