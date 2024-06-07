import { Page } from "./Page";
import { AppIcons } from "../assets/exports";
import { useForm } from "react-hook-form";

export function CadastrarPlanoAulaProfessor() {
    const { register, handleSubmit } = useForm();

    return (
        <Page typeSidebar="teacher">
            <div className="flex flex-col h-full gap-6">
                <h1 className="text-4xl font-bold">Cadastrar Plano de Aula</h1>
                <div className="flex flex-col h-3/4 overflow-y-auto bg-white rounded-md shadow-2xl p-6">
                    <form onSubmit={handleSubmit((data) => console.log(data))} className="flex flex-col gap-6 h-full">
                        <div className="flex gap-8">
                            <div className="flex flex-col">
                                <label htmlFor="planned-date" className="text-gray-900">Data planejada:</label>
                                <input {...register('planned-date')} type="date" className="w-full h-[47px] bg-gray-500 rounded-md px-2" id="planned-date" />
                            </div>

                            <div className="flex flex-col max-w-[220px]">
                                <label htmlFor="completion_date" className="text-gray-900">Data de realização:</label>
                                <input {...register('completion_date')} type="date" className="w-full h-[47px] bg-gray-500 rounded-md px-2" id="completion-date" />
                            </div>

                            <div className="flex flex-col flex-1 max-w-[220px]">
                                <label htmlFor="type" className="text-gray-900">Tipo:</label>
                                <select id="type" {...register('type')} className="w-full h-[47px] bg-gray-500 rounded-md px-2">
                                    <option value="regular">Regular</option>
                                    <option value="avaliação">Avaliação</option>
                                    <option value="atividade/trabalho">Atividade/Trabalho</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="content" className="text-gray-900">Tópicos da aula:</label>
                            <textarea {...register('content')} id="content" className="w-full h-[100px] lg:h-[160px] px-2 bg-gray-500 rounded-md resize-none" placeholder="Ex: Complexidade vs decidibilidade, classes de complexidade, reduções e completude na complexidade."></textarea>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="ementa" className="text-gray-900">Ementa:</label>
                            <textarea {...register('ementa')} id="ementa" className="w-full h-[100px] lg:h-[160px] px-2 bg-gray-500 rounded-md resize-none" placeholder="Ementa da aula..."></textarea>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="objetivo" className="text-gray-900">Objetivo:</label>
                            <textarea {...register('objetivo')} id="objetivo" className="w-full h-[100px] lg:h-[160px] px-2 bg-gray-500 rounded-md resize-none" placeholder="Objetivo da aula..."></textarea>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="metodologia" className="text-gray-900">Metodologia:</label>
                            <textarea {...register('metodologia')} id="metodologia" className="w-full h-[100px] lg:h-[160px] px-2 bg-gray-500 rounded-md resize-none" placeholder="Metodologia da aula..."></textarea>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="forma_avaliacao" className="text-gray-900">Forma de Avaliação:</label>
                            <textarea {...register('forma_avaliacao')} id="forma_avaliacao" className="w-full h-[100px] lg:h-[160px] px-2 bg-gray-500 rounded-md resize-none" placeholder="Forma de Avaliação..."></textarea>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="bibliografia_basica" className="text-gray-900">Bibliografia Básica:</label>
                            <textarea {...register('bibliografia_basica')} id="bibliografia_basica" className="w-full h-[100px] lg:h-[160px] px-2 bg-gray-500 rounded-md resize-none" placeholder="Bibliografia Básica..."></textarea>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="bibliografia_complementar" className="text-gray-900">Bibliografia Complementar:</label>
                            <textarea {...register('bibliografia_complementar')} id="bibliografia_complementar" className="w-full h-[100px] lg:h-[160px] px-2 bg-gray-500 rounded-md resize-none" placeholder="Bibliografia Complementar..."></textarea>
                        </div>

                        <div className="w-full flex justify-end mt-10 lg:mt-20">
                            <button type="submit" className="hover:opacity-60 flex items-center justify-center gap-2 rounded-md bg-[#22C55E] text-white py-2 px-4">
                                <img src={AppIcons.disk} alt="Disquete" />
                                Salvar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Page>
    );
}
