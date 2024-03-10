import BlogContainer from "@/components/BlogContainer/BlogContainer";
import BlogPost from "@/components/BlogPost/BlogPost";
import BlogSearchBar from "@/components/BlogSearchBar/BlogSearchBar";
import { IBlogPost } from "@/models/blog-post.model";
import getAllPosts from "@/utilities/getAllPosts"
import { useState } from "react";

export default function Blog(){

    const posts: IBlogPost[] = getAllPosts();


    return(
        <section className="px-4 sm:px-20 xl:px-96 mb-10 min-h-[500px]">

            <BlogContainer posts={posts}/>

        </section>
    )
}