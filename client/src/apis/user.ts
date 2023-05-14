import axios from "axios";

export default axios.create({
    baseURL: '/api/users',
    withCredentials: true
})