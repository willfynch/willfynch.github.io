'use client'
import styles from './Bio.module.scss'
import {ImAccessibility} from 'react-icons/im'
import {IoIosColorPalette} from 'react-icons/io'
import { FaThumbsUp } from 'react-icons/fa6'
import { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import parse from 'html-react-parser';

export enum BIO_CONTENT {
    TEXT_EN = `<p className='mb-4'>
    When I was a kid, I discovered the joys of <a rel='noopener' className='link' target='_blank' aria-label={lang === 'fr' ? 'Ouvrir dans un nouvel onglet' : 'Open in a new tab'} href='https://www.rpgmakerweb.com/downloads'>RPG&nbsp;Maker</a>, a software that helped you create your own
    adventure video-game. It was all about learning by yourself and searching the Internet for tips and tools, and even learning about <a rel='noopener' className='link' target='_blank' aria-label={lang === 'fr' ? 'Ouvrir dans un nouvel onglet' : 'Open in a new tab'} href='https://www.ruby-lang.org/fr/'>Ruby</a>, the first programming language I ever touched.
</p>
<p className='mb-4 font-semibold'>
    And I had no idea of the seeds I was sowing (I like dramatic effects).
</p>
<p className='mb-4'>
    Many years later, under COVID reign, I decided to switch from being a chemical engineer <strong>to become a developer</strong>. I worked late nights locked in my room, going from <a className='link' target='_blank' aria-label={lang === 'fr' ? 'Ouvrir dans un nouvel onglet' : 'Open in a new tab'} rel='noopener' href='https://www.freecodecamp.org/news'>freeCodeCamp</a> to <a  rel='noopener' className='link' target='_blank' aria-label={lang === 'fr' ? 'Ouvrir dans un nouvel onglet' : 'Open in a new tab'} href='https://courses.webdevsimplified.com/'>Web&nbsp;Dev&nbsp;Simplified</a> (and a lot more), until I was finally <strong>ready to get my first job</strong>.
</p>
<p className='mb-4'>
    Thanks to my hard work, I was able to join <a className='link' rel='noopener' target='_blank' aria-label={lang === 'fr' ? 'Ouvrir dans un nouvel onglet' : 'Open in a new tab'} href='https://www.ecole-pmn.fr/'>La&nbsp;PMN</a>, <strong>La Passerelle des Métiers du Numérique</strong>, with an apprenticeship at <a rel='noopener' className='link' target='_blank' aria-label={lang === 'fr' ? 'Ouvrir dans un nouvel onglet' : 'Open in a new tab'} href='https://www.capgemini.com/fr-fr/'>Capgemini</a> where I met incredible people with whom I learnt a lot.
</p>
<p className="mb-4">
    Now working as a <strong>web developer</strong>, I sometimes get a taste of what it was to play around with my old RPG Maker software. Except now my tool is code and I use more <a className='link' target='_blank' aria-label={lang === 'fr' ? 'Ouvrir dans un nouvel onglet' : 'Open in a new tab'} rel='noopener' href='https://stackoverflow.com/'>Stack&nbsp;Overflow</a> than <a className='link' target='_blank' aria-label={lang === 'fr' ? 'Ouvrir dans un nouvel onglet' : 'Open in a new tab'} rel='noopener' href='https://www.rpg-maker.fr/'>Oniromancie</a> !
</p>
<p className="mb-4">
    Nowadays, I focus on designing and building user-friendly websites and applications, following those three pillars.
</p>`,
TEXT_FR = `<p className='mb-4'>
Lorsque j'étais enfant, j'ai découvert <a rel='noopener' className='link' target='_blank' aria-label={lang === 'fr' ? 'Ouvrir dans un nouvel onglet' : 'Open in a new tab'} href='https://www.rpgmakerweb.com/downloads'>RPG&nbsp;Maker</a>, un logiciel de création de jeu-vidéo d'aventure. Pour apprendre à bien l'utiliser, il m'a fallu fouiller le net à la recherche de tutoriels ou d'outils. J'ai même rencontré mon premier langage de programmation : <a rel='noopener' className='link' target='_blank' aria-label={lang === 'fr' ? 'Ouvrir dans un nouvel onglet' : 'Open in a new tab'} href='https://www.ruby-lang.org/fr/'>Ruby</a>.
</p>
<p className='mb-4 font-semibold'>
Et je n'avais, à l'époque, aucune idée des graines que je semais (j'aime les effets dramatiques).
</p>
<p className='mb-4'>
Des années après, durant le règne du COVID, j'ai décidé de me reconvertir : l'ingénieur chimiste que j'étais <strong>deviendrait développeur</strong>. J'ai travaillé tard le soir, dans ma chambre, surfant sur <a className='link' target='_blank' aria-label={lang === 'fr' ? 'Ouvrir dans un nouvel onglet' : 'Open in a new tab'} rel='noopener' href='https://www.freecodecamp.org/news'>freeCodeCamp</a>, suivant les tutoriels de <a  rel='noopener' className='link' target='_blank' aria-label={lang === 'fr' ? 'Ouvrir dans un nouvel onglet' : 'Open in a new tab'} href='https://courses.webdevsimplified.com/'>Web&nbsp;Dev&nbsp;Simplified</a> (et tant d'autres), jusqu'à ce que je sois enfin prêt <strong>pour décrocher mon premier poste de développeur</strong>.
</p>
<p className='mb-4'>
Grâce au travail fourni durant cette période, j'ai été accepté par <a className='link' rel='noopener' target='_blank' aria-label={lang === 'fr' ? 'Ouvrir dans un nouvel onglet' : 'Open in a new tab'} href='https://www.ecole-pmn.fr/'>La&nbsp;PMN</a>, <strong>La Passerelle des Métiers du Numérique</strong>, avec un contrat d'apprentissage chez <a rel='noopener' className='link' target='_blank' aria-label={lang === 'fr' ? 'Ouvrir dans un nouvel onglet' : 'Open in a new tab'} href='https://www.capgemini.com/fr-fr/'>Capgemini</a> où j'ai rencontré d'incroyables personnes auprès desquelles j'ai beaucoup appris.
</p>
<p className="mb-4">
Aujourd'hui, je suis <strong>développeur web</strong> et mon travail me rappelle parfois l'époque où je bidouillais sur mon vieux logiciel RPG Maker. Sauf qu'aujourd'hui mon outil, c'est du code, et j'utilise davantage <a className='link' target='_blank' aria-label={lang === 'fr' ? 'Ouvrir dans un nouvel onglet' : 'Open in a new tab'} rel='noopener' href='https://stackoverflow.com/'>Stack&nbsp;Overflow</a> qu'<a className='link' target='_blank' aria-label={lang === 'fr' ? 'Ouvrir dans un nouvel onglet' : 'Open in a new tab'} rel='noopener' href='https://www.rpg-maker.fr/'>Oniromancie</a> !
</p>
<p className="mb-4">
Désormais je me concentre sur le design et la réalisation d'applications et sites les plus fluides et intuitifs possibles, en m'appuyant sur ces trois piliers.
</p>`

}

export default function Bio() {

    //@ts-ignore
    const {lang, setLang} = useContext(LanguageContext)

    return (
        <section id='about' className={styles.bioSection + ` ` + `bg-my-white lg:py-32 px-10 sm:px-20 xl:px-72 lg:px-40 2xl:px-[30rem] py-20 sm:py-40`}>
            <h2 className='text-lg font-bold'>{lang === 'fr' ? 'À PROPOS' : 'ABOUT'}</h2>
            <div className='mt-6'>

                {lang === 'fr' ? parse(BIO_CONTENT.TEXT_FR) : parse(BIO_CONTENT.TEXT_EN)}
   
                <div className='flex flex-row justify-center mt-8'>
                    <ul className='flex flex-row'>
                        <li
                        key={'accessibility'} className='group mr-6 ml-6 cursor-default shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] hover:shadow-[rgba(6,_24,_44,_0.6)_0px_0px_2px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] w-20 h-20 md:w-24 md:h-24 xl:w-40 xl:h-40 rounded-full flex justify-center items-center flex-col  transition-all'>
                            <ImAccessibility className='duration-300 group-hover:scale-95 text-2xl md:text-3xl xl:text-4xl text-slate-700'></ImAccessibility>
                            <p className='duration-300 group-hover:scale-95 text-xs md:text-sm  xl:text-xl text-slate-700'>Accessibility</p>
                        </li>
                        <li key={'elegance'} className='group mr-6 cursor-default shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] hover:shadow-[rgba(6,_24,_44,_0.6)_0px_0px_2px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] w-20 h-20 md:w-24 md:h-24 xl:w-40 xl:h-40 rounded-full flex justify-center items-center flex-col  transition-all'>
                            <IoIosColorPalette className='duration-300 group-hover:scale-95 text-2xl md:text-3xl xl:text-4xl text-slate-700'></IoIosColorPalette>
                            <p className='duration-300 group-hover:scale-95 text-xs md:text-sm xl:text-xl text-slate-700'>Elegance</p>
                        </li>
                        <li key={'simplicity'} className='group mr-6 cursor-default shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] hover:shadow-[rgba(6,_24,_44,_0.6)_0px_0px_2px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] w-20 h-20 md:w-24 md:h-24 xl:w-40 xl:h-40 rounded-full flex justify-center items-center flex-col  transition-all'>
                            <FaThumbsUp className='duration-300 group-hover:scale-95 text-2xl md:text-3xl xl:text-4xl text-slate-700'></FaThumbsUp>
                            <p className='duration-300 group-hover:scale-95 text-xs md:text-sm xl:text-xl text-slate-700'>Simplicity</p>
                        </li>

                    </ul>
                </div>
            </div>
        </section>
    )
}