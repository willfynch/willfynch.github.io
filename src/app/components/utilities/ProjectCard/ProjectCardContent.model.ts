import { StaticImageData } from "next/image";

export interface ProjectCardContent {
    title: string;
    subtitle:string;
    year: string;
    description: string;
    technos: string[];
    links?: string[];
    image?: string | StaticImageData;
    id: number;
}