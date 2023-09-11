import { api } from "@/config/axios";



export const fetchAllProjects = (): Promise<any> => {
        return new Promise((resolve, reject) => {
                api
                        .get(`/projects/all`)
                        .then((res) => {
                                resolve(res.data);
                        })
                        .catch((error) => {
                                reject(error);
                        });
        });
};

// export const fetchOneProduct = (companyId: string, id: string): Promise<Product | Error> => {
//         return new Promise((resolve, reject) => {
//                 api
//                         .get<Product>(`${backendUrl}/api/product/${companyId}/${id}`)
//                         .then((res) => {
//                                 resolve(res.data);
//                         })
//                         .catch((error) => {
//                                 console.error('Error fetching All Products:', error);
//                                 reject(error);
//                         });
//         });
// };
// export const createProduct = (product: Product): Promise<Product | Error> => {
//         return new Promise((resolve, reject) => {
//                 api
//                         .post<Product>(`${backendUrl}/api/product/`, product)
//                         .then((res) => {
//                                 resolve(res.data);
//                         })
//                         .catch((error) => {
//                                 console.error('Error creating Product:', error);
//                                 reject(error);
//                         });
//         });
// };