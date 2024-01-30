import { Step } from "@/models/process-step.model";

export enum IMAGES {
    CODE = 'https://i.ibb.co/tBz7rZG/code-small-min.jpg',
    DELIVERY = 'https://i.ibb.co/sJkxZNG/delivery-small-min.jpg',
    MAINTENANCE = 'https://i.ibb.co/Yt5ycF7/maintenance-small-min.jpg',
    MEETING = 'https://i.ibb.co/my8tK7F/meeting-small-min.jpg',
    MOCKUP = 'https://i.ibb.co/ZSBVcBh/mockup-small-min.jpg'
}

export const steps: { [language: string]: Step[] } = {
    'fr':
        [
            {
                id: 1,
                title: 'Premier appel pour discuter',
                description: 'Prenez rendez-vous depuis mon Calendly afin que nous échangions à propos de votre projet. Je vous proposerai ensuite un devis.',
                image: IMAGES.MEETING,
                alt: 'Arrière plan : photo d\'une réunion'
            },
            {
                id: 2,
                title: 'Maquettage',
                description: 'Nous construirons une maquette de votre projet. Du croquis schématique à la maquette réalisée sous Figma.',
                image: IMAGES.MOCKUP,
                alt: 'Arrière plan : photo d\'une personne qui crée une maquette de site web'
            },
            {
                id: 3,
                title: 'Développement',
                description: `Au fur et à mesure que nous validons les étapes de maquettage, je coderai le projet. Je vous fournirai un lien d\'accès au travail en cours afin de recueillir régulièrement votre feedback.`,
                image: IMAGES.CODE,
                alt: 'Arrière plan : éditeur de code informatique ouvert sur une page HTML'
            },
            {
                id: 4,
                title: 'Livraison',
                description: `Votre projet sera déployé sur le web. Je vous fournirai tout ce dont vous aurez besoin pour le prendre en main. Si vous rencontrez une difficulté avec le produit livré, je suis disponible gratuitement.`,
                image: IMAGES.DELIVERY,
                alt: 'Arrière plan : image abstraite représentant Internet'
            },
            {
                id: 5,
                title: 'Maintenance',
                description: `Ce service comporte des frais additionels. Le besoin en maintenance sera évalué lors de la phase d\'étude. Nous pouvons bien sûr revenir en arrière si besoin.`,
                image: IMAGES.MAINTENANCE,
                alt: 'Arrière plan : image représentant des engrenages'
            },
        ],
    'en':
        [
            {
                id: 1,
                title: 'Starting call',
                description: 'Book a quick call in my Calendly so we can talk about your project. Then I\'ll propose you an estimate.',
                image: IMAGES.MEETING,
                alt: 'Background: picture of a meeting'
            },
            {
                id: 2,
                title: 'Mock up phase',
                description: 'We\'ll build a draft of your website. From drawings to Figma mock-up.',
                image: IMAGES.MOCKUP,
                alt: 'Background: picture of someone drawing a website mockup'
            },
            {
                id: 3,
                title: 'Development',
                description: `Along with the mock-up phase I will build the website. You\'ll be 
                given a link to see real time advancements.`,
                image: IMAGES.CODE,
                alt: 'Background: picture of an informatic code editor displaying an HTML page'
            },
            {
                id: 4,
                title: 'Delivery',
                description: `Your website will be deployed on the web. I'll give you all you 
                need to start using it. If anything goes wrong or if you find a bug, I'm available for free.`,
                image: IMAGES.DELIVERY,
                alt: 'Background: abstract image representing Internet'
            },
            {
                id: 5,
                title: 'Maintenance',
                description: `It is an additional (paid) service. We can discuss the terms and price to add it to
                the prestation.`,
                image: IMAGES.MAINTENANCE,
                alt: 'Background: picture with gears'
            },
        ]

}

