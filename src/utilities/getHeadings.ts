import { headingTree } from "./headingTree";
import { remark } from "remark";

export async function getHeadings(content:any): Promise<any> {

   
    // Use remark to convert Markdown into HTML string
    const processedContent = await remark()
      .use(headingTree)
      .process(content);
   
    return processedContent.data.headings;
  }