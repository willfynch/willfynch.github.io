'use client'
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export interface ProjectCardProps {
    title?: string;
    image?: string;
    type?: string;
    slug: string;
}

export default function ProjectCard(props: ProjectCardProps) {

    return (
        <Link href={`/realisations/${props.slug}`} className="text-base group text-my-black duration-200 flex flex-col group">
            <div className="w-full h-[200px] md:h-[300px] lg:h-[400px] relative overflow-hidden">
                <Image className="group-hover:brightness-50 absolute z-40 duration-200 w-full object-cover" src={props.image ?? ''} sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    width={0}
                    height={0}
                     alt={""} />
            </div>
            <h2 className=" my-0 uppercase font-thin group-hover:text-my-brown">{props.title} · {props.type}</h2>
        </Link>
    )
}