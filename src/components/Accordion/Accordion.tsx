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
            <button id={props.title} aria-expanded={isOpen} title={props.title} onClick={e=>setOpen(!isOpen)} className="cursor-pointer flex p-4 items-center justify-between bg-my-white w-full h-[60px] shadow-md">
                <span className="cursor-pointer">{props.title}</span>
                <span >{isOpen ? '-' : '+'}</span>
            </button>
            <div aria-labelledby={props.title} className={(isOpen ? '  ': ' -mt-5 h-0 opacity-0') + ' ' +'text-mobileBase px-2 w-full  duration-[200ms]'}>
                <span className={(isOpen ? '  ': ' hidden') + ' delay-150 '}>{props.content}</span>
            </div>
        </Fragment>
    )

}