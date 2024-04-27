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
            <Page>
                <div className="flex flex-col h-[91%] gap-6">
                    <h1 className="text-4xl font-bold">Cursos / Alterar curso</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full h-full gap-6 p-6 bg-white rounded-md shadow-2xl">
                        <div className="flex gap-8">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-gray-900">Nome</label>
                                <input {...register('nome')} type="text" className="w-full h-[47px] bg-gray-500 rounded-md px-2" id="name" placeholder="Nome do curso" />
                            </div>
                            <div className="flex flex-col flex-1 max-w-[264px]">
                                <label htmlFor="sigla" className="text-gray-900">Carga Horária</label>
                                <input {...register('carga_horaria')} type="text" className="w-full h-[47px] bg-gray-500 rounded-md px-2" id="sigla" placeholder="000 Horas" />
                            </div>
                            <div className="flex flex-col flex-1 max-w-[264px]">
                                <label htmlFor="code" className="text-gray-900">Coordenador</label>
                                <input {...register('coordenador_id')} type="text" className="w-full h-[47px] bg-gray-500 rounded-md px-2" id="code" placeholder="Selecione" />
                            </div>
                        </div>

                        <div className="flex gap-8">
                            <div className="flex flex-col flex-1">
                                <label htmlFor="ch_teory" className="text-gray-900">Sigla</label>
                                <input {...register('sigla')} type="text" className="w-full h-[47px] bg-gray-500 rounded-md px-2" id="ch_teory" placeholder="Uma sigla para representar o curso" />
                            </div>
                        </div>

                        <button type="submit" className="self-end mt-auto w-[264px] hover:opacity-90 transition-all flex items-center justify-center gap-2 rounded-md bg-green text-white py-2">
                            <img src={AppIcons.disk} alt="Disquete" />
                            Salvar
                        </button>
                    </form>
                </div>
            </Page>
        )
    }

