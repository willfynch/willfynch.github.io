'use client'
import styles from './Hero.module.scss'
import Image from 'next/image'
import avatar from '../../../../public/photo.jpg'
import { FaLinkedin, FaInstagram, FaGithubSquare } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import Link from 'next/link'
import { LanguageContext } from '@/contexts/LanguageContext';
import { useContext } from 'react'

export enum HERO_TEXTS {
    EN_TITLE = "Hello, I am William",
    FR_TITLE = "Salut, moi c'est William",
    EN_SUBTITLE = "Web developer",
    FR_SUBTITLE = "Et je suis développeur",
    EN_PHRASE = "I design and build websites",
    FR_PHRASE = "Je réalise ton site web ",
}

export default function Hero() {

    //@ts-ignore
    const { lang, setLang } = useContext(LanguageContext)



    return (
        <section id='SECTION_HERO' className='h-screen flex flex-col justify-center items-center '>
            <div className={'  flex flex-col justify-center items-center px-10 md:px-20'}>

                <div className={'flex justify-center items-center gap-x-4 h-full'}>
                    <Image className={styles.circleImage + ` `} height={300} width={300} alt="avatar" src={avatar}></Image>
                    <div>
                        <h1 id='HERO_TITLE' className='text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black'>
                            {lang === 'fr' ? HERO_TEXTS.FR_TITLE : HERO_TEXTS.EN_TITLE}
                        </h1>
                        <h2 id='HERO_SUBTITLE' className=' text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
                            {lang === 'fr' ? HERO_TEXTS.FR_SUBTITLE : HERO_TEXTS.EN_SUBTITLE}
                        </h2>
                    </div>
                </div>


                <p className='text-center mt-8 mb-4'>
                    {lang === 'fr' ? HERO_TEXTS.FR_PHRASE : HERO_TEXTS.EN_PHRASE}
                </p>

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