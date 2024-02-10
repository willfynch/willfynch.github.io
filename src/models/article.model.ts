import { StaticImageData } from "next/image";

export interface ArticleModel {
    title: string;
    subtitle:string;
    year: string;
    description: string;
    technos: string[];
    link: string;
    image: string | StaticImageData;
    id: number;
    video?: string;
    text?: string;
    lang: string;
    slug: string;
}