
import ButtonColor from "@/components/buttons/ButtonColor";
import { Fragment } from "react";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Navbar from "@/components/Navbar/Navbar";
import getAllProjects from "@/utilities/getAllProjects";
import { IProject } from "@/models/project.model";
import getProject from "@/utilities/getProject";
import ProjectPost from "@/components/ProjectPost/ProjectPost";


export async function generateStaticParams() {
    const projects = await getAllProjects();
    return projects.map((project: any) => ({ slug: project.slug }))
}

export default async function Project({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const project: IProject = await getProject(slug)

    return (
        <Fragment>
            <SectionHeader title={project.title} image={project.image} />
            <Navbar/>
            <section className={"pt-10 px-4 sm:px-40 2xl:px-80 mb-10 min-h-[500px]"}>
                <ButtonColor link={{isLink:true, path: '/realisations'}} width={100} text={"🡰 RETOUR"} id={"BTN"} />
                <ProjectPost type={project.type} title={project.title} content={project.content ??"Pas de contenu"}/>               
            </section>
        </Fragment>


    )
}