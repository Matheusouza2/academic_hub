import React, { useState } from "react";
import { Page } from "./Page";

export function QueryGrades() {
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

  const disciplines = [
    {
      id: 1,
      nome: "Matemática Discreta",
      coordenador_id: 101,
      carga_horaria: 60,
      sigla: "MD",
      professor: "Valdigleis Costa",
      grades: [8, 9, 10],
      finalGrade: 9,
      average: 9,
      status: "Reprovado",
      faltas: 2,
    },
    {
      id: 2,
      nome: "Algoritmos e Estruturas de Dados",
      coordenador_id: 102,
      carga_horaria: 80,
      sigla: "AED",
      professor: "Ricardo Azevedo",
      grades: [7, 8, 9],
      finalGrade: 8,
      average: 8,
      status: "Aprovado",
      faltas: 1,
    },
    {
      id: 3,
      nome: "Programação Orientada a Objetos",
      coordenador_id: 103,
      carga_horaria: 80,
      sigla: "POO",
      professor: "Ricardo Azevedo",
      grades: [8, 9, 10],
      finalGrade: 9,
      average: 9,
      status: "Aprovado",
      faltas: 0,
    },
    {
      id: 4,
      nome: "Engenharia de Software",
      coordenador_id: 104,
      carga_horaria: 80,
      sigla: "ES",
      professor: "Marcio Matheus",
      grades: [8, 9, 10],
      finalGrade: 9,
      average: 9,
      status: "Aprovado",
      faltas: 0,
    },
    {
      id: 5,
      nome: "Sistemas Operacionais",
      coordenador_id: 105,
      carga_horaria: 80,
      sigla: "SO",
      professor: "Ricardo Azevedo",
      grades: [8, 9, 10],
      finalGrade: 9,
      average: 9,
      status: "Aprovado",
      faltas: 20,
    },
    {
      id: 6,
      nome: "Banco de Dados",
      coordenador_id: 106,
      carga_horaria: 80,
      sigla: "BD",
      professor: "Marcio Matheus",
      grades: [8, 9, 10],
      finalGrade: 9,
      average: 9,
      status: "Aprovado",
      faltas: 0,
    },
    {
      id: 7,
      nome: "Redes de Computadores",
      coordenador_id: 107,
      carga_horaria: 80,
      sigla: "RC",
      professor: "Biao",
      grades: [8, 9, 10],
      finalGrade: 9,
      average: 9,
      status: "Aprovado",
      faltas: 0,
    },
  ];

  return (
    <Page typeSidebar="student" showSidebar={true}>
      <div className="flex flex-col h-full gap-6">
        <h1 className="text-4xl font-bold roboto">Notas</h1>
        <div className="flex flex-col w-full gap-6 p-6 bg-white rounded-md shadow-2xl">
          {disciplines.map((discipline, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <div
                className="bg-blue-500 text-white text-lg font-bold p-4 cursor-pointer flex justify-between items-center"
                onClick={() => handleExpandClick(index)}
              >
                <span>
                  {discipline.nome} ({discipline.sigla})
                </span>
                <span>{expandedIndexes.includes(index) ? "▲" : "▼"}</span>
              </div>
              {expandedIndexes.includes(index) && (
                <>
                  <h1 className="text-2xl font-bold roboto p-4">
                    Professor: {discipline.professor}{" "}
                  </h1>
                  <div className="p-4">
                    <table className="w-full">
                      <thead>
                        <tr className="sm:table-row table-row">
                          <th className="text-left sm:table-cell hidden">
                            Nota 1
                          </th>
                          <th className="text-left sm:table-cell hidden">
                            Nota 2
                          </th>
                          <th className="text-left sm:table-cell hidden">
                            Nota 3
                          </th>
                          <th className="text-left sm:table-cell hidden">
                            Nota Final
                          </th>
                          <th className="text-left sm:table-cell hidden">
                            Média
                          </th>
                          <th className="text-left sm:table-cell hidden">
                            Status
                          </th>
                          <th className="text-left sm:table-cell hidden">
                            Faltas
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="sm:table-row table-row">
                          <td className="text-left sm:table-cell hidden">
                            {discipline.grades[0]}
                          </td>
                          <td className="text-left sm:table-cell hidden">
                            {discipline.grades[1]}
                          </td>
                          <td className="text-left sm:table-cell hidden">
                            {discipline.grades[2]}
                          </td>
                          <td className="text-left sm:table-cell hidden">
                            {discipline.finalGrade}
                          </td>
                          <td className="text-left sm:table-cell hidden">
                            {discipline.average}
                          </td>
                          <td className="text-left sm:table-cell hidden">
                            {discipline.status}
                          </td>
                          <td className="text-left sm:table-cell hidden">
                            {discipline.faltas}
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
