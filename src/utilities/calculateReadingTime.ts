import { join } from "path";
import fs from "fs";
import matter from "gray-matter";

export async function calculateReadingTime(title: string, averageReadingTimePerWord: number): Promise<number> {

    const folder = join(process.cwd(), "public/posts");
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".mdx"));

    

    const posts: any[] = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`public/posts/${fileName}`, "utf8");
        const matterResult = matter(fileContents);
        
        return {
            title: matterResult.data.title,
            content: matterResult.content
        };
    });
    const contentInString = posts.filter((post: any) => post.title === title)[0]?.content.toString();
    const wordCount = contentInString?.trim().split(/\s+/).length;
    const totalReadingTimeInSeconds = wordCount * averageReadingTimePerWord;
    const totalReadingTimeInMinutes = Math.ceil(totalReadingTimeInSeconds / 60);
    return totalReadingTimeInMinutes;
}

