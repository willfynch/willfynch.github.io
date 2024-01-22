import { StaticImageData } from "next/image";

export interface Step {
    id: number;
    title?: string;
    description: string;
    image?: string | StaticImageData;
}