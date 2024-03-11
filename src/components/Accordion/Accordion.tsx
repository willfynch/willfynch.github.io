'use client'
import { Fragment, useState } from "react";

export interface AccordionProps {
    title: string;
    content: string;
}
export default function Accordion(props: AccordionProps) {

    const [isOpen, setOpen] = useState(false)

    return (
        <Fragment>
            <div className="flex p-4 items-center justify-between bg-my-white w-full h-[60px] shadow-md">
                <span className="">{props.title}</span>
                <button onClick={e=>setOpen(!isOpen)}>{isOpen ? '-' : '+'}</button>
            </div>
            <div className={(isOpen ? '  ': ' -mt-5 h-0 opacity-0 ') + ' ' +'text-mobileBase px-2 w-full duration-[200ms]'}>
                {props.content}
            </div>
        </Fragment>
    )

}