import styles from './Hero.module.scss'
import Image from 'next/image'
import avatar from '../../../../public/photo.jpg'
import { FaLinkedin, FaInstagram, FaGithubSquare } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import Link from 'next/link'
export default function Hero() {

    return (

        <section className={styles.heroSection + ' ' + 'max-h-screen flex justify-between flex-col px-4 py-12'}>

            <div className={styles.heroContainer + ' ' + 'flex flex-row items-center gap-4' + ' '}>

                <Image className={styles.circleImage + ``} height={300} width={300} alt="avatar" src={avatar}></Image>
                <div>
                    <Link href={''}><h1 className='text-3xl sm:text-4xl xl:text-6xl font-black'>William Finzy</h1></Link>
                    <h2 className='mt-2 text-lg sm:text-2xl xl:text-3xl font-semibold'>Web Developer at Capgemini</h2>
                </div>
            </div>
            <p className='mt-4'>I design and build responsive and user-friendly websites and applications.</p>

            <ul className='mt-8 flex flex-row justify-start'>
                <li className={styles.socialItemLi}>
                    <FaLinkedin className='text-3xl opacity-60 hover:opacity-100'></FaLinkedin>
                </li>
                <li className={styles.socialItemLi}>
                    <FaSquareXTwitter className='text-3xl opacity-60 hover:opacity-100'></FaSquareXTwitter>
                </li>
                <li className={styles.socialItemLi}>
                    <FaInstagram className='text-3xl opacity-60 hover:opacity-100'></FaInstagram>
                </li>
                <li className={styles.socialItemLi}>
                    <FaGithubSquare className='text-3xl opacity-60 hover:opacity-100'></FaGithubSquare>
                </li>
            </ul>


            <div className='mt-16 block text-center'>
                <button className={`${styles.btn} w-full md:w-1/2`}>Get in touch !</button>
            </div>



        </section>

    )
}