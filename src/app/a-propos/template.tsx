import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import SectionHeader from "@/components/layout/SectionHeader/SectionHeader";
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