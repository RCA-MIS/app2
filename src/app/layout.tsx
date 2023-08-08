import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import Sidebar from '@/components/Sidebar/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Admin Portal',
	description: 'This is the admin portal for the RCA Web',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className='h-full overflow-hidden w-full'>
					<Navbar />
					<div className="flex flex-row h-[75vh] my-1 px-3 gap-3">
						<Sidebar />
						<div className="w-[90vw] md:w-[75vw] lg:w-[80vw]">
							{children}
						</div>
					</div>
					<Footer />
				</div>
			</body>
		</html>
	)
}
