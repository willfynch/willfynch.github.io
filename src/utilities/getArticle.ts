import { ArticleModel } from "@/models/article.model";
import fs from "fs";
import matter from "gray-matter";

export default function getArticle({params}:{params:{slug:string}}): ArticleModel {
  const folder = "src/data/articles";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const articles = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`src/data/articles/${fileName}`, "utf8");
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

  const article:ArticleModel = articles.filter(article => article.slug === params.slug)[0]

  return article;
};