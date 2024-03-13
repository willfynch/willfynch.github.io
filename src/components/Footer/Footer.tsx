import { FaLinkedin, FaInstagram, FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import styles from './Footer.module.scss'
import parse from 'html-react-parser';
import Link from "next/link";
import { navItems } from "@/utilities/navItems";
import CoffeCup from "../CoffeeCup/CoffeeCup";

export enum FOOTER_CONTENT {
    BOTTOM_FR = `Fait avec ❤️ à l'aide de <a rel="noopener" role="button" href="https://nextjs.org">NextJS</a>,
    hébergé sur <a rel="noopener" target="_blank" role="button" href="https://www.vercel.com">Vercel</a>,
    Copyright © willfynch 2024 -
    <button className="cursor-pointer"><a href='/mentions-legales'>Mentions légales</a></button>`,
}

export default function Footer() {

    return (

        <footer className={'text-my-black bg-my-brown w-full px-12 pt-12 pb-4 overflow-hidden inset-x-0 bottom-0'}>

            <div className="w-full flex-col sm:flex-row flex gap-6">
                <div className="w-full sm:w-1/3 flex justify-center items-center">
                    <div className="duration-200 opacity-100 hover:opacity-40 cursor-pointer ">
                        <Link href={'/'}><CoffeCup animated={false} fill="#593117" /></Link>
                    </div>

                </div>
                <div className="w-full sm:w-1/3 flex flex-col justify-center items-center">
                    <p className="font-semibold">Navigation</p>
                    <nav className="flex flex-col justify-center items-center">
                        {navItems.map(item => {
                            return (
                                <button key={item.id} className=" hover:opacity-50 text-xs cursor-pointer ">
                                    <Link href={`/${item.path}`}>{item.name}</Link>
                                </button>
                            )
                        })}
                    </nav>
                </div>
                <div className="w-full sm:w-1/3">

                    <div className="flex flex-col justify-center items-center">
                        <p className='text-center text-sm'>Suivez-moi sur les réseaux !</p>
                        <div className='mt-2 flex flex-row justify-center'>
                            <a aria-label={'Visiter mon LinkedIn'} href="https://www.linkedin.com/in/willdevweb/" rel="noreferrer" target="_blank" className={styles.socialItemLi}>
                                <FaLinkedin className='text-x2xl opacity-60 hover:opacity-100'></FaLinkedin>
                            </a>
                            <a aria-label={'Visiter mon Twitter'} href='https://twitter.com/willdevweb' target='_blank' rel='noreferrer' className={styles.socialItemLi}>
                                <FaSquareXTwitter className='text-x2xl opacity-60 hover:opacity-100'></FaSquareXTwitter>
                            </a>
                            <a aria-label={'Visiter mon Instagram'} href="https://www.instagram.com/willdevweb/" target='_blank' rel='noreferrer' className={styles.socialItemLi}>
                                <FaInstagram className='text-x2xl opacity-60 hover:opacity-100'></FaInstagram>
                            </a>
                            {/* <li className={styles.socialItemLi}>
                                <FaGithubSquare className='text-x2xl opacity-60 hover:opacity-100'></FaGithubSquare>
                            </li> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <p className="sm:w-3/4 text-xs mt-8 pt-6 text-center border-my-black border-t-[1px]">
                    {parse(FOOTER_CONTENT.BOTTOM_FR)}
                </p>
            </div>

        </footer>


    )
}