import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth-slice";
import { todoReducer } from "./slices/todo-slice";

const rootReducer = combineReducers({
    auth: authReducer,
    todos: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
    reducer: rootReducer
})

export * from './thunks/auth/signUp'
export * from './thunks/auth/signIn'
export * from './thunks/auth/signOut'