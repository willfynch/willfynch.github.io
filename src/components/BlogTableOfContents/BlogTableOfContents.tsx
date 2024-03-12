import { IMarkdownNode } from "@/models/markdown-node.model";

export interface TOCProps {
    nodes: IMarkdownNode[];
}

export const TOC_FONT_SIZE:any = {
    2: '1.2',
    3: '1',
    4: '.8'
}

function renderNodes(nodes: any) {
    return (
        <ul>
            {nodes.map((node: any) => (
                <li key={node.data.hProperties.id}>
                    <a className={`text-[${TOC_FONT_SIZE[node.depth]}rem]`} href={`#${node.data.hProperties.id}`}>{node.value}</a>
                    {node.children?.length > 0 && renderNodes(node.children)}
                </li>
            ))}
        </ul>
    )
}
export default function BlogTableOfContents(props: TOCProps) {
    return (
        <div className={"toc"}>
            <h3 className={"secondary-text"}>Table of contents</h3>
            {renderNodes(props.nodes)}
        </div>
    )

}