import {TodosContainer} from './todos-container.styles'
import ExpandablePanel from '../expandable-panel/expandable-panel.component'
import TodoDetail from '../todo-detail/todo-detail.component'
import TodoFilter from '../todo-filter/todo-filter.component'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../../store/thunks/todos/getTodos'
import { useEffect, useState } from 'react'
import { TodoData } from '../../store/slices/todo-slice'
import { RootState } from '../../store'

function Todos() {

    const dispatch = useDispatch()
    const [filteredTag, setFilteredTag] = useState<string | null>(null)
    const [filteredSearchTerm, setFilteredSearchTerm] = useState('')
    
    const todos = useSelector<RootState, TodoData[]>((state) => {
        return state.todos.todos
    })

    useEffect(() => {
        dispatch<any>(getTodos())
    },[])

    const filterChangeHandler = (selectedTag:string) => {
        setFilteredTag(selectedTag)
    }

    const searchChangeHandler = (searchTerm:string) => {
        setFilteredSearchTerm(searchTerm)
    }

    let filteredTodos;

    filteredTodos = todos.filter(todo => {
        if(!filteredTag) {
            return todo
        } 

        return todo.tag === filteredTag
    })
    
    filteredTodos = todos.filter(todo => {
        return todo.title.toLowerCase().substring(0, filteredSearchTerm.length) == filteredSearchTerm.toLowerCase()
    })
    


    return <TodosContainer>
        <TodoFilter onChangeTag={filterChangeHandler} onChangeSearch={searchChangeHandler} />
         {
                filteredTodos.map(todo => {
                    return  <ExpandablePanel key={todo.id} title={todo.title} image={todo.image || ''}>
                        <TodoDetail title={todo.title} tag={todo.tag || ''} id={todo.id} file={todo.file || ''}/>
                    </ExpandablePanel>
                })
            }
       
    </TodosContainer>
}

export default Todos