import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b-2 border-black bg-white px-6 md:px-20 py-4 hand-drawn-border">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center bg-black text-white">
                        <span className="material-symbols-outlined">bolt</span>
                    </div>
                    <h2 className="text-xl font-bold tracking-tight">Nguyen Ngoc Lanh</h2>
                </div>
                <nav className="hidden md:flex items-center gap-10">
                    <Link className="text-sm font-medium hover:text-primary transition-colors" href="#projects">Projects</Link>
                    <Link className="text-sm font-medium hover:text-primary transition-colors" href="#skills">Arsenal</Link>
                    <Link className="text-sm font-medium hover:text-primary transition-colors" href="#about">Profile</Link>
                    <Link className="text-sm font-medium hover:text-primary transition-colors" href="#contact">Comm Link</Link>
                </nav>
                <button className="bg-black px-6 py-2.5 text-sm font-bold text-white hover:bg-white hover:text-black border-2 border-black transition-all marker-btn">
                    Hire Me
                </button>
                <div className="hidden lg:block absolute left-4 top-14 text-2xl rotate-45 opacity-50">➶</div>
            </div>
        </header>
    );
}
