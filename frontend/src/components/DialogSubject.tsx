import { MdClose } from "react-icons/md";
import DisciplinaList from "../interfaces/DisciplinaList";

type UserProps = {
    data: {
        name: string
        period: string
    }
}

type Props = {
    setModal: Function,
    info: DisciplinaList
}

export function DialogSubject({ setModal, info }: Props) {

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

                        <div className="flex justify-between mt-3">
                            <h1 className="text-4xl font-bold">Plano de Ensino de Disciplina</h1>
                            <button className="text-white bg-red px-3 rounded-md" onClick={close}><MdClose /></button>
                        </div>


                        <h2 className="text-xl font-semibold mt-4 text-gray-800">Nome</h2>
                        <p>{info.nome}</p>

                        <h2 className="text-xl font-semibold mt-4 text-gray-800">Sigla</h2>
                        <p>{info.sigla}</p>

                        <h2 className="text-xl font-semibold mt-4 text-gray-800">Ementa</h2>
                        <p>{info.ementa}</p>

                        <h2 className="text-xl font-semibold mt-4 text-gray-800">Carga Horária</h2>
                        <p><strong>Teórica: </strong>{info.ch_teorica}</p>
                        <p className="mb-3"><strong>Prática: </strong>{info.ch_pratica}</p>

                    </div>
                </div>
            </div>
        </div>

    )
}
