'use client'
import styles from './Hero.module.scss'
import Image from 'next/image'
import CoffeCup from '../CoffeeCup/CoffeeCup'
import ButtonTransparent from '../buttons/ButtonTransparent'
import Link from 'next/link'
import { navItems } from '@/utilities/navItems'
import {  useState } from 'react'

export enum HERO_TEXTS {
    FR_TITLE = "Pas un site web.",
    FR_SUBTITLE = "Une signature.",
    FR_PHRASE = "Sites vitrine et éditoriaux pour aventuriers modernes.",
    FR_CTA = "Découvrir",
    FR_LOGO_TEXT = 'Du café et du code'
}

export interface NavItem {
    name: string;
    path: string;
    id: number
}

export default function Hero() {

    const [mobileMenuVisible, setMobileMenuVisible] = useState(false)

    function handleSetMenuVisible() {
        setMobileMenuVisible(!mobileMenuVisible)
    }

    return (
        <div id='home' className={styles.heroSection + ' ' + 'relative text-my-white w-full h-full overflow-hidden'}>
            <Image className={'z-10 left-0 h-screen w-screen object-cover '} width={200} height={200} src={'/images/LAPTOPCOFFEE.jpg'} alt={''}></Image>
            {/* <video id='VIDEO' className={styles.video + ' ' + 'h-screen w-screen object-cover  z-10 absolute left-0 top-0 float overflow-hidden '} disablePictureInPicture autoPlay loop muted src="/videos/coffee.mp4" /> */}
            <div id='NAV_MOBILE' className='z-50 sm:hidden absolute top-10 left-1/2 -translate-x-1/2'>
                <button aria-label='Menu' aria-expanded={mobileMenuVisible} onClick={handleSetMenuVisible} className='justify-center flex flex-col '>
                    <span className={(mobileMenuVisible ? styles.toggled + ' ' + 'translate-y-3 rotate-45 ' : '') + ' ' + ' w-7 h-0.5 bg-my-white my-1 block duration-300'} id='first'></span>
                    <span className={(mobileMenuVisible ? styles.toggled + ' ' + ' opacity-0 ' : '') + ' w-7 h-0.5 bg-my-white my-1 block duration-300'} id="second"></span>
                    <span className={(mobileMenuVisible ? styles.toggled + ' ' + ' -rotate-45 -translate-y-2' : '') + '  w-7 h-0.5 bg-my-white my-1 block duration-300'} id="third"></span>
                </button>
            </div>
            <nav aria-expanded={mobileMenuVisible} className={'bg-black/90 z-40 flex flex-col w-full h-full items-center justify-center ' + (mobileMenuVisible ? 'absolute top-0 left-0' : 'hidden')}>
                {navItems.map(item => {
                    return (
                        <Link data-aos='fade-left' className='text-h2 uppercase hover:text-my-brown' key={item.id} href={`/${item.path}`}>{item.name}</Link>
                    )
                })}
            </nav>
            <div className={'bg-black/70 w-full h-full z-20 absolute top-0 left-0 flex flex-col justify-center'}>

                <div id='logo' className='mb-4 self-center flex flex-col justify-center items-center'>
                    <CoffeCup animated />
                    <p className=' -mt-2 text-normal  text-center'>{HERO_TEXTS.FR_LOGO_TEXT}</p>
                </div>
                <div className='flex flex-col'>
                    <h1 id='HERO_TITLE' className={'text-h1  w-full -mb-16 text-center '}>
                        {HERO_TEXTS.FR_TITLE}
                    </h1>
                    <h2 id='HERO_SUBTITLE' className={'text-h1 w-full text-center font-bilbo'}>
                        {HERO_TEXTS.FR_SUBTITLE}
                    </h2>
                </div>

                <h3 id='HERO_PHRASE' className={'px-10 sm:px-0 text-normal  w-full text-center'}>
                    {HERO_TEXTS.FR_PHRASE}
                </h3>

                <div className='  w-full text-center z-50'>
                    <Link href={'/a-propos'}>
                        <ButtonTransparent width={150} text={HERO_TEXTS.FR_CTA} id={'heroButton'} />
                    </Link>
                </div>
                <div id='WHITE_RECTANGLE' className='z-30 hidden sm:block border-my-white absolute w-[calc(100vw-40px)] h-[calc(100vh-40px)] border-[1px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
                <nav className=' absolute z-50 hidden sm:flex flex-col left-[40px] bottom-[40px]'>
                    {navItems.map(item => {
                        return (
                            <Link className='text-mobileBase' key={item.id} href={`/${item.path}`}>{item.name}</Link>
                        )
                    })}
                </nav>
            </div>


        </div>

    )
}