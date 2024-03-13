import Hero from '../components/Hero/Hero'
import { Metadata } from 'next'
import { Bilbo_Swash_Caps } from 'next/font/google';
import nowFont from 'next/font/local';

export const metadata: Metadata = {
  title: "Du café et du code | développement de sites web",
  description: `Sites vitrine et éditoriaux pour aventuriers modernes.`,
  keywords: ['Café', 'Développeur', 'Créateur de sites', 'Développeur Normandie', 'Développeur Web', 'Développeur Rouen', 'Développeur', 'Site internet', 'Site vitrine', 'Site', 'Site e-commerce', 'E-commerce', 'TPE', 'Entrepreneurs', 'Sites jamstack', 'Sites sans serveur', 'Pas wordpress', 'Wordpress', 'Site sans wordpress', 'Site pas cher', 'Site économique'],
  metadataBase: new URL('https://ducafeetducode.com'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    images: ['/images/opengraph.png']
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/opengraph.png'],
    description: `Sites vitrine et éditoriaux pour aventuriers modernes.`,
    title : 'Du café et du code | développement de sites web'
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

