import { StaticImageData } from "next/image";

export interface ProjectModel {
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
    language?: string;
}