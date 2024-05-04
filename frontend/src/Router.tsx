import { Routes, Route } from "react-router-dom";
import { Pages } from "./pages";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Pages.Login />} />
      <Route path="/cadastro-disciplinas" element={<Pages.CreateSubjects />} />
      <Route path="/cadastro-curso" element={<Pages.CadCurso />} />
      <Route path='/cursos/plano_aprovacao' element={<Pages.ScreenReviewApproval />} />
      <Route path="/notas" element={<Pages.QueryGrades />} />
      <Route path="/DashboardAluno" element={<Pages.DashboardAluno/>} />
      <Route path="/professor/listagem-disciplinas" element={<Pages.ListSubjectsByTeacher/>} />
      <Route path="/registro-de-aula" element={<Pages.ClassRegistration/>} />
      <Route path="/AtribuirDisciplinasProfessor" element={<Pages.AtribuirDisciplinasProfessor/>} />
      <Route path='/ListCursos' element={<Pages.ListCursos />} />
    </Routes>
  );
}