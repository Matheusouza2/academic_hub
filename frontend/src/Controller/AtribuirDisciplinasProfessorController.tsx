import { useState } from "react";
import { DisciplinaModel } from "../interfaces/DisciplinasModel";
import { Professor } from "../interfaces/Professor";
import { api } from "../services/api";
import { toast } from "react-toastify";

// Este é um hook personalizado que gerencia o estado e as operações relacionadas aos professores e disciplinas.
export function useProfessorController() {
  // Estado para armazenar a lista de professores.
  const [professores, setProfessores] = useState<Professor[]>([]);
  // Estado para armazenar a lista de disciplinas.
  const [disciplinas, setDisciplinas] = useState<DisciplinaModel[]>([]);
  // Estado para controlar se os dados estão sendo carregados.
  const [carregando, setCarregando] = useState(true);
  // Estado para controlar se ocorreu um erro ao carregar os dados.
  const [erro, setErro] = useState(false);
  // Estado para armazenar o ID do curso. Inicialmente definido como 1.
  const [cursoId, setCursoId] = useState(1); 

  // Função para obter a lista de professores da API.
  const obterProfessores = async () => {
    try {
      const response = await api.get('v1/professor/list');
      setProfessores(response.data);
    } catch (error) {
      console.error("Erro ao obter professores: ", error);
      setErro(true);
      toast.error("Erro ao obter professores: " + error.message);
    }
  }

  // Função para obter a lista de disciplinas da API.
  const obterDisciplinas = async () => {
    try {
      const response = await api.get(`v1/disciplinas/lista/${cursoId}`);
      setDisciplinas(response.data);
      setCarregando(false);
    } catch (error) {
      console.error("Erro ao obter disciplinas: ", error);
      setCarregando(false);
      setErro(true);
      toast.error("Erro ao obter disciplinas: " + error.message);
    }
  }

  // Função para adicionar uma disciplina a um professor.
  const adicionarDisciplina = (professorId: string | undefined, disciplinaId: string) => {
    if (!professorId) {
      console.error("ID do professor não fornecido");
      toast.error("ID do professor não fornecido");
      return;
    }
  
    api.post('v1/coordenador/atribuir-diciplinas', {
      disciplinas_id: disciplinaId,
      professores_id: professorId
    })
    .then(() => {
      console.log("Disciplina atribuída com sucesso");
      toast.success("Disciplina atribuída com sucesso");
    })
    .catch(error => {
      console.error("Erro ao atribuir disciplina: ", error);
      toast.error("Erro ao atribuir disciplina: " + error.message);
    });
  };

  // O hook retorna o estado e as funções que podem ser usadas pelo componente que usa este hook.
  return {
    professores,
    disciplinas,
    carregando,
    erro,
    obterProfessores,
    obterDisciplinas,
    adicionarDisciplina
  }
}
