import styles from './Navbar.module.scss';
import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import { useScrollLock } from '@/hooks/scrollLock';

export const navItemsEn = [
    {
        name: 'Services',
        path: 'services',
        id: 1,
    },
    {
        name: 'Projects',
        path: 'projects',
        id: 2,
    },
    {
        name: 'Contact',
        path: 'contact',
        id: 3
    },
    {
        name: 'Bio',
        path: 'about',
        id: 4
    },

]
export const navItemsFr = [
    {
        name: 'Services',
        path: 'services',
        id: 1,
    },
    {
        name: 'Projets',
        path: 'projects',
        id: 2,
    },
    {
        name: 'Contact',
        path: 'contact',
        id: 3
    },
    {
        name: 'Bio',
        path: 'about',
        id: 4
    },
]

export default function Navbar() {

    let [scrollY, setScrollY] = useState(0);

    const [mobileMenuVisible, setMobileMenuVisible] = useState(false)

    const { lockScroll, unlockScroll } = useScrollLock();


    //@ts-ignore
    const { lang, setLang } = useContext(LanguageContext)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });



    function navigateTo(id: string): void {
        handleSetMenuVisible()
        scrollToSection(id);
    }

    function handleSetMenuVisible() {
        setMobileMenuVisible(!mobileMenuVisible)
        if (mobileMenuVisible) {
            unlockScroll()
        } else {
            lockScroll()
        }
    }

    function scrollToSection(id: string) {
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
        console.log(scrollY)
    }

    function handleLanguage() {
        if (lang === 'fr') { setLang('en') }
        else { setLang('fr') }
    }

    function handleHamburgerHover() {
        // document.getElementById('hamburger')?.classList.remove(styles.hovered)

        // setTimeout(() => {
        //     document.getElementById('hamburger')?.classList.add(styles.hovered);
        // }, 10);
    }

    function openMenu(){

        setMobileMenuVisible(!mobileMenuVisible)
        document.getElementById('hamburger')?.classList.remove(styles.opened)
        document.getElementById('hamburger')?.classList.remove(styles.closed)

        if(mobileMenuVisible){
            document.getElementById('hamburger')?.classList.add(styles.opened);
        }
        if(!mobileMenuVisible){
            document.getElementById('hamburger')?.classList.add(styles.closed);
        }
        console.log(mobileMenuVisible)
    }

    return (
        // <div className={ (scrollY > 700 ? 'bg-white' : 'bg-white/0') + ' shadow-md ' + "h-16 duration-300 top-0 sticky px-4  items-center sticky grid grid-cols-2 gap-4 "}>

        //     <div  className={ " relative align-middle flex flex-row"}>
        //         <button onClick={e => scrollToSection('home')} className='cursor-pointer hover:scale-110 duration-300 text-3xl sm:text-4xl font-bilbo'>Will</button>
        //     </div>

        //     <div className="hidden sm:inline h-full">
        //         <nav className="h-full flex flex-row justify-end">
        //             {(lang === 'fr' ? navItemsFr : navItemsEn).map(navItem => {
        //                 return (
        //                     <button role='button' onClick={e => scrollToSection(navItem.path)} className={styles.listItem + ' ' + 'flex items-center h-full transition linear duration-150 ml-4 cursor-pointer'} key={navItem.id}>
        //                         {navItem.name}
        //                     </button>
        //                 )
        //             })}
        //             <button aria-label={lang==='fr'?'Switch to English':'Passer au Français'} role='button' key={'lang'} onClick={handleLanguage} className={styles.listItem + ' ' + 'flex items-center h-full transition linear duration-150 ml-4 cursor-pointer'}>
        //                 {lang === "fr" ? '🇫🇷' : '🇬🇧'}
        //             </button>
        //         </nav>
        //     </div>

        //     <nav aria-hidden={!mobileMenuVisible} className={styles.coverNavbar + ' ' + (mobileMenuVisible ? ' opacity-100 h-screen top-0 z-50' : 'opacity-0 h-0 -top-20') + ' ' + ' flex flex-col justify-center sm:hidden absolute w-full top-0 left-0 coverNavbar bg-white'}>

        //             {(lang === 'fr' ? navItemsFr : navItemsEn).map(navItem => {
        //                 return (
        //                     <button
        //                         role='button'
        //                         onClick={e => navigateTo(navItem.path)}
        //                         className={styles.listItemMobile + ' ' + 'justify-center flex items-center h-full cursor-pointer'} key={navItem.id}>
        //                         {navItem.name}
        //                     </button>
        //                 )
        //             })}

        //     </nav>

        //     <div className=' z-50 my-1/2 align-middle h-full sm:hidden flex flex-row justify-end'>

        //         <button aria-label='Menu' aria-expanded={mobileMenuVisible} onClick={handleSetMenuVisible} className='mt-1/2 absolute m-auto top-4 cursor-pointer align-middle justify-center flex flex-col'>
        //             <span className={(mobileMenuVisible ? styles.toggled + ' ' + 'translate-y-3 rotate-45 ' : '') + ' ' + styles.hamBar + ' ' + ' w-7 h-0.5 bg-slate-800 my-1 block'} id='first'></span>
        //             <span className={(mobileMenuVisible ? styles.toggled + ' ' + ' opacity-0 ' : '') + ' ' + styles.hamBar + ' ' + ' w-7 h-0.5 bg-slate-800 my-1 block'} id="second"></span>
        //             <span className={(mobileMenuVisible ? styles.toggled + ' ' + ' -rotate-45 -translate-y-2' : '') + ' ' + styles.hamBar + ' ' + '  w-7 h-0.5 bg-slate-800 my-1 block'} id="third"></span>
        //         </button>
        //     </div>
        // </div>
        <div className='absolute  top-10 right-20 z-50 text-white '>


            <button onClick={openMenu} onMouseEnter={handleHamburgerHover} id='hamburger' className={styles.hamburgerBtnOne + " " + "border-my-black border-2 fixed justify-self-center self-center h-[60px] w-[60px] rounded-full bg-my-white"} aria-controls="primary-navigation" aria-expanded={mobileMenuVisible}>
                <svg fill='#502c15' className={styles.hamburgerBtnOneSvg} viewBox="0 0 100 100" width={50}>
                    <line className={styles.top + ' ' + styles.line} x1={30} x2={82} y1={30} y2={30} strokeDasharray={80} strokeDashoffset={0} stroke="black" strokeWidth={4} strokeLinecap="round"></line>
                    <line className={styles.middle + ' ' + styles.line} x1={30} x2={82} y1={50} y2={50} strokeDasharray={80} strokeDashoffset={0} stroke="black" strokeWidth={4} strokeLinecap="round"></line>
                    <line className={styles.bottom + ' ' + styles.line} x1={30} x2={82} y1={70} y2={70} strokeDasharray={80} strokeDashoffset={0} stroke="black" strokeWidth={4} strokeLinecap="round"></line>
                </svg>
            </button>

        </div>

    )
}

