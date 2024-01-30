'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaLinkedin, FaInstagram, FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import styles from './Footer.module.scss'
import { navItemsEn, navItemsFr } from "../Navbar";
import { useContext } from "react";
import { LanguageContext } from '@/contexts/LanguageContext';


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

        <footer className={' mb-[60px] sm:mb-0 bg-my-white/60 w-full p-12 overflow-hidden inset-x-0 bottom-0'}>

            <div className="w-full flex-col sm:flex-row flex gap-6">
                <div className="w-full sm:w-1/3 flex justify-center items-center">
                    <div className="font-medium text-2xl duration-200 hover:opacity-100 opacity-60 cursor-pointer ml-2">
                        <p onClick={e => scrollToSection('home')} className="text-my-black font-bilbo text-6xl">Will</p>
                    </div>

                </div>
                <div className="w-full sm:w-1/3 flex flex-col justify-center ">
                    <ul className="flex flex-col justify-center items-center">
                        {(lang === 'fr' ? navItemsFr : navItemsEn).map(item => {
                            return (

                                <li onClick={e => navigation('', item.path)} key={item.id}>
                                    <p className="font-bold hover:opacity-50 text-xs uppercase cursor-pointer ">
                                        {item.name}
                                    </p>
                                </li>

                            )
                        })}
                    </ul>
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

            <p className="text-xs mt-8 text-center">
                Made with ❤️ using <a className={styles.link} href="https://nextjs.org">NextJS</a>,
                hosted on <a className={styles.link} target="_blank" href="https://www.vercel.com">Vercel</a>,
                Copyright © willfynch 2024 -
                <span className="cursor-pointer"> Mentions légales</span> -
                <span className="cursor-pointer"> Code de déontologie</span>
            </p>

        </footer>


    )
}