import FormInput from "../form-input/form-input.component"
import { useState, FC, ChangeEvent } from "react"
import SelectInput from "../select-input/select-input.component"
import { FormActions } from "../todo-form/todo-form.styles"
import Button from "../button/button.component"
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../store/thunks/todos/deleteTodo"
import { updateTodo } from "../../store/thunks/todos/updateTodo"
type TodoUpdateFormProp = {
    id: string
    title: string,
    tag: string
}

import { OPTIONS } from "../todo-form/todo-form.component"

const TodoUpdateForm:FC<TodoUpdateFormProp> = ({title, tag, id}) => {

    const dispatch = useDispatch()
    const [updatedTitle, setUpdatedTitle] = useState(title)
    const [updatedTag, setUpdatedTag] = useState(tag)

    const handleTitleChange = (event:ChangeEvent<HTMLInputElement>) => {
        setUpdatedTitle(event.target.value)
    }

    const handleSelectChange = (event:ChangeEvent<HTMLSelectElement>) => {
        setUpdatedTag(event.target.value)
    }

    const hadnleDeleteTodo = () => {
        dispatch<any>(deleteTodo(id))
    }

    const handleUpdateTodoSubmit = (event:ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch<any>(updateTodo({id, title: updatedTitle, tag: updatedTag}))
    }

    return <>
         <form onSubmit={handleUpdateTodoSubmit}>
            <FormInput
                label="Title"
                type="text"
                name="title"
                value={updatedTitle}
                onChange={handleTitleChange}
                required
            />
            <SelectInput label="Tag" options={OPTIONS} onChangeTag={handleSelectChange} defaultValue={tag} />
            <FormActions style={{marginBottom: '2rem'}}>
                <Button type="button" onClick={hadnleDeleteTodo}>Delete</Button>
                <Button type="submit">Update</Button>
            </FormActions>
        </form>
    </>
}

export default TodoUpdateForm