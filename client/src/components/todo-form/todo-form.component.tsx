import FormInput from "../form-input/form-input.component"
import UploadInput from "../upload-input/upload-input.components"
import Button from "../button/button.component"
import SelectInput from "../select-input/select-input.component"
import {FormActions, FormControls, UploadControls} from "./todo-form.styles"
import { FC, useState, ChangeEvent, FormEvent } from "react"

import { useDispatch } from "react-redux"
import { addTodo } from "../../store/thunks/todos/addTodo"

export type TodoForm = {
    onCloseForm:Function
} 


export const OPTIONS = [
    {   
        id: 1,
        value: 'Personal'
    },
    {
        id: 2,
        value: 'Business'
    },
    {
        id: 3,
        value: 'Sport'
    }
]

const TodoForm:FC<TodoForm> = ({onCloseForm}) => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [selectedImage, setSelectedImage] = useState<File | null>(null)
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [tag, setTag] = useState('')

    const handleTitleChange = (event:ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const handleUploadImageChange = (image:File) => {
        console.log(image)
        setSelectedImage(image)
    }

    const handleUploadFileChange = (file: File) => {
        setSelectedFile(file)
    }

    const handleSubmitTodo = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData();
        if(selectedImage) {
            formData.append('image', selectedImage);
        }

        if(selectedFile) {
            formData.append('file', selectedFile)
        }

        formData.append('title', title)
        formData.append('tag', tag)

        dispatch<any>(addTodo(formData))
        onCloseForm()
    }
 
    const handleSelectChange = (tag: string) => {
        setTag(tag)
    }


    return <form onSubmit={handleSubmitTodo}>
        <FormControls >
            <FormInput
                label="Title"
                type="text"
                name="title"
                onChange={handleTitleChange}
                value={title}
                required
                />
            <UploadControls>
                <UploadInput text="Upload Image" type="image" fileAccept="image/*" onFileChange={handleUploadImageChange}/>
                <UploadInput text="Upload File" type="file" fileAccept="application/pdf" onFileChange={handleUploadFileChange}/>
            </UploadControls>
            <SelectInput label="Tag" options={OPTIONS} onChangeTag={handleSelectChange} defaultValue="" />
        </FormControls>
        <FormActions>
            <Button type="button" onClick={() => onCloseForm()}>Cancel</Button>
            <Button type="submit">Add Todo</Button>
        </FormActions>
    </form>
}

export default TodoForm