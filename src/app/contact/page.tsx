
import Banner from '@/components/Banner/Banner'
import ServiceCard from '@/components/ServiceCard/ServiceCard'
import { servicesItem } from '@/utilities/servicesItems'
import { GlowCapture } from '@codaworks/react-glow'
import parse from 'html-react-parser'
import Image from 'next/image'

import { Metadata } from 'next'


export const metadata: Metadata = {
    title: "Du café et du code | Contact",
    description: `Je m’appelle Will, j’aime le café, la poésie et je fabrique des sites web pour aventuriers modernes. Mais qu’est-ce qu’un aventurier moderne, me diras-tu, toi qui me lis ?`,
    keywords: ['Café', 'Développeur', 'Créateur de sites','Foire aux questions', 'Combien coûte un site web', 'Comment créer un site web', 'Développeur Normandie', 'Développeur Web', 'Développeur Rouen', 'Développeur', 'Site internet', 'Site vitrine', 'Site', 'Site e-commerce', 'E-commerce', 'TPE', 'Entrepreneurs', 'Sites jamstack', 'Sites sans serveur', 'Pas wordpress', 'Wordpress', 'Site sans wordpress', 'Site pas cher', 'Site économique'],
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
      description: `Je m’appelle Will, j’aime le café, la poésie et je fabrique des sites web pour aventuriers modernes. Mais qu’est-ce qu’un aventurier moderne, me diras-tu, toi qui me lis ?`,
      title : 'Du café et du code | Contact`'
    },
    icons: [{rel: 'icon', url:'./favicon.ico'}, {rel: 'apple-touch-icon', url:'./apple-touch-icon.png'}]
};

export default function Contact() {
    return (
        <section className="text-normal text-my-black ">

        </section>
    )
}