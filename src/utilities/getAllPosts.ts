import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { calculateReadingTime } from "./calculateReadingTime";
import { slugify } from "./slugify";
import { formatDate } from "./formatDate";
import { getHeadings } from "./getHeadings";
import { IBlogPost } from "@/models/blog-post.model";

export async function getAllPosts(slug?:string): Promise<IBlogPost[]> {
  const folder = join(process.cwd(), "public/posts");
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  let headingsArray: any[] = [];
  const headingPromises = markdownPosts.map((fileName)=>{
    const fileContents = fs.readFileSync(`public/posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return getHeadings(matterResult.content)
  })
  await Promise.allSettled(headingPromises)
    .then(
      response => {
        //@ts-ignore
       headingsArray = [...(response.map(response=>response.value))]
      })
  
  // Get gray-matter data from each file.
  const posts: IBlogPost[] = markdownPosts.map( (fileName, index) => {
    const fileContents = fs.readFileSync(`public/posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      intro: matterResult.data.intro,
      slug: slugify(matterResult.data.title),
      image: matterResult.data.image,
      tags: matterResult.data.tags,
      date: formatDate(matterResult.data.date),
      author: matterResult.data.author,
      authorPic: matterResult.data.authorPic,
      readingTime: calculateReadingTime(matterResult.content, 0.2),
      nodes: headingsArray[index]
    };
  });
  if(slug){
    return posts.filter(post => post.tags.includes(slug))
  }else{return posts}

};

export default getAllPosts;