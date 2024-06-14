import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FormularioCurso } from "../components";
import { api } from "../services/api";
import { Page } from "./Page";

export function CadCurso() {
  const { curso_id } = useParams();

  const [curso, setCurso] = useState()

  useEffect(() => {
    if (curso_id)
      api.get(`v1/cursos/${curso_id}`)
        .then(response => setCurso(response.data.curso))
  }, [curso_id])

  if (curso_id)
    return (
      <Page typeSidebar="admin">
        {curso ? <FormularioCurso curso={curso} curso_id={curso_id ? Number.parseInt(curso_id, 10) : null} /> : <h1>Loading...</h1>}
      </Page>
    )

  return (
    <Page typeSidebar="admin">
      <FormularioCurso curso_id={curso_id ? Number.parseInt(curso_id, 10) : null} />
    </Page>
  )
}