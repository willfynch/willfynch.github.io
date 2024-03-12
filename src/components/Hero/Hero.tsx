import styles from './Hero.module.scss'
import Image from 'next/image'
import CoffeCup from '../CoffeeCup/CoffeeCup'
import ButtonTransparent from '../buttons/ButtonTransparent'
import Link from 'next/link'
import { navItems } from '@/utilities/navItems'

export enum HERO_TEXTS {
    FR_TITLE = "Pas un site web.",
    FR_SUBTITLE = "Une signature.",
    FR_PHRASE = "Sites vitrine et éditoriaux pour aventuriers modernes.",
    FR_CTA = "Prendre rendez-vous",
    FR_LOGO_TEXT = 'Du café et du code'
}

export interface NavItem {
    name: string;
    path: string;
    id: number
}

export default function Hero() {


    return (
        <div id='home' className={styles.heroSection + ' ' + ' relative w-full h-full'}>
            <Image className={'z-10 left-0 h-screen w-screen object-cover'} width={200} height={200} src={'/images/LAPTOPCOFFEE.jpg'} alt={''}></Image>
            {/* <video id='VIDEO' className={styles.video + ' ' + 'h-screen w-screen object-cover  z-10 absolute left-0 top-0 float overflow-hidden '} disablePictureInPicture autoPlay loop muted src="/videos/coffee.mp4" /> */}

            <div className={'bg-black/70 w-full h-full z-20 absolute top-0 left-0 flex flex-col justify-center'}>

                <div id='logo' className=' self-center flex flex-col justify-center items-center'>
                    <CoffeCup></CoffeCup>
                    <h2 className='text-lg text-my-white text-center'>{HERO_TEXTS.FR_LOGO_TEXT}</h2>
                </div>

                <h1 id='HERO_TITLE' className={styles.heroTitle + ' ' + 'mt-4 w-full text-center text-my-white text-3xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl'}>
                    {HERO_TEXTS.FR_TITLE}
                </h1>
                <h2 id='HERO_SUBTITLE' className={styles.heroTitle + ' ' + ' w-full text-center text-my-white font-bilbo text-3xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl'}>
                    {HERO_TEXTS.FR_SUBTITLE}
                </h2>
                <p id='HERO_PHRASE' className={styles.heroTitle + ' ' + 'text-xl px-[40px] md:px-0 sm::text-base mt-4 mb-20 w-full text-center text-my-white'}>
                    {HERO_TEXTS.FR_PHRASE}
                </p>

                <div className=' absolute w-full text-center z-50 top-[70%]'>
                    <Link href={'/contact'}>
                        <ButtonTransparent text={HERO_TEXTS.FR_CTA} id={'heroButton'} />
                    </Link>
                </div>
                <div id='RECTANGLE' className='z-30 hidden sm:block border-my-white absolute w-[calc(100vw-40px)] h-[calc(100vh-40px)] border-[1px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
                <nav className='absolute z-50 flex flex-col left-[40px] bottom-[40px]'>
                    {navItems.map(item => {
                        return(
                            <Link className='text-my-white text-mobileBase' key={item.id} href={`/${item.path}`}>{item.name}</Link>
                        )
                    })}
                </nav>
            </div>


        </div>

    )
}