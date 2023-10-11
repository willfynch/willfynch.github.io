import { StaticImageData } from "next/image";

export interface PostCardContent {
    type?: string;
    title?: string;
    subtitle?:string;
    date?: string;
    description?: string;
    technos?: string[];
    links?: string[];
    image?: string | StaticImageData;
}