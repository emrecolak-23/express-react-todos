import { createAsyncThunk } from "@reduxjs/toolkit";
import user from "../../../apis/user";

type FormValue = {
    displayName: string,
    email: string,
    password: string
}

export const signUp = createAsyncThunk('users/signUp', async (formValues: FormValue) => {
    const response = await user.post('/signup', formValues)
    return response.data
})