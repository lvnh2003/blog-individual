import Link from "../Link"
import Icon from "../icon/icon"

export default function Sidebar() {
    const menu = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "About",
            href: "/about",
        },
        {
            name: "Contact",
            href: "/contact",
        },
    ]
    return (
        <div className="flex flex-row h-full justify-around items-center bg-transparent p-4">
            <Icon src={"/assets/images/logo.png"} alt={'Logo'}/>
            <div className="flex flex-row h-full justify-around bg-transparent p-4">
            {menu.map((item, index) => (
                <Link href={item.href} className="text-white mx-12 text-xl hover:text-header" key={index}>
                    {item.name}
                </Link>
            ))}
            </div>
            <div className="flex flex-row justify-evenly items-center">
                <Icon src="/assets/images/icons8-facebook.svg" alt="fbicon" href="#"/>
                <Icon src="/assets/images/icons8-github.svg" alt="ghicon" href="#"/>
                <Icon src="/assets/images/icons8-linkedin.svg" alt="lkdicon" href="#"/>
            </div>
        </div>
    )
}