import { MdClose } from "react-icons/md";
import Disciplina from "../interfaces/Disciplina";

type UserProps = {
    data: {
        name: string
        period: string
    }
}

type Props = {
    setModal: Function,
    info: Disciplina
}

export function Dialog({ setModal, info }: Props) {
    const close = () => {
        console.log("CLOSED")
        setModal(false)
    }

    const requestReview = () => {
        // Patrão tú vai ter que fazer a requisição de solicitação de review aqui!!!

        console.log("Solicitando Review...")
        setModal(false)
    }
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl p-6">

                        <div className="flex justify-between">
                            <h1 className="text-4xl font-bold">Plano de Ensino de Disciplina</h1>
                            <button className="text-white bg-red px-3 rounded-md" onClick={close}><MdClose /></button>
                        </div>


                        <h2 className="text-xl font-semibold mt-4 text-gray-800">Ementa</h2>
                        <p>{info.ementa}</p>

                        <h2 className="text-xl font-semibold mt-4 text-gray-800">Objetivo</h2>
                        <p>{info.objetivo}</p>

                        <h2 className="text-xl font-semibold mt-4 text-gray-800">Metodologia</h2>
                        <p>{info.metodologia}</p>

                        <h2 className="text-xl font-semibold mt-4 text-gray-800">Forma de Avaliação</h2>
                        <p>{info.forma_de_avaliacao}</p>

                        <h2 className="text-xl font-semibold mt-4 text-gray-800">Bibliografia</h2>
                        {
                            info.bibliografia.básica.length > 0 && bibliografiaBasica(info.bibliografia.básica, "Básica")
                        }
                        {
                            info.bibliografia.complementar.length > 0 && bibliografiaBasica(info.bibliografia.complementar, "Complementar")
                        }

                        <h2 className="text-xl font-semibold mt-4 text-gray-800">Unidade Programática</h2>
                        <div className="flex flex-col h-full gap-6">
                            <table className="table-auto min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="px-4 py-2 bg-gray-200 text-center  text-gray-700">Data</th>
                                        <th className="px-4 py-2 bg-gray-200 text-center  text-gray-700">Conteúdo</th>
                                        <th className="px-4 py-2 bg-gray-200 text-center  text-gray-700">Horário</th>
                                        <th className="px-4 py-2 bg-gray-200 text-center  text-gray-700">Professor</th>
                                    </tr>
                                </thead>
                                    {
                                        info.unidade_programatica.length && unidadeProgramatica(info)
                                    }
                            </table>
                        </div>

                        <button className="text-white bg-blue-500 p-2 mt-4 rounded-md" onClick={requestReview}>Solicitar Revisão</button>

                    </div>
                </div>
            </div>
        </div>

    )
}

function bibliografiaBasica(info: string[], tipo: string) {
    return (
        <div>
            <h2 className="font-semibold text-gray-800">{tipo}:</h2>
            {info.map((value, index) => (<span key={index}>{value}</span>))}
        </div>
    )
}

function unidadeProgramatica(info: Disciplina) {
    return (
        <tbody>
            {info.unidade_programatica.map((value, index) => (
                <tr key={index}>
                    <td className="px-4 py-2 text-center whitespace-nowrap">{value.data}</td>
                    <td className="px-4 py-2 text-center whitespace-nowrap">{value.conteudo}</td>
                    <td className="px-4 py-2 text-center whitespace-nowrap">{value.horario}</td>
                    <td className="px-4 py-2 text-center whitespace-nowrap">{value.professor}</td>
                </tr>
            ))}
        </tbody>
    )
}