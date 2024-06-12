import { useState } from "react";
import { Student } from "../components";
import { Page } from "./Page";
import { MdFilterAlt } from "react-icons/md";
import { Modal } from 'react-responsive-modal';
import { useForm } from "react-hook-form";

type CreateStudentModalProps = {
  modalIsOpen: boolean
  onClose: () => void
}

function CreateStudent({ modalIsOpen, onClose }: CreateStudentModalProps) {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    console.log('CREATE STUDENT ==>', data)
  }

  return (
    <Modal open={modalIsOpen} onClose={onClose} center>
      <form onSubmit={handleSubmit(onSubmit)} className="w-[500px] flex flex-col gap-4 p-6 rounded-md">
        <div className="flex flex-col gap-2">
          <label className="text-gray-700" htmlFor="nome">Nome do aluno</label>
          <input className="px-2 py-2 border-2 border-gray-700 rounded-md" type="text" placeholder="Nome" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-700" htmlFor="cpf">CPF</label>
          <input className="px-2 py-2 border-2 border-gray-700 rounded-md" id="cpf" type="text" placeholder="CPF" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-700" htmlFor="turma">Turma</label>
          <select className="px-2 py-2 border-2 border-gray-700 rounded-md" {...register('turma')} id="turma" name="curso_id">
            <option className="p-2" value="1" selected>--- Turma ---</option>
          </select>
        </div>

        <button type="submit" className="w-full py-2 font-bold text-white transition-all bg-blue-500 rounded-md hover:bg-blue-700">Matricular</button>
      </form>
    </Modal>
  )
}

export function Students() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onOpenModal = () => setModalIsOpen(true);
  const onCloseModal = () => setModalIsOpen(false);

  return (
    <Page>
      <CreateStudent modalIsOpen={modalIsOpen} onClose={onCloseModal} />
      <div className="flex flex-col flex-1 gap-4 pr-8 h-[70vh]">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Lista de alunos</h1>
          <button onClick={onOpenModal} className="px-4 text-white transition-all bg-blue-900 rounded-md hover:bg-blue-700">Matricular aluno</button>
        </div>

        <div className="flex items-end justify-end gap-8">
          <input type="text" className="w-2/6 px-4 py-2 rounded-full" placeholder="Pesquisar aluno" />
          <button className="h-full px-4 transition-all bg-gray-700 rounded-md hover:bg-gray-900">
            <MdFilterAlt color="#fff" />
          </button>
        </div>

        <section className="w-full p-6 overflow-auto bg-white rounded-md shadow-2xl ">
          <div className="flex flex-col max-h-full gap-4">
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
          </div>
        </section>
      </div>
    </Page>
  )
}