'use client'
import styles from './Navbar.module.scss';
import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import { useScrollLock } from '@/hooks/scrollLock';
import Hamburger from '../Hamburger/Hamburger';
import { HamburgerModel } from '@/models/hamburger.model';
import Link from 'next/link';
import { navItems } from '@/utilities/navItems';
import { useRouter } from 'next/navigation';

export default function Navbar() {

    const [scrollY, setScrollY] = useState(0);
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false)
    const { lockScroll, unlockScroll } = useScrollLock();
    const router = useRouter()

    function handleSetMenuVisible() {
        setMobileMenuVisible(!mobileMenuVisible)
        if (mobileMenuVisible) {
            unlockScroll()
        } else {
            lockScroll()
        }
    }

    return (
        <div className={  "h-10 shadow-md bg-my-white z-50  duration-300 top-0 px-4 sticky "}>
            <div className="hidden sm:inline h-full">
                <nav className="h-full flex flex-row justify-end">
                    {navItems.map(navItem => {
                        return (
                            <button role='button' className={styles.listItem + ' ' + 'flex items-center h-full transition linear duration-150 ml-4 cursor-pointer'} key={navItem.id}>
                               <Link href={`/${navItem.path}`}>{navItem.name}</Link>
                            </button>
                        )
                    })}
                </nav>
            </div>

            <nav aria-hidden={!mobileMenuVisible} className={styles.coverNavbar + ' ' + (mobileMenuVisible ? ' opacity-100 h-screen top-0 z-50' : 'opacity-0 h-0 -top-20') + ' ' + ' flex flex-col justify-center sm:hidden absolute w-full top-0 left-0 coverNavbar bg-white'}>
                    {navItems.map(navItem => {
                        return (
                            <button
                                role='button'
                                className={styles.listItemMobile + ' ' + 'bg-my-white justify-center flex items-center h-full text-my-black'} key={navItem.id}>
                                <Link href={`/${navItem.path}`}>{navItem.name}</Link>
                            </button>
                        )
                    })}

            </nav>

            <div className=' z-50 my-1/2  align-middle h-full sm:hidden'>
                <button aria-label='Menu' aria-expanded={mobileMenuVisible} onClick={handleSetMenuVisible} className='mt-1/2 absolute m-auto top-4 cursor-pointer align-middle justify-center flex flex-col'>
                    <span className={(mobileMenuVisible ? styles.toggled + ' ' + 'translate-y-3 rotate-45 ' : '') + ' ' + styles.hamBar + ' ' + ' w-7 h-0.5 bg-slate-800 my-1 block'} id='first'></span>
                    <span className={(mobileMenuVisible ? styles.toggled + ' ' + ' opacity-0 ' : '') + ' ' + styles.hamBar + ' ' + ' w-7 h-0.5 bg-slate-800 my-1 block'} id="second"></span>
                    <span className={(mobileMenuVisible ? styles.toggled + ' ' + ' -rotate-45 -translate-y-2' : '') + ' ' + styles.hamBar + ' ' + '  w-7 h-0.5 bg-slate-800 my-1 block'} id="third"></span>
                </button>
            </div>
        </div>

    )
}

