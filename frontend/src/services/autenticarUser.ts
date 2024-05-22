import axios from 'axios';

const autenticarUser = async (cpf: string, password: string) => {

  try {
    const request = {cpf, password}; //
    const response = await axios.post('/v1/login/validateLogin', request);

    if (response.status === 200 && response.data.data.token) { //testa se o login foi validado como correto
      localStorage.setItem('token', response.data.data.token);
      return { message: response.data.data.message};
    } else {
      return { message: response.data.message };
    }
  } catch(error){
    return { message: 'Usuário ou senha inválidos.' };
  }
  
};

export default autenticarUser;