import Hero from '../components/Hero/Hero'
import { Metadata } from 'next'
import { Bilbo_Swash_Caps } from 'next/font/google';
import nowFont from 'next/font/local';

export const metadata: Metadata = {
  title: "Will | Sites web sur mesure",
  description: `Développeur Web, je conçois et réalise des sites vitrines et e-commerce pour
  les TPE et les entreprises individuelles.`,
  keywords: ['Développeur', 'Créateur de sites', 'Développeur Normandie', 'Développeur Web', 'Développeur Rouen', 'Développeur', 'Site internet', 'Site vitrine', 'Site', 'Site e-commerce', 'E-commerce', 'TPE', 'Entrepreneurs'],
  metadataBase: new URL('https://www.willdev.me'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    images: ['/images/opengraph.png']
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/opengraph.png'],
    description: `Développeur Web, je conçois et réalise des sites vitrines et e-commerce pour
    les TPE et les entreprises individuelles.`,
    title : 'Will | Sites web sur mesure'
  }
};

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
      <main className={bilbo.variable + ' ' + now.className} >
        <Hero ></Hero>
      </main>
  )
}

