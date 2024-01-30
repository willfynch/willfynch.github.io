'use client'
import Image from 'next/image'
import styles from './ContactWidget.module.scss'
import logo_calendly from '../../../../../public/calendly_logo.svg'
import { LanguageContext } from '@/contexts/LanguageContext';
import { useContext } from 'react';
import { IoCalendarOutline } from "react-icons/io5";

export default function ContactWidget() {

    //@ts-ignore
    const { lang, setLang } = useContext(LanguageContext)

    const shadow = 'shadow-[0px_-3px_6px_2px_#00000024]'

    function handleLanguage() {
        if (lang === 'fr') { setLang('en') }
        else { setLang('fr') }
    }

    return (
        <>
            {/**PC VIEW */}
            <div className={ " hidden sm:flex " + ' ' + "cursor-pointer rounded-md w-[80px] h-[80px]  bg-my-white hover:bg-my-black duration-300 z-40 group fixed right-4 bottom-4 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"}>
                <a rel='noopener' href="https://calendly.com/fr" className={  ' ' + ' w-full flex flex-col justify-center items-center'}>
                <span className='text-center text-sm mb-2 duration-300 text-my-black group-hover:text-my-white'>Contact</span>

                    <button className='text-my-black group-hover:text-my-white duration-300 text-xl flex flex-cols items-center justify-center]'>
                        {/* <Image src={logo_calendly} width={300} height={300} alt="" /> */}
                        <IoCalendarOutline />
                    </button>
                </a>
            </div>

            {/**MOBILE VIEW */}
            <div className={shadow + " " + "bg-my-white h-[60px] sm:hidden px-8 py-2 flex justify-between z-40 fixed bottom-0 w-full "}>
                <a rel='noopener' href="https://calendly.com/fr" className={+ ' ' + ' flex flex-col justify-center items-center'}>
                    <span className='text-sm'>Contact</span>
                    <button className={'sm:rounded-md text-xl overflow-hidden flex flex-cols items-center justify-center w-[100px] h-[30px]'}>
                        {/* <Image src={logo_calendly} width={300} height={300} alt="" /> */}
                        
                        <IoCalendarOutline />
                    </button>

                </a>

                <button className=' text-xl flex justify-center items-center  sm:hidden' onClick={handleLanguage} >
                    {lang === "fr" ? '🇫🇷' : '🇬🇧'}
                </button>

            </div>
        </>

    )

}