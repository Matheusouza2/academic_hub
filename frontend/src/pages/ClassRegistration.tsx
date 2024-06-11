import { Page } from "./Page";
import { AppIcons } from "../assets/exports";
import { useForm } from "react-hook-form";
import { api } from "../services/api";

export function ClassRegistration() {

    const { register, handleSubmit } = useForm()

    var path = window.location.href
    var disciplina_id = parseInt(path[path.length - 1], 10)

    if (isNaN(disciplina_id)) {
        disciplina_id = -1
    }

    const onSubmit = (data: any) => {

        var userObject

        const getUser = localStorage.getItem("user")
        
        if(getUser){

            userObject = JSON.parse(getUser)

        }

        var dataContent = {
            'professor_id': userObject.id,
            'disciplina_id': disciplina_id,
            'data_aula': data.completion_date,
            'assunto': data.content,
        }

        api.post(`/v1/aulas/criar`, dataContent).then(res => console.log(res))
        console.log('class data =>', data)
    }

    return (
        <Page typeSidebar="teacher">
            <div className="flex flex-col h-full gap-6">
                <h1 className="text-4xl font-bold">Registro de Aula</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full h-full gap-6 p-6 bg-white rounded-md shadow-2xl">
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
                            <select id="type" name="type" className="w-full h-[47px] bg-gray-500 rounded-md px-2">
                                <option value="regular">Regular</option>
                                <option value="avaliação">Avaliação</option>
                                <option value="atividade/trabalho">Atividade/Trabalho</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-4">
                        <label htmlFor="content" className="text-gray-900">Tópicos da aula:</label>
                        <textarea {...register('content')} id="content" className="w-full h-[100px] lg:h-[160px] px-2 bg-gray-500 rounded-md resize-none" placeholder="Ex: Complexidade vs decidibilidade, classes de complexidade, reduções e completude na complexidade."></textarea>
                    </div>

                    <div className="w-full flex justify-end mt-10 lg:mt-20">
                        <button type="submit" className="hover:opacity-60 flex items-center justify-center gap-2 rounded-md bg-[#22C55E] text-white py-2 px-4">
                            <img src={AppIcons.disk} alt="Disquete" />
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </Page>
    );
};
