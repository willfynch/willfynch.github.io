import { Fragment } from "react";
import { FaSearch } from "react-icons/fa";

export interface BlogSearchBarProps {
    onChange: (e:any)=>void;
}

export default function BlogSearchBar(props:BlogSearchBarProps){
    return(
        <div className="relative my-10">
                <input onChange={props.onChange} placeholder="Chercher un article..." aria-label="Chercher un article" className=" peer px-6 h-10 border-my-brown border-[1.5px] focus:outline-none focus:border-my-black focus:border-[2px] w-full" type="text" />
                <FaSearch className="text-my-brown peer-focus:text-my-black absolute top-1/2 -translate-y-1/2 right-10" />
        </div>
    )
}