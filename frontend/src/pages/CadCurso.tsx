import { useParams } from "react-router-dom";
import { FormularioCurso } from "../components";
import { Page } from "./Page";

export function CadCurso() {

    const { curso_id } = useParams();

    return (
        <Page typeSidebar="admin">
            <FormularioCurso curso_id={curso_id ? Number.parseInt(curso_id,10) : null}/>
        </Page>
    )
}

