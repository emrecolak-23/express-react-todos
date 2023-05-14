import { createAsyncThunk } from "@reduxjs/toolkit";
import todo from "../../../apis/todo";



export const addTodo = createAsyncThunk('todo/addTodo', async (formValue: FormData) => {
    const response = await todo.post('/', formValue)
    return response.data
})