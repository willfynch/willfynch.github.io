export interface IMarkdownNode {
    value: string;
    depth: number;
    data: {hProperties: {id:string}};
    children: IMarkdownNode;
}