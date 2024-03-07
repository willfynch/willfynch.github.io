'use client'

import { IBlogPost } from "@/models/blog-post.model"
import { Fragment, useState } from "react"
import BlogSearchBar from "../BlogSearchBar/BlogSearchBar"
import BlogPost from "../BlogPost/BlogPost"

export interface BlogContainerProps {
    posts: IBlogPost[]
}

export default function BlogContainer(props: BlogContainerProps) {

    const [posts, setPosts] = useState(props.posts);

    function filterByTag(searchedTag: string): IBlogPost[]{
        if(searchedTag){
            const filteredByTagPosts = props.posts.filter(post => 
                post.tags.some(tag => tag.toLowerCase().includes(searchedTag.toLowerCase()))
            )
            return filteredByTagPosts
        }
        else {
            return props.posts
        }
    }

    function filterByTitle(searchedTitle:string): IBlogPost[] {
        if(searchedTitle){
            const filteredByTagPosts = props.posts.filter(post => 
                post.title.toLowerCase().includes(searchedTitle.toLowerCase())
            )
            return filteredByTagPosts
        }
        else {
            return props.posts
        }
    }

    function handleSearch(e:any){
        const searchedValue: string = e.target.value ?? "";
        const filteredByTagPosts: IBlogPost[] = filterByTag(searchedValue)
        const filteredByTitlePosts: IBlogPost[] = filterByTitle(searchedValue)
        setPosts(Array.from(new Set([...filteredByTagPosts, ...filteredByTitlePosts])))
    }

    return (
        <Fragment>
            <BlogSearchBar onChange={handleSearch} />
            <div className="flex flex-col gap-8">
                {posts && posts.map((post: IBlogPost) =>
                    <BlogPost key={post.slug} date={post.date} slug={post.slug} title={post.title} image={post.image} tags={post.tags} />
                )}
            </div>
        </Fragment>
    )
}