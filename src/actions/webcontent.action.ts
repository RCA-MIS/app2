import { api } from "@/config/axios"

export const getWebcontent = ():Promise<any> =>{
    return new Promise((resolve,reject)=>{
        api.get("/web-content").then((res)=>{
            console.log(res.data)
            resolve(res.data);
        }).catch((err)=>{
            console.log(err)
            reject(err)
        })
    })

}
