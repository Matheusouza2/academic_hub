import { useState } from "react";
import { Page } from "./Page";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { DialogSubject } from "../components/DialogSubject";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../services/api"
import buscarDisciplinas from "../services/buscarDisciplinas";

export function ListSubjectsByTeacher() {
    
    const [dialog, setDialog] = useState(false);
    const [index, setIndex] = useState(0);
    const [disciplinas, setDisciplinas] = useState([]);

    const { professor_id } = useParams();
    
    window.onload = async () => {
        const data = await buscarDisciplinas(professor_id);
        setDisciplinas(data?.disciplinas);
    }
    
    const navigate = useNavigate();

    const redirect = (index: any) => {
        navigate('/professor/listagem-disciplinas/listagem-presenca')
    }

    return (
        <Page typeSidebar="teacher">

            <div className="flex flex-col h-[90%] gap-10">
                <h1 className="text-[40px] font-bold mb-3">Disciplinas do Período</h1>
                {/* flex flex-col w-full h-full gap-6 p-6 bg-white rounded-md shadow-2xl */}
                <div className="border-[0.2px] border-solid border-[#cacaca] rounded-md shadow-md">
                    <table className="table-auto divide-y divide-gray-200 w-full">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-5 font-extrabold text-[18px] bg-[#3A71BE] text-[#fefefe]">Presenças</th>
                                <th className="py-5 font-extrabold text-[18px] bg-[#3A71BE] text-[#fefefe]">Código</th>
                                <th className="py-5 font-extrabold text-[18px] bg-[#3A71BE] text-[#fefefe]">Nome</th>
                                <th className="py-5 font-extrabold text-[18px] bg-[#3A71BE] text-[#fefefe]">Detalhes</th>
                            </tr>
                        </thead>
                        
                        <tbody  className="divide-y">
                            {disciplinas.map((value, index) => (
                                    <tr key={index}>
                                        <td className="py-4 text-center bg-[#fefefe]">
                                            <button className="text-white bg-[#3A71BE] p-2 rounded-md items-center" title="Aprovar Plano" onClick={() => redirect(index)}>
                                                <FaClipboardList />
                                            </button>
                                        </td>
                                        <td className="text-center whitespace-nowrap bg-[#fefefe]">
                                            <div className="flex text-[18px] justify-center">{value.codigo}</div>
                                        </td>
                                        <td className="text-center text-[18px] whitespace-nowrap bg-[#fefefe]">{value.nome}</td>
                                        <td className="text-center whitespace-nowrap bg-[#fefefe]">
                                            <button className="text-white bg-[#22C55E] p-2 rounded-md items-center" title="Aprovar Plano" onClick={() => {setDialog(true); setIndex(index)}}>
                                                <MdOutlineContentPasteSearch />
                                            </button>
                                        </td>
                                    </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
            {dialog && <DialogSubject info={disciplinas[index]} setModal={setDialog} />}
        </Page>
    )
}