// import { ProjectModel } from "@/models/project.model";
// import fs from "fs";
// import matter from "gray-matter";

// const getProjectsMetadata = (): ProjectModel[] => {
//   const folder = "posts/";
//   const files = fs.readdirSync(folder);
//   const markdownPosts = files.filter((file) => file.endsWith(".md"));

//   // Get gray-matter data from each file.
//   const projects = markdownPosts.map((fileName) => {
//     const fileContents = fs.readFileSync(`projects/${fileName}`, "utf8");
//     const matterResult = matter(fileContents);
//     return {
//       title: matterResult.data.title,
//       date: matterResult.data.date,
//       subtitle: matterResult.data.subtitle,
//       slug: fileName.replace(".md", ""),
//     };
//   });

//   return projects;
// };

// export default getPostMetadata;