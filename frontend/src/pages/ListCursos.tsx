import { useState } from "react";
import Modal from "react-modal";
import { Page } from "./Page";


Modal.setAppElement("#root");


export function ListCursos() {
  const [expandedIndexes, setExpandedIndexes] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCurso, setSelectedCurso] = useState("");
  const [selectedProfessor, setSelectedProfessor] = useState("");
  const [filteredProfessores, setFilteredProfessores] = useState([]);
  const [cursos, setCursos] = useState([
    {
      id: 1,
      nome: "Ciência da Computação",
      sigla: "CCiComp",
      carga_horaria: 3600,
      siape_coordenador: "1601 - Marcos Vinícius Bião",
    },
    {
      id: 2,
      nome: "Engenharia de Produção",
      sigla: "prodSAL",
      carga_horaria: 4600,
      siape_coordenador: "não atribuído",
    },
  ]);


  const professores = [
    { id: 1, nome: "Marcos Vinícius Bião", cursoId: 1 },
    { id: 2, nome: "Joana Silva", cursoId: 2 },
  ];


  const handleExpandClick = (index) => {
    setExpandedIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((i) => i !== index);
      } else {
        return [...prevIndexes, index];
      }
    });
  };


  const openModal = () => {
    setModalIsOpen(true);
  };


  const closeModal = () => {
    setModalIsOpen(false);
  };


  const handleSave = () => {
    setCursos((prevCursos) =>
      prevCursos.map((curso) =>
        curso.id === parseInt(selectedCurso)
          ? {
            ...curso,
            siape_coordenador: `${selectedProfessor} - ${professores.find(
              (prof) => prof.id === parseInt(selectedProfessor)
            ).nome}`,
          }
          : curso
      )
    );
    closeModal();
  };


  const handleCursoChange = (e) => {
    const selectedCursoId = e.target.value;
    setSelectedCurso(selectedCursoId);
    const filtered = professores.filter((professor) => professor.cursoId == selectedCursoId);
    setFilteredProfessores(filtered);
    setSelectedProfessor("");
  };


  return (
    <Page typeSidebar="student" showSidebar={true}>
      <div className="flex flex-col h-[90%] gap-6">
        <h1 className="text-4xl font-bold roboto">Cursos Cadastrados no Sistema</h1>
        <div className="flex flex-col w-full gap-6 p-6 bg-white rounded-md shadow-2xl">
          {cursos.map((curso, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <div
                className="bg-blue-500 text-white text-lg font-bold p-4 cursor-pointer flex justify-between items-center"
                onClick={() => handleExpandClick(index)}
              >
                <span>
                  {curso.nome} ({curso.sigla})
                </span>
                <span>{expandedIndexes.includes(index) ? "▲" : "▼"}</span>
              </div>
              {expandedIndexes.includes(index) && (
                <>
                  <div className="p-4">
                    <table className="w-full">
                      <thead>
                        <tr className="sm:table-row table-row">
                          <th className="text-left sm:table-cell hidden">Nome</th>
                          <th className="text-left sm:table-cell hidden">Sigla</th>
                          <th className="text-left sm:table-cell hidden">Carga Horária</th>
                          <th className="text-left sm:table-cell hidden">Siape - Nome do coordenador</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="sm:table-row table-row">
                          <td className="text-left sm:table-cell hidden">{curso.nome}</td>
                          <td className="text-left sm:table-cell hidden">{curso.sigla}</td>
                          <td className="text-left sm:table-cell hidden">{curso.carga_horaria}</td>
                          <td className="text-left sm:table-cell hidden">{curso.siape_coordenador}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button
            className="mx-8 mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            onClick={openModal}
          >
            Definir Coordenador
          </button>
        </div>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Definir Coordenador">
        <h2>Definir Coordenador</h2>
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-bold mb-2">Curso</label>
            <select
              value={selectedCurso}
              onChange={handleCursoChange}
              className="border rounded w-full py-2 px-3"
            >
              <option value="">Selecione um curso</option>
              {cursos.map((curso) => (
                <option key={curso.id} value={curso.id}>
                  {curso.nome}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Professor</label>
            <select
              value={selectedProfessor}
              onChange={(e) => setSelectedProfessor(e.target.value)}
              className="border rounded w-full py-2 px-3"
              disabled={!selectedCurso}
            >
              <option value="">Selecione um professor</option>
              {filteredProfessores.map((professor) => (
                <option key={professor.id} value={professor.id}>
                  {professor.nome}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            onClick={handleSave}
            className="bg-blue-500 text-white py-2 px-4 rounded"
            disabled={!selectedCurso || !selectedProfessor}
          >
            Salvar
          </button>
        </form>
      </Modal>
    </Page>
  );
}





