
import Banner from '@/components/utilities/Banner/Banner'
import { Metadata } from 'next'
import ContactForm, { ContactFormProps } from '@/components/utilities/ContactForm/ContactForm'
import { Fragment } from 'react'
import Socials from '@/components/utilities/Socials/Socials'
import { calculateMetadata } from '@/utilities/calculateMetadata'
import Link from 'next/link'

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
      <Banner alt={"Un téléphone portable, image mettant en avant la notion de contact."} mobileHeight='400' height='200' text={BANNER_TEXT} image={'/images/contact.webp'} isCallToAction={false} opacity={'70'} />
      <section>
        <div className='w-full flex flex-col md:flex-row md:justify-center md:items-center gap-8 my-8'>
          <div className='w-full lg:w-6/12 bg-my-white shadow-md rounded-sm p-4'>
            <ContactForm
              sitekey={contactFormProps.sitekey}
              templateId={contactFormProps.templateId}
              publicKey={contactFormProps.publicKey}
              serviceId={contactFormProps.serviceId}
            />
          </div>

          <div className='flex flex-col items-center justify-center w-full lg:w-5/12'>
            <div className='flex flex-col justify-center items-center'>
              <div className=' py-4'>
                <h3 className=' m-0'>Comment puis-je t'aider ?</h3>
                <p>Si tu te poses des questions, tu peux passer par la <Link className='link' href={'/foire-aux-questions'}>F.A.Q.</Link> Si tu n'y trouves pas ce que tu cherches, tu peux remplir le formulaire de contact.</p>
                <p>Tu peux aussi me contacter sur mes réseaux sociaux : </p>
                <Socials size='normal' />

                <h3>Et pour un appel découverte</h3>
                <p className='-mt-8 mb-4'>Car parfois, un petit coup de fil, c'est plus simple qu'un long roman.</p>
                <a href={CALENDY} aria-label='Appel découverte' target='_blank' className='button mt-6'>Appel découverte</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}