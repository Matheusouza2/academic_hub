import { Routes, Route } from "react-router-dom";
import { Pages } from "./pages";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Pages.Login />} />
      <Route path="/cadastro-disciplinas" element={<Pages.CreateSubjects />} />
      <Route path="/cadastro-curso" element={<Pages.CadCurso />} />
      <Route path='/revisao-plano-disciplina' element={<Pages.ScreenReviewApproval />} />
      <Route path="/notas" element={<Pages.QueryGrades />} />
      <Route path="/DashboardAluno" element={<Pages.DashboardAluno/>} />
      <Route path="/AtribuirDisciplinasProfessor" element={<Pages.AtribuirDisciplinasProfessor/>} />
      <Route path="/notas-professor" element={<Pages.AlteraNotaProfessor/>} />
    </Routes>
  );
}
