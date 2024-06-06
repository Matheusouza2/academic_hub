import { api } from "../services/api";
const autenticarUser = async (cpf: string, senha: string) => {
  try {
    const request = { cpf, senha };
    const response = await api.post('/v1/login', request);
    if (response.status === 200 && response.data.data.token) {
      localStorage.setItem('token', response.data.data.token);
      return { message: response.data.data.message, user: response.data.data.user }; // Retorna o usuário junto com a mensagem
    } else {
      return { message: response.data.message };
    }
  } catch (error) {
    console.log(error);
    return { message: 'Usuário ou senha inválidos.' };
  }
};

export default autenticarUser;