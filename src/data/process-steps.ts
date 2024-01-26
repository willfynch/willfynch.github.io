import { Step } from "@/models/process-step.model";
import meeting from '../../public/images/meeting.webp'
import maintenance from '../../public/images/maintenance.webp'
import delivery from '../../public/images/delivery.webp'
import code from '../../public/images/code.webp'
import mockup from '../../public/images/mockup.webp'

import meetingSmall from '../../public/images/meeting-small.webp'
import maintenanceSmall from '../../public/images/maintenance-small.webp'
import deliverySmall from '../../public/images/delivery-small.webp'
import codeSmall from '../../public/images/code-small.webp'
import mockupSmall from '../../public/images/mockup-small.webp'


export const steps: {[language: string]:Step[]}  = {
    'fr' : 
        [
            {
                id: 1,
                title: 'Premier appel pour discuter',
                description: 'Book a quick call in my Calendly so we can talk about your project. Then I\'ll propose you an estimate.',
                image: meeting,
                imageSmall: meetingSmall
            },
            {
                id: 2,
                title: 'Mock up phase',
                description: 'We\'ll build a draft of your website. From drawings to Figma mock-up.',
                image: mockup,
                imageSmall: mockupSmall
            },
            {
                id: 3,
                title: 'Development',
                description: `Along with the mock-up phase I will build the website. You\'ll be 
                given a link to see real time advancements.`,
                image: code,
                imageSmall: codeSmall
            },
            {
                id: 4,
                title: 'Delivery',
                description: `Your website will be deployed on the web. I'll give you all you 
                need to start using it. If anything goes wrong or if you find a bug, I'm available for free.`,
                image: delivery,
                imageSmall: deliverySmall
            },
            {
                id: 5,
                title: 'Maintenance',
                description: `It is an additional (paid) service. We can discuss the terms and price to add it to
                the prestation.`,
                image: maintenance,
                imageSmall: maintenanceSmall
            },
        ],
    'en' : 
        [
            {
                id: 1,
                title: 'Starting call',
                description: 'Book a quick call in my Calendly so we can talk about your project. Then I\'ll propose you an estimate.',
                image: meeting
            },
            {
                id: 2,
                title: 'Mock up phase',
                description: 'We\'ll build a draft of your website. From drawings to Figma mock-up.',
                image: mockup
            },
            {
                id: 3,
                title: 'Development',
                description: `Along with the mock-up phase I will build the website. You\'ll be 
                given a link to see real time advancements.`,
                image: code
            },
            {
                id: 4,
                title: 'Delivery',
                description: `Your website will be deployed on the web. I'll give you all you 
                need to start using it. If anything goes wrong or if you find a bug, I'm available for free.`,
                image: delivery
            },
            {
                id: 5,
                title: 'Maintenance',
                description: `It is an additional (paid) service. We can discuss the terms and price to add it to
                the prestation.`,
                image: maintenance
            },
        ]
    
}

