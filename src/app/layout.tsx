"use client"
import { NavBar } from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import { NavBarList } from '@/constants/NavbarList'
import { AuthContextProvider } from '@/context/authContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Prova',
  description: 'pizzeria prova',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">
      <AuthContextProvider>
        <div className='relative min-h-screen w-full'>
          <NavBar dataNav={NavBarList}/>
          {children}
        </div>
      </AuthContextProvider>
      </body>
    </html>
  )
}
