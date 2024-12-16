import Link from "next/link"
import ListIcon from "@/container/icons/listicon"
import Logo from "@/container/logo"

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
        <div className="flex flex-row h-full justify-around items-center bg-black p-4">
            <Logo/>
            <div className="flex flex-row h-full justify-around bg-black p-4">
            {menu.map((item) => (
                <Link href={item.href} className="text-white mx-12 text-xl hover:text-red-500">
                    {item.name}
                </Link>
            ))}
            </div>
            <ListIcon/>
        </div>
    )
}