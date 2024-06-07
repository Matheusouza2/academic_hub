import { useState } from "react";
import { MdChevronRight } from "react-icons/md";
import { Modal } from 'react-responsive-modal';

type StudentDetailsModalProps = {
  modalIsOpen: boolean
  onClose: () => void
  data: {
    cpf: string
    turma: string
    nome: string
  }
}

function StudentDetailsModal({ modalIsOpen, onClose, data }: StudentDetailsModalProps) {
  return (
    <Modal open={modalIsOpen} onClose={onClose} center>
      <div className="flex flex-col gap-4 p-4 w-80">
        <h2 className="text-2xl font-bold">{data.nome}</h2>
        <div>
          <span className="text-gray-700">Turma</span>
          <p className="text-xl font-bold text-gray-900">{data.turma}</p>
        </div>
        <div>
          <span className="text-gray-700">CPF</span>
          <p className="text-xl font-bold text-gray-900">{data.cpf}</p>
        </div>
      </div>
    </Modal>
  )
}

export function Student() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onOpenModal = () => setModalIsOpen(true);
  const onCloseModal = () => setModalIsOpen(false);

  const data = {
    nome: 'Marcos Rafael',
    cpf: '000.000.000-00',
    turma: '3º período'
  }

  return (
    <>
      <button onClick={onOpenModal} className="flex justify-between py-2 transition-all shadow-sm hover:bg-gray-500">
        <div className="flex gap-4">
          <img width={48} height={48} className="rounded-full" src="https://avatars.githubusercontent.com/u/89277533?v=4" alt="aluno avatar" />

          <div className="flex flex-col items-start">
            <strong className="text-gray-900">{data.nome}</strong>
            <span className="text-gray-700">{data.turma}</span>
          </div>
        </div>

        <div className="flex items-center self-center justify-center h-fit">
          <MdChevronRight size={32} color="#969696" />
        </div>
      </button>

      <StudentDetailsModal data={data} modalIsOpen={modalIsOpen} onClose={onCloseModal} />
    </>
  )
}