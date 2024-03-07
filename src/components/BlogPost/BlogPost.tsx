import Link from "next/link";
import Image from "next/image";

export interface BlogPostProps {
    title?: string;
    tags?: string[];
    date?: string;
    image?: string;
    slug?: string;
}

export default function BlogPost(props: BlogPostProps) {
    return (
        <div className="text-base text-my-black duration-200 flex flex-col sm:flex-row shadow-md group hover:shadow-lg">
            <div className="sm:w-1/2 h-[300px] relative overflow-hidden">
                <Image className="absolute z-40 duration-200 w-full group-hover:scale-110 object-cover h-[300px]" src={props.image ?? ''} width={0} height={0} alt={""} />
                <div id="TAGS" className="absolute z-50 bottom-4 left-4 flex flex-col gap-2">
                    {props.tags?.map(tag => (<div className="capitalize text-sm px-2 bg-my-brown text-center font-black">{tag}</div>))}
                </div>
            </div>
            <div className="sm:w-1/2 p-8 sm:p-0 bg-my-white flex flex-col justify-center items-center">
                <Link className="uppercase font-black hover:text-my-brown" href={`/blog/${props.slug}`}>{props.title}</Link>
                <p className="mt-4 text-sm text-mobileBase">{props.date}</p>
            </div>
        </div>
    )
}