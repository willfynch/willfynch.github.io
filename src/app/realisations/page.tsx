import PortfolioContainer from "@/components/PortfolioContainer/PortfolioContainer";
import { IProject } from "@/models/project.model";
import getAllProjects from "@/utilities/getAllProjects";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Du café et du code | Réalisations",
    description: `Ces projets sont tous des collaborations, dans le sens où je collabore avec le client ou la cliente. Nous bâtissons ensemble son projet. Je m’occupe de faire naître ses idées, puis de les transformer en code.`,
    keywords: ['Café','Blog', 'Portfolio','Portfolio développeur web','Blog développement web','Blog web', 'Développeur', 'Créateur de sites','Foire aux questions', 'Combien coûte un site web', 'Comment créer un site web', 'Développeur Normandie', 'Développeur Web', 'Développeur Rouen', 'Développeur', 'Site internet', 'Site vitrine', 'Site', 'Site e-commerce', 'E-commerce', 'TPE', 'Entrepreneurs', 'Sites jamstack', 'Sites sans serveur', 'Pas wordpress', 'Wordpress', 'Site sans wordpress', 'Site pas cher', 'Site économique'],
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
      description: `Ces projets sont tous des collaborations, dans le sens où je collabore avec le client ou la cliente. Nous bâtissons ensemble son projet. Je m’occupe de faire naître ses idées, puis de les transformer en code.`,
      title : 'Du café et du code | Réalisations'
    }
};

export default async function Portfolio(){    

    const projects: IProject[] = await getAllProjects();

    return(
        <section className="px-4 sm:px-24 2xl:px-96 mb-10 min-h-[500px]">
            <PortfolioContainer projects={projects}/>
        </section>
    )

}