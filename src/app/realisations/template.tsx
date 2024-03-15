'use client'
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
    const pathName = usePathname();
    return (
        <Fragment>
            {pathName && pathName.split('/').length < 3 && <SectionHeader title='Réalisations' />}
            {pathName && pathName.split('/').length < 3 && <Navbar/>}
            {children}
            <Footer/>
        </Fragment>
    )

}