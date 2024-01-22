import Image from 'next/image'
import styles from './ContactWidget.module.scss'
import logo_calendly from '../../../../../public/calendly_logo.svg'

export default function ContactWidget() {

    return (
        <a href="https://calendly.com/fr" className={styles.btn2 + " " +  " z-40 group fixed bottom-0 w-full xs:w-[150px] xs:right-4 xs:bottom-4  xs:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"}>
            <div className='flex xs:flex-col justify-center'>
                <span className='text-center duration-300 group-hover:text-my-white'>Contact me on</span>
                <button className='rounded-md overflow-hidden flex flex-cols items-center justify-center w-[100px] h-[30px]'>
                    <Image src={logo_calendly} width={300} height={300} alt="" />
                </button>
            </div>
        </a>
    )

}