import Link from "next/link"

export default function Icon({ src, alt, href }: { src: string, alt: string, href: string }) {
    return (
        <Link href={href}>
            <img src={src} alt={alt} className="w-10 h-10 hover:scale-110 transition-all duration-300 mx-4" />
        </Link>
    )
}