'use client'
import styles from './Services.module.scss'
import { ReactNode, useContext } from 'react'
import { LanguageContext } from '@/contexts/LanguageContext';

import inspiration from '../../../../public/images/inspiration.svg'
import sell from '../../../../public/images/sell.svg'
import support from '../../../../public/images/support.svg'

import { GiTakeMyMoney } from "react-icons/gi";
import { MdContactSupport } from "react-icons/md";
import { GiMirrorMirror } from "react-icons/gi";

import Image from 'next/image';
import { render } from 'react-dom';


export default function Services() {

    //@ts-ignore
    const { lang, setLang } = useContext(LanguageContext)

    /**
     * - un site fonctionnel, accessible au plus grand nombre, simple d’usage et élégant
- un site référencé sur internet, et trouvable par les internautes
- un accompagnement du début à la fin (et même après si besoin)
     */

    const services = [
        {
            EN_TITLE: 'A website that suits you best',
            FR_TITLE: 'Un site qui vous ressemble',
            EN_DESC: 'Accessible, easy of use and elegant.',
            FR_DESC: 'Accessible, simple d\'usage et élégant.',
            IMAGE: 'website',
            ANIMATION: 'right'
        },
        {
            EN_TITLE: 'A website that sells',
            FR_TITLE: 'Un site qui vend',
            EN_DESC: 'SEO optimized, and thought for your audience.',
            FR_DESC: 'Optimisé SEO, réfléchi pour et par rapport à votre cible.',
            IMAGE: 'sell',
            ANIMATION: 'up'
        },
        {
            EN_TITLE: 'Technical support',
            FR_TITLE: 'Un accompagnement technique',
            EN_DESC: 'Support for website usage and ongoing maintenance.',
            FR_DESC: 'Aide à la prise en main du site et maintenance évolutive.',
            IMAGE: 'support',
            ANIMATION: 'left'
        },
    ]

    const shadow = "shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] hover:shadow-[rgba(6,_24,_44,_0.6)_0px_0px_2px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"

    function renderIcon(service: string): ReactNode {
        const classes = 'text-center absolute w-full top-[25px] text-x6demixl'
        switch (service) {
            case 'website':
                return <GiMirrorMirror className={classes} />
            case 'sell':
                return <GiTakeMyMoney className={classes} />
            case 'support':
                return <MdContactSupport className={classes} />
        }

    }

    function scrollToSection(id: string){
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section id='services' className={styles.servicesSection + ` ` + `px-10 sm:px-20 xl:px-72 lg:px-40 py-20 lg:py-40`}>
            {/* <h2 className='text-lg font-bold'>SERVICES</h2> */}

            <div className='relative h-[100px]'>
                <h2 className='w-full text-center absolute -top-[50px]  font-bilbo text-x6demixl md:text-9xl -top-[30px] md:-top-[50px] text-my-black/10'>Services</h2>
                <h2 className='w-full text-center absolute text-lg font-bold'>SERVICES</h2>
            </div>

            <div className='mt-6 flex flex-col sm:flex-row gap-4'>

                {
                    services.map(service => {
                        return (
                            <div data-aos-once='true' data-aos={`fade-${service.ANIMATION}`} className={shadow + ' duration-300 overflow-hidden rounded-md w-full md:w-1/3 h-[250px] relative group'}>
                                {renderIcon(service.IMAGE)}
                                <h2 className='z-10 text-center w-full px-4 text-md font-semibold absolute top-[100px]'>
                                    {lang === 'fr' ? service.FR_TITLE : service.EN_TITLE}
                                </h2>
                                <p className='z-10 text-center w-full px-4 text-sm absolute top-[170px] '>
                                    {lang === 'fr' ? service.FR_DESC : service.EN_DESC}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex justify-center my-8'>
                <button onClick={e => scrollToSection('projects')} className={styles.btn}>{lang === 'fr' ? 'Voir les projets' : 'See projects'}</button>
            </div>
        </section>

    )

}