import { ProjectCardContent } from "@/app/components/utilities/ProjectCard/ProjectCardContent.model"
import indarrascreen from '../../public/indarrascreen.png'
import miorasophro from '../../public/miorasophro.png'

export const projects: ProjectCardContent[] = [

    {
        title: 'Miora Sophrologie',
        year: '2023',
        subtitle: 'Showcase website',
        description: `Showcase website for a french sophrologist.`,
        technos: ['NextJS', 'TailwindCSS', 'Netlify'],
        links: ['www.miorasphrologie.fr'],
        id: 0,
        image: miorasophro
    },
    {
        title: 'Other',
        year: '2023',
        subtitle: 'Angular Developer',
        description: `Deliver high-quality production code`,
        technos: ['Angular', 'Jenkins', 'Material Design', 'PrimeNG', 'Bootstrap', 'SonarQube', 'Karma', 'Jasmine'],
        id: 1,
        
    },
    {
        title: 'Miora Sophrologie',
        year: '2023',
        subtitle: 'Showcase website',
        description: `Showcase website for a french sophrologist.`,
        technos: ['NextJS', 'TailwindCSS', 'Netlify'],
        links: ['www.miorasphrologie.fr'],
        id: 2,
        image: indarrascreen
    },
    {
        title: 'Other',
        year: '2023',
        subtitle: 'Angular Developer',
        description: `Deliver high-quality production code`,
        technos: ['Angular', 'Jenkins', 'Material Design', 'PrimeNG', 'Bootstrap', 'SonarQube', 'Karma', 'Jasmine'],
        id: 3,
        
    },


]