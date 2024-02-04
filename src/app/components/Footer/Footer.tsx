'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaLinkedin, FaInstagram, FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import styles from './Footer.module.scss'
import { navItemsEn, navItemsFr } from "../Navbar";
import { useContext } from "react";
import { LanguageContext } from '@/contexts/LanguageContext';
import parse from 'html-react-parser';

export enum FOOTER_CONTENT {
    BOTTOM_FR = `Fait avec ❤️ à l'aide de <a rel="noopener" className="link" role="button" href="https://nextjs.org">NextJS</a>,
    hébergé sur <a rel="noopener" className="link" target="_blank" role="button" href="https://www.vercel.com">Vercel</a>,
    Copyright © willfynch 2024 -
    <button className="cursor-pointer"> Mentions légales</button>`,
    BOTTOM_EN = `Made with ❤️ using <a rel="noopener" className="link" role="button" href="https://nextjs.org">NextJS</a>,
    hosted on <a rel="noopener" className="link" target="_blank" role="button" href="https://www.vercel.com">Vercel</a>,
    Copyright © willfynch 2024 - 
    <button className="cursor-pointer">General Condition of Use</button>`
}

export default function Footer() {

    const router = useRouter()
    const pathname = usePathname()
    //@ts-ignore
    const { lang, setLang } = useContext(LanguageContext)

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    const navigation = (path: string, section?: string) => {
        if (pathname === '/' && section) {
            scrollToSection(section)
            return;
        }
        if (pathname.length > 1 && section) {
            router.push('/')
            // .then(
            //     () => {
            //         if (section) {
            //             const element = document.getElementById(section);
            //             if (element) {
            //                 element.scrollIntoView({
            //                     behavior: 'smooth',
            //                 });
            //             }
            //         }
            //     }
            // )
        } else {
            router.push(path);
        }
    }

    return (

        <footer className={' mb-[60px] sm:mb-0 bg-white w-full px-12 pt-12 pb-4 overflow-hidden inset-x-0 bottom-0'}>

            <div className="w-full flex-col sm:flex-row flex gap-6">
                <div className="w-full sm:w-1/3 flex justify-center items-center">
                    <div className="font-medium text-2xl duration-200 hover:opacity-100 opacity-60 cursor-pointer ml-2">
                        <button onClick={e => scrollToSection('home')} className="text-my-black font-bilbo text-6xl">Will</button>
                    </div>

                </div>
                <div className="w-full sm:w-1/3 flex flex-col justify-center items-center">
                    <p className="font-semibold">Navigation</p>
                    <nav className="flex flex-col justify-center items-center">
                        {(lang === 'fr' ? navItemsFr : navItemsEn).map(item => {
                            return (

                                
                                    <button key={item.id} onClick={e => navigation('', item.path)} className=" hover:opacity-50 text-xs cursor-pointer ">
                                        {item.name}
                                    </button>
                            

                            )
                        })}
                    </nav>
                </div>
                <div className="w-full sm:w-1/3">

                    <div className="flex flex-col justify-center items-center">
                        <p className='text-center text-sm -mb-2'>{lang === 'fr' ? 'Suivez-moi sur les réseaux': 'Reach me out on social media'} !</p>
                        <ul className='mt-2 flex flex-row justify-center'>
                            <li className={styles.socialItemLi}>
                                <FaLinkedin className='text-x2xl opacity-60 hover:opacity-100'></FaLinkedin>
                            </li>
                            <li className={styles.socialItemLi}>
                                <FaSquareXTwitter className='text-x2xl opacity-60 hover:opacity-100'></FaSquareXTwitter>
                            </li>
                            <li className={styles.socialItemLi}>
                                <FaInstagram className='text-x2xl opacity-60 hover:opacity-100'></FaInstagram>
                            </li>
                            <li className={styles.socialItemLi}>
                                <FaGithubSquare className='text-x2xl opacity-60 hover:opacity-100'></FaGithubSquare>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
            <p className="sm:w-3/4 text-xs mt-8 pt-6 text-center border-t-[1px]">
                        {lang === 'fr' ? parse(FOOTER_CONTENT.BOTTOM_FR) : parse(FOOTER_CONTENT.BOTTOM_EN)}
            </p>
            </div>

        </footer>


    )
}