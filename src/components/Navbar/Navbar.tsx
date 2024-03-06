'use client'
import styles from './Navbar.module.scss';
import { Fragment, useContext, useEffect, useState } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import { useScrollLock } from '@/hooks/scrollLock';
import Hamburger from '../Hamburger/Hamburger';
import { HamburgerModel } from '@/models/hamburger.model';
import Link from 'next/link';
import { navItems } from '@/utilities/navItems';
import { usePathname, useRouter } from 'next/navigation';
import { IoHome } from "react-icons/io5";
import CoffeCup from '../CoffeeCup/CoffeeCup';

export default function Navbar() {

    const [scrollY, setScrollY] = useState(0);
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false)
    const { lockScroll, unlockScroll } = useScrollLock();
    const pathName = usePathname()

    function handleSetMenuVisible() {
        setMobileMenuVisible(!mobileMenuVisible)
        if (mobileMenuVisible) {
            unlockScroll()
        } else {
            lockScroll()
        }
    }

    return (
        <div className={"h-[50px] shadow-md bg-my-white z-50 top-0 sticky "}>
            <div className="hidden sm:inline h-full">
                <nav className="text-base h-full flex flex-row justify-center">
                    <button className={styles.listItem + ' ' + 'text-my-black'}>
                        <Link href={'/'}>
                            <IoHome />
                        </Link>
                    </button>
                    {navItems.map(navItem => {
                        return (
                            <button role='button' className={styles.listItem + (pathName === '/' + navItem.path ? ' font-extrabold ' : ' font-medium ') + ' ' + ' uppercase flex items-center h-full  ml-4 cursor-pointer text-my-black'} key={navItem.id}>
                                <Link href={`/${navItem.path}`}>{navItem.name}</Link>
                            </button>
                        )
                    })}
                </nav>
            </div>
            <div className=' z-50 flex justify-center h-full sm:hidden'>
                <button aria-label='Menu' aria-expanded={mobileMenuVisible} onClick={handleSetMenuVisible} className='justify-center flex flex-col '>
                    <span className={(mobileMenuVisible ? styles.toggled + ' ' + 'translate-y-3 rotate-45 ' : '') + ' ' + styles.hamBar + ' ' + ' w-7 h-0.5 bg-slate-800 my-1 block duration-300'} id='first'></span>
                    <span className={(mobileMenuVisible ? styles.toggled + ' ' + ' opacity-0 ' : '') + ' ' + styles.hamBar + ' ' + ' w-7 h-0.5 bg-slate-800 my-1 block duration-300'} id="second"></span>
                    <span className={(mobileMenuVisible ? styles.toggled + ' ' + ' -rotate-45 -translate-y-2' : '') + ' ' + styles.hamBar + ' ' + '  w-7 h-0.5 bg-slate-800 my-1 block duration-300'} id="third"></span>
                </button>
            </div>
            <nav
                aria-hidden={!mobileMenuVisible}
                className={(mobileMenuVisible ? ' bg-my-white opacity-100 z-40 left-0 h-screen ' : 'opacity-0 left-[1000px] ') + ' ' + ' duration-300 absolute flex flex-col px-10 items-center sm:hidden w-full'}>

                {navItems.map(navItem => {
                    return (
                        <button
                            role='button'
                            className={(pathName === '/' + navItem.path ? ' font-extrabold ' : ' font-medium ') + ' ' + ' leading-normal hover:font-extrabold bg-my-white uppercase text-2xl text-my-black text-[2rem] xs:text-[3rem]'} key={navItem.id}>
                            <Link href={`/${navItem.path}`}>{navItem.name}</Link>
                        </button>
                    )
                })}
                <button className={' ' + ' font-medium text-my-black flex justify-center text-[2rem] xs:text-[3rem]'}>
                    <Link href={'/'}>
                        <IoHome />
                    </Link>
                </button>

            </nav>


        </div>

    )
}

