'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import nowFont from 'next/font/local';
import {useEffect, useState } from 'react'
//@ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import { Bilbo_Swash_Caps } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

const now = nowFont({
  src: '../../public/fonts/Now-Regular.otf'
})

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


  return (
      <html lang='fr'>
        <body className={bilbo.variable + ' ' + now.className}>
            {children}
        </body>
      </html>
  )
}
