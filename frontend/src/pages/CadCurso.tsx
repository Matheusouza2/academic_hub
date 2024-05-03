import { useForm } from "react-hook-form";
import { AppIcons } from "../assets/exports";
import { Page } from "./Page";
import axios from "axios";
import { api } from "../services/api";


export function CadCurso() {
    const { register, handleSubmit } = useForm()
    const curso_id = 1
    const onSubmit = (data) => {

        api.put(`/v1/cursos/update/${curso_id}`, data)
        
      }

        return (
            <Page typeSidebar="admin">
                <div className="flex flex-col w-[96%] h-[91%] gap-6 sm: h-[80%] md:h-[84%]">
                    <h1 className="text-4xl font-bold">Cursos / Alterar curso</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full h-full gap-6 p-6 bg-white rounded-md shadow-2xl">
                        
                        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">

                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-gray-900"> Nome</label>
                                <input {...register('nome')} type="text" className="w-full h-[47px] bg-gray-500 rounded-md px-2" id="name" placeholder="Nome do curso" />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="sigla" className="text-gray-900"> Carga Horária</label>
                                <input {...register('carga_horaria')} type="text" className="w-full h-[47px] bg-gray-500 rounded-md px-2" id="sigla" placeholder="000 Horas" />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="code" className="text-gray-900"> Coordenador</label>
                                <input {...register('coordenador_id')} type="text" className="w-full h-[47px] bg-gray-500 rounded-md px-2" id="code" placeholder="Selecione" />
                            </div>

                            <div className="flex flex-col ">
                                <label htmlFor="ch_teory" className="text-gray-900">Sigla</label>
                                <input {...register('sigla')} type="text" className="w-full h-[47px] bg-gray-500 rounded-md px-2" id="ch_teory" placeholder="Uma sigla para representar o curso" />
                            </div>

                        </div>

                        <div className="flex justify-end mt-4"> 

                            <button type="submit" className="w-[200px] bg-green hover:bg-opacity-80 focus:brightness-90 transition-all flex items-center justify-center gap-2 rounded-md text-white py-2">
                                <img src={AppIcons.disk} alt="Disquete" />
                                    Salvar
                            </button>

                        </div>

                    </form>
                </div>
            </Page>
        )
    }

