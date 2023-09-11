import { api } from "@/config/axios";

export const loginService = (data: Login): Promise<any | Error> => {
        return new Promise((resolve, reject) => {
                api
                        .post(`/api/auth/login`, data)
                        .then((res) => {
                                const { message, token } = res.data
                                const { user } = res.data.data
                                localStorage.setItem("tok", res.data.data.accessToken)
                                resolve({ message, user })
                        })
                        .catch((error) => {
                                reject(error.response.data.error);
                        })
        })
}