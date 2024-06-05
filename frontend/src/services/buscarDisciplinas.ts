
import { api } from './api';

const buscarDisciplinas = async (professor_id: any) => {

  try {
    const response = await api.get(`v1/disciplinas/professor/lista/${professor_id}`)

    if (response.status === 200) { //testa se o login foi validado como correto
      return { disciplinas: response.data.disciplinas };
    }
  } catch(error){
    return { message: 'Professor Inválido.' };
  }
  
};

export default buscarDisciplinas;