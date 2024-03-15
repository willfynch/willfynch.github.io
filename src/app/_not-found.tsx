import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar/Navbar"
import SectionHeader from "@/components/SectionHeader/SectionHeader"
import { Fragment } from "react"
import Image from "next/image"
import NotFoundImage from "@/components/NotFoundImage/NotFoundImage"
import Link from "next/link"

export default function NotFound() {
    return (
        <Fragment>
            <SectionHeader title='Le vide intersidéral' />
            <Navbar />
            <section className="w-full flex flex-col justify-center items-center my-14">
                <h2 className=" text-center text-h4 sm:text-h3 mb-4">
                    <span className="">Il n'y a rien ici, noble internaute.</span>
                        <br/>
                    <span className="mr-2">Mais tu peux
                        toujours</span>
                    <Link className="link" href={"/foire-aux-questions"}>consulter la F.A.Q.</Link>
                </h2>
                <NotFoundImage />
            </section>
            <Footer />
        </Fragment>

    )
}