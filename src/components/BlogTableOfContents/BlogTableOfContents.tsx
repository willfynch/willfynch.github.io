import { IMarkdownNode } from "@/models/markdown-node.model";

export interface TOCProps {
    nodes: IMarkdownNode[];
}

function renderNodes(nodes: any) {
    return (
        <ul>
            {nodes.map((node: any) => (
                <li key={node.data.hProperties.id}>
                    <a className={`text-[${node.depth}px]`} href={`#${node.data.hProperties.id}`}>{node.value}</a>
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