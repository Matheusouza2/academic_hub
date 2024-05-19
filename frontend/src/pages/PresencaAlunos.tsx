import PresencaList from "../interfaces/PresencaList"
import { Page } from "./Page"

type Props = {
    setModal: Function,
    info: PresencaList
}

export function PresencaAlunos({ setModal, info }: Props) {
    
    return (
        <Page typeSidebar="teacher">
            <div>
                
            </div>
        </Page>
    )

}
