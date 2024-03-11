import { formatDate } from "@/utilities/formatDate";
import Image from "next/image";
import Link from "next/link";
import Tag from "../Tag/Tag";

export interface BlogPostTopInfosProps {
    authorPic: string;
    author: string;
    socials?: { icon: string; link: string }[];
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
                    <span className="font-bold">{props.author}</span>
                    <div>{props.socials?.map((social,index) => {
                        return (
                            <Link key={index} href={social.link}>
                                <Image src={social.icon} width={20} height={20} alt={"Icône de réseau social"}></Image>
                            </Link>
                        )
                    })}
                    </div>
                </div>
            </div>
            <div className="text-[1rem] flex gap-2">
                <span>{props.date} · {props.readingTime} min de lecture |</span> 
                <span className="flex gap-2">{props.tags.map((tag,index)=>{return <Tag key={index} name={tag}/>})}</span>
            </div>
        </div>
    )
}