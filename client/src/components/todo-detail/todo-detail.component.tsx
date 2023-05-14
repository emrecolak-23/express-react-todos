import {FC} from 'react'
import { TodoDetailContainer } from "./todo-detail.styles"
import TodoUpdateForm from "../todo-update-form/todo-update-form.component"
import DownloadFile from "../download-file/download-file.component"
type TodoDetailProp = {
    id: string
    title: string,
    tag: string,
    file: string
}


const TodoDetail:FC<TodoDetailProp> = ({title, tag, id, file}) => {


    return <TodoDetailContainer>
        <DownloadFile file={file} id={id} />
       <TodoUpdateForm title={title} tag={tag} id={id}/>
    </TodoDetailContainer>
}
export default TodoDetail