import { Metadata } from "next";

export function calculateMetadata(
    title: string,
    canonical: string,
): Metadata{

    return {
        title: title,
        description: `Je m’appelle Will, j’aime le café, la poésie et je fabrique des sites web pour aventuriers modernes. Mais qu’est-ce qu’un aventurier moderne, me diras-tu, toi qui me lis ?`,
        keywords: ['Café', 'Développeur', 'Créateur de sites', 'Foire aux questions', 'Combien coûte un site web', 'Comment créer un site web', 'Développeur Normandie', 'Développeur Web', 'Développeur Rouen', 'Développeur', 'Site internet', 'Site vitrine', 'Site', 'Site e-commerce', 'E-commerce', 'TPE', 'Entrepreneurs', 'Sites jamstack', 'Sites sans serveur', 'Pas wordpress', 'Wordpress', 'Site sans wordpress', 'Site pas cher', 'Site économique'],
        metadataBase: new URL('https://ducafeetducode.com'),
        alternates: {
          canonical: 'https://ducafeetducode.com' + canonical
        },
        openGraph: {
          images: ['/images/opengraph.png']
        },
        twitter: {
          card: 'summary_large_image',
          images: ['/images/opengraph.png'],
          description: `Je m’appelle Will, j’aime le café, la poésie et je fabrique des sites web pour aventuriers modernes. Mais qu’est-ce qu’un aventurier moderne, me diras-tu, toi qui me lis ?`,
          title: title
        },
        icons: [{ rel: 'icon', url: './favicon.ico' }, { rel: 'apple-touch-icon', url: './apple-touch-icon.png' }]
      };

}