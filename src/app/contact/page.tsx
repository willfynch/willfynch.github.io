
import Banner from '@/components/Banner/Banner'
import { Metadata } from 'next'
import ContactForm, { ContactFormProps } from '@/components/ContactForm/ContactForm'
import { Fragment } from 'react'
import Socials from '@/components/Socials/Socials'


export const metadata: Metadata = {
  title: "Du café et du code | Contact",
  description: `Je m’appelle Will, j’aime le café, la poésie et je fabrique des sites web pour aventuriers modernes. Mais qu’est-ce qu’un aventurier moderne, me diras-tu, toi qui me lis ?`,
  keywords: ['Café', 'Développeur', 'Créateur de sites', 'Foire aux questions', 'Combien coûte un site web', 'Comment créer un site web', 'Développeur Normandie', 'Développeur Web', 'Développeur Rouen', 'Développeur', 'Site internet', 'Site vitrine', 'Site', 'Site e-commerce', 'E-commerce', 'TPE', 'Entrepreneurs', 'Sites jamstack', 'Sites sans serveur', 'Pas wordpress', 'Wordpress', 'Site sans wordpress', 'Site pas cher', 'Site économique'],
  metadataBase: new URL('https://ducafeetducode.com'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    images: ['/images/opengraph.png']
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/opengraph.png'],
    description: `Je m’appelle Will, j’aime le café, la poésie et je fabrique des sites web pour aventuriers modernes. Mais qu’est-ce qu’un aventurier moderne, me diras-tu, toi qui me lis ?`,
    title: 'Du café et du code | Contact`'
  },
  icons: [{ rel: 'icon', url: './favicon.ico' }, { rel: 'apple-touch-icon', url: './apple-touch-icon.png' }]
};

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
      <Banner mobileHeight='400' height='200' text={BANNER_TEXT} image={'/images/contact.jpg'} isCallToAction={false} opacity={'70'} />
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