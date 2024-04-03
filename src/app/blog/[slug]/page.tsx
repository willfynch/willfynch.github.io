import ButtonColor from "@/components/buttons/ButtonColor";
import BlogPost from "@/components/blog/BlogPost/BlogPost";
import { IBlogPost } from "@/models/blog-post.model";
import OtherPosts from "@/components/blog/OtherPosts/OtherPosts";
import { Fragment } from "react";
import SectionHeader from "@/components/layout/SectionHeader/SectionHeader";
import Navbar from "@/components/layout/Navbar/Navbar";
import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import NotFoundImage from "@/components/utilities/NotFoundImage/NotFoundImage";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";
import client from "../../../../tina/__generated__/client";
import { slugify } from "@/utilities/slugify";
import { formatDate } from "@/utilities/formatDate";
import { calculateReadingTime } from "@/utilities/calculateReadingTime";
import { FaLinkedin } from "react-icons/fa";
import { getNodes } from "@/utilities/getNodes";
import { calculateMetadata } from "@/utilities/calculateMetadata";


type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }



export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const slug = params.slug
   
    // fetch data
    const postsResponse = await client.queries.postsConnection();
    const post = postsResponse.data.postsConnection.edges?.map((post) => {
      return { slug: post?.node?._sys.filename, title: post?.node?.title }
    }).filter(post => post.slug === slug)[0]


    return calculateMetadata(post?.title ?? "no_title", `/blog/${slug}`)

  }

export default async function Post({ params }: { params: { slug: string } }) {
    const { slug } = params;

    const allPostsResponse = await client.queries.postsConnection();
    const blogPost:any = allPostsResponse.data.postsConnection.edges?.filter(post => slugify(post?.node?.title) === slug)
      .map(post => {
        return {
          author: post?.node?.author,
          authorPic: post?.node?.authorPic,
          tags: post?.node?.tags,
          title: post?.node?.title,
          intro: post?.node?.intro,
          readingTime: calculateReadingTime(post?.node?.title!, 0.2),
          date: formatDate(post?.node?.date),
          content: post?.node?.body,
          image: post?.node?.image,
          nodes: getNodes(post?.node?.body)
        }
      })[0]    

    const SOCIALS = [
        { icon: <FaInstagram />, link: process.env.INSTAGRAM ?? '' },
        { icon: <FaThreads />, link: process.env.THREADS ?? '' },
        {icon: <FaLinkedin/>, link: process.env.LINKEDIN ?? ''}
    ]

    return (
        <Fragment>
            <SectionHeader title={blogPost? blogPost?.title : 'Ceci n\'est pas un article'} image={blogPost ? blogPost?.image : undefined} />
            <Navbar />
            {blogPost &&
                <section className={"pt-10 px-4 sm:px-20 2xl:px-80 mb-10 min-h-[500px]"}>
                    <ButtonColor link={{ isLink: true, path: '/blog' }} width={100} text={"🠄 RETOUR"} id={"BTN"} />
                    <BlogPost 
                      intro={blogPost.intro} 
                      nodes={blogPost.nodes} 
                      title={blogPost.title} 
                      date={blogPost.date} 
                      socials={SOCIALS} 
                      author={blogPost.author} 
                      authorPic={blogPost.authorPic} 
                      readingTime={blogPost.readingTime} 
                      tags={blogPost.tags} 
                      content={blogPost.content} />
                    <OtherPosts />
                </section>
            }
            {!blogPost &&
                <section className="w-full flex flex-col justify-center items-center my-14">
                    <ButtonColor link={{ isLink: true, path: '/blog' }} width={100} text={"🡰 RETOUR AU BLOG"} id={"BTN"} />
                    <h4 className=" text-center mb-4">
                        <span className="">Il n'y a rien ici, noble internaute.</span>
                        <br />
                        <span className="mr-2">Mais tu peux
                            toujours</span>
                        <Link className="link" href={"/foire-aux-questions"}>consulter la F.A.Q.</Link>
                    </h4>
                    <NotFoundImage />
                </section>
            }
        </Fragment>


    )
}