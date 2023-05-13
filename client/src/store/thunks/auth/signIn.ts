import { createAsyncThunk } from "@reduxjs/toolkit";
import user from "../../../apis/user";

type FormValue = {
    email: string,
    password: string
}

export const signIn = createAsyncThunk('users/signIn', async (formValues: FormValue) => {
    const response = await user.post('/signin', formValues)
    return response.data
})