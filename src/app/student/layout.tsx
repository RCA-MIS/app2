"use client"
import StudentPortalFooter from "@/components/Footer/StudentPortalFooter"
import "../../app/globals.css"
// import StudentPortalFooter from '@/src/components/Footer/StudentPortalFooter'
import StudentPortalNavbar from '@/components/Navbar/StudentPortalNavbar'
import AdminPortalSidebar from '@/components/Sidemenu/AdminPortalSidebar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useEffect } from "react"

import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })



export default function StudentPortalLayout({
        children,
}: {
        children: React.ReactNode
}) {
        const router= useRouter()
        useEffect(()=>{
                if(!localStorage.getItem("token")){
                        router.push("/login")
                }

                document.title = "RCA | Student portal"
        },[])
        return (
                <div className='h-[110vh] overflow-x-hidden w-full'>
                        <StudentPortalNavbar />
                        <div className="flex flex-row my-1 px-3 gap-3">
                                <AdminPortalSidebar />
                                <div className="w-[90vw] md:w-[75vw] lg:w-[80vw]">
                                        {children}
                                </div>
                        </div>
                        <StudentPortalFooter/>
                </div>
        )
}
