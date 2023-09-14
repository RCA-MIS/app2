"use client"
import React, { useEffect, useState } from 'react'
import Project from '@/components/Projects/Project'
import sampleImage from "../../../assets/assets/newOne.png"
// import {projects} from "../../../data/projects"
import { baseUrl, token } from '@/utils/url'
import axios from "axios"

const AdminInnovation = () => {
        const [projects, setProjects] = useState<any>([])
        const token = localStorage.getItem("token")
        useEffect(()=>{
                axios.get(`${baseUrl}/projects/all`,{
                        headers: {
                                Authorization: `Bearer ${token}`
                        }
                })
                        .then(res=>{
                                console.log(res.data)
                                setProjects(res.data)
                        })
        },[])

        return (
                <div className='w-full h-full'>
                        <header className='text-[#000000B2] font-semibold mx-1 my-3'>Published projects</header>

                        <div className='w-full h-[90%]  overflow-y-auto'>
                                {projects.length !== 0 ?
                                projects.map((project:any ,index:any)=>{
                                        console.log(project)
                                        return(
                                                <Project 
                                                        // displayImage={project.image}
                                                        titleHeader={project.name} 
                                                        content={project.description} 
                                                        time={project.createdAt}
                                                        appreciations={200}
                                                        FMessages={project.FMessages}
                                                        publisher={project.publisher}
                                                        id= {index}
                                                        key={index}
                                                />
                                        )
                                }): <h3 className='mx-auto mt-3 text-center'>No projects published yet.</h3>}
                        </div>
                </div>
        )
}

export default AdminInnovation