import Hero from './components/Hero/Hero'
import Bio from './components/Bio/Bio'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import getProjectsMetadata from '@/utilities/getProjectData'
import ContactWidget from './components/utilities/ContactWidget/ContactWidget'
import Services from './components/Services/Services'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Will - Développeur Web",
  description: `Développeur Web, je conçois et réalise des sites vitrines et e-commerce pour
  les TPE et les entreprises individuelles.`,
  keywords: ['Développeur', 'Créateur de sites', 'Développeur Normandie', 'Développeur Web', 'Développeur Rouen', 'Développeur', 'Site internet', 'Site vitrine', 'Site', 'Site e-commerce', 'E-commerce', 'TPE', 'Entrepreneurs'],
  metadataBase: new URL('https://will-developpeur.vercel.app'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    images: ['/images/photo.jpg']
  }
};

export default function Home() {

  const projectsData = getProjectsMetadata();

  return (
      <main className='overflow-x-hidden' >
        <Hero></Hero>
        <Services></Services>
        <Projects projects={projectsData}></Projects>
        <Contact></Contact>
        <Bio></Bio>
        <ContactWidget></ContactWidget>
      </main>
  )
}

