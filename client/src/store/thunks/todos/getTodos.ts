import { createAsyncThunk } from "@reduxjs/toolkit";
import todo from "../../../apis/todo";

export const getTodos = createAsyncThunk('todo/getTodos', async () => {
    const response = await todo.get('/')
    return response.data
})