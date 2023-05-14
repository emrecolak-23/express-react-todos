import { createSlice } from "@reduxjs/toolkit";
import { addTodo } from "../thunks/todos/addTodo";
import { getTodos } from '../thunks/todos/getTodos'
import { deleteTodo } from "../thunks/todos/deleteTodo";
import { updateTodo } from "../thunks/todos/updateTodo";

export type TodoData = {
    id: string,
    title: string,
    image?: string,
    file?: string,
    tag?: string
}

interface INITIAL_STATE {
    todos: TodoData[],
    isLoading: boolean
    error: string | null | undefined
}

const initialState: INITIAL_STATE = {
    todos: [],
    isLoading: false,
    error: null
}


const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(addTodo.pending, (state, _) => {
            state.isLoading = true
            state.error = null
        })
        builder.addCase(addTodo.fulfilled, (state, action) => {
            state.isLoading = false
            state.todos.push(action.payload)
        });
        builder.addCase(addTodo.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
        builder.addCase(getTodos.pending, (state, _) => {
            state.isLoading = true
            state.error = null
        })
        builder.addCase(getTodos.fulfilled, (state, action) => {
            state.isLoading = false
            state.todos = action.payload
        });
        builder.addCase(getTodos.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
        builder.addCase(deleteTodo.pending, (state, _) => {
            state.isLoading = true
            state.error = null
        })
        builder.addCase(deleteTodo.fulfilled, (state, action) => {
            state.isLoading = false
            const index = state.todos!.indexOf(action.payload);
            state.todos!.splice(index, 1);
        });
        builder.addCase(deleteTodo.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
        builder.addCase(updateTodo.pending, (state, _) => {
            state.isLoading = true
            state.error = null
        })
        builder.addCase(updateTodo.fulfilled, (state, action) => {
            const { id } = action.payload;
            const todoIndex = state.todos.findIndex(todo => todo.id === id);

            if (todoIndex !== -1) {
                state.todos[todoIndex] = { ...action.payload };
            }
        });
        builder.addCase(updateTodo.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export const todoReducer = todoSlice.reducer

