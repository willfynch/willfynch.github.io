'use client'
import styles from './Hero.module.scss'
import Image from 'next/image'
import avatar from '../../../../public/images/photo.jpg'
import { FaLinkedin, FaInstagram, FaGithubSquare } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { LanguageContext } from '@/contexts/LanguageContext';
import { useContext } from 'react'
import CoffeCup from '../CoffeeCup/CoffeeCup'

export enum HERO_TEXTS {
    EN_TITLE = "Treat yourself to an unforgettable website.",
    FR_TITLE = "Offrez-vous un site web inoubliable.",
    EN_SUBTITLE = "Web developer.",
    FR_SUBTITLE = "Développeur web.",
    EN_PHRASE = "I build websites for small companies and one-person businesses.",
    FR_PHRASE = "Je réalise des sites vitrine et e-commerce pour des TPE et des entreprises individuelles. ",
    EN_CTA = "Take appointment",
    FR_CTA = "Prenez rendez-vous",
    EN_LOGO_TEXT = 'Coffee & Code',
    FR_LOGO_TEXT = 'Du café et du code'
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

    function handleButtonHover(){
        document.getElementById('heroButton')?.classList.remove(styles.transparentBtnAnimated)
        
        setTimeout(() => {
          document.getElementById('heroButton')?.classList.add(styles.transparentBtnAnimated);
        }, 10);
      }

    return (
        <section id='home' className={styles.heroSection + ' ' + ' relative w-full h-full'}>
            {/* <Image className='z-0' fill src={'https://i.pinimg.com/originals/96/78/4d/96784da7922222f4649fb5edf921a624.jpg'} alt={''}></Image> */}
            <video id='VIDEO' className={styles.video + ' ' + 'h-screen w-screen object-cover  z-10 absolute left-0 top-0 float overflow-hidden '} disablePictureInPicture autoPlay loop muted src="/videos/coffee.mp4" />
            {/* <video id='VIDEO' className={ 'z-10 opacity-20 left-0 float w-auto min-w-full min-h-screen max-w-none'} autoPlay loop muted src="/videos/video_landing_page_compressed.mp4" /> */}

            <div className={styles.elements + ' ' + 'bg-black/70 w-full h-full z-20 absolute top-0 left-0 flex flex-col justify-center'}>

                <div id='logo' className=' self-center flex flex-col justify-center items-center'>
                    <CoffeCup></CoffeCup>
                    <h2 data-aos='fade-down' data-aos-offset='10' data-aos-duration="1000" className='text-lg text-my-white text-center'>{lang === 'fr' ?HERO_TEXTS.FR_LOGO_TEXT : HERO_TEXTS.FR_LOGO_TEXT}</h2>
                </div>

                <h1 data-aos='fade' data-aos-delay='1200' data-aos-duration="1000" id='HERO_TITLE' className={styles.heroTitle + ' ' + 'mt-4 mb-20 w-full text-center text-my-white text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'}>
                    {lang === 'fr' ? HERO_TEXTS.FR_TITLE : HERO_TEXTS.EN_TITLE}
                </h1>

                <div  data-aos='fade' data-aos-delay='1600' data-aos-duration="1000" className='w-full text-center'>
                    <button id='heroButton' onMouseEnter={handleButtonHover} onClick={e => scrollToSection('services')} className={`${styles.transparentBtn} `}>
                        {lang === 'fr' ? HERO_TEXTS.FR_CTA : HERO_TEXTS.EN_CTA}
                    </button>
                </div>

                <div className={'row-span-2 self-start flex flex-col  justify-center items-center gap-8'}>
                    {/* <Image className={styles.circleImage + ` `} height={300} width={300} alt={lang === 'fr' ? 'Photo de moi' : 'Picture of myself'} src={avatar}></Image> */}
                    <div>

                        {/* <h2 id='HERO_SUBTITLE' className=' text-lg sm:text-2xl md:text-3xl lg:text-4xl'>
                            {lang === 'fr' ? HERO_TEXTS.FR_SUBTITLE : HERO_TEXTS.EN_SUBTITLE}
                        </h2> */}
                    </div>

                </div>

                {/* <p className='text-center mt-8 mb-4'>
                    {lang === 'fr' ? HERO_TEXTS.FR_PHRASE : HERO_TEXTS.EN_PHRASE}
                </p> */}

                {/* <div className='mt-8 flex flex-row justify-center'>
                    <a aria-label={lang === 'fr' ? 'Visiter mon LinkedIn' : 'Visit my LinkedIn'} href='https://www.linkedin.com/in/willdevweb/' target='_blank' rel='noreferrer' className={styles.socialItemLi}>
                        <FaLinkedin className='text-x3xl opacity-60 hover:opacity-100'></FaLinkedin>
                    </a>
                    <a aria-label={lang === 'fr' ? 'Visiter mon Twitter' : 'Visit my Twitter'} href='https://twitter.com/willdevweb' target='_blank' rel='noreferrer' className={styles.socialItemLi}>
                        <FaSquareXTwitter className='text-x3xl opacity-60 hover:opacity-100'></FaSquareXTwitter>
                    </a>
                    <a aria-label={lang === 'fr' ? 'Visiter mon Instagram' : 'Visit my Instagram'} href="https://www.instagram.com/willdevweb/" target='_blank' rel='noreferrer' className={styles.socialItemLi}>
                        <FaInstagram className='text-x3xl opacity-60 hover:opacity-100'></FaInstagram>
                    </a>
                    {/* <li className={styles.socialItemLi}>
                        <FaGithubSquare className='text-x3xl opacity-60 hover:opacity-100'></FaGithubSquare>
                    </li> 
                </div> */}

            </div>


        </section>

    )
}