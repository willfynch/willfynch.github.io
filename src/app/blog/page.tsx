import BlogContainer from "@/components/BlogContainer/BlogContainer";
import { IBlogPost } from "@/models/blog-post.model";
import { calculateMetadata } from "@/utilities/calculateMetadata";
import getAllPosts from "@/utilities/getAllPosts"
import { Metadata } from "next";

export const metadata: Metadata = calculateMetadata("Blog", '/blog')

export default async function Blog(){

    const posts: IBlogPost[] = await getAllPosts();


    return(
        <section>
            <BlogContainer posts={posts}/>
        </section>
    )
}