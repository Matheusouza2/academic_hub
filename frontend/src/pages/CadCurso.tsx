import { useForm } from "react-hook-form";
import { AppIcons } from "../assets/exports";
import { Page } from "./Page";

export function CadCurso() {
    const { register } = useForm()

    /*   const onSubmit = (data) => {
  
      } */

    return (
        <Page>
            <div className="flex flex-col h-full gap-6">
                <h1 className="text-4xl font-bold">Cursos / Cadastrar novo curso</h1>

                <form className="flex flex-col w-full h-full gap-6 p-6 bg-white rounded-md shadow-2xl">
                    <div className="flex gap-8">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-gray-900">Nome</label>
                            <input {...register('name')} type="text" className="w-full h-[47px] bg-gray-500 rounded-md px-2" id="name" placeholder="Nome do curso" />
                        </div>
                        <div className="flex flex-col flex-1 max-w-[264px]">
                            <label htmlFor="sigla" className="text-gray-900">Carga Horária</label>
                            <input {...register('carga-hararia')} type="text" className="w-full h-[47px] bg-gray-500 rounded-md px-2" id="sigla" placeholder="000 Horas" />
                        </div>
                        <div className="flex flex-col flex-1 max-w-[264px]">
                            <label htmlFor="code" className="text-gray-900">Coordenador</label>
                            <input {...register('coordenador')} type="text" className="w-full h-[47px] bg-gray-500 rounded-md px-2" id="code" placeholder="Selecione" />
                        </div>
                    </div>

                    <div className="flex gap-8">
                        <div className="flex flex-col flex-1 max-w-[264px]">
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
        </Page >
    )
}

