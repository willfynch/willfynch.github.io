
import ContactWidget from '../components/utilities/ContactWidget/ContactWidget'
import { Metadata } from 'next'
import ArticlesContainer from './components/ArticlesContainer/ArticlesContainer';
import getArticlesData from '@/utilities/getArticlesData';

export const metadata: Metadata = {
    title: "Will - Développeur Web - Mon Blog",
    description: `Développeur Web, je conçois et réalise des sites vitrines et e-commerce pour
  les TPE et les entreprises individuelles.`,
    keywords: ['Développeur', 'Développeur Web', 'Développeur Rouen', 'Développeur', 'Site internet', 'Site vitrine', 'Site', 'Site e-commerce', 'E-commerce', 'TPE', 'Entrepreneurs'],
    metadataBase: new URL('https://will-developpeur.vercel.app'),
    alternates: {
        canonical: '/'
    },
    openGraph: {
        images: ['/photo.jpg']
    }
};

export default function BlogPage() {

    const articles = getArticlesData();


    // no use effect here bc server component
    // detection of lang change must be in child components
    // lets try with localstorage data maybe

    return (
        <>

            <main data-aos='fade-left' className='overflow-x-hidden' >
                <ArticlesContainer articles={articles}></ArticlesContainer>
                <ContactWidget></ContactWidget>
            </main>
        </>

    )
}

