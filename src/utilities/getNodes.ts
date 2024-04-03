import { IMarkdownNode } from "@/models/markdown-node.model";

export function getNodes(markdownElement:any): IMarkdownNode[]{

    const authorizedTags = ['h2', 'h3', 'h4', 'h5', 'h6']
    const titles = markdownElement.children.filter( (child:any)=> authorizedTags.includes(child.type));
    const nodes: IMarkdownNode[] = titles.map((title:any) => {
        return {
            depth: title.type.slice(1,2),
            content: title.children[0].text
        }
    })
    return nodes
}