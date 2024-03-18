import Link from "next/link";

export interface TagProps {
    name: string;
    path?: string;
}
export default function Tag(props:TagProps){
    return(
        <Link className="capitalize text-sm px-2 bg-my-brown text-center font-black" href={`/tags/${props.name.toLowerCase()}`}>{props.name}</Link>
    )
}