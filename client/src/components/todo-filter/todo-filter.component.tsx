import SelectInput from "../select-input/select-input.component"
import FormInput from "../form-input/form-input.component"
import { TodoFilterContainer } from "./todo-filter.styles"
import { OPTIONS } from "../todo-form/todo-form.component"
import { FC, ChangeEvent, useState } from "react"

type TodoFilterProps = {
    onChangeTag: Function,
    onChangeSearch: Function
}

const TodoFilter:FC<TodoFilterProps> = ({onChangeTag, onChangeSearch}) => {

    const [searchTerm, setSearchTerm] = useState('')

    const handleChangeFilter = (tag:string) => {
        onChangeTag(tag)
    }

    const handleChangeSearch = (event:ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
        onChangeSearch(event.target.value)
    }

    return <TodoFilterContainer>
        <FormInput
                label="Search"
                type="text"
                onChange={handleChangeSearch}
                value={searchTerm}
                required
            />
        <SelectInput label="Tag" options={OPTIONS} onChangeTag={handleChangeFilter} defaultValue="" />
    </TodoFilterContainer>


}

export default TodoFilter