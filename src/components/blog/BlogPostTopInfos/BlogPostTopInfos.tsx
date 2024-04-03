import { formatDate } from "@/utilities/formatDate";
import Image from "next/image";
import Link from "next/link";
import Tag from "../Tag/Tag";

export interface BlogPostTopInfosProps {
    authorPic: string;
    author: string;
    socials?: { icon: React.ReactNode; link: string }[];
    readingTime: number;
    date: string;
    tags: string[];
}

export default function BlogPostTopInfos(props: BlogPostTopInfosProps) {
    return (
        <div className="my-10">
            <div className="flex items-center gap-2">
                <Image width={80} height={80} src={props.authorPic} alt={"Photo de profil de l'auteur"} />
                <div className="flex flex-col">
                    <h4 className="font-bold text-h4 my-0">{props.author}</h4>
                    <div className="flex gap-1">{props.socials?.map((social,index) => {
                        return (
                            <Link  target="_blank" className="hover:text-my-brown" key={index} href={social.link}>
                                {social.icon}
                            </Link>
                        )
                    })}
                    </div>
                </div>
            </div>
            <div className="text-[1rem] flex gap-2 flex-col sm:flex-row">
                <span>{props.date} · {props.readingTime} min de lecture ·</span> 
                <span className="flex gap-2 flex-wrap">{props.tags.map((tag,index)=>{return <Tag key={index} name={tag}/>})}</span>
            </div>
        </div>
    )
}