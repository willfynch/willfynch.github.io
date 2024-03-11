import getPost from "@/utilities/getPost";
import Link from "next/link";
import getAllPosts from "@/utilities/getAllPosts";
import ButtonColor from "@/components/buttons/ButtonColor";
import BlogPost from "@/components/BlogPost/BlogPost";
import { IBlogPost } from "@/models/blog-post.model";
import OtherPosts from "@/components/OtherPosts/OtherPosts";

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post: any) => ({ slug: post.slug }))
}

export default async function Post({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const post: IBlogPost = getPost(slug)

    return (
        <section className="pt-10 px-4 sm:px-20 2xl:px-96 mb-10 min-h-[500px]">
            <Link className="text-my-black" href={'/blog/'}><ButtonColor width={100} text={"🡰 RETOUR"} id={"BTN"} /></Link>
            <BlogPost nodes={post.nodes??[]} title={post.title} date={post.date} socials={[{ icon: '/svg/linkedin.svg', link: '/' }]} author={post.author} authorPic={post.authorPic} readingTime={post.readingTime} tags={post.tags} content={"hyello"} />
            <OtherPosts/>
        </section>

    )
}