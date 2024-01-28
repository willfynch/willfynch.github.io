'use client'
import logo_calendly from '../../../../public/calendly_logo.svg'
import Image from 'next/image'
import styles from './Contact.module.scss'
import placeholder from '../../../../public/images/meeting-small.webp'
import { steps } from '@/data/process-steps';
import { useContext, useEffect, useState } from 'react';
import {LanguageContext} from '@/contexts/LanguageContext';

export default function Contact() {

    const lang = useContext(LanguageContext)
    const [translatedSteps, setTranslatedSteps] = useState(steps['fr'])
    
    useEffect(() => {
        //@ts-ignore
        console.log('lang changed', lang.lang)
        //@ts-ignore
        setTranslatedSteps(steps[lang.lang])
    }, [lang])

    return (
        <section id='contact' className={styles.contactSection + ` mt-16 lg:mt-40 px-10 sm:px-40 lg:px-72 mb-72`}>
            <h2 className='text-lg font-bold'>WORKING TOGETHER</h2>

            <div className={'mt-6 flex flex-col justify-center items-center gap-4' + ' '}>

                <p className='text-center'>
                    <strong>Yes, together. </strong>
                    Your opinion matters, at any part of the process.
                    We'll have regular short meetings where I will show you the advancement
                    to get your feedback and make sure <strong>we are always on the same page</strong>.
                </p>

                <p className='text-center mt-2'>Here's the process we'll follow together. ⬇️</p>

                {
                    translatedSteps?.map(step => {
                        return (
                            <div id='STEP_COMPONENT' className='group w-full flex h-[160px] rounded-md xs:-rounded-md md:h-[130px] overflow-hidden'>
                                <div id='STEP_NUMBER' className={styles.number + ' ' + 'duration-300 group-hover:text-my-black group-hover:bg-my-white hidden xs:flex justify-center items-center text-xl font-bold w-[120px] '} >
                                    {step.id}
                                </div>
                                <div id='STEP_DESCRIPTION' className={styles.description + ' ' + 'overflow-hidden group relative w-full h-full text-white'}>
                                    <div className={styles.description + ' ' + 'backdrop-blur-[1px] h-[160px] md:h-[130px] absolute z-10 w-full bg-black/60 text-white'}>
                                        <div className="p-4 flex justify-center items-center flex-col z-10 ">
                                            <h2 className="font-bold text-lg text-center mb-2">{step.title}</h2>
                                            <p className="text-sm w-full text-center">{step.description}</p>
                                        </div>
                                    </div>
                                    {/* <img className={styles.description + ` z-0 duration-300 group-hover:scale-110 rounded-md object-cover`} src={`${step.image}`} alt="" /> */}
                                </div>
                            </div>
                        )
                    })
                }


                <p className='text-center text-md font-semibold -mb-2'>Book a call :</p>
                <a href="https://calendly.com/fr">

                    <button className='rounded-md overflow-hidden flex flex-cols items-center justify-center w-[200px] h-[50px]'>
                        <Image className={styles.btn2} src={logo_calendly} width={300} height={300} alt="" />

                    </button>
                </a>


            </div>

        </section>
    )
}