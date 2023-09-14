import axios from "axios"
export const token = localStorage.getItem("token")
export const baseUrl = "http://194.163.167.131:8050"
export const axiosInstance = axios.create({
    headers:{
        Authorization: `Bearer ${token}`
    },
    baseURL: baseUrl
})