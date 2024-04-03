'use client'
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/utilities/formatDate";
import Tag from "../Tag/Tag";
import { useEffect } from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export interface BlogPostCardProps {
    title?: string;
    tags?: string[];
    date?: string;
    image?: string;
    slug?: string;
    intro: string;
    author: string;
    authorPic: string;
    readingTime: number;
    nodes?: any[];
}

export default function BlogPostCard(props: BlogPostCardProps) {

    return (
        <div className=" border-my-brown border-[1px] text-my-black duration-200 flex flex-col hover:shadow-md group shadow-lg">
            <div className="h-[200px] relative overflow-hidden">
                <Image className="absolute z-40 duration-200 w-full group-hover:scale-110 object-cover h-[300px]" src={props.image ?? ''} fill alt={"Image pour l'article " + props.title} />
                <div id="TAGS" className="absolute z-40 bottom-4 left-4 flex 33xlflex-col gap-2">
                    {props.tags?.map((tag, index) => (<Tag key={index} name={tag} />))}
                </div>
            </div>
            <div className="min-h-[220px] 33xlw-1/2 p-8 bg-my-white flex flex-col justify-start">
                <Link className=" font-black hover:text-my-brown text-xl" href={`/blog/${props.slug}`}>{props.title}</Link>
                <small className="mt-2">{props.date} · {props.readingTime} min de lecture</small>
                <p className="mt-6 flex flex-col ">
                    <small>{props.intro?.toString().slice(0, 150)}...</small>
                    <small  className="ease-[cubic-bezier(0.09, 0.95, 0.76, 0.33)] duration-200 group/link mt-2 flex gap-0 w-fit">
                        <Link className="link" href={`blog/${props.slug}`}>
                            Lire la suite
                        </Link>
                        <small className="duration-200 arrow group-hover/link:text-my-brown ml-[4px] group-hover/link:ml-2">➔</small>
                    </small>

                </p>


            </div>
        </div>
    )
}