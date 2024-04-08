import Logo from '../assets/logo.svg'
import house from '../assets/house.svg'
import books from '../assets/books.svg'
import briefcase from '../assets/briefcase.svg'
import mortarboard from '../assets/mortarboard.svg'
import book from '../assets/book.svg'
import chalkboard from '../assets/chalkboard.svg'

type SidebarProps = {
  type: 'student' | 'admin' | 'teacher'
}

const OPTIONS = {
  student: [
    { icon: house, label: "Início", href: "#" },
    { icon: books, label: "Disciplinas", href: "#" },
    { icon: briefcase, label: "Notas", href: "#" },
  ],
  admin: [
    { icon: house, label: "Início", href: "#" },
    { icon: books, label: "Disciplinas", href: "#" },
    { icon: mortarboard, label: "Alunos", href: "#" },
    { icon: book, label: "Cursos", href: "#" },
    { icon: chalkboard, label: "Professores", href: "#" },
  ],
  teacher: [
    { icon: house, label: "Início", href: "#" },
    { icon: books, label: "Disciplinas", href: "#" },
    { icon: mortarboard, label: "Alunos", href: "#" },
    { icon: book, label: "Caderneta", href: "#" },
  ],
}

export const Sidebar = ({ type = 'teacher' }: SidebarProps) => {
  return (
    <div className="bg-gradient-to-b from-blue-400 to-blue-700 h-full rounded-2xl w-[244px] flex flex-col items-center pt-8 px-4 gap-9">
      <div className="bg-blue-700 w-fit p-4 rounded-2xl">
        <img src={Logo} alt="Academic Hub logo"/>
      </div>
      
      <div className="w-full flex flex-col gap-6">
        {OPTIONS[type].map(option => (
          <div className="flex gap-2">
            <img src={option.icon} alt="Academic Hub logo"/>
            <p className="text-xl font-bold text-white">{option.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
