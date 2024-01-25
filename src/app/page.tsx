import Layout from './components/Layout'
import Hero from './components/Hero/Hero'
import Bio from './components/Bio/Bio'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import getProjectsMetadata from '@/utilities/getProjectData'
import ContactWidget from './components/utilities/ContactWidget/ContactWidget'


export default function Home() {

  const projectsData = getProjectsMetadata();

  // no use effect here bc server component
  // detection of lang change must be in child components
  // lets try with localstorage data maybe

  return (
        <main >
          <Hero></Hero>
          <Bio></Bio>
          <Projects projects={projectsData}></Projects>
          <Contact></Contact>
          <ContactWidget></ContactWidget>
        </main>
  )
}

export function getAllText(){

}
