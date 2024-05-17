import { useState } from "react";
import { Page } from "./Page";
import { MdOutlineContentPasteSearch } from "react-icons/md";
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

            <div className="flex flex-col h-[90%] gap-10">
                <h1 className="text-4xl font-bold">Disciplinas do Período</h1>
                {/* flex flex-col w-full h-full gap-6 p-6 bg-white rounded-md shadow-2xl */}
                <div className="">
                    <table className="table-auto divide-y divide-gray-200 max-w-screen-md">
                        <thead className="bg-gray-200 ">
                            <tr>
                                <th className="px-4 py-2 bg-gray-200 text-gray-700 ">Código</th>
                                <th className="px-4 py-2 bg-gray-200 text-gray-700 ">Nome</th>
                                <th className="px-4 py-2 bg-gray-200 text-gray-700 ">Detalhes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 text-center whitespace-nowrap ">
                                    <div className="w-full flex justify-center"> #CC_COMP12</div>
                                </td>
                                <td className="px-4 py-2 text-center whitespace-nowrap ">Matématica Discreta</td>
                                <td className="px-4 py-2 text-center whitespace-nowrap ">
                                    <button className="text-white bg-green p-2 mr-3 lg:mr-5 xl:mr-8 rounded-md" title="Aprovar Plano" onClick={() => setModal(true)}>
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
