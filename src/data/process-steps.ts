import { Step } from "@/models/process-step.model";


import meeting from '../../public/images/meeting-small.webp'
import maintenance from '../../public/images/maintenance-small.webp'
import delivery from '../../public/images/delivery-small.webp'
import code from '../../public/images/code-small.webp'
import mockup from '../../public/images/mockup-small.webp'

export enum IMAGES {
    CODE = 'https://i.ibb.co/bPqC57S/code-small.webp',
    DELIVERY = 'https://i.ibb.co/x6C6Fsr/delivery-small.webp',
    MAINTENANCE = 'https://i.ibb.co/SXXy0sY/maintenance-small.webp',
    MEETING = 'https://i.ibb.co/17CKDYK/meeting-small.webp',
    MOCKUP = 'https://i.ibb.co/ngjkY6H/mockup-small.webp'
}

export const steps: { [language: string]: Step[] } = {
    'fr':
        [
            {
                id: 1,
                title: 'Premier appel pour discuter',
                description: 'Book a quick call in my Calendly so we can talk about your project. Then I\'ll propose you an estimate.',
                image: IMAGES.MEETING
            },
            {
                id: 2,
                title: 'Mock up phase',
                description: 'We\'ll build a draft of your website. From drawings to Figma mock-up.',
                image: IMAGES.MOCKUP
            },
            {
                id: 3,
                title: 'Development',
                description: `Along with the mock-up phase I will build the website. You\'ll be 
                given a link to see real time advancements.`,
                image: IMAGES.CODE
            },
            {
                id: 4,
                title: 'Delivery',
                description: `Your website will be deployed on the web. I'll give you all you 
                need to start using it. If anything goes wrong or if you find a bug, I'm available for free.`,
                image: IMAGES.DELIVERY
            },
            {
                id: 5,
                title: 'Maintenance',
                description: `It is an additional (paid) service. We can discuss the terms and price to add it to
                the prestation.`,
                image: IMAGES.MAINTENANCE,

            },
        ],
    'en':
        [
            {
                id: 1,
                title: 'Starting call',
                description: 'Book a quick call in my Calendly so we can talk about your project. Then I\'ll propose you an estimate.',
                image: IMAGES.MEETING
            },
            {
                id: 2,
                title: 'Mock up phase',
                description: 'We\'ll build a draft of your website. From drawings to Figma mock-up.',
                image: IMAGES.MOCKUP
            },
            {
                id: 3,
                title: 'Development',
                description: `Along with the mock-up phase I will build the website. You\'ll be 
                given a link to see real time advancements.`,
                image: IMAGES.MOCKUP
            },
            {
                id: 4,
                title: 'Delivery',
                description: `Your website will be deployed on the web. I'll give you all you 
                need to start using it. If anything goes wrong or if you find a bug, I'm available for free.`,
                image: IMAGES.DELIVERY
            },
            {
                id: 5,
                title: 'Maintenance',
                description: `It is an additional (paid) service. We can discuss the terms and price to add it to
                the prestation.`,
                image: IMAGES.MAINTENANCE

            },
        ]

}

