import Link from 'next/link';
import styles from './Navbar.module.scss';
import { useContext, useEffect, useState } from 'react';
import logo_calendly from '../../../public/calendly_logo.svg'
import { BsSunFill } from 'react-icons/bs'
import Image from 'next/image';
import { LanguageContext } from '@/contexts/LanguageContext';

export default function Navbar() {

    let [scrollY, setScrollY] = useState(0);
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false)

    //@ts-ignore
    const {lang, setLang} = useContext(LanguageContext)

    useEffect(() => {
        console.log('lang' , lang)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        {
            name: 'Bio',
            path: 'about',
            id: 1,
        },
        {
            name: 'Projects',
            path: 'projects',
            id: 2
        },
        {
            name: 'Contact',
            path: 'contact',
            id: 3
        }
    ]

    function navigateTo(id: string): void {
        setMobileMenuVisible(false);
        scrollToSection(id);
    }

    function scrollToSection(id: string){
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    function handleScroll() {
        const position = window.pageYOffset;
        setScrollY(position);
    }

    function handleLanguage(){
        if(lang === 'fr'){ setLang('en')}
        else{setLang('fr')}
    }

    return (
        <nav className="bg-white z-40 top-0 sticky shadow-md px-4 h-16 items-center sticky top-0 grid grid-cols-2 gap-4 ">

            <div className={styles.brand + " " + " relative align-middle brand flex flex-row"}>
                <div className={styles.chevronOpen}>&#60;</div>
                <Link href={''}>William FINZY + {lang?.toString()}</Link>
                <span className={styles.chevronClose}>&#62;</span>
            </div>


            <div className="hidden sm:inline h-full">
                <ul className="h-full flex flex-row justify-end">
                    {navItems.map(navItem => {
                        return (
                            <li onClick={e => scrollToSection(navItem.path)} className={styles.listItem + ' ' + 'flex items-center h-full transition linear duration-150 ml-4 cursor-pointer'} key={navItem.id}>
                                {navItem.name}
                            </li>
                        )
                    })}
                    <li onClick={handleLanguage} className={styles.listItem + ' ' + 'flex items-center h-full transition linear duration-150 ml-4 cursor-pointer'}>
                        LANG : {lang.toString()}
                    </li>
                </ul>
            </div>

            <div className={styles.coverNavbar + ' ' + (mobileMenuVisible ? ' opacity-100 h-screen top-0 z-50' : 'opacity-0 h-0 -top-20') + ' ' + ' sm:hidden absolute w-full top-0 left-0 coverNavbar bg-white'}>
                <ul className=" h-full flex flex-col justify-center">
                    {navItems.map(navItem => {
                        return (
                            <li
                                onClick={e => navigateTo(navItem.path)}
                                className={styles.listItemMobile + ' ' + 'justify-center flex items-center h-full cursor-pointer'} key={navItem.id}>
                                {navItem.name}
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className='  my-1/2 align-middle h-full sm:hidden flex flex-row justify-end'>

                <div onClick={(e) => setMobileMenuVisible(!mobileMenuVisible)} className='mt-1/2 absolute m-auto top-4 cursor-pointer align-middle justify-center flex flex-col'>
                    <span className={(mobileMenuVisible ? styles.toggled + ' ' + 'translate-y-3 rotate-45 ' : '') + ' ' + styles.hamBar + ' ' + ' w-7 h-0.5 bg-slate-800 my-1 block'} id='first'></span>
                    <span className={(mobileMenuVisible ? styles.toggled + ' ' + ' opacity-0 ' : '') + ' ' + styles.hamBar + ' ' + ' w-7 h-0.5 bg-slate-800 my-1 block'} id="second"></span>
                    <span className={(mobileMenuVisible ? styles.toggled + ' ' + ' -rotate-45 -translate-y-2' : '') + ' ' + styles.hamBar + ' ' + '  w-7 h-0.5 bg-slate-800 my-1 block'} id="third"></span>
                </div>
            </div>
        </nav>


    )
}

