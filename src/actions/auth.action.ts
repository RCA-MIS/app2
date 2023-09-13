import { api } from "@/config/axios";

export const loginService = (data: Login): Promise<any | Error> => {
        return new Promise((resolve, reject) => {
                api
                        .post(`/auth/login`, data)
                        .then((res) => {
                                // const { message, token } = res.data
                                // console.log("finished message")
                                // // localStorage.setItem("token", res.data.data.refreshToken)
                                // resolve({ message })
                                resolve({message})
                                console.log(res)
                        })
                        .catch((error) => {
                                console.log(error)
                                reject(error.response.data.error);
                        })
        })
}