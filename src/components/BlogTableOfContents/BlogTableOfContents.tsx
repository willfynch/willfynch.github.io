'use client'
import { IMarkdownNode } from "@/models/markdown-node.model";
import { Fragment } from "react";

export interface TOCProps {
    nodes: IMarkdownNode[];
}

export const TOC_FONT_SIZE:any = {
    2: '1.2',
    3: '1',
    4: '.8'
}

function renderNodes(nodes: any) {

    function handleClick(e:any){
        const id = e.target.href.split('#')[1]
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({behavior:'smooth'})

    }

    return (
        <ul>
            {nodes.map((node: any) => (
                <li className={`mx-[${5*node.depth}px]`} key={node.data.hProperties.id}>
                    <a className={`text-[${TOC_FONT_SIZE[node.depth]}rem] `} onClick={(e:any) => handleClick(e)} href={`#${node.data.hProperties.id}`}>
                        {node.value}
                        </a>
                    {node.children?.length > 0 && renderNodes(node.children)}
                </li>
            ))}
        </ul>
    )
}
export default function BlogTableOfContents(props: TOCProps) {
    return (
        <Fragment>
            <h3 className="m-0 mb-4 text-my-black font-bold text-h3">Sommaire</h3>
            {renderNodes(props.nodes)}
        </Fragment>
    )

}