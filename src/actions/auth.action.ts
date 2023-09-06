import { api } from "@/config/axios";
const setAuthorizationHeader = (cookie: string) => {
        api.defaults.headers.common['Authorization'] = `Bearer ${cookie}`;
};



export const loginService = (data: Login): Promise<{ message: string } | Error> => {
        return new Promise((resolve, reject) => {
                api
                        .post<{ message: string; user: User, token: string }>(`/api/auth/login`, data)
                        .then((res) => {
                                const { message, user, token } = res.data
                                setAuthorizationHeader(token);
                                resolve({ message })
                        })
                        .catch((error) => {
                                reject(error.response.data.error);
                        })
        })
}