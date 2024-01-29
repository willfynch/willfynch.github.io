'use client'
import styles from './Hero.module.scss'
import Image from 'next/image'
import avatar from '../../../../public/photo.jpg'
import { FaLinkedin, FaInstagram, FaGithubSquare } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import Link from 'next/link'
import { LanguageContext } from '@/contexts/LanguageContext';
import { useContext, useEffect } from 'react'


export enum HERO_TEXTS {
    EN_TITLE = "Hello, I'm Will,",
    FR_TITLE = "Moi, c'est Will,",
    EN_SUBTITLE = "Web developer",
    FR_SUBTITLE = "Développeur web",
    EN_PHRASE = "I build websites for small companies and one-person businesses.",
    FR_PHRASE = "Je réalise des sites vitrine et e-commerce pour des TPE et des entrepreneurs solos. ",
    EN_CTA = "View more",
    FR_CTA = "En savoir +"
}

export default function Hero() {

    //@ts-ignore
    const { lang, setLang } = useContext(LanguageContext)

    function scrollToSection(id: string){
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section id='SECTION_HERO' className='h-screen flex flex-col justify-center items-center relative'>
            <div className={'z-20 absolute  flex flex-col justify-center items-center px-10 md:px-20'}>

                <div className={'flex justify-center items-center gap-x-4 h-full'}>
                    <Image className={styles.circleImage + ` `} height={300} width={300} alt="avatar" src={avatar}></Image>
                    <div>
                        <h1 id='HERO_TITLE' className='text-md xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black'>
                            {lang === 'fr' ? HERO_TEXTS.FR_TITLE : HERO_TEXTS.EN_TITLE}
                        </h1>
                        <h2 id='HERO_SUBTITLE' className=' text-md sm:text-2xl md:text-3xl lg:text-4xl'>
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

                <div className='flex flex-row justify-center mt-4  text-center'>
                    <button onClick={e => scrollToSection('services')} className={`${styles.btn} w-[150px]`}>
                    {lang === 'fr' ? HERO_TEXTS.FR_CTA : HERO_TEXTS.EN_CTA}
                    </button>
                </div>


            </div>
            <video id='VIDEO' autoPlay loop muted className='z-0 brightness-[150%] opacity-20 -top-40 left-0 absolute  w-auto min-w-full min-h-full max-w-none' src="/videos/video_landing_page_compressed.mp4"/>
        </section>

    )
}