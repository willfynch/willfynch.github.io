import { FaSearch } from "react-icons/fa";

export interface SearchBarProps {
    onChange: (e:any)=>void;
    placeholder: string;
}

export default function SearchBar(props:SearchBarProps){
    return(
        <div className="relative my-10">
                <input role="search" onChange={props.onChange} placeholder={props.placeholder} aria-label="Chercher un article" className=" peer px-6 h-12 sm:h-10 border-my-brown border-[1.5px] focus:outline-none focus:border-my-black focus:border-[2px] w-full" type="text" />
                <FaSearch className="text-my-brown peer-focus:text-my-black absolute top-1/2 -translate-y-1/2 right-10" />
        </div>
    )
}