import Accordion from "@/components/Accordion/Accordion";
import Banner from "@/components/Banner/Banner";
import { IAccordion } from "@/models/accordion.model";
import { Fragment } from "react";

export default function Faq(){

    const BANNER_TEXT = `<p style='font-size:1.2rem;'>Si tu viens d’arriver sur cette page, c’est que ton sac est 
    plein de questions. <strong>Si tu ne trouves pas de réponse, envoie-moi un message. </strong></br></br> 
    Je tâcherai de te répondre au plus vite.</p>`

    const ACCORDIONS: IAccordion[] = [
        {
            title: 'Un site web c\'est trop cher',
            text: 'Blablabla blabla blabla blablbalbalbla ablblbal aa blabla blabla blablbalbalbla ablblbal aa blabla blabla blablbalbalbla ablblbal ablablblaalb'
        },
        {
            title: 'Un site web c\'est trop cher',
            text: 'Blablabla blabla blabla blablbalbalbla ablblbal aa blabla blabla blablbalbalbla ablblbal aa blabla blabla blablbalbalbla ablblbal ablablblaalb'
        },
        {
            title: 'Un site web c\'est trop cher',
            text: 'Blablabla blabla la blabla blla blabla blla blabla blla blabla blla blabla blla blabla blla blabla blla blabla blla blabla blla blabla blla blabla blblabla blla blabla blla blabla blla blabla blla blabla blla blabla blla blabla blablbalbalbla ablblbal aa blabla blabla blablbalbalbla ablblbal aa blabla blabla blablbalbalbla ablblbal ablablblaalb'
        },
    ]

    return(
        <main>
            <Banner text={BANNER_TEXT} image={"/images/travel-yaroslav-shuraev.jpg"} callToAction={{path:'https://www.instagram.com/willdevweb/', text:'Envoie-moi un message'}} isCallToAction={true}/>
            <section id="ACCORDIONS" className="min-h-[500px] text-mobileBase sm:text-base text-my-black px-4 sm:px-20 xl:px-96">
                <div className="flex flex-col gap-8 my-10">
                {ACCORDIONS.map((accordion,index) => {
                    return (
                        <Accordion key={index} title={accordion.title ?? 'Pas de titre'} content={accordion.text ?? 'Pas de contenu'} ></Accordion>
                    )
                })}
                </div>
            </section>
        </main>
    )
}