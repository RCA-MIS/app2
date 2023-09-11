import StudentPortalFooter from "@/components/Footer/StudentPortalFooter"
import "../../app/globals.css"
// import StudentPortalFooter from '@/src/components/Footer/StudentPortalFooter'
import StudentPortalNavbar from '@/components/Navbar/StudentPortalNavbar'
import AdminPortalSidebar from '@/components/Sidemenu/AdminPortalSidebar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function StudentPortalLayout({
        children,
}: {
        children: React.ReactNode
}) {
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
