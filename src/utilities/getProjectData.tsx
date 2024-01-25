import { ProjectModel } from "@/models/project.model";
import fs from "fs";
import matter from "gray-matter";

const getProjectsMetadata = (): ProjectModel[] => {
  const folder = "src/data/projects";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const projects = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`src/data/projects/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      year: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      description: matterResult.data.description,
      technos:  matterResult.data.technos,
      id:  matterResult.data.id,
      link: matterResult.data.link,
      slug: fileName.replace(".md", ""),
      image: matterResult.data.image,
      text: matterResult.content,
      lang: matterResult.data.lang
    };
  });

  return projects;
};

export default getProjectsMetadata;