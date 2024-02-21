'use client'
import styles from './Hero.module.scss'
import Image from 'next/image'
import avatar from '../../../../public/images/photo.jpg'
import { FaLinkedin, FaInstagram, FaGithubSquare } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { LanguageContext } from '@/contexts/LanguageContext';
import { useContext } from 'react'

export enum HERO_TEXTS {
    EN_TITLE = "Hello, I'm Will,",
    FR_TITLE = "Moi, c'est Will,",
    EN_SUBTITLE = "Web developer.",
    FR_SUBTITLE = "Développeur web.",
    EN_PHRASE = "I build websites for small companies and one-person businesses.",
    FR_PHRASE = "Je réalise des sites vitrine et e-commerce pour des TPE et des entreprises individuelles. ",
    EN_CTA = "View services",
    FR_CTA = "Mes prestations"
}

export default function Hero() {

    //@ts-ignore
    const { lang } = useContext(LanguageContext)

    function scrollToSection(id: string) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section id='home' className={styles.heroSection +  ' ' + 'bg-my-white h-screen flex flex-col justify-center items-center relative py-20 lg:py-40'}>
            <div className={'z-20 absolute -mt-40 sm:mt-0 flex flex-col justify-center items-center px-10 md:px-20'}>

                <div className={'flex justify-center items-center gap-x-4 h-full'}>
                    <Image className={styles.circleImage + ` `} height={300} width={300} alt={lang==='fr' ? 'Photo de moi' : 'Picture of myself'} src={avatar}></Image>
                    <div>
                        <h1 id='HERO_TITLE' className='text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black'>
                            {lang === 'fr' ? HERO_TEXTS.FR_TITLE : HERO_TEXTS.EN_TITLE}
                        </h1>
                        <h2 id='HERO_SUBTITLE' className=' text-lg sm:text-2xl md:text-3xl lg:text-4xl'>
                            {lang === 'fr' ? HERO_TEXTS.FR_SUBTITLE : HERO_TEXTS.EN_SUBTITLE}
                        </h2>
                    </div>
                </div>

                <p className='text-center mt-8 mb-4'>
                    {lang === 'fr' ? HERO_TEXTS.FR_PHRASE : HERO_TEXTS.EN_PHRASE}
                </p>

                <div className='mt-8 flex flex-row justify-center'>
                    <a aria-label={lang==='fr'?'Visiter mon LinkedIn':'Visit my LinkedIn'} href='https://www.linkedin.com/in/willdevweb/' target='_blank' rel='noreferrer' className={styles.socialItemLi}>
                        <FaLinkedin className='text-x3xl opacity-60 hover:opacity-100'></FaLinkedin>
                    </a>
                    <a aria-label={lang==='fr'?'Visiter mon Twitter':'Visit my Twitter'} href='https://twitter.com/willdevweb'target='_blank' rel='noreferrer' className={styles.socialItemLi}>
                        <FaSquareXTwitter className='text-x3xl opacity-60 hover:opacity-100'></FaSquareXTwitter>
                    </a>
                    <a aria-label={lang==='fr'?'Visiter mon Instagram':'Visit my Instagram'}  href="https://www.instagram.com/willdevweb/" target='_blank' rel='noreferrer' className={styles.socialItemLi}>
                        <FaInstagram className='text-x3xl opacity-60 hover:opacity-100'></FaInstagram>
                    </a>
                    {/* <li className={styles.socialItemLi}>
                        <FaGithubSquare className='text-x3xl opacity-60 hover:opacity-100'></FaGithubSquare>
                    </li> */}
                </div>

                <div className='flex flex-row justify-center mt-4  text-center'>
                    <button onClick={e => scrollToSection('services')} className={`${styles.btn} w-[150px]`}>
                        {lang === 'fr' ? HERO_TEXTS.FR_CTA : HERO_TEXTS.EN_CTA}
                    </button>
                </div>


            </div>

            {/* <video id='VIDEO' className={ 'z-10 opacity-20 left-0 float w-auto min-w-full min-h-screen max-w-none'} autoPlay loop muted src="/videos/video_landing_page_compressed.mp4" /> */}

        </section>

    )
}