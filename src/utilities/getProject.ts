import { IProject } from "@/models/project.model";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { slugify } from "./slugify";

export async function getProject(slug: string): Promise<IProject> {
  const folder = join(process.cwd(), "public/data/projects");
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const project: IProject = markdownPosts.map( (fileName, index) => {
    const fileContents = fs.readFileSync(`public/data/projects/${fileName}`, "utf8");
    const matterResult = matter(fileContents);

    return {
        title: matterResult.data.title,
        body: matterResult.content,
        type: matterResult.data.type,
        image: matterResult.data.image,
        slug: slugify(matterResult.data.title),
        content: matterResult.content
    };
  }).find(project => project.slug === slug)
  ?? {title:'', type: '', image: '', slug: ''};

  return project;
};

export default getProject;