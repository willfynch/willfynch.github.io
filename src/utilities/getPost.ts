import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { calculateReadingTime } from "./calculateReadingTime";
import { slugify } from "./slugify";
import { formatDate } from "./formatDate";
import { getHeadings } from "./getHeadings";
import { IBlogPost } from "@/models/blog-post.model";

export async function getPost(slug:any): Promise<IBlogPost> {
  const folder = join(process.cwd(), "public/posts");
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const post: IBlogPost = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`public/posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      intro: matterResult.data.intro,
      content: matterResult.content,
      slug: slugify(fileName.replace(".md", "")),
      image: matterResult.data.image,
      tags: matterResult.data.tags,
      date: formatDate(matterResult.data.date),
      author: matterResult.data.author,
      authorPic: matterResult.data.authorPic,
      readingTime: calculateReadingTime(matterResult.content, 0.2),
    };
  }).find(post => post.slug === slug)
  ?? {author:'', authorPic:'', readingTime:0, tags:[], title:'', image:'', date:'', slug:'', intro:''};

  post.nodes = await getHeadings(post?.content)
  return post
};

export default getPost;