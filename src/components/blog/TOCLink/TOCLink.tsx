import { useHighlighted } from "@/hooks/useHighLighted";
import { IMarkdownNode } from "@/models/markdown-node.model";
import { slugify } from "@/utilities/slugify";

export const CLASSES: any = {
    2: 'text-[1.2rem] pl-2',
    3: 'text-[1.1rem] pl-4',
    4: 'text-[1rem] pl-6'
}

export interface TOCLinkProps {
    node: IMarkdownNode;
    index: number;
}

export default function TOCLink(props: TOCLinkProps){
    const id = slugify(props.node.content);
    const [highlighted, setHighlighted] = useHighlighted(id);

    function handleClick(e: any) {
        const id = e.target.href.split('#')[1]
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

    }

    return(
        <li className={CLASSES[props.node.depth] + ' my-2'} key={props.index}>
        <a className={"hover:font-bold" + ' ' + (highlighted?'font-bold':'')} href={`#${slugify(props.node.content)}`} onClick={(e: any) => handleClick(e)}>
            {props.node.content}
        </a>

    </li>
    )
}