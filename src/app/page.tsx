import Image from 'next/image'
import Layout from './components/Layout'
import Hero from './components/Hero/Hero'
import PostCard from './components/utilities/PostCard/PostCard'
import Bio from './components/Bio/Bio'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'


export default function Home() {

  const varText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui excepturi ipsam, quisquam amet facere dolores, odio modi voluptatum repudiandae dolorum minima animi est. Temporibus dicta amet, repudiandae sequi quam ab?'


  return (
    <Layout>
    
        <main >

          <Hero></Hero>
          <Bio></Bio>
          <Experience></Experience>
          <Projects></Projects>


        </main>
   
    </Layout>
  )
}
