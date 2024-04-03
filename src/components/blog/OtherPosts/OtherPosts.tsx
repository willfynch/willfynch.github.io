import { IBlogPost } from "@/models/blog-post.model";
import { getRandomItems } from "@/utilities/getRandomItemsFromArray";
import { slugify } from "@/utilities/slugify";
import Image from "next/image";
import Link from "next/link";
import client from "../../../../tina/__generated__/client";
import { calculateReadingTime } from "@/utilities/calculateReadingTime";
import { formatDate } from "@/utilities/formatDate";
import { getNodes } from "@/utilities/getNodes";

export default async function OtherPosts(){
    const postsResponse = await client.queries.postsConnection();
    const blogPosts: any[] = postsResponse.data.postsConnection.edges!.map(post => {
        return {
            slug: slugify(post?.node?.title ?? "no slug"),
            author: post?.node?.author,
            authorPic: post?.node?.authorPic,
            tags: post?.node?.tags,
            title: post?.node?.title,
            intro: post?.node?.intro,
            readingTime: calculateReadingTime(post?.node?.title!, 0.2),
            date: formatDate(post?.node?.date),
            content: post?.node?.body,
            image: post?.node?.image,
            nodes: getNodes(post?.node?.body)
        }
    })
    // const posts: IBlogPost[] = await getAllPosts();
    const shownPosts: any = getRandomItems(blogPosts, 3);    

    return(
        <div className="bg-my-white text-my-black w-full flex flex-col p-4 sm:p-8">
            <h5 className="text-2xl font-bold text-center mb-4">Autres articles</h5>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
                {shownPosts.map((post:any) => {
                    return(
                        <div key={post.slug} className="flex flex-col justify-center items-start mb-2 sm:mb-0  w-11/12 sm:w-1/3">
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