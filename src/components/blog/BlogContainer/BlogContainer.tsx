'use client'
import { IBlogPost } from "@/models/blog-post.model"
import { Fragment, useEffect, useState } from "react"
import BlogSearchBar from "../../layout/SearchBar/SearchBar"
import BlogPostCard from "../BlogPostCard/BlogPostCard"

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
            <h2 className="text-center text-my-black">Bienvenue sur mon blog !</h2>
            <p className="text-center my-10 text-my-black">
                Ici, je partage des articles sur le développement de <strong>sites web et d'applications</strong>, 
                mais aussi des contenus orientés <strong>business</strong>, <strong>entrepreneuriat</strong> ou encore <strong>productivité</strong>. 
                Tu y trouveras tour à tour des articles sur l'<strong>accessibilité web</strong>, sur des <strong>outils</strong> que j'ai pu tester ou des <strong>conseils</strong> pour t'orienter 
                si tu souhaites créer ou faire créer ton propre site web sur mesure.
            </p>
            <BlogSearchBar placeholder="Chercher un article..." onChange={handleSearch} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                {posts && posts.map((post: IBlogPost, index:number) =>
                    <BlogPostCard intro={post.intro} nodes={post.nodes} readingTime={post.readingTime} author={post.author} authorPic={post.authorPic} key={index} date={post.date} slug={post.slug} title={post.title} image={post.image} tags={post.tags} />
                )}
                {posts.length===0 && <>Il n'y a aucun post qui correspond à ta recherche.</>}
            </div>
        </Fragment>
    )
}