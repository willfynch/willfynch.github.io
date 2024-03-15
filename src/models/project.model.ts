import { StaticImageData } from "next/image";

export interface IProject {
    title: string;
    type:string;
    technos?: string[];
    link?: string;
    image: string;
    video?: string;
    text?: string;
    slug: string;
}