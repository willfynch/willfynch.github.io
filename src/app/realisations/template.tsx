'use client'
import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import SectionHeader from "@/components/layout/SectionHeader/SectionHeader";
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