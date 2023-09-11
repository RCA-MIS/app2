import React from 'react'
import Project from '@/components/Projects/Project'
import sampleImage from "../../../assets/newOne.png"

const AdminInnovation = () => {

        const projects = [
                {
                        displayImage: sampleImage,
                        titleHeader: "Bookinga Bus Scheduling by Zexos Group",
                        time: "Sunday 24th September, 2020",
                        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, If you are going  . . .",
                        appreciations: 29900,
                        FMessages: 900,
                        publisher: "Ntakirutimana David"
                },
                {
                        displayImage: sampleImage,
                        titleHeader: "Yombi Labs. Great Law firms",
                        time: "Sunday 24th September, 2020",
                        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, If you are going  . . .",
                        appreciations: 29900,
                        FMessages: 900,
                        publisher: "Ntakirutimana David"
                }
                ,
                {
                        displayImage: sampleImage,
                        titleHeader: "Tuura Homes. Best houses for Rent & Sale",
                        time: "Sunday 24th September, 2020",
                        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, If you are going  . . .",
                        appreciations: 29900,
                        FMessages: 900,
                        publisher: "Ntakirutimana David"
                }
        ]
        return (
                <div className='w-full h-full'>
                        <header className='text-[#000000B2] font-semibold mx-1 my-3'>Published projects</header>

                        <div className='w-full h-[90%]  overflow-y-auto'>
                                {projects.map(project=>{
                                        return(
                                                <Project 
                                                        displayImage={project.displayImage} 
                                                        titleHeader={project.titleHeader} 
                                                        content={project.content} 
                                                        time={project.time}
                                                        appreciations={project.appreciations}
                                                        FMessages={project.FMessages}
                                                        publisher={project.publisher}
                                                />
                                        )
                                })}
                        </div>
                </div>
        )
}

export default AdminInnovation