import { Fragment } from "react";
import { FaThreads } from "react-icons/fa6";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Socials() {

    const INSTA = process.env.INSTAGRAM;
    const LINKEDIN = process.env.LINKEDIN;
    const THREADS = process.env.THREADS;

    return (
        <Fragment>
            <div className='mt-2 gap-4 flex flex-row justify-center text-my-black'>
                <a aria-label={'Visiter mon LinkedIn'} href={LINKEDIN} rel="noreferrer" target="_blank">
                    <FaLinkedin className='social' />
                </a>
                <a aria-label={'Visiter mon Threads'} href={THREADS} target='_blank' rel='noreferrer' >
                    <FaThreads className='social' />
                </a>
                <a aria-label={'Visiter mon Instagram'} href={INSTA} target='_blank' rel='noreferrer'>
                    <FaInstagram className='social' />
                </a>
            </div>
        </Fragment>
    )
}