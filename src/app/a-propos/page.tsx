
import Banner from '@/components/Banner/Banner'
import ServiceCard from '@/components/ServiceCard/ServiceCard'
import { servicesItem } from '@/utilities/servicesItems'
import { GlowCapture } from '@codaworks/react-glow'
import parse from 'html-react-parser'
import Image from 'next/image'

import { Metadata } from 'next'
import { calculateMetadata } from '@/utilities/calculateMetadata'

enum ABOUT_TEXTS {
    FIRST = `Je m’appelle Will, j’aime le café, la poésie et je fabrique des sites web 
    pour aventuriers modernes. Mais <strong>qu’est-ce qu’un aventurier moderne</strong>, 
    me diras-tu, toi qui me lis ?`,
    SECOND = `<p><strong>Aventurière, Aventurier moderne, <br/><em>Nom pas assez commun.</em></strong>
    <br/><br/>Personne qui fait, nourrie de foi mais enveloppée de solitude, ce 
    voyage initiatique qu’est l’entreprenariat.</p>
    `,
    THIRD = `À chaque aventure, ses personnages. Moi, je suis celui qui vend un outil indispensable à ta quête : `,
    FOURTH = `Un site web sur-mesure et adapté à tes besoins.`,
    FIFTH = `<h2>Halte-là, noble internaute !</h2>
    <br/><br/><p>Ne demande pas à ChatGPT si tu as des questions. La Foire Aux Questions 
    te donnera des réponses.</p>
    `,
}

export const metadata: Metadata = calculateMetadata("À propos", '/a-propos')

export default function About() {
    return (
        <main className="text-normal text-my-black">

            <div className='w-full flex flex-col items-center py-20 gap-8'>

                <Image className='' width={200} height={200} src={'/images/profile_pic.webp'} alt={'Photo de profil'}></Image>

                <p className='w-[300px] sm:w-[400px] text-center'>{parse(ABOUT_TEXTS.FIRST)}</p>
            </div>

            <Banner height='400' opacity={'70'} isCallToAction={false} text={ABOUT_TEXTS.SECOND} image='/images/coffee-bianca-gasparoto.webp' ></Banner>

            <div className='px-8 text-center flex justify-center flex-col items-center gap-8 py-20'>
                <p>{ABOUT_TEXTS.THIRD}</p>
                <p className='font-extrabold'>{ABOUT_TEXTS.FOURTH}</p>
            </div>
        
            <div className='px-10 md:px-20 flex-col md:flex-row flex gap-4 items-center justify-center mb-20'>
            
                {
                    servicesItem.map((service , index) => 
                        (
                            
                        <ServiceCard key={index} available={service.available} title={service.title} options={service.options} buttonText={service.available ? `Ça m'intéresse` : 'À venir'} />
                        
                        )
                    )
                }
           
            </div>
            

            <Banner height='400' opacity='70' isCallToAction={true} callToAction={{text: 'Foire Aux Questions', path: '/foire-aux-questions'}} text={ABOUT_TEXTS.FIFTH} image={'/images/user-matheus-bertelli.webp'}></Banner>

        </main>
    )
}