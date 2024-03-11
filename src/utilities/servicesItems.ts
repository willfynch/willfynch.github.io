import { IService } from "@/models/service.model";

export const servicesItem: IService[] = [
    {
        title: `Site d'une seule page`,
        options: [
            'Site sur une page',
            'Plusieurs sections',
            'Page 404',
            'Pages légales',
            'RGPD & SEO',
            'Moyen de contact',
            'Accompagnement'
        ],
        available: true
    },
    {
        title: `Site éditorial`,
        options: [
            'Site sur plusieurs pages',
            'Page 404',
            'Pages légales',
            'RGPD & SEO',
            'Moyen de contact',
            'Pages blog',
            'Accompagnement'
        ],
        available: true
    },
    {
        title: `Site e-commerce`,
        options: [

        ],
        available: false
    },
]