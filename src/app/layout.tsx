'use client'
import './globals.css'

import { useEffect } from 'react'
//@ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import { Bilbo_Swash_Caps } from 'next/font/google';
import { bilbo, now } from './styles/fonts';







export default function RootLayout({ children }: { children: React.ReactNode }) {

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);



  return (
      <html lang='fr'>
        <body className={bilbo.variable + ' ' + now.className + ' ' + 'overflow-x-hidden'}>
          {children}
        </body>
      </html>
  )
}
