'use client'
import BlogPostTopInfos from "../BlogPostTopInfos/BlogPostTopInfos";
import { useEffect } from "react";
import BlogTableOfContents from "../BlogTableOfContents/BlogTableOfContents";
import { IMarkdownNode } from "@/models/markdown-node.model";
import Markdown from "markdown-to-jsx";
import Banner from "../Banner/Banner";

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
    socials: { icon: string; link: string }[];
    nodes: IMarkdownNode[];
}

export default function BlogPost(props: BlogPostProps) {

    useEffect(() => { console.log('content ', props.content) }, [])

    return (
        <div className=" text-base text-my-black duration-200 flex flex-col mb-20">

            <BlogPostTopInfos socials={props.socials} authorPic={props.authorPic} author={props.author} readingTime={props.readingTime} date={props.date!} tags={props.tags ?? []} />
            
            <div className="w-full flex flex-col gap-2 md:flex-row ">
                <div className="order-2 md:order-1 w-full md:w-3/5  ">
                    <Markdown className='blogArticleMarkdown'>{props.content}</Markdown>
                </div>
                <aside className=" order-1 md:sticky top-[70px] mb-[20px] bg-my-white shadow-md p-4 h-full right-0 md:order-2 w-full md:w-2/5">
                    <BlogTableOfContents nodes={props.nodes}/>
                </aside>

            </div>
        </div>
    )
}