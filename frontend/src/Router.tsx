import { Routes, Route } from 'react-router-dom'
import { Pages } from './pages'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Pages.Login />} />
      <Route path='/cadastro-disciplinas' element={<Pages.CreateSubjects />} />
      <Route path='/cadastro-curso' element={<Pages.CadCurso />} />
      <Route path='/alterar-cadastro' element={<Pages.AltCadastro />} />
    </Routes>
  )
}