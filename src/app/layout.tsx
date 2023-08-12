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
			<head>
				<link rel='icon' href='/favicon.png' />
			</head>
			<body className={inter.className}>
				{children}
			</body>
		</html>
	)
}
