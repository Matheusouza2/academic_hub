import { useState } from "react";
import { Page } from "./Page";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { DialogSubject } from "../components/DialogSubject";


export function ListSubjectsByTeacher() {
    const [dialog, setModal] = useState(false)

    const data = [
        {
            "nome": "Matemática Discreta",
            "sigla": "MD",
            "ementa": "Conjuntos. Funções. Relações. Lógica Proposicional. Lógica de Predicados. Álgebra de Boole. Teoria dos Conjuntos. Teoria dos Grafos.",
            "ch_teorica": 30,
            "ch_pratica": 60,
        }
    ]

    return (
        <Page typeSidebar="teacher">

            <div className="flex flex-col h-[90%] gap-10 p-4 sm:p-6">
                <h1 className="text-2xl sm:text-4xl font-bold drop-shadow">Disciplinas do Período</h1>
                {/* flex flex-col w-full h-full gap-6 p-6 bg-white rounded-md shadow-2xl */}
                <div className="border-[0.2px] border-solid border-[#cacaca] rounded-md shadow-md">
                    <table className="table-auto divide-y divide-gray-200 w-full">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className=" px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base font-bold bg-gray-200 text-[#4d4d4d] ">Presenças</th>
                                <th className=" px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base font-bold bg-gray-200 text-[#4d4d4d]">Código</th>
                                <th className=" px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base font-bold bg-gray-200 text-[#4d4d4d]">Nome</th>
                                <th className=" px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base font-bold bg-gray-200 text-[#4d4d4d]">Detalhes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 text-center bg-[#e6f0ffe3]">
                                    <button className="text-white bg-[#3A71BE] p-1 sm:p-2 rounded-md items-center" title="Aprovar Plano">
                                        <FaClipboardList />
                                    </button>
                                </td>
                                <td className="px-2 sm:px-4 py-1 sm:py-2 text-center whitespace-nowrap bg-[#e6f0ffe3]">
                                    <div className="w-full flex justify-center text-sm sm:text-base"> #CC_COMP12</div>
                                </td>
                                <td className="px-2 sm:px-4 py-1 sm:py-2 text-center whitespace-nowrap bg-[#e6f0ffe3] text-sm sm:text-base">Matématica Discreta</td>
                                <td className=" py-2 text-center whitespace-nowrap bg-[#e6f0ffe3]">
                                    <button className="text-white bg-[#22C55E] p-1 sm:p-2 rounded-md items-center" title="Aprovar Plano" onClick={() => setModal(true)}>
                                        <MdOutlineContentPasteSearch />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {dialog && <DialogSubject info={data[0]} setModal={setModal} />}
        </Page>
    )
}
