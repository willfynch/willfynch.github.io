
import Banner from '@/components/Banner/Banner'
import ServiceCard from '@/components/ServiceCard/ServiceCard'
import { servicesItem } from '@/utilities/servicesItems'
import { GlowCapture } from '@codaworks/react-glow'
import parse from 'html-react-parser'
import Image from 'next/image'

import { Metadata } from 'next'

enum ABOUT_TEXTS {
    FIRST = `Je m’appelle Will, j’aime le café, la poésie et je fabrique des sites web 
    pour aventuriers modernes. Mais <strong>qu’est-ce qu’un aventurier moderne</strong>, 
    me diras-tu, toi qui me lis ?`,
    SECOND = `<strong>Aventurière, Aventurier moderne, <br/><em>Nom pas assez commun.</em></strong>
    <br/><br/>Personne qui fait, nourrie de foi mais enveloppée de solitude, ce 
    voyage initiatique qu’est l’entreprenariat.
    `,
    THIRD = `À chaque aventure, ses personnages. Moi, je suis celui qui vend un outil indispensable à ta quête : `,
    FOURTH = `Un site web sur-mesure, sans WordPress et adapté à tes besoins.`,
    FIFTH = `<strong style='font-size:3rem;'>Halte-là, noble internaute !</strong>
    <br/><br/>Ne demande pas à ChatGPT si tu as des questions. La Foire Aux Questions 
    te donnera des réponses.
    `,
}

export const metadata: Metadata = {
    title: 'À propos'
}

export default function About() {
    return (
        <section className="text-normal text-my-black ">

            <div className='w-full flex flex-col items-center py-20 gap-8'>

                <Image className='' width={200} height={200} src={'/images/profile_pic.png'} alt={''}></Image>

                <p className='w-[300px] sm:w-[400px] text-center'>{parse(ABOUT_TEXTS.FIRST)}</p>
            </div>

            <Banner opacity={'60'} isCallToAction={false} text={ABOUT_TEXTS.SECOND} image='/images/coffee-bianca-gasparoto.jpg' ></Banner>

            <div className='px-8 text-center flex justify-center flex-col items-center gap-8 py-40'>
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
            

            <Banner opacity='60' isCallToAction={true} callToAction={{text: 'F.A.Q', path: '/foire-aux-questions'}} text={ABOUT_TEXTS.FIFTH} image={'/images/user-matheus-bertelli.jpg'}></Banner>

        </section>
    )
}