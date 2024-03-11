
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { IBlogPost } from "@/models/blog-post.model";
import getAllPosts from "@/utilities/getAllPosts";
import getPost from "@/utilities/getPost";
import { usePathname } from "next/navigation";
import { Fragment, useEffect } from "react";

export async function generateStaticParams() {
    const posts = await getAllPosts();
    console.log('IN TEMPLATE')
    return posts.map((post: any) => ({ slug: post.slug }))
}

export default async function Template({ children, params }: { children: React.ReactNode, params: {slug: string} }) {

    const {slug}  = params;
    const post: IBlogPost = await getPost(slug)

    return (
        <Fragment>
            <p className="text-red-600">{post.slug}</p>
            
            <Navbar/>
            <p className="absolute z-50 text-red-600">ABC {slug}</p>
            {children}
        </Fragment>
    )

}