import PortfolioContainer from "@/components/PortfolioContainer/PortfolioContainer";
import { IProject } from "@/models/project.model";
import getAllProjects from "@/utilities/getAllProjects";
import { Fragment } from "react";

export default async function Portfolio(){    

    const projects: IProject[] = await getAllProjects();

    return(
        <section className="px-4 sm:px-24 2xl:px-96 mb-10 min-h-[500px]">
            <PortfolioContainer projects={projects}/>
        </section>
    )

}