'use client'
import FileDropComponent from "@/components/FileDrop/FileDrop"
import { useState } from "react";
import axios from "axios"
import { baseUrl } from "@/utils/url";
import { axiosInstance } from "@/utils/url";
import {toast} from "react-hot-toast"

const AddInnovations = ()=>{
    const [formData, setFormData] = useState({
        name: "",
        title: "",
        description: "",
        status: "APPROVED",
        userEmail: "nyiringabodavid62@gmail.com",
        image: []
    })
    const onChange = (e: any) =>{
        const {name, value} = e.target
        setFormData((prevState)=>({
            ...prevState,
            [name]: value
        }))
    }
    const projectData = new FormData()
    const handleChange = (value:any)=>{
        projectData.append("file", value)
    }
    const handleSubmit = (e: any)=>{
        console.log(formData)
        e.preventDefault()
        axiosInstance.post("/projects/create", formData)
            .then(res=>{
                console.log(res)
                toast.success(res.data.message)
                
            })
            .catch(err=>{
                console.log(err)

            })
    }
    const handleFilesSelected = (files: File[]) => {
        // console.log(files[0].path)
        // formData.image = files[0].path
};
    return (
        <div className="w-full">
            <header className="text-[#000000B2] font-semibold mx-1 my-2">Publish project</header>

            <p className="text-[rgba(67,67,67,0.43)] my-3 text-[12px] mx-1">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci velit, </p>

            <form className="w-full flex flex-col px-1" onSubmit={handleSubmit}>
                <div className="max-[500px]:flex-col w-[99%] flex justify-between">
                    <div className="max-[500px]:w-full max-[500px]:mb-2 w-[50%]">
                        <FileDropComponent fileType='landing' onFilesSelected={handleFilesSelected}>
                            <div className='bg-[rgba(67,67,67,0.03)] h-[267px] rounded-md border-[2px] border-[rgba(67,67,67,0.09)] flex flex-col gap-5 justify-center items-center'>
                                    <p className='text-[#000000B2]  text-[28px] font-extrabold'>Drag & Drop</p>
                                    <p className='text-[rgba(73,73,74,0.78)] text-sm font-medium'>Cover photo of the project</p>
                            </div>
                        </FileDropComponent>
                    </div>

                    <div className="max-[500px]:w-full w-[47%]">
                        <input type="text" name="name" placeholder='Project Name' onChange={onChange}  className='w-full mb-3 h-14 px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                        <input type="text" name="webLink" placeholder='Project Website Link' onChange={onChange} className='w-full mb-3 h-14 px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                        <input type="text" name="gitLink" placeholder='Project Github Link' onChange={onChange} className='w-full mb-3 h-14 px-3 py-2 text-black placeholder:text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]' />
                        <div>
                            <p>Project Problem Fields: </p>
                            <div className="w-full flex px-3 items-center my-3 h-16 text-black bg-[rgba(67,67,67,0.03)]  rounded-md border-[2px] border-[rgba(67,67,67,0.09)]">
                                <button type="button" className="text-[12px] w-[150px] h-[90%] rounded-2xl border-2 border-[rgba(8, 40, 210, 0.37)] bg-[rgba(60, 100, 202, 0.22)]">
                                    Cyber Security
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <textarea name="description" cols={20} rows={20}  onChange={onChange} className="w-full max-[500px]:h-[20vh] h-[35vh] p-2 resize-none rounded-lg border-2 border-[#43434317] bg-[rgba(67,67,67,0.03)]">

                </textarea>

                <div className="w-full h-16 flex items-end gap-4">
                    <button type="button" className="w-3/6 md:w-1/5 h-4/5 rounded-lg font-semibold text-[12px]  text-[#000000B2] bg-[#43434317]">Cancel change</button>
                    <button type="submit" className="w-3/6 md:w-1/5 h-4/5 rounded-lg font-semibold text-[12px] text-white bg-[#523873]">Publish Project</button>
                </div>
            </form>
        </div>
    )
}

export default AddInnovations