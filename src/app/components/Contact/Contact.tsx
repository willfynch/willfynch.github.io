import logo_calendly from '../../../../public/calendly_logo.svg'
import Image from 'next/image'
import styles from './Contact.module.scss'
export default function Contact() {



    return (
        <section id='contact' className={` ` + `mt-20 lg:mt-40 px-10 sm:px-40 lg:px-72 mb-72`}>
            <h2 className='text-lg font-bold'>WORKING TOGETHER</h2>

            <div className={'flex justify-center items-center' + ' '}>

                <button className='rounded-md overflow-hidden flex flex-cols items-center justify-center w-[200px] h-[50px]'>
                    <Image className={styles.btn2} src={logo_calendly} width={300} height={300} alt="" />

                </button>

            </div>

        </section>
    )
}