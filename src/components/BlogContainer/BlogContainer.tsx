'use client'

import { IBlogPost } from "@/models/blog-post.model"
import { Fragment, useEffect, useState } from "react"
import BlogSearchBar from "../SearchBar/SearchBar"
import BlogPost from "../BlogPostCard/BlogPostCard"
import BlogPostCard from "../BlogPostCard/BlogPostCard"
import client from "../../../tina/__generated__/client"
import { slugify } from "@/utilities/slugify"
import { calculateReadingTime } from "@/utilities/calculateReadingTime"
import { formatDate } from "@/utilities/formatDate"

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
            <BlogSearchBar placeholder="Chercher un article..." onChange={handleSearch} />
            <div className="flex flex-col gap-8 mb-10">
                {posts && posts.map((post: IBlogPost) =>
                    <BlogPostCard intro={post.intro} nodes={post.nodes} readingTime={post.readingTime} author={post.author} authorPic={post.authorPic} key={post.slug} date={post.date} slug={post.slug} title={post.title} image={post.image} tags={post.tags} />
                )}
                {posts.length===0 && <>Il n'y a aucun post qui correspond à ta recherche.</>}
            </div>
        </Fragment>
    )
}