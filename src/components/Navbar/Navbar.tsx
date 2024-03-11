'use client'
import styles from './Navbar.module.scss';
import { useEffect, useState } from 'react';
import { useScrollLock } from '@/hooks/scrollLock';
import Link from 'next/link';
import { navItems } from '@/utilities/navItems';
import { usePathname } from 'next/navigation';
import { IoHome } from "react-icons/io5";
import { useRouter } from 'next/navigation';


export default function Navbar() {

    const [scrollY, setScrollY] = useState(0);
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false)
    const { lockScroll, unlockScroll } = useScrollLock();
    const pathName = usePathname()
    const router = useRouter();

    function handleNavigate(path:string){
        router.push(path)
        setTimeout(() => {
            if(mobileMenuVisible){
                handleSetMenuVisible()
            }
        }, 300);
        
    }

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
                            <button role='button' className={styles.listItem + (pathName?.includes(navItem.path) ? ' font-extrabold ' : ' font-medium ') + ' ' + ' uppercase flex items-center h-full  ml-4 cursor-pointer text-my-black hover:text-my-brown'} key={navItem.id}>
                                <Link onClick={() => handleNavigate(`/${navItem.path}`)} href={`/${navItem.path}`}>{navItem.name}</Link>
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
                            className={(pathName?.includes(navItem.path) ? ' font-extrabold ' : ' font-medium ') + ' ' + ' leading-normal hover:font-extrabold bg-my-white uppercase text-2xl text-my-black  '} key={navItem.id}>
                            <Link onClick={() => handleNavigate(`/${navItem.path}`)} href={`/${navItem.path}`}>{navItem.name}</Link>
                        </button>
                    )
                })}
                <button className={' ' + ' font-medium text-my-black flex justify-center '}>
                    <Link href={'/'}>
                        <IoHome />
                    </Link>
                </button>

            </nav>


        </div>

    )
}

