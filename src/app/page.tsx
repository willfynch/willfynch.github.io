import Layout from './components/Layout'
import Hero from './components/Hero/Hero'
import Bio from './components/Bio/Bio'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import getProjectsMetadata from '@/utilities/getProjectData'
import ContactWidget from './components/utilities/ContactWidget/ContactWidget'
import Head from 'next/head'
import Services from './components/Services/Services'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Will - Développeur Web",
  description: `Développeur Web, je conçois et réalise des sites vitrines et e-commerce pour
  les TPE et les entreprises individuelles.`,
  keywords: ['Développeur', 'Développeur Web', 'Développeur Rouen', 'Développeur'],
  metadataBase: new URL('https://willfynch-github-io.vercel.app/'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    images: ['/photo.jpg']
  }
};

export default function Home() {



  const projectsData = getProjectsMetadata();

  // no use effect here bc server component
  // detection of lang change must be in child components
  // lets try with localstorage data maybe

  return (
    <>

      <main className='overflow-x-hidden' >
        <Hero></Hero>
        <Services></Services>
        <Projects projects={projectsData}></Projects>
        <Contact></Contact>
        <Bio></Bio>
        
        
        <ContactWidget></ContactWidget>
      </main>
    </>

  )
}

