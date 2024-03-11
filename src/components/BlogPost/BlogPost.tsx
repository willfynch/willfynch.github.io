'use client'
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/utilities/formatDate";
import BlogPostTopInfos from "../BlogPostTopInfos/BlogPostTopInfos";
import { useEffect } from "react";

export interface BlogPostProps {
    title?: string;
    tags?: string[];
    date?: string;
    image?: string;
    slug?: string;
    author: string;
    authorPic: string;
    readingTime: number;
    content: string;
    socials: {icon:string;link:string}[];
    nodes: any[];
}

export default function BlogPost(props: BlogPostProps) {

    useEffect(()=>{console.log('NODES ', props.nodes)}, [])

    return (
        <div className="text-base text-my-black duration-200 flex flex-col sm:flex-row">
                <BlogPostTopInfos socials={props.socials} authorPic={props.authorPic} author={props.author} readingTime={props.readingTime} date={props.date!} tags={props.tags ?? []}/>
                <p>NODES {props.nodes.toString()}</p>
                {/* <article className="px-50">
                    <div className="w-full h-[250px] overflow-y-hidden relative">
                        <h1 className="text-3xl">
                            {props.title} {props.date}
                        </h1>
                        <div className="w-full h-full bg-black/50 absolute z-10"></div>
                        <Image className="w-full overflow-y-hidden absolute z-0" width={100} height={100} src={props.image ?? ''} alt={"Title image"}></Image>

                    </div>

                    
                </article> */}
        </div>
    )
}