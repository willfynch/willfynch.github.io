
import Banner from '@/components/Banner/Banner'
import { Metadata } from 'next'
import ContactForm, { ContactFormProps } from '@/components/ContactForm/ContactForm'
import { Fragment } from 'react'
import Socials from '@/components/Socials/Socials'
import { calculateMetadata } from '@/utilities/calculateMetadata'

export const metadata: Metadata = calculateMetadata("Contact", '/contact')

export default function Contact() {

  const BANNER_TEXT = `<p>Tu peux me contacter sur les réseaux pour aller plus vite. 
    <br/><br/>Ou ici.<br/><br/> Je suis plus réactif sur les réseaux sociaux mais je ne 
    manquerai pas de te répondre.</p>`
  const CALENDY = process.env.CALENDLY ?? "";
  const contactFormProps: ContactFormProps = {
    publicKey: process.env.EMAILJS_PUBLIC_KEY ?? "",
    serviceId: process.env.EMAILJS_SERVICE_ID ?? "",
    templateId: process.env.EMAILJS_TEMPLATE_ID ?? "",
    sitekey: process.env.RECAPTCHA_SITE_KEY ?? "",
  }

  return (
    <main>
      <Banner mobileHeight='400' height='200' text={BANNER_TEXT} image={'/images/contact.webp'} isCallToAction={false} opacity={'70'} />
      <section>
        <h2 className='text-center'>Pour m'envoyer un email</h2>
            <ContactForm
              sitekey={contactFormProps.sitekey}
              templateId={contactFormProps.templateId}
              publicKey={contactFormProps.publicKey}
              serviceId={contactFormProps.serviceId} 
            />
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-center'>Pour me joindre autrement</h2>
            <Socials/>
            <h3 className='text-center'>Et pour un appel découverte</h3>
            <p className='text-center -mt-8'>Car parfois, un petit coup de fil, c'est plus simple qu'un long roman.</p>
            <a href={CALENDY} aria-label='Appel découverte' target='_blank' className='button mt-6'>Appel découverte</a>
          </div>
      </section>
    </main>
  )
}