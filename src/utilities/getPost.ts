import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { calculateReadingTime } from "./calculateReadingTime";
import { slugify } from "./slugify";

const getPost = (slug:any): any => {
  const folder = join(process.cwd(), "public/posts");
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`public/posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      content: matterResult.content,
      slug: slugify(fileName.replace(".md", "")),
      image: matterResult.data.image,
      tags: matterResult.data.tags,
      date: matterResult.data.date[0],
      author: matterResult.data.author,
      authorPic: matterResult.data.authorPic,
      readingTime: calculateReadingTime(matterResult.content, 0.2)
    };
  });

  return posts.find(post => post.slug === slug);
};

export default getPost;