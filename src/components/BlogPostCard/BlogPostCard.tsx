'use client'
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/utilities/formatDate";
import Tag from "../Tag/Tag";
import { useEffect } from "react";

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
        <div className="text-base text-my-black duration-200 flex flex-col sm:flex-row hover:shadow-md group shadow-lg">
            <div className="sm:w-1/2 h-[300px] relative overflow-hidden">
                <Image className="absolute z-40 duration-200 w-full group-hover:scale-110 object-cover h-[300px]" src={props.image ?? ''} fill alt={""} />
                <div id="TAGS" className="absolute z-40 bottom-4 left-4 flex sm:flex-col gap-2">
                    {props.tags?.map((tag,index) => (<Tag key={index} name={tag} />))}
                </div>
            </div>
            <div className="sm:w-1/2 p-8 sm:p-0 bg-my-white flex flex-col justify-center items-center">
                <Link className=" font-black hover:text-my-brown" href={`/blog/${props.slug}`}>{props.title}</Link>
                <p className="mt-4 text-sm text-mobileBase">{props.date} · {props.readingTime} min de lecture</p>
                <p className="text-sm mt-8 sm:px-8 flex flex-col">
                    {props.intro?.slice(0, 150)}...
                    <Link className="mt-2 link flex gap-0 items-center w-fit" href={`blog/${props.slug}`}>
                        <span>Lire la suite </span>
                        <span className="arrow">➔</span>
                    </Link>
                </p>


            </div>
        </div>
    )
}