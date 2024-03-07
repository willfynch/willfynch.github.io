import getPost from "@/utilities/getPost";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import { Fragment } from "react";
import Image from "next/image";
import getAllPosts from "@/utilities/getAllPosts";

export async function generateStaticParams(){
    const posts = await getAllPosts();
    return posts.map((post:any)=>({slug:post.slug}))
}

export default async function Post({ params }: { params: { slug: string } }) {
    const {slug} = params;
    const post = getPost(slug)

    return (
        <Fragment>
            <Link href={'/blog'}>Back</Link>
            {post &&
                <article className="px-50">
                    <div className="w-full h-[250px] overflow-y-hidden relative">
                        <h1 className="text-3xl text-white absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
                            {post.title}
                        </h1>
                        <div className="w-full h-full bg-black/50 absolute z-10"></div>
                        <Image className="w-full overflow-y-hidden absolute z-0" width={100} height={100} src={post.image} alt={"Title image"}></Image>

                    </div>

                    <Markdown>{post.content}</Markdown>
                </article>}
        </Fragment>

    )
}