export interface IBlogPost {
    intro: string;
    title: string;
    tags: string[];
    date: string;
    slug: string;
    image: string;
    authorPic: string;
    author: string;
    readingTime: number;
    nodes?: any[]
    content?:string;
}