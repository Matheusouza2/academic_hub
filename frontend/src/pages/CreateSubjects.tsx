import { useForm } from "react-hook-form";
import { AppIcons } from "../assets/exports";
import { Page } from "./Page";
import { api } from "../services/api";

export function CreateSubjects() {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    api.post(`/v1/disciplinas/store`, data)
  }

  return (
    <Page typeSidebar="teacher">

      <div className="flex flex-col gap-1">

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Cadastrar nova disciplina</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full h-sc p-6 bg-white rounded-md shadow-2xl">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 px-6 gap-3">

            <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2">
              <label htmlFor="name" className="text-gray-900">Nome</label>
              <input {...register('nome')} type="text" className="w-full h-[47px] bg-gray-500 rounded-md px-2" id="name" placeholder="Nome da disciplina" />
            </div>

            <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-1">
              <label htmlFor="sigla" className="text-gray-900">Sigla</label>
              <input {...register('sigla')} type="text" className="w-full h-[47px] bg-gray-500 rounded-md px-2" id="sigla" placeholder="Sigla da disciplina" />
            </div>

            <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-1">
              <label htmlFor="code" className="text-gray-900">Código</label>
              <input {...register('codigo')} type="text" className="w-full h-[47px] bg-gray-500 rounded-md px-2" id="code" placeholder="Código da disciplina" />
            </div>

            <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-1">
              <label htmlFor="ch_teory" className="text-gray-900">Carga horária teórica</label>
              <input {...register('ch_teorica')} type="number" min={0} className="w-full h-[47px] bg-gray-500 rounded-md px-2" id="ch_teory" placeholder="Carga horária teórica da disciplina" />
            </div>

            <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-1">
              <label htmlFor="ch_pratical" className="text-gray-900">Carga horária prática</label>
              <input {...register('ch_pratica')} type="number" min={0} className="w-full h-[47px] bg-gray-500 rounded-md px-2" id="ch_pratical" placeholder="Carga horária prática da disciplina" />
            </div>

            <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2">
              <label htmlFor="curso_id" className="text-gray-900">Curso</label>
              <select {...register('curso_id')} id="curso_id" name="curso_id" className="w-full h-[47px] bg-gray-500 rounded-md px-2 text-gray-900">
                <option value="1" selected>--- Cursos ---</option>
              </select>
            </div>

            <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-4">
              <label htmlFor="ementa" className="text-gray-900">Ementa</label>
              <textarea {...register('ementa')} id="ementa" className="w-full h-[100px] lg:h-[160px] px-2 bg-gray-500 rounded-md resize-none " placeholder="Digite a ementa da disciplina"></textarea>
            </div>
          </div>

          <div className="w-full flex justify-end mt-10 lg:mt-20 pr-6">
            <button type="submit" className="hover:opacity-60 flex items-center justify-center gap-2 rounded-md bg-green text-white py-2 px-4">
              <img src={AppIcons.disk} alt="Disquete" />
              Salvar
            </button>
          </div>

        </form>
      </div>
    </Page>
  )
}
