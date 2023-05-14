import { createAsyncThunk } from "@reduxjs/toolkit";
import todo from "../../../apis/todo";
import fileDownload from "js-file-download";

type DownloadParam = {
    id: string,
    file: string
}

export const downloadFile = createAsyncThunk('todo/downloadFile', async (payload: DownloadParam) => {
    const response = await todo.post('/download/file', payload, {
        responseType: 'blob',
    })
    fileDownload(response.data, 'file.pdf')

})