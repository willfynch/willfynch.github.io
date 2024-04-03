import { Fragment } from "react";
import { FaThreads } from "react-icons/fa6";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export interface SocialsProps {
    size: string;
}
export default function Socials(props: SocialsProps) {

    const INSTA = process.env.INSTAGRAM;
    const LINKEDIN = process.env.LINKEDIN;
    const THREADS = process.env.THREADS;

    const size: {[key:string]:string} = {
        'normal': 'socialsList',
        'sm' : 'socialsList-sm'
    }
    const socialSize: {[key:string]:string} = {
        'normal': 'social',
        'sm' : 'social-sm'
    }
    const align: {[key:string]:string} = {
        'center': 'justify-center',
        'start' : 'justify-start'
    }


    return (
        <Fragment>
            <div className={size[props.size] + ' flex justify-start'}>
                <a aria-label={'Visiter mon LinkedIn'} href={LINKEDIN} rel="noreferrer" target="_blank">
                    <FaLinkedin className={socialSize[props.size]} />
                </a>
                <a aria-label={'Visiter mon Threads'} href={THREADS} target='_blank' rel='noreferrer' >
                    <FaThreads className={socialSize[props.size]}  />
                </a>
                <a aria-label={'Visiter mon Instagram'} href={INSTA} target='_blank' rel='noreferrer'>
                    <FaInstagram className={socialSize[props.size]}  />
                </a>
            </div>
        </Fragment>
    )
}