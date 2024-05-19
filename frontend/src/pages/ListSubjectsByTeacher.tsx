import { useState } from "react";
import { Page } from "./Page";
import { PresencaAlunos } from "./PresencaAlunos";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { DialogSubject } from "../components/DialogSubject";
import { Link } from "react-router-dom";


export function ListSubjectsByTeacher() {
    const [dialog, setModal1] = useState(false);
    const [list_presenca, setModal2] = useState(false)

    const data = [
        {
            "disciplinas": 
            [
                {
                    "nome": "Matemática Discreta",
                    "sigla": "MD",
                    "ementa": "Conjuntos. Funções. Relações. Lógica Proposicional. Lógica de Predicados. Álgebra de Boole. Teoria dos Conjuntos. Teoria dos Grafos.",
                    "ch_teorica": 30,
                    "ch_pratica": 60
                }
            ],

            "lista_presenca": 
            [
                {
                    "Matemática Discreta": [
                        {
                            "n_matricula": 207463128,
                            "nome": "Emanuel a Mídia de San Martin",
                            "faltas": 5
                        },
                        {
                            "n_matricula": 206241477,
                            "nome": "Manoel Nogueira Mão de Pedra",
                            "faltas": 3
                        },
                        {
                            "n_matricula": 205781687,
                            "nome": "Athams Menezes Capilé Pai",
                            "faltas": 0
                        },
                        {
                            "n_matricula": 201745915,
                            "nome": "Lucas Allan Terra Nova",
                            "faltas": 10
                        },
                        {
                            "n_matricula": 207475475,
                            "nome": "Hellen Capile Junior",
                            "faltas": 6
                        }
                    ]
                } 
            ]
            
        }
    ]



    return (
        <Page typeSidebar="teacher">

            <div className="flex flex-col h-[90%] gap-10">
                <h1 className="text-4xl font-bold drop-shadow">Disciplinas do Período</h1>
                {/* flex flex-col w-full h-full gap-6 p-6 bg-white rounded-md shadow-2xl */}
                <div className="border-[0.2px] border-solid border-[#cacaca] rounded-md shadow-md">
                    <table className="table-auto divide-y divide-gray-200 w-full">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-4 py-2 font-bold bg-gray-200 text-[#4d4d4d]">Presenças</th>
                                <th className="px-4 py-2 font-bold bg-gray-200 text-[#4d4d4d]">Código</th>
                                <th className="px-4 py-2 font-bold bg-gray-200 text-[#4d4d4d]">Nome</th>
                                <th className="px-4 py-2 font-bold bg-gray-200 text-[#4d4d4d]">Detalhes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 text-center bg-[#e6f0ffe3]">
                                    <Link to="/professor/listagem-disciplinas/listagem-presenca" target="_blank" rel="noopener noreferrer">
                                        <button className="text-white bg-[#3A71BE] p-2 rounded-md items-center" title="Aprovar Plano">
                                            <FaClipboardList />
                                        </button>
                                    </Link>
                                </td>
                                <td className="px-4 py-2 text-center whitespace-nowrap bg-[#e6f0ffe3]">
                                    <div className="w-full flex justify-center"> #CC_COMP12</div>
                                </td>
                                <td className="px-4 py-2 text-center whitespace-nowrap bg-[#e6f0ffe3]">Matématica Discreta</td>
                                <td className=" py-2 text-center whitespace-nowrap bg-[#e6f0ffe3]">
                                    <button className="text-white bg-[#22C55E] p-2 rounded-md items-center" title="Aprovar Plano" onClick={() => setModal1(true)}>
                                        <MdOutlineContentPasteSearch />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {list_presenca && <PresencaAlunos info={data[0].lista_presenca[0]["Matemática Discreta"][0]} setModal={setModal2} />}
            {dialog && <DialogSubject info={data[0].disciplinas[0]} setModal={setModal1} />}
        </Page>
    )
}
