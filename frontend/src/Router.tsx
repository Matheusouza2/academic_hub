import { Route, Routes } from "react-router-dom";
import { Pages } from "./pages";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Pages.Login />} />
      <Route path="/cadastro-disciplinas" element={<Pages.CreateSubjects />} />
      <Route path="/cadastro-curso" element={<Pages.CadCurso />} />
      <Route path="/alterar-curso" element={<Pages.AltCurso/>} />
      <Route path='/revisao-plano-disciplina' element={<Pages.ScreenReviewApproval />} />
      <Route path="/notas" element={<Pages.QueryGrades />} />
      <Route path="/DashboardAluno" element={<Pages.DashboardAluno/>} />
      <Route path="/professor/listagem-disciplinas" element={<Pages.ListSubjectsByTeacher/>} />
      <Route path="/professor/listagem-disciplinas/listagem-presenca" element={<Pages.PresencaAlunos/>} />
      <Route path="/registro-de-aula" element={<Pages.ClassRegistration/>} />
      <Route path="/AtribuirDisciplinasProfessor" element={<Pages.AtribuirDisciplinasProfessor/>} />
      <Route path="/notas-professor" element={<Pages.AlteraNotaProfessor/>} />
      <Route path='/ListCursos' element={<Pages.ListCursos />} />
    </Routes>
  );
}