import { ProjectCardContent } from "@/app/components/utilities/ProjectCard/ProjectCardContent.model"
import indarrascreen from '../../public/indarrascreen.png'
import miorasophro from '../../public/miorasophro.png'


export const projects: ProjectCardContent[] = [

    {
        title: 'Miora Sophrologie',
        year: '2023',
        subtitle: 'Showcase website',
        description: `Miora is a french sophrologist who needed a website to showcase her activity and
        get more clients. She also needed a website tailored to her personality. This way, end-users kinda 
        know her before taking booking a consultation.  
        `,
        technos: ['NextJS', 'TailwindCSS', 'Netlify'],
        links: ['www.miorasphrologie.fr'],
        id: 0,
        image: miorasophro,
        video: '/screen_recording_miora.mp4'
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
        description: `Showcase website for a french sophrologist. They `,
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