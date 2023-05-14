import { createAsyncThunk } from "@reduxjs/toolkit";
import todo from "../../../apis/todo";

export const deleteTodo = createAsyncThunk('todo/deleteTodo', async (id: string) => {
    const response = await todo.delete(`/${id}`)
    return response.data
})