import { calculateMetadata } from '@/utilities/calculateMetadata';
import Hero from '../components/Hero/Hero'
import { Metadata } from 'next'
import { Bilbo_Swash_Caps } from 'next/font/google';
import nowFont from 'next/font/local';

export const metadata: Metadata = calculateMetadata("Accueil", '/')

const now = nowFont({
  src: '../../public/fonts/Now-Regular.otf'
})

const bilbo = Bilbo_Swash_Caps({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bilbo',
})

export default function Home() {
  return (
      <main >
        <Hero ></Hero>
      </main>
  )
}

