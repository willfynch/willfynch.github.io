import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { calculateReadingTime } from "./calculateReadingTime";
import { slugify } from "./slugify";
import { formatDate } from "./formatDate";
import { getHeadings } from "./getHeadings";
import { IBlogPost } from "@/models/blog-post.model";
import { IAccordion } from "@/models/accordion.model";

export async function getAllAccordions(): Promise<IAccordion[]> {
  const folder = join(process.cwd(), "public/data/accordions");
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const accordions: IAccordion[] = markdownPosts.map( (fileName, index) => {
    const fileContents = fs.readFileSync(`public/data/accordions/${fileName}`, "utf8");
    const matterResult = matter(fileContents);

    return {
        title: matterResult.data.title,
        body: matterResult.content
    };
  });

  return accordions;
};

export default getAllAccordions;