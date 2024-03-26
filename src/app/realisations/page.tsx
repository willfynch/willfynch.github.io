import PortfolioContainer from "@/components/PortfolioContainer/PortfolioContainer";
import { IProject } from "@/models/project.model";
import { calculateMetadata } from "@/utilities/calculateMetadata";
import getAllProjects from "@/utilities/getAllProjects";
import { Metadata } from "next";

export const metadata: Metadata = calculateMetadata("Réalisations", '/realisations')

export default async function Portfolio(){    

    const projects: IProject[] = await getAllProjects();

    return(
        <div className="px-4 sm:px-24 2xl:px-96 mb-10 min-h-[500px]">
            <PortfolioContainer calendlyPath={process.env.CALENDLY??""} projects={projects}/>
        </div>
    )

}