import { useForm } from "react-hook-form"
import { AppIcons } from "../assets/exports"
import { api } from "../services/api"
import { useState } from "react"

type TipoParametro = {
    curso_id: number | null;
};

export function FormularioCurso({ curso_id }: TipoParametro){
    const { register, handleSubmit } = useForm()
    
    const[name, setName] = useState(false);
    const[carga_horaria, setCarga_Horaria] = useState(false);
    const[coordenador, setCoordenador] = useState(false);
    const[sigla, setSigla] = useState(false);
    const color_error = '#F50047';
    const cinza = '#626970';
    const tipo = curso_id !== null ? 'Alterar' : 'Cadastrar';
    
    console.log("Tipo de Operação:", tipo);

    const stateData = (data, func) =>
    {
        if(data === '')
            func(true);
        else 
            func(false);
    }
    
    const validate = (data: any) => 
    {
        stateData(data.name,setName)
        stateData(data.carga_horaria,setCarga_Horaria)
        stateData(data.coordenador,setCoordenador)
        stateData(data.sigla,setSigla)
    }

    const onSubmit = (data: any) => 
    {
        validate(data)

        if (curso_id != null){
            api.put(`/v1/cursos/update/${curso_id}`, data)
        }else{
            api.post(`/v1/cursos/store/`, data)
        }
    }
    return(
        <div className="flex flex-col h-[91%] gap-6">
        <h1 className="text-4xl font-bold">Cursos / {tipo} curso</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full h-full gap-6 p-6 bg-white rounded-md shadow-2xl">
            <div className="flex gap-8">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-[#000000] mx-1 my-2">Nome</label>
                    <input {...register('name')} type="text" style={{ border: `2px solid ${name ? color_error : cinza}` }} className="w-full h-[47px] bg-[#f0f0f0] rounded-md px-2" id="name" placeholder="Nome do curso"/>
                    {name && <span className="text-[#F50047] px-2 pt-2 text-[12px]">*Esse campo é obrigatório</span>}
                </div>
                <div className="flex flex-col flex-1 max-w-[264px]">
                    <label htmlFor="sigla" className="text-[#000000] mx-1 my-2">Carga Horária</label>
                    <input {...register('carga_horaria')} type="text" style={{ border: `2px solid ${carga_horaria ? color_error : cinza}` }} className="w-full h-[47px] bg-[#f0f0f0] rounded-md px-2" id="sigla" placeholder="000 Horas"/>
                    {carga_horaria && <span className="text-[#F50047] px-2 pt-2 text-[12px]">*Esse campo é obrigatório</span>}
                </div>
                <div className="flex flex-col flex-1 max-w-[264px]">
                    <label htmlFor="code" className="text-[#000000] mx-1 my-2">Coordenador</label>
                    <input {...register('coordenador')} type="text" style={{ border: `2px solid ${coordenador ? color_error : cinza}` }} className={`w-full h-[47px] bg-[#f0f0f0] rounded-md px-2`} id="code" placeholder="Selecione"/>
                    {coordenador && <span className="text-[#F50047] px-2 pt-2 text-[12px]">*Esse campo é obrigatório</span>}
                </div>
            </div>

            <div className="flex gap-8">
                <div className="flex flex-col flex-1 max-w-[264px]">
                    <label htmlFor="ch_teory" className="text-[#000000] mx-1 my-2">Sigla</label>
                    <input {...register('sigla')} type="text" style={{ border: `2px solid ${sigla ? color_error : cinza}` }} className="w-full h-[47px] bg-[#f0f0f0] rounded-md px-2" id="ch_teory" placeholder="Uma sigla para representar o curso"/>
                    {sigla && <span className="text-[#F50047] px-2 pt-2 text-[12px]">*Esse campo é obrigatório</span>}
                </div>
            </div>

            <button type="submit" className="self-end mt-auto w-[180px] hover:opacity-90 transition-all flex items-center justify-center gapx-2 pt-2 rounded-md bg-green text-white py-2">
                <img src={AppIcons.disk} alt="Disquete" />
                <p className="pl-2">Salvar</p>
            </button>
        </form>
    </div>
    )
}