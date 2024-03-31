import BlogContainer from "@/components/BlogContainer/BlogContainer";
import { IBlogPost } from "@/models/blog-post.model";
import { calculateMetadata } from "@/utilities/calculateMetadata";
import getAllPosts from "@/utilities/getAllPosts"
import { Metadata } from "next";
import client from "../../../tina/__generated__/client";
import { slugify } from "@/utilities/slugify";
import { calculateReadingTime } from "@/utilities/calculateReadingTime";
import { formatDate } from "@/utilities/formatDate";

export const metadata: Metadata = calculateMetadata("Blog", '/blog')

export default async function Blog(){

    const posts: IBlogPost[] = await getAllPosts();

    const postsResponse = await client.queries.postsConnection();
    const blogPosts: any[] = postsResponse.data.postsConnection.edges!.map(post => {
        console.log(post)
        return {
            slug: slugify(post?.node?.title ?? "no slug"),
            author: post?.node?.author,
            authorPic: post?.node?.authorPic,
            tags: post?.node?.tags,
            title: post?.node?.title,
            intro: post?.node?.intro,
            readingTime: calculateReadingTime(post?.node?.body.toString(), 0.2),
            date: formatDate(post?.node?.date),
            content: post?.node?.body,
            image: post?.node?.image
        }
    })


    return(
        <section>
            <BlogContainer posts={blogPosts}/>
        </section>
    )
}