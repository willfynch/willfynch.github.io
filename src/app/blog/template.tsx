'use client'
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { usePathname } from "next/navigation";
import { Fragment, useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {

    const pathName = usePathname();
    useEffect(()=>{
        console.log(pathName?.split('/'))
    },[])

    return (
        <Fragment>
            {pathName && pathName.split('/').length < 3 && <SectionHeader title='Blog' />}
            {pathName && pathName.split('/').length < 3 && <Navbar/>}
            {children}
            <Footer/>
        </Fragment>
    )

}