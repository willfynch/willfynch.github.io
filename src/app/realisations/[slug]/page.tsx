
import ButtonColor from "@/components/buttons/ButtonColor";
import { Fragment } from "react";
import SectionHeader from "@/components/layout/SectionHeader/SectionHeader";
import Navbar from "@/components/layout/Navbar/Navbar";
import getAllProjects from "@/utilities/getAllProjects";
import { IProject } from "@/models/project.model";
import getProject from "@/utilities/getProject";
import ProjectPost from "@/components/portfolio/ProjectPost/ProjectPost";
import NotFoundImage from "@/components/utilities/NotFoundImage/NotFoundImage";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const slug = params.slug
   
    // fetch data
    const project: IProject = await getProject(slug)

    return {
      title: project.title,
      description: project.type + ' pour ' + project.title,
      keywords: [project.title, 'Sophrologie', 'Café', 'Développeur', 'Créateur de sites', 'Développeur Normandie', 'Développeur Web', 'Développeur Rouen', 'Développeur', 'Site internet', 'Site vitrine', 'Site', 'Site e-commerce', 'E-commerce', 'TPE', 'Entrepreneurs', 'Sites jamstack', 'Sites sans serveur', 'Pas wordpress', 'Wordpress', 'Site sans wordpress', 'Site pas cher', 'Site économique'],
      openGraph: {
        images: project.image,
      },
      metadataBase: new URL('https://ducafeetducode.com'),
      alternates: {
        canonical: '/'
      },
      twitter: {
        card: 'summary_large_image',
        images: [project.image],
        description: project.type + ' pour ' + project.title,
        title : project.title
      }
    }
  }

export async function generateStaticParams() {
    const projects = await getAllProjects();
    return projects.map((project: any) => ({ slug: project.slug }))
}

export default async function Project({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const project: IProject = await getProject(slug)

    return (
        <Fragment>
            <SectionHeader title={project.title ? project.title : 'Un seul projet manque et tout est dépeuplé'} image={project.image ? project.image : undefined} />
            <Navbar />
            {
                project.title &&
                <section className={"pt-10 px-4 sm:px-40 2xl:px-80 mb-10 min-h-[500px]"}>
                    <ButtonColor link={{ isLink: true, path: '/realisations' }} width={100} text={"🡰 RETOUR"} id={"BTN"} />
                    <ProjectPost type={project.type} title={project.title} content={project.content ?? "Pas de contenu"} />
                </section>
            }
            {!project.title &&
                <section className="w-full flex flex-col justify-center items-center my-14">
                    <ButtonColor link={{ isLink: true, path: '/realisations' }} width={100} text={"🡰 RETOUR AU PORTFOLIO"} id={"BTN"} />
                    <h2 className=" text-center text-h4 sm:text-h3 mb-4">
                        <span className="">Il n'y a rien ici, noble internaute.</span>
                        <br />
                        <span className="mr-2">Mais tu peux
                            toujours</span>
                        <Link className="link" href={"/foire-aux-questions"}>consulter la F.A.Q.</Link>
                    </h2>
                    <NotFoundImage />
                </section>
            }
        </Fragment>


    )
}