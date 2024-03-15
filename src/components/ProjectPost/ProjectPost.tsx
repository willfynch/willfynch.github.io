'use client'
import { useEffect } from "react";
import BlogPostTopInfos from "../BlogPostTopInfos/BlogPostTopInfos";
import BlogTableOfContents from "../BlogTableOfContents/BlogTableOfContents";
import { IMarkdownNode } from "@/models/markdown-node.model";
import Markdown from "markdown-to-jsx";

export interface ProjectPostProps {
    title?: string;
    image?: string;
    slug?: string;
    type: string;
    content: string;
}

export default function ProjectPost(props: ProjectPostProps) {

    useEffect(()=>{console.log(props)},[])

    return (
        <div className="text-my-black duration-200 flex flex-col mb-20">

            <div className="w-full flex flex-col gap-2  justify-between">

                <Markdown className='blogArticleMarkdown'>{props.content}</Markdown>

            </div>
        </div>
    )
}