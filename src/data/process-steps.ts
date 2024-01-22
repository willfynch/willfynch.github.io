import { Step } from "@/models/process-step.model";
import meeting from '../../public/meeting.jpg'
import maintenance from '../../public/maintenance.jpg'
import delivery from '../../public/delivery.jpg'
import code from '../../public/code.jpg'
import mockup from '../../public/mockup.jpg'

export const steps: Step[]  = [
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

