import React, { useEffect, useState } from "react";
import { Page } from "./Page";
import { useParams } from "react-router-dom";
import axios from "axios";
import { api } from "../services/api";

export function ConsultaNotas() {

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

  const[disciplines,setDisciplines] = useState([]);

  const request = useParams;
  const url = `/v1/notas/show/${request}`;

  useEffect(() => {
    api.get(url)
      .then(response => setDisciplines(response?.data))
   
  }, [url]);

 
  return (
    <Page typeSidebar="student" showSidebar={true}>
    <div className="flex flex-col h-[90%] gap-6">
      <h1 className="text-4xl font-bold roboto">Notas</h1>
      <div className="flex flex-col w-full gap-6 p-6 bg-white rounded-md shadow-2xl">
        {disciplines?.map((discipline, index) => (
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
