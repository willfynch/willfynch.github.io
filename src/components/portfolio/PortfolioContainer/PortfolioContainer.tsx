'use client'

import { IProject } from "@/models/project.model"
import { Fragment, useState } from "react"
import ProjectCard from "../ProjectCard/ProjectCard"
import ButtonColor from "../../buttons/ButtonColor"
import SearchBar from "../../layout/SearchBar/SearchBar"
import Link from "next/link"

export interface PortfolioContainerProps {
    projects: IProject[];
    calendlyPath: string;
}

export default function PortfolioContainer(props: PortfolioContainerProps) {

    const [projects, setProjects] = useState(props.projects);

    function filterByTitle(searchedTitle: string): IProject[] {
        if (searchedTitle) {
            const filteredByTitleProjects = props.projects.filter(project =>
                project.title.toLowerCase().includes(searchedTitle.toLowerCase())
            )
            return filteredByTitleProjects
        }
        else {
            return props.projects
        }
    }

    function handleSearch(e: any) {
        const searchedValue: string = e.target.value ?? "";
        const filteredByTitleProjects: IProject[] = filterByTitle(searchedValue)
        setProjects(Array.from(new Set([...filteredByTitleProjects])))
    }

    return (
        <Fragment>
            <div className="hidden lg:block">
                <SearchBar placeholder="Chercher un projet..." onChange={handleSearch} />
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
                <aside role="complementary" className="h-full w-full pt-10 lg:pt-0 pr-4 lg:w-1/4 top-[50px] lg:sticky flex flex-col justify-center items-center gap-14 ">
                    <p className="text-center lg:text-justify">Ces projets sont tous des collaborations, dans le sens où je collabore avec le client ou la cliente. Nous bâtissons ensemble son projet. Je m’occupe de faire naître ses idées, puis de les transformer en code.</p>
                    <p className="text-center lg:text-justify">Puisque tout est réalisé en code, <strong>tout est possible</strong> : du site vitrine ordinaire à la réalisation plus originale.
                        Certains projets ont été réalisés en équipe : dans ce cas, ce contexte est mentionné.
                    </p>
                    <Link className="button" target="_blank" href={props.calendlyPath}>Appel découverte</Link>
                </aside>
                <div className="lg:hidden block">
                    <SearchBar placeholder="Chercher un projet..." onChange={handleSearch} />
                </div>
                <div className="lg:w-3/4 w-full flex flex-col gap-8">
                    {projects && projects.map((project: IProject, index: number) =>
                        <ProjectCard type={project.type} key={index} slug={project.slug} title={project.title} image={project.image} />
                    )}
                    {projects.length === 0 && <>Il n'y a aucun projet qui correspond à ta recherche.</>}
                </div>
            </div>

        </Fragment>
    )
}