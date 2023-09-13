import Link from 'next/link';
import styles from './Navbar.module.scss';
import { useState } from 'react';

export default function Navbar() {

    function navigateTo(id:string):void{
        setMobileMenuVisible(false)
    }

    const [mobileMenuVisible, setMobileMenuVisible] = useState(false)

    const navItems = [
        {
            name: 'Projects',
            path: '',
            id: 1
        },
        {
            name: 'Experience',
            path: '',
            id: 2
        },
        {
            name: 'Contact',
            path: '',
            id: 3
        },
        {
            name: 'Bio',
            path: '',
            id: 4
        }
    ]

    return (
        <div>
            <nav className="shadow-md px-4 h-16 items-center sticky grid grid-cols-2 gap-4 w-full">
                <div className="align-middle brand">
                    <Link href={''}>William FINZY</Link>
                </div>
                <div className="hidden sm:inline h-full">
                    <ul className="h-full flex flex-row justify-end">
                        {navItems.map(navItem => {
                            return (
                                <li className={styles.listItem + ' ' + 'flex items-center h-full transition linear duration-150 ml-4 cursor-pointer'} key={navItem.id}>
                                    {navItem.name}
                                </li>
                            )
                        })}
                    </ul>
                </div>

                {

                    <div className={styles.coverNavbar + ' ' + (mobileMenuVisible ? 'opacity-100 h-screen top-0' : 'opacity-0 h-0 -top-20') + ' ' + ' sm:hidden absolute w-full top-0 left-0 coverNavbar bg-white'}>
                        <ul className="relative h-full flex flex-col justify-center">
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
                }
                <div className='z-999 relative my-1/2 align-middle h-full sm:hidden flex flex-row justify-end'>
                    <div onClick={(e) => setMobileMenuVisible(!mobileMenuVisible)} className='mt-1/2 absolute m-auto top-4 cursor-pointer align-middle justify-center flex flex-col'>
                        <span className={(mobileMenuVisible ? styles.toggled + ' ' + 'translate-y-3 rotate-45 ' : '') + ' ' + styles.hamBar + ' ' + ' w-7 h-0.5 bg-slate-800 my-1 block'} id='first'></span>
                        <span className={(mobileMenuVisible ? styles.toggled +' ' + ' opacity-0 ': '')+ ' ' + styles.hamBar + ' ' + ' w-7 h-0.5 bg-slate-800 my-1 block'} id="second"></span>
                        <span className={(mobileMenuVisible ? styles.toggled + ' ' +' -rotate-45 -translate-y-2' : '') + ' ' + styles.hamBar + ' ' + '  w-7 h-0.5 bg-slate-800 my-1 block' } id="third"></span>
                    </div>
                </div>
            </nav>

        </div>
    )
}

