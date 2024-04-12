import { useForm } from "react-hook-form";
import { AppIcons } from "../assets/exports";
import { Page } from "./Page";

export function AltCadastro() {
  const { register, handleSubmit } = useForm({
    defaultValues:{
        cpf:"070.680.938-68",
        rg:"1234567899",
        nome:"Luiz Inácio Lula da Silva",
        data_de_nascimento:"27/10/1945",
        idade:"78",
        sexo:"não binario",
        data_de_matricula:"15/04/2020",
        email:"luiz9dedos@gmail.com",

    }
  })

  const onSubmit = (data: any) => {
    console.log('subject data =>', data)
  }

  return (
    <Page>
      <div className="flex flex-col h-full gap-6">
        <h1 className="text-4xl font-bold">Alunos / Alterar cadastro do aluno</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full h-full gap-6 p-6 bg-white rounded-md shadow-2xl">
          <div className="flex w-full gap-8">
          <div className="flex flex-col flex-1 max-w-[264px]">
              <label htmlFor="ch_teory" className="text-gray-900">CPF</label>
              <input {...register('cpf')} type="text" className="w-full h-[47px] bg-gray-500 rounded-md px-2" id="ch_teory" placeholder="000.000.000-00" />
            </div>
            <div className="flex flex-col flex-1 max-w-[264px]">
              <label htmlFor="ch_teory" className="text-gray-900">RG</label>
              <input {...register('rg')} type="text" className="w-full h-[47px] bg-gray-500 rounded-md px-2" id="ch_teory" placeholder="0000000000" />
            </div>
            <div className="flex flex-col flex-1 max-w-[560px]">
              <label htmlFor="name" className="text-gray-900 w-fit">Nome</label>
              <input {...register('nome')} type="text" className="w-full h-[47px] bg-gray-500 rounded-md px-2" id="name" placeholder="Nome do aluno" />
            </div>
          </div>

          <div className="flex gap-8">
          <div className="flex flex-col flex-1 max-w-[264px]">
              <label htmlFor="ch_teory" className="text-gray-900">Data de Nascimento</label>
              <input {...register('data_de_nascimento')} type="text" className="w-full h-[47px] bg-gray-500 rounded-md px-2" id="ch_teory" placeholder="00/00/0000" />
            </div>
            <div className="flex flex-col flex-1 max-w-[264px]">
              <label htmlFor="ch_teory" className="text-gray-900">Idade</label>
              <input {...register('idade')} type="text" className="w-full h-[47px] bg-gray-500 rounded-md px-2" id="ch_teory" placeholder="00 anos e 00 meses" />
            </div>
            <div className="flex flex-col flex-1 max-w-[264px]">
              <label htmlFor="ch_pratical" className="text-gray-900">Sexo</label>
              <input {...register('sexo')} type="text" className="w-full h-[47px] bg-gray-500 rounded-md px-2" id="ch_pratical" placeholder="Selecione" />
            </div>
            <div className="flex flex-col flex-1 max-w-[264px]">
              <label htmlFor="course" className="text-gray-900">Data de Matrícula</label>
              <input {...register('data_de_matricula')} type="text" className="w-full h-[47px] bg-gray-500 rounded-md px-2" id="course" placeholder="00/00/0000 (colocar a data do dia)" />
            </div>
          </div>
          <div className="flex flex-col flex-1 max-w-[560px]">
              <label htmlFor="name" className="text-gray-900 w-fit">Email</label>
              <input {...register('email')} type="text" className="w-full h-[47px] bg-gray-500 rounded-md px-2" id="name" placeholder="example@teste.com" />
            </div>

          <button type="submit" className="self-end mt-auto w-full max-w-[264px] hover:opacity-90 transition-all flex items-center justify-center gap-2 rounded-md bg-green text-white py-2">
            <img src={AppIcons.disk} alt="Disquete" />
            Salvar
          </button>
        </form>
      </div>
    </Page>
  )
}
