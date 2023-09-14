import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Admin Portal',
	description: 'This is the admin portal for the RCA Web',
	icons: "/favicon.png"
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				<title>Admin Portal</title>
				<link rel='icon' href='/favicon.png' />
			</head>
			<body className={inter.className}>
				{children}
				<Toaster />
			</body>
		</html>
	)
}
