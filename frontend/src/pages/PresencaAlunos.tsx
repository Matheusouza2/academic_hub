import { useLocation } from "react-router-dom";
import { Page } from "./Page";

export function PresencaAlunos() {
  const location = useLocation();
  const disciplinaType = location.state?.disciplinaType as 'Matemática Discreta' | 'Introdução a Programação' | 'Algoritmos e Estruturas de Dados I';

  const presenceList = {
    "Matemática Discreta": [
      {
        "n_matricula": 207463128,
        "nome": "Emanuel a Mídia de San Martin"
      },
      {
        "n_matricula": 206241477,
        "nome": "Manoel Nogueira Mão de Pedra"
      },
      {
        "n_matricula": 205781687,
        "nome": "Athams Menezes Capilé Pai"
      },
      {
        "n_matricula": 201745915,
        "nome": "Lucas Allan Terra Nova"
      },
      {
        "n_matricula": 207475475,
        "nome": "Hellen Capile Nogueira"
      }
    ],
    "Introdução a Programação": [
      {
        "n_matricula": 208349651,
        "nome": "Julia da Silva Ferreira"
      },
      {
        "n_matricula": 208459723,
        "nome": "Rafael dos Santos Lima"
      },
      {
        "n_matricula": 208567812,
        "nome": "Mariana Oliveira Costa"
      },
      {
        "n_matricula": 208674501,
        "nome": "Carlos Eduardo Pereira"
      },
      {
        "n_matricula": 208789423,
        "nome": "Fernanda Gomes Souza"
      }
    ],
    "Algoritmos e Estruturas de Dados I": [
      {
        "n_matricula": 209134567,
        "nome": "Ana Paula Rodrigues"
      },
      {
        "n_matricula": 209245678,
        "nome": "Bruno Henrique Almeida"
      },
      {
        "n_matricula": 209356789,
        "nome": "Gabriel Mendes Silva"
      },
      {
        "n_matricula": 209467890,
        "nome": "Larissa Fernandes Moreira"
      },
      {
        "n_matricula": 209578901,
        "nome": "Thiago Lima Campos"
      }
    ]
  }

  return (
    <Page typeSidebar="teacher">
      <main>
        <h1 className="text-[40px] font-bold mb-12">Lista de Presença</h1>
        <table className="border-[0.2px] border-solid border-[#414040] rounded-md shadow-md table-auto divide-y divide-[#000000] w-full">
          <thead className="w-full ">
            <tr>
              <th className="py-4 font-extrabold text-[18px] text-[#fefefe] bg-[#3A71BE] w-[15%] border-[2px] border-solid border-[#414040]">Matrícula</th>
              <th className="py-4 font-extrabold text-[18px] text-[#fefefe] bg-[#3A71BE] w-[75%] border-[2px] border-solid border-[#414040]">Nome</th>
              <th className="py-4 font-extrabold text-[18px] text-[#fefefe] bg-[#3A71BE] border-[2px] border-solid border-[#414040]">Faltas</th>
            </tr>
          </thead>
          <tbody className="bg-[#fefefe] divide-y divide-[#b9b8b8]">
            {presenceList[disciplinaType ?? 'Matemática Discreta'].map((item) =>
              <tr key={item.n_matricula}>
                <td className="py-[13px] font-medium text-center text-[18px] border-x-[0.4px] border-solid border-[#b9b8b8]">{item.n_matricula}</td>
                <td className="text-[18px] text-center border-x-[0.4px] border-solid border-[#b9b8b8]">{item.nome}</td>
                <td className="text-center border-x-[0.4px] border-solid border-[#b9b8b8]"><input className="w-12 h-10 rounded-md font-medium text-[18px] text-center outline-none bg-[#91d4ef2a]" /></td>
              </tr>
            )}
          </tbody>
        </table>
      </main>
    </Page>
  )

}