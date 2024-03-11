import { IBlogPost } from "@/models/blog-post.model";
import getAllPosts from "@/utilities/getAllPosts";
import { getRandomItems } from "@/utilities/getRandomItemsFromArray";
import Image from "next/image";
import Link from "next/link";

export default async function OtherPosts(){

    const posts: IBlogPost[] = await getAllPosts();
    const shownPosts: any = getRandomItems(posts, 3);    

    return(
        <div className="bg-my-white text-my-black w-full flex flex-col p-4 sm:p-8">
            <h5 className="text-2xl font-bold text-center mb-4">Autres articles</h5>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
                {shownPosts.map((post:any) => {
                    return(
                        <div key={post.slug} className="flex flex-col justify-center items-start sm:w-1/3">
                            <Image width={400} height={150} src={post.image} alt={""} />
                            <Link  className="font-bold text-lg hover:text-my-brown" href={`/blog/${post.slug}`}>{post.title}</Link>
                            <span className="w-full">{post.date} · {post.readingTime} min de lecture</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
    

}