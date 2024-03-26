'use client'
import { useEffect } from "react";
import BlogPostTopInfos from "../BlogPostTopInfos/BlogPostTopInfos";
import BlogTableOfContents from "../BlogTableOfContents/BlogTableOfContents";
import { IMarkdownNode } from "@/models/markdown-node.model";
import Markdown from "markdown-to-jsx";

export interface BlogPostProps {
    title?: string;
    tags?: string[];
    date?: string;
    image?: string;
    slug?: string;
    intro: string;
    author: string;
    authorPic: string;
    readingTime: number;
    content: string;
    socials: { icon: React.ReactNode; link: string }[];
    nodes: IMarkdownNode[];
}

export default function BlogPost(props: BlogPostProps) {


    return (
        <div className="text-my-black duration-200 flex flex-col mb-20">

            <BlogPostTopInfos socials={props.socials} authorPic={props.authorPic} author={props.author} readingTime={props.readingTime} date={props.date!} tags={props.tags ?? []} />
            
            <div className="w-full flex flex-col gap-2 md:flex-row justify-between">
                <div className="order-2 md:order-1 w-full md:w-8/12  ">
                    <Markdown className='blogArticleMarkdown'>{props.intro ?? ""}</Markdown>
                    <Markdown className='blogArticleMarkdown'>{props.content}</Markdown>
                </div>
                <nav role="navigation" className=" order-1 md:sticky top-[70px]  bg-my-white shadow-md p-4 h-full right-0 md:order-2 w-full md:w-3/12">
                    <BlogTableOfContents nodes={props.nodes}/>
                </nav>

            </div>
        </div>
    )
}