import HeaderTitle from "./icon/HeaderTitle"
import Icon from "./icon/Icon"

interface Prop{
    title?:string,
    icon?:string,
    content?:string
}
export default function Card({title, icon,content}:Prop){
    return (
        <div className="m-0 bg-white p-6 shadow-lg shadow-black-500/50 flex flex-col justify-center pb-10 hover:shadow-indigo-500/40 ease-out duration-300">
            <div className="self-center">
            <Icon src={icon}alt="fbicon" />
            </div>
            <HeaderTitle 
            value={title}
            className ="text-xl self-center p-4"/>
            <div className="text-center">
                {content}
            </div>
        
        </div>
    )
}