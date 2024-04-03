import { calculateMetadata } from '@/utilities/calculateMetadata';
import Hero from '../components/utilities/Hero/Hero'
import { Metadata } from 'next'

export const metadata: Metadata = calculateMetadata("Accueil", '/')

export default function Home() {
  return (
      <main >
        <Hero ></Hero>
      </main>
  )
}

