import getPost from "@/utilities/getPost";
import Link from "next/link";
import getAllPosts from "@/utilities/getAllPosts";
import ButtonColor from "@/components/buttons/ButtonColor";
import BlogPost from "@/components/BlogPost/BlogPost";
import { IBlogPost } from "@/models/blog-post.model";
import OtherPosts from "@/components/OtherPosts/OtherPosts";
import Banner from "@/components/Banner/Banner";
import { Fragment } from "react";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Navbar from "@/components/Navbar/Navbar";

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post: any) => ({ slug: post.slug }))
}

export default async function Post({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const post: IBlogPost = await getPost(slug)

    return (
        <Fragment>
            <SectionHeader title={post.title} image={post.image} />
            <Navbar/>
            <section className={"pt-10 px-4 sm:px-20 2xl:px-80 mb-10 min-h-[500px]"}>
                <ButtonColor link={{isLink:true, path: '/blog'}} width={100} text={"🡰 RETOUR"} id={"BTN"} />
                <BlogPost intro={post.intro} nodes={post.nodes ?? []} title={post.title} date={post.date} socials={[{ icon: '/svg/linkedin.svg', link: '/' }]} author={post.author} authorPic={post.authorPic} readingTime={post.readingTime} tags={post.tags} content={post.content ?? ''} />
                <OtherPosts />
            </section>
        </Fragment>


    )
}