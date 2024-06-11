import { Page } from "./Page"

export function AlterarDisciplina() {

    return (
        <Page>
            <div className="flex justify-center  bg-gray-100">
                <div className="border-dark/10 rounded-lg bg-[#4d77ff0c] p-6 shadow-lg w-full max-w-md h-full">
                    <h1 className="text-2xl font-bold mb-4">Editar Disciplina</h1>
                    <form id="edit-discipline-form">
                        <div className="mb-4">
                            <label htmlFor="disciplina-nome" className="block text-gray-700 font-bold mb-2">Nome da Disciplina:</label>
                            <input
                                type="texto"
                                id="disciplina-nome"
                                name="nome"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="discipline" className="block text-gray-700 font-bold mb-2">Código da Disciplina:</label>
                            <input
                                type="texto"
                                id="discipline"
                                name="nome"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="disciplina-descricao" className="block text-gray-700 font-bold mb-2">Descrição:</label>
                            <textarea
                                id="disciplina-descricao"
                                name="descricao"
                                rows="3"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <button type="submit"className="w-full bg-[#2E318E] text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:bg-green-700">
                                Salvar Alterações
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Page>

    );
}
