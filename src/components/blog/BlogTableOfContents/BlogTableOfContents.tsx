'use client'
import { IMarkdownNode } from "@/models/markdown-node.model";
import { slugify } from "@/utilities/slugify";
import { Fragment } from "react";

export interface TOCProps {
    nodes: IMarkdownNode[];
}

export const CLASSES: any = {
    2: 'text-[1.2rem] pl-2',
    3: 'text-[1.1rem] pl-4',
    4: 'text-[1rem] pl-6'
}


function renderNodes(nodes: any) {

    function handleClick(e: any) {
        const id = e.target.href.split('#')[1]
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

    }

    return (
        <ul>
            {nodes.map((node: IMarkdownNode, index:number) => (
                <li className={CLASSES[node.depth] + ' my-2'} key={index}>
                    <a className="hover:font-bold" href={`#${slugify(node.content)}`} onClick={(e: any) => handleClick(e)}>
                        {node.content}
                    </a>

                </li>
            ))}
        </ul>
    )
}
export default function BlogTableOfContents(props: TOCProps) {
    return (
        <Fragment>
            <h3 className="text-center m-0 mb-4 text-my-black font-bold">Sommaire</h3>
            {renderNodes(props.nodes)}
        </Fragment>
    )

}