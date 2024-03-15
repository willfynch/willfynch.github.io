import BlogContainer from "@/components/BlogContainer/BlogContainer";
import { IBlogPost } from "@/models/blog-post.model";
import getAllPosts from "@/utilities/getAllPosts"

export default async function Blog(){

    const posts: IBlogPost[] = await getAllPosts();


    return(
        <section className="px-4 sm:px-24 2xl:px-96 mb-10 min-h-[500px]">
            <BlogContainer posts={posts}/>
        </section>
    )
}