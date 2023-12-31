"use client"
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Sidebar from '@/components/Sidebar/Sidebar'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//         title: 'Admin Portal',
//         description: 'This is the admin portal for the RCA Web',
//         icons:"/favicon.png"
// }

export default function RootLayout({
        children,
}: {
        children: React.ReactNode
}) {

        const router= useRouter()
        useEffect(()=>{
                if(!localStorage.getItem("token")){
                        router.push("/login")
                }
        },[])
        return (
                <div className='h-full overflow-hidden w-full'>
                        <Navbar />
                        <div className="flex flex-row h-[80vh] my-1 px-3 gap-3">
                                <Sidebar />
                                <div className="w-full md:w-[75vw] lg:w-[80vw]">
                                        {children}
                                </div>
                        </div>
                        <Footer />
                </div>
        )
}