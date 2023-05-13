import { createAsyncThunk } from "@reduxjs/toolkit";
import user from "../../../apis/user";


export const signOut = createAsyncThunk('users/signout', async () => {
    const response = await user.get('/signout')
    return response.data
})