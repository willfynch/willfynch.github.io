import styles from './Hero.module.scss'
import Image from 'next/image'
import avatar from '../../../../public/photo.jpg'

export default function Hero() {
    return (

        <section className={styles.heroSection + ' ' + 'flex justify-center'}>
            
            <div className={styles.heroContainer + ' ' + ' w-1000'}>
                
                <Image className={styles.circleImage} height={400} width={300} alt="avatar" src={avatar}></Image>

            </div>


        </section>

    )
}