import { createAsyncThunk } from "@reduxjs/toolkit";
import todo from "../../../apis/todo";

type UpdateFormValue = {
    id: string,
    title: string,
    tag: string
}

export const updateTodo = createAsyncThunk('todo/updateTodo', async (formValue: UpdateFormValue) => {
    const { id } = formValue
    const updatedValues = {
        title: formValue.title,
        tag: formValue.tag
    }
    const response = await todo.patch(`/${id}`, updatedValues)
    return response.data
})