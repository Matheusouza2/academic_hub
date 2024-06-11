interface Bibliografia {
  básica: string[];
  complementar: string[];
}

interface UnidadeProgramatica {
  data: string;
  conteudo: string;
  horario: string;
  professor: string;
}

interface Disciplina {
  disciplina: string;
  ementa: string;
  objetivo: string;
  metodologia: string;
  forma_de_avaliacao: string;
  bibliografia: Bibliografia;
  unidade_programatica: UnidadeProgramatica[];
}

export default Disciplina;  