import Layout from './components/Layout'
import Hero from './components/Hero/Hero'
import Bio from './components/Bio/Bio'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import getProjectsMetadata from '@/utilities/getProjectData'
import ContactWidget from './components/utilities/ContactWidget/ContactWidget'
import Head from 'next/head'
import Services from './components/Services/Services'


export default function Home() {

  const meta = {
    title: "William Finzy - Developer",
    description: `I've been working in web development for 3 years straight. Get in touch with me to know more.`,
    image: "/avatar.png",
    type: "website"
  };

  const projectsData = getProjectsMetadata();

  // no use effect here bc server component
  // detection of lang change must be in child components
  // lets try with localstorage data maybe

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
      </Head>

      <main >
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

