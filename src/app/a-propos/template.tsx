import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { Fragment } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <Fragment>
            <SectionHeader title='À propos' />
            <Navbar/>
            {children}<Footer></Footer>
        </Fragment>
    )

}