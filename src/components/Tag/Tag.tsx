export interface TagProps {
    name: string;
    path?: string;
}
export default function Tag(props:TagProps){
    return(
        <div className="capitalize text-sm px-2 bg-my-brown text-center font-black">{props.name}</div>
    )
}