import React, { useState } from "react";
import { Page } from "./Page";

export function ListCursos() {
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const handleExpandClick = (index) => {
    setExpandedIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((i) => i !== index);
      } else {
        return [...prevIndexes, index];
      }
    });
  };

  const cursos = [
    {
      id: 1,
      nome: "Ciência da computação",
      sigla: "CCiComp",
      carga_horaria: 3600,
      siape_coordenador: "1601 - Marcos Vinícius Bião" ,
    },
    {
      id: 2,
      nome: "Engenharia de Produção",
      sigla: "prodSAL",
      carga_horaria: 4600,
      siape_coordenador: "não atribuído" ,
    },
  ];

  return (
    <Page typeSidebar="student" showSidebar={true}>
      <div className="flex flex-col h-[90%] gap-6">
        <h1 className="text-4xl font-bold roboto">Cursos Cadastrados no Sistema</h1>
        <div className="flex flex-col w-full gap-6 p-6 bg-white rounded-md shadow-2xl">
          {cursos.map((cursos, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <div
                className="bg-blue-500 text-white text-lg font-bold p-4 cursor-pointer flex justify-between items-center"
                onClick={() => handleExpandClick(index)}
              >
                <span>
                  {cursos.nome} ({cursos.sigla})
                </span>
                <span>{expandedIndexes.includes(index) ? "▲" : "▼"}</span>
              </div>
              {expandedIndexes.includes(index) && (
                <>
                  <div className="p-4">
                    <table className="w-full">
                      <thead>
                        <tr className="sm:table-row table-row">
                          <th className="text-left sm:table-cell hidden">
                            Nome
                          </th>
                          <th className="text-left sm:table-cell hidden">
                            Sigla
                          </th>
                          <th className="text-left sm:table-cell hidden">
                            Carga Horária
                          </th>
                          <th className="text-left sm:table-cell hidden">
                            Siape - Nome do coordenador
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="sm:table-row table-row">
                          <td className="text-left sm:table-cell hidden">
                            {cursos.nome}
                          </td>
                          <td className="text-left sm:table-cell hidden">
                            {cursos.sigla}
                          </td>
                          <td className="text-left sm:table-cell hidden">
                            {cursos.carga_horaria}
                          </td>
                          <td className="text-left sm:table-cell hidden">
                            {cursos.siape_coordenador}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
}