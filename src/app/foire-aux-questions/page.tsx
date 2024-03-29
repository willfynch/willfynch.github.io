import Accordion from "@/components/Accordion/Accordion";
import Banner from "@/components/Banner/Banner";
import ButtonColor from "@/components/buttons/ButtonColor";
import { IAccordion } from "@/models/accordion.model";
import { calculateMetadata } from "@/utilities/calculateMetadata";
import { Metadata } from "next";
import client from "../../../tina/__generated__/client";

export const metadata: Metadata = calculateMetadata("Foire Aux Questions", '/foire-aux-questions')

export default async function Faq() {

    const BANNER_TEXT = `<p style='font-size:1.3rem;'>Si tu viens d’arriver sur cette page, c’est que ton sac est 
    plein de questions. <strong>Si tu ne trouves pas de réponse, envoie-moi un message. </strong></br></br> 
    Je tâcherai de te répondre au plus vite.</p>`

    const accordionsResponse = await client.queries.accordionsConnection()
    const ACCORDIONS: IAccordion[] = accordionsResponse.data.accordionsConnection.edges!.map((accordion)=>{
        return {title: accordion?.node?.title ?? "", body: accordion?.node?.body}
    })

    return (
        <main>
            <Banner alt={"Un couple de voyageurs, au sommet d'une montagne au printemps, faisant face à d'immenses forêts en contrebas"} height="400" opacity={'70'} text={BANNER_TEXT} image={"/images/travel-yaroslav-shuraev.webp"} callToAction={{ path: 'https://www.instagram.com/willdevweb/', text: 'Envoie-moi un message' }} isCallToAction={true} />
            <section id="ACCORDIONS" className="mb-20 min-h-[500px] text-normal text-my-black px-4 sm:px-40 2xl:px-96">
                <p className="mt-20 w-full text-center">Voici quelques questions que tu te poses peut-être.</p>
                <div className="flex flex-col gap-4 mt-20 mb-20">
                    {ACCORDIONS && ACCORDIONS.map((accordion, index) => {
                        return (
                            <Accordion key={index} title={accordion.title ?? 'Pas de titre'} body={accordion.body} ></Accordion>
                        )
                    })}
                </div>

                <div className="flex justify-center flex-col items-center mt-10 ">
                    <p className="text-center mt-6 mb-8">
                        Si une collaboration pour la réalisation d'un <strong>site vitrine, éditorial ou e-commerce</strong> t'intéresse et que tu as d'autres questions, tu peux réserver un <strong>appel découverte</strong>.
                    </p>
                    <ButtonColor width={220} blink={true} link={{ isLink: true, path: 'https://calendly.com/willdevweb/talk', blank: true }} text={"Appel découverte"} id={""} />
                </div>

            </section>
        </main>
    )
}