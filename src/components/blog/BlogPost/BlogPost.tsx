'use client'
import { useEffect, useState } from "react";
import BlogPostTopInfos from "../BlogPostTopInfos/BlogPostTopInfos";
import BlogTableOfContents from "../BlogTableOfContents/BlogTableOfContents";
import { IMarkdownNode } from "@/models/markdown-node.model";
import Markdown from "markdown-to-jsx";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { slugify } from "@/utilities/slugify";
import CodeBlock from "../../utilities/CodeBlock/CodeBlock";

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

    useEffect(() => {

        // ADD IDS TO TITLES
        const h2 = document.getElementsByTagName('h2');
        const h3 = document.getElementsByTagName('h3');
        const h4 = document.getElementsByTagName('h4');
        const allTitles: any[] = [Object.values(h2), Object.values(h3), Object.values(h4)]
            .flat()
            .filter(title => title.parentElement?.tagName.toLowerCase() === 'article')

        allTitles.forEach(title => {
            title.setAttribute('id', slugify(title.firstChild.data))
        })

        // ADD EVENTS LISTENER FOR LINK PREVIEW
        const a = document.getElementsByTagName('a');
        const allA: any[] = Object.values(a)
        .filter(a => a.parentElement?.parentElement?.tagName.toLowerCase() === 'article')

        allA.forEach(a => {
            a.setAttribute('target', '_blank')
        })
    }, [])

    const components = {
        code_block: (props:any) => {
          return <CodeBlock children={props.children} language={props.lang}/>
        }
      }

    return (
        <div className="text-my-black duration-200 flex flex-col mb-20">

            <BlogPostTopInfos socials={props.socials} authorPic={props.authorPic} author={props.author} readingTime={props.readingTime} date={props.date!} tags={props.tags ?? []} />

            <div className="w-full flex flex-col gap-2 md:flex-row justify-between">
                <article className="px-4 md:px-0 order-2 md:order-1 w-full md:w-8/12 text-my-black text-justify">
                    <p className="md:mt-10">{props.intro}</p>
                    {/**@ts-ignore*/}
                    <TinaMarkdown content={props.content} components={components.code_block} />
                </article>
                <nav role="navigation" className="md:mb-0 mb-10 order-1 md:sticky top-[70px]  bg-my-white shadow-md p-4 h-full right-0 md:order-2 w-full md:w-3/12">
                    <BlogTableOfContents nodes={props.nodes} />
                </nav>

            </div>
        </div>
    )
}