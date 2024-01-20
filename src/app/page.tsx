import Layout from './components/Layout'
import Hero from './components/Hero/Hero'
import Bio from './components/Bio/Bio'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import getProjectsMetadata from '@/utilities/getProjectData'


export default function Home() {

  const projectsData = getProjectsMetadata();

  return (
    <Layout>
    
        <main >

          <Hero></Hero>
          <Bio></Bio>
          <Projects projects={projectsData}></Projects>
          <Contact></Contact>


        </main>
   
    </Layout>
  )
}
