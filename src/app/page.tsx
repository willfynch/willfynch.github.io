import Image from 'next/image'
import Layout from './components/Layout'
import Hero from './components/Hero/Hero'
import styles from './page.module.scss'

export default function Home() {

  const varText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui excepturi ipsam, quisquam amet facere dolores, odio modi voluptatum repudiandae dolorum minima animi est. Temporibus dicta amet, repudiandae sequi quam ab?'


  return (
    <Layout>
      <div className={styles.container + ' ' + 'flex justify-center h-fit-view'}>
        <div className={styles.gridContainer + ' ' + 'grid grid-cols-1 sm:grid-cols-2 w-1100'}>
          <Hero></Hero>
          <div className={styles.content + ' ' + 'sm:overflow-y-scroll'}>

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

          </div>
        </div>
      </div>

    </Layout>
  )
}
