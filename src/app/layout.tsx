'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import { createContext, useEffect, useState } from 'react'
import LanguageContextProvider from '@/contexts/LanguageContext'
import Footer from './components/Footer/Footer'
//@ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import { Bilbo_Swash_Caps } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

const bilbo = Bilbo_Swash_Caps({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bilbo',
})


export default function RootLayout({ children }: { children: React.ReactNode }) {

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);


  const [lang, setLang] = useState('fr')

  return (
      <html lang={lang}>
        <body className={bilbo.variable}>
          <LanguageContextProvider value={lang}>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
          </LanguageContextProvider>
        </body>
      </html>
  )
}
