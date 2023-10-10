import Image from 'next/image'
import Layout from './components/Layout'
import Hero from './components/Hero/Hero'
import PostCard from './components/utilities/PostCard/PostCard'

export default function Home() {

  const varText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui excepturi ipsam, quisquam amet facere dolores, odio modi voluptatum repudiandae dolorum minima animi est. Temporibus dicta amet, repudiandae sequi quam ab?'


  return (
    <Layout>
      <div className={'lg:flex lg:justify-between lg:gap-4'}>
        <header className='max-h-fit-view lg:sticky lg:w-1/2 top-16 lg:px-24 lg:py-24'>
          <Hero></Hero>
        </header>
        <main className={'lg:w-1/2 px-8' + ''}>

          
          <PostCard content={{}}></PostCard>


          {varText}

          <div className='my-52'></div>
          {varText}

          <div className='my-52'></div>
          {varText}

          <div className='my-52'></div>

          {varText}

          <div className='my-52'></div>
          {varText}

          <div className='my-52'></div>
          {varText}

          <div className='my-52'></div>
          {varText}

          <div className='my-52'></div>

        </main>
      </div>

    </Layout>
  )
}
