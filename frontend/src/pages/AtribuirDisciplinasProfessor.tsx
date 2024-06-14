import React, { useState, useEffect } from "react";
import { Page } from "./Page";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import { Professor } from "../interfaces/Professor";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";
import { useProfessorController } from "../controllers/AtribuirDisciplinasProfessorController";

export function AtribuirDisciplinasProfessor() {
  const {
    professores,
    disciplinas,
    carregando,
    obterProfessores,
    obterDisciplinas,
    adicionarDisciplina
  } = useProfessorController();

  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [professorSelecionado, setProfessorSelecionado] = useState<Professor | null>(null);
  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    obterProfessores();
    obterDisciplinas();
  }, []);

  const handleAdicionarDisciplina = () => {
    if (professorSelecionado && disciplinaSelecionada) {
      adicionarDisciplina(professorSelecionado.id, disciplinaSelecionada);
      setOpen(false);
    } else {
      toast.error("Nenhuma disciplina ou professor selecionado");
    }
  };

  const handleOpen = (professor: Professor) => {
    setProfessorSelecionado(professor);
    setDisciplinaSelecionada(""); // Resetar a seleção de disciplina ao abrir o dialog
    setOpen(true);
  };

  if (carregando) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <CircularProgress />
      </div>
    );
  }

  return (
    <Page>
      <ToastContainer position="bottom-center" />
      <div className="container px-4 mx-auto">
        <h1 className="my-4 text-2xl font-bold text-center">
          Atribuir Disciplinas ao Professor
        </h1>
        {professores.map((professor) => (
          <div
            key={professor.siape}
            className="p-6 mb-6 bg-white rounded-lg shadow-lg"
          >
            <h2 className="mb-2 text-xl font-semibold">{professor.nome}</h2>
            <p className="text-gray-700">SIAPE: {professor.siape}</p>
            <button
              className="px-4 py-2 mt-4 text-white bg-blue-500 rounded"
              onClick={() => handleOpen(professor)}
            >
              Adicionar Disciplina
            </button>

            <button
              className="px-4 py-2 mt-4 ml-4 text-white bg-blue-500 rounded"
              onClick={() => {
                setProfessorSelecionado(professor);
                setOpenPopup(true);
              }}
            >
              Disciplinas do Professor
            </button>
          </div>
        ))}
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>Adicionar Disciplina</DialogTitle>
          <DialogContent>
            <select
              className="px-2 py-2 border-2 border-gray-400 rounded"
              onChange={(e) => setDisciplinaSelecionada(e.target.value)}
              value={disciplinaSelecionada}
            >
              <option value="">Selecione uma disciplina</option>
              {disciplinas.map((disciplina) => (
                <option key={disciplina.id} value={disciplina.id}>
                  {disciplina.nome}
                </option>
              ))}
            </select>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              onClick={handleAdicionarDisciplina}
              color="primary"
              disabled={!disciplinaSelecionada}
            >
              Adicionar
            </Button>
            <Button
              onClick={() => setOpen(false)}
              color="secondary"
              variant="outlined"
            >
              Cancelar
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog open={openPopup} onClose={() => setOpenPopup(false)}>
          <DialogContent>
            <table align="center" className="text-center">
              <thead>
                <tr>
                  <th className="mb-3 text-xl border-b-2">Disciplinas do Professor:</th>
                </tr>
              </thead>
              <tbody className="text-base">
              Back-End ainda nao implementado
              </tbody>
            </table>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenPopup(false)} color="secondary" variant="outlined">Sair</Button>
          </DialogActions>
        </Dialog>
      </div>
    </Page>
  );
}
