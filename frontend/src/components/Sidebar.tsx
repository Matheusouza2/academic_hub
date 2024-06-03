import { Link, useLocation } from "react-router-dom";
import { AppIcons } from "../assets/exports";
import { useMediaQuery } from "react-responsive";

type SidebarProps = {
  type?: "student" | "admin" | "teacher";
};

const OPTIONS = {
  0: [
    { icon: AppIcons.house, label: "Início", href: "/inicio" },
    { icon: AppIcons.books, label: "Disciplinas", href: "" },
    { icon: AppIcons.briefcase, label: "Notas", href: "/notas" },
  ],
  1: [
    { icon: AppIcons.house, label: "Início", href: "/inicio" },
    {
      icon: AppIcons.books,
      label: "Disciplinas",
      href: "/cadastro-disciplinas",
    },
    { icon: AppIcons.mortarboard, label: "Alunos", href: "/alunos" },
    { icon: AppIcons.book, label: "Cursos", href: "/cadastro-curso" },
    { icon: AppIcons.chalkboard, label: "Professores", href: "#" },
  ],
  2: [
    { icon: AppIcons.house, label: "Início", href: "/inicio" },
    {
      icon: AppIcons.books,
      label: "Disciplinas",
      href: "/cadastro-disciplinas",
    },
    { icon: AppIcons.mortarboard, label: "Alunos", href: "/alunos" },
    { icon: AppIcons.book, label: "Caderneta", href: "#" },
  ],
};

export const Sidebar = ({ type = "teacher" }: SidebarProps) => {
  const { pathname } = useLocation();
  const isMidScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  let valueType: any;

  const verificType = (type) => {
    if (type === "studant")
      valueType = 0;
    else if (type === "admin")
      valueType = 1;
    else if(type === "teacher")
      valueType = 2;
  }

  verificType(type);

  const store = (key, value) =>{
    localStorage.setItem(key, value);
  }

  store('Type', valueType);

  const type_user = localStorage.getItem('Type');

  return (
    <div className="invisible md:visible bg-gradient-to-b from-blue-400 to-blue-700 h-full rounded-2xl w-0 md:w-[110px] lg:w-[195px] xl:w-[225px] flex flex-col items-center pt-8 px-2 lg:px-3 gap-7 lg:gap-9 mr-0 md:mr-8 transition-all duration-500 ease-in-out">
      <div className=" p-3 lg:p-5 bg-blue-700 rounded-2xl">
        <img
          src={AppIcons.logo}
          alt="Academic Hub logo"
          className=" h-[65px] lg:h-[110px] w-[60px] lg:w-[120px] xl:w-[135px]"
        />
      </div>

      <div className="flex flex-col w-full gap-9 lg:gap-8 pl-[22px] lg:pl-[12px] xl:pl-6">
        {OPTIONS[type_user].map((option) => (
          <Link to={option.href}>
            <div
              data-toggle="tooltip"
              data-placement="top"
              title={option.label}
              className={`flex items-center gap-3 opacity-${
                pathname === option.href ? "100" : "70"
              } hover:opacity-100`}
            >
              <img
                src={option.icon}
                className=" w-[45px] lg:w-[35px] xl:w-[40px]"
                alt="Academic Hub logo"
              />
              {isMidScreen && (
                <p className="text-xl font-bold text-white">{option.label} </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
