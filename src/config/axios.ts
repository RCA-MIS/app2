import axios from "axios"


export const api = axios.create({
        baseURL: process.env.BACKEND
})

api.interceptors.request.use(config => {
        const token = localStorage.getItem("invmantok")
        if (token) {
                config.headers.Authorization = `Bearer  ${token}`;
        }
        return config
})