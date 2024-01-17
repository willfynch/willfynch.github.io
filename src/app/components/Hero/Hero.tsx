import styles from './Hero.module.scss'
import Image from 'next/image'
import avatar from '../../../../public/photo.jpg'
import { FaLinkedin, FaInstagram, FaGithubSquare } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import Link from 'next/link'


export default function Hero() {

    return (
        <section id='SECTION_HERO' className='h-screen flex flex-col justify-center items-center '>
            <div className={'  flex flex-col justify-center items-center px-10 md:px-20'}>

                <div className={'flex justify-center items-center gap-x-4 h-full'}>
                    <Image className={styles.circleImage + ` `} height={300} width={300} alt="avatar" src={avatar}></Image>
                    <div>
                        <h1 id='HERO_TITLE' className='text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black'>Hello, I am William</h1>
                        <h2 id='HERO_SUBTITLE' className=' text-xl sm:text-2xl md:text-3xl lg:text-4xl'>A web developer</h2>
                    </div>
                </div>


                <p className='text-center mt-8 mb-4'>I design and build responsive and user-friendly websites and applications.</p>

                <ul className='mt-8 flex flex-row justify-center'>
                    <li className={styles.socialItemLi}>
                        <FaLinkedin className='text-x3xl opacity-60 hover:opacity-100'></FaLinkedin>
                    </li>
                    <li className={styles.socialItemLi}>
                        <FaSquareXTwitter className='text-x3xl opacity-60 hover:opacity-100'></FaSquareXTwitter>
                    </li>
                    <li className={styles.socialItemLi}>
                        <FaInstagram className='text-x3xl opacity-60 hover:opacity-100'></FaInstagram>
                    </li>
                    <li className={styles.socialItemLi}>
                        <FaGithubSquare className='text-x3xl opacity-60 hover:opacity-100'></FaGithubSquare>
                    </li>
                </ul>

                <div className='flex flex-row justify-center mt-4 w-full md:w-1/2 text-center'>
                    <button className={`${styles.btn} w-full sm:w-1/2`}>Get in touch !</button>
                </div>


            </div>
        </section>

    )
}