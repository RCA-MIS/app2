import { api } from "@/config/axios";

export const createNews = (data: any): Promise<any | Error> => {
        return new Promise((resolve, reject) => {
                api
                        .post<any>(`/news/create/`, data)
                        .then((res) => {
                                console.log(res)
                                resolve(res.data);
                        })
                        .catch((error) => {
                                console.log(error);
                                console.error('Error creating Product:', error);
                                reject(error);
                        });
        });
};