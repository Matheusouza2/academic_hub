import { Link } from "react-router-dom"
import { AppIcons } from "../assets/exports"

type SidebarProps = {
  type?: 'student' | 'admin' | 'teacher'
}

const OPTIONS = {
  student: [
    { icon: AppIcons.house, label: "Início", href: "/inicio" },
    { icon: AppIcons.books, label: "Disciplinas", href: "/disciplinas" },
    { icon: AppIcons.mortarboard, label: "Notas", href: "/notas" },
  ],
  admin: [
    { icon: AppIcons.house, label: "Início", href: "/inicio" },
    { icon: AppIcons.books, label: "Disciplinas", href: "/disciplinas" },
    { icon: AppIcons.mortarboard, label: "Alunos", href: "/alunos" },
    { icon: AppIcons.book, label: "Cursos", href: "#" },
    { icon: AppIcons.chalkboard, label: "Professores", href: "#" },
  ],
  teacher: [
    { icon: AppIcons.house, label: "Início", href: "/inicio" },
    { icon: AppIcons.books, label: "Disciplinas", href: "/disciplinas" },
    { icon: AppIcons.mortarboard, label: "Alunos", href: "/alunos" },
    { icon: AppIcons.book, label: "Caderneta", href: "#" },
  ],
}

export const Sidebar = ({ type = 'teacher' }: SidebarProps) => {
  return (
    <div className="bg-gradient-to-b from-blue-400 to-blue-700 h-full rounded-2xl w-[244px] flex flex-col items-center pt-8 px-4 gap-9">
      <div className="p-4 bg-blue-700 w-fit rounded-2xl">
        <img src={AppIcons.logo} alt="Academic Hub logo"/>
      </div>
      
      <div className="flex flex-col w-full gap-6">
        {OPTIONS[type].map(option => (
          <Link to={option.href}>
            <div className="flex gap-2 opacity-70 hover:opacity-100">
              <img src={option.icon} alt="Academic Hub logo"/>
              <p className="text-xl font-bold text-white ">{option.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
