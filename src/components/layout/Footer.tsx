import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t-4 border-black bg-black text-white px-6 py-12 lg:px-20 text-center hand-drawn-border">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">bolt</span>
                        <span className="text-xl font-bold">Nguyen Ngoc Lanh</span>
                    </div>
                    <p className="text-sm text-slate-500 max-w-md">
                        Built with passion and powered by creativity. All rights reserved. © 2024 Digital Vanguard Systems.
                    </p>
                    <div className="flex gap-8 text-xs font-bold uppercase tracking-widest opacity-50">
                        <Link className="hover:opacity-100 transition-opacity" href="#">Privacy Protocol</Link>
                        <Link className="hover:opacity-100 transition-opacity" href="#">Terms of Engagement</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
