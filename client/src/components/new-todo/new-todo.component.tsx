import {NewTodoContainer} from './new-todo.styles'
import TodoForm from '../todo-form/todo-form.component'
import Button from '../button/button.component'
import { useState } from 'react'

function NewTodo() {
    const [isTodoForm, setIsTodoForm] = useState(false)

    const showFormHandler = () => {
        setIsTodoForm(true)
    }

    const closeFormHandler = () => {
        setIsTodoForm(false)
    }

    return (
        <NewTodoContainer>
            { isTodoForm && <TodoForm onCloseForm={closeFormHandler}/>}
            { !isTodoForm && <Button onClick={showFormHandler} style={{margin: 'auto'}}>Add Todo</Button>}
        </NewTodoContainer>
    )
}

export default NewTodo