'use client'
import logo_calendly from '../../../../public/calendly_logo.svg'
import Image from 'next/image'
import styles from './Contact.module.scss'
import placeholder from '../../../../public/images/meeting-small.webp'
import { steps } from '@/data/process-steps';
import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';

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
        <section id='contact' className={styles.contactSection + ` py-16 lg:py-40 px-10 sm:px-20 xl:px-72 lg:px-40`}>
            <div className='relative h-[100px] py-20'>
                <h2 className='w-screen left-1/2 -translate-x-1/2 md:w-full text-center absolute font-bilbo text-x6demixl md:text-9xl top-1/2 -translate-y-1/2 text-my-black/10'>Working together</h2>
                <h2 className='w-full text-center absolute text-lg font-bold top-1/2 -translate-y-1/2 '>WORKING TOGETHER</h2>
            </div>

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
                            <div data-aos-once="true" data-aos={`fade-${step.id % 2 == 0 ? 'left' : 'right'}`} id={'STEP_COMPONENT-' + step.id} className='group w-full flex h-[160px] rounded-md xs:-rounded-md md:h-[130px] overflow-hidden'>
                                <div id={'STEP_NUMBER-' + step.id} className={styles.number + ' ' + 'duration-300 group-hover:text-my-black group-hover:bg-my-white hidden xs:flex justify-center items-center text-xl font-bold w-[120px] '} >
                                    {step.id}
                                </div>
                                <div id={'STEP_DESCRIPTION-' + step.id} className={styles.description + ' ' + 'overflow-hidden group relative w-full h-full text-white'}>
                                    <div className={styles.description + ' ' + ' h-[160px] md:h-[130px] absolute z-10 w-full bg-black/70 text-white'}>
                                        <div className="p-4 flex justify-center items-center flex-col z-10 ">
                                            <h2 className="font-bold text-lg text-center mb-2">{step.title}</h2>
                                            <p className="text-sm w-full text-center">{step.description}</p>
                                        </div>
                                    </div>
                                    <Image className={styles.description + ` z-0 duration-300 group-hover:scale-110 rounded-md object-cover`} fill src={`${step.image}`} alt="" />
                                </div>
                            </div>
                        )
                    })
                }


                <p className='text-center text-md font-semibold -mb-2'>Book a call :</p>
                <a href="https://calendly.com/fr">

                    <button className='rounded-md overflow-hidden flex flex-cols items-center justify-center w-[200px] h-[50px]'>
                        <Image className={styles.btn} src={logo_calendly} width={300} height={300} alt="" />

                    </button>
                </a>


            </div>

        </section>
    )
}