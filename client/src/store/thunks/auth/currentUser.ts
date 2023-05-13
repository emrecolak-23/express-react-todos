import { createAsyncThunk } from "@reduxjs/toolkit";
import user from "../../../apis/user";

export const currentUser = createAsyncThunk('users/currentUser', async () => {
    const response = await user.get('/currentuser')
    return response.data
})