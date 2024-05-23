import { useState } from "react";
import { Page } from "./Page";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { DialogSubject } from "../components/DialogSubject";
import { useNavigate } from "react-router-dom";

export function ListSubjectsByTeacher() {
    
    const [dialog, setDialog] = useState(false);
    const [index, setIndex] = useState(0);

    const navigate = useNavigate();

    const data = [
        {
            "disciplinas": 
            [
                {
                    "nome": "Matemática Discreta",
                    "sigla": "MD",
                    "ementa": "Introdução à Lógica Formal. Métodos de demonstração. Teoria ingênua dos conjuntos. Relações e funções. Ordem e equivalência. Cardinalidade. Indução. Teoria axiomática de conjuntos. Estruturas algébricas. Reticulados e álgebras booleanas. Indução. Recursividade e Relações de Recorrência.",
                    "ch_teorica": 30,
                    "ch_pratica": 60
                },
                {
                    "nome": "Introdução a Programação",
                    "sigla": "IP",
                    "ementa": "Arquitetura de von Neumann; Introdução à linguagem C11; O paradigma imperativo; Conceito de variáveis e constantes; Tipos de dados simples: inteiro, caracter, e ponto flutuante; Programação estruturada; Estrutura sequencial; Expressões aritméticas; Expressões lógicas; Estrutura de seleção; Estrutura de repetição; Tipos de dados estruturados: arranjos, cadeia de caracteres, matrizes, enumerações, e uniões; Subprogramas: procedimentos e funções; Subprogramas recursivos. Arquivos e diretórios.",
                    "ch_teorica": 30,
                    "ch_pratica": 60
                },
                {
                    "nome": "Algoritmos e Estruturas de Dados I",
                    "sigla": "AED1",
                    "ementa": "Tipo Ponteiro em C18; Alocação Dinâmica de Memória em C18; Tipos de Dados Abstratos; Pilhas; Filas; Filas de Prioridade; Listas Simplesmente Encadeadas; Listas Duplamente Encadeadas; Listas Circulares; Busca Aleatória; Busca Linear; Busca Binária; Busca Exponencial; Busca por Interpolação; Insertion Sort; Shell Sort; Bubble Sort; Merge Sort; Quicksort; Tabelas de Espalhamento.",
                    "ch_teorica": 30,
                    "ch_pratica": 60
                }
            ]
        }
    ]

    const redirect = (index: any) => {
        navigate('/professor/listagem-disciplinas/listagem-presenca', {
            state: {
                disciplinaType: data[0].disciplinas[index].nome
            }
        })
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
                            {data[0].disciplinas.map((value, index) => (
                                    <tr key={index}>
                                        <td className="py-4 text-center bg-[#fefefe]">
                                            <button className="text-white bg-[#3A71BE] p-2 rounded-md items-center" title="Aprovar Plano" onClick={() => redirect(index)}>
                                                <FaClipboardList />
                                            </button>
                                        </td>
                                        <td className="text-center whitespace-nowrap bg-[#fefefe]">
                                            <div className="flex text-[18px] justify-center"> #CC_COMP12</div>
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
            {dialog && <DialogSubject info={data[0].disciplinas[index]} setModal={setDialog} />}
        </Page>
    )
}
