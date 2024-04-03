'use client'
import { IMarkdownNode } from "@/models/markdown-node.model";
import { slugify } from "@/utilities/slugify";
import { Fragment } from "react";
import TOCLink from "../TOCLink/TOCLink";

export interface TOCProps {
    nodes: IMarkdownNode[];
}




export default function BlogTableOfContents(props: TOCProps) {


    
    return (
        <Fragment>
            <h3 className="text-center m-0 mb-4 text-my-black font-bold">Sommaire</h3>
            <ul>
            {props.nodes.map((node: IMarkdownNode, index:number) => (
                <TOCLink node={node} index={index}/>
            ))}
        </ul>
        </Fragment>
    )

}