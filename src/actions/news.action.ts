import { api } from "@/config/axios";

export const createNews = (data: any): Promise<any | Error> => {
        console.log(data)
        return new Promise((resolve, reject) => {
                api
                        .post<any>(`/news/create/`, data)
                        .then((res) => {
                                console.log(res);
                                resolve(res.data.data);
                        })
                        .catch((error) => {
                                reject(error);
                        });
        });
};