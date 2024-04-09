import { useForm } from "react-hook-form";
import { AppIcons } from "../assets/exports";
import { Page } from "./Page";

export function CreateSubjects() {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    console.log('subject data =>', data)
  }

  return (
    <Page>
      <div className="flex flex-col h-full gap-6">
        <h1 className="text-4xl font-bold">Disciplinas / Cadastrar nova disciplina</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full h-full gap-6 p-6 bg-white rounded-md shadow-2xl">
          <div className="flex gap-8">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-900">Nome</label>
              <input {...register('name')} type="text" className="w-[560px] h-[47px] bg-gray-500 rounded-md px-2" id="name" placeholder="Nome da disciplina" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="sigla" className="text-gray-900">Sigla</label>
              <input {...register('sigla')} type="text" className="w-[264px] h-[47px] bg-gray-500 rounded-md px-2" id="sigla" placeholder="Nome da disciplina" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="code" className="text-gray-900">Código</label>
              <input {...register('code')} type="text" className="w-[264px] h-[47px] bg-gray-500 rounded-md px-2" id="code" placeholder="Nome da disciplina" />
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col">
              <label htmlFor="ch_teory" className="text-gray-900">Carga horária teórica</label>
              <input {...register('ch_teory')} type="text" className="w-[264px] h-[47px] bg-gray-500 rounded-md px-2" id="ch_teory" placeholder="Nome da disciplina" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="ch_pratical" className="text-gray-900">Carga horária prática</label>
              <input {...register('ch_pratical')} type="text" className="w-[264px] h-[47px] bg-gray-500 rounded-md px-2" id="ch_pratical" placeholder="Nome da disciplina" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="course" className="text-gray-900">Curso</label>
              <input {...register('course')} type="text" className="w-[264px] h-[47px] bg-gray-500 rounded-md px-2" id="course" placeholder="Nome da disciplina" />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="ementa" className="text-gray-900">Ementa</label>
            <textarea {...register('ementa')} id="ementa" rows={10} className="bg-gray-500 resize-none rounded-md w-[860px]"></textarea>
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
