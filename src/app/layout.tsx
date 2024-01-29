'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import { createContext, useState } from 'react'
import LanguageContextProvider from '@/contexts/LanguageContext'
import Head from 'next/head'
import Footer from './components/Footer/Footer'
//import LanguageContextProvider from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })
// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

const LanguageContext = createContext('fr')


export default function RootLayout({ children }: { children: React.ReactNode }) {


  const [lang, setLang] = useState('fr')

  return (
      <html lang={lang}>
        <body className={inter.className}>
          <LanguageContextProvider value={lang}>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
          </LanguageContextProvider>

        </body>
      </html>
  )
}
