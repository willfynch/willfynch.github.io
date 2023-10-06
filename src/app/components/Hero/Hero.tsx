import styles from './Hero.module.scss'
import Image from 'next/image'
import avatar from '../../../../public/photo.jpg'

export default function Hero() {
    return (

        <section className={styles.heroSection + ' ' + 'max-h-screen flex justify-between flex-col px-4 py-12'}>
            
            <div className={styles.heroContainer + ' ' + 'flex flex-row items-center gap-4' + ' '}>
                
                <Image className={styles.circleImage} height={300} width={300} alt="avatar" src={avatar}></Image>
                <h1 className='sm:text-3xl xl:text-6xl font-black'>William Finzy</h1>

            </div>

            <div>
                SOCIALS
            </div>


        </section>

    )
}