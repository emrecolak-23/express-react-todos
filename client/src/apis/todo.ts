import axios from "axios";

export default axios.create({
    baseURL: '/api/todos',
    withCredentials: true
})