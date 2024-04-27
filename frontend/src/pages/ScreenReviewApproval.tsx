import { Page } from "./Page";
import { FaCheck } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { Dialog } from "../components/Dialog";
import { useState } from "react";


export function ScreenReviewApproval() {
 const data = [
    {
        "disciplina": "Matemática Discreta",
        "ementa": "Conjuntos. Funções. Relações. Lógica Proposicional. Lógica de Predicados. Álgebra de Boole. Teoria dos Conjuntos. Teoria dos Grafos.",
        "objetivo": "Proporcionar aos alunos uma base sólida em conceitos matemáticos fundamentais para o estudo de ciência da computação e áreas relacionadas.",
        "metodologia": "Aulas expositivas, exercícios práticos em sala de aula, resolução de problemas, trabalhos individuais e em grupo.",
        "forma_de_avaliacao": "Avaliação contínua através de provas, trabalhos individuais e em grupo, participação em sala de aula e atividades práticas.",
        "bibliografia": {
          "básica": [
            "KLEIN, M. Lógica e Estruturas Discretas. LTC Editora.",
            "LIPSCHUTZ, S. Teoria dos Conjuntos e Estruturas Algébricas. Bookman."
          ],
          "complementar": [
            "ROSEN, K. H. Matemática Discreta e Suas Aplicações. Pearson.",
            "GRIMALDI, R. P. Matemática Discreta e Combinatória. Pearson."
          ]
        },
        "unidade_programatica": [
            {
              "data": "01/09/2024",
              "conteudo": "Conjuntos e suas operações",
              "horario": "09:00 - 11:00",
              "professor":"Débora Araujo"
            },
            {
              "data": "08/09/2024",
              "conteudo": "Relações binárias",
              "horario": "09:00 - 11:00",
              "professor":"Débora Araujo"
            },
            {
              "data": "15/09/2024",
              "conteudo": "Funções e seus tipos",
              "horario": "09:00 - 11:00",
              "professor":"Débora Araujo"
            },
            {
              "data": "22/09/2024",
              "conteudo": "Lógica proposicional",
              "horario": "09:00 - 11:00",
              "professor":"Débora Araujo"
            },
            {
              "data": "29/09/2024",
              "conteudo": "Lógica de predicados",
              "horario": "09:00 - 11:00",
              "professor":"Débora Araujo"
            },
            {
              "data": "06/10/2024",
              "conteudo": "Álgebra de Boole",
              "horario": "09:00 - 11:00",
              "professor":"Débora Araujo"
            },
            {
              "data": "13/10/2024",
              "conteudo": "Teoria dos conjuntos",
              "horario": "09:00 - 11:00",
              "professor":"Débora Araujo"
            },
            {
              "data": "20/10/2024",
              "conteudo": "Teoria dos grafos",
              "horario": "09:00 - 11:00",
              "professor":"Débora Araujo"
            }
          ]
    }
 ]

    const [modalPD, setModal] = useState(false)
    
    const approves = () => {
        // Patrão tú vai ter que fazer a requisição de aprovação aqui!!!
        console.log("Aprovação")
    }

    return (
        <Page>
            <div className="flex flex-col h-[91%] gap-6">
                <h1 className="text-4xl font-bold">Revisão Plano de Aula</h1>
                {/* flex flex-col w-full h-full gap-6 p-6 bg-white rounded-md shadow-2xl */}
                <table className="table-auto min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2 bg-gray-200 text-gray-700">Ações</th>
                            <th className="px-4 py-2 bg-gray-200 text-gray-700">Curso</th>
                            <th className="px-4 py-2 bg-gray-200 text-gray-700">Disciplina</th>
                            <th className="px-4 py-2 bg-gray-200 text-gray-700">Professor</th>
                            <th className="px-4 py-2 bg-gray-200 text-gray-700">Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 text-center whitespace-nowrap">
                                <div className="w-full flex justify-evenly">
                                    <button className="text-white bg-green p-2 rounded-md" title="Aprovar Plano" onClick={approves}>
                                        <FaCheck/>
                                    </button>
                                    <button className="text-white bg-blue-500 p-2 rounded-md" title="Revisar Plano" onClick={() => setModal(true)}>
                                        <MdOutlineRateReview />
                                    </button>
                                </div>
                            </td>
                            <td className="px-4 py-2 text-center whitespace-nowrap">Ciência da Computação</td>
                            <td className="px-4 py-2 text-center whitespace-nowrap">Matématica Discreta</td>
                            <td className="px-4 py-2 text-center whitespace-nowrap">Débora Araujo</td>
                            <td className="px-4 py-2 text-center whitespace-nowrap">10/12/2023</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
           { modalPD && <Dialog info={data[0]} setModal={setModal}></Dialog>}
        </Page>
    )
}

