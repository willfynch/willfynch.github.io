import { Metadata } from "next";

export function calculateMetadata(
    title: string,
    canonical: string,
): Metadata{

    return {
        title: title,
        description: `Conception et réalisation de sites web sur mesure pour entrepreneuses, entrepreneurs, TPE et PME.`,
        keywords: ['Développeur', 'Créateur de sites', 'Du café et du code', 'Combien coûte un site web', 'Création site web', 'Comment créer un site web', 'Développeur Normandie', 'Développeur Web', 'Développeur Rouen', 'Développeur', 'Site internet', 'Site vitrine', 'Site', 'Site e-commerce', 'E-commerce', 'TPE', 'Entrepreneurs', 'Sites jamstack', 'Sites sans serveur', 'Site sans wordpress', 'Conception de site web'],
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
          description: `Conception et réalisation de sites web sur mesure pour aventuriers modernes.`,
          title: title
        },
        icons: [{ rel: 'icon', url: './favicon.ico' }, { rel: 'apple-touch-icon', url: './apple-touch-icon.png' }]
      };

}