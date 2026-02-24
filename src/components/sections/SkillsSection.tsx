export default function SkillsSection() {
    return (
        <section className="px-6 py-20 lg:px-20 bg-white border-black hand-drawn-border" id="skills">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <div className="text-4xl mb-2 opacity-60">✎ ✨ ✎</div>
                    <h2 className="text-3xl font-black text-black uppercase italic">Power Levels</h2>
                    <p className="text-4xl font-bold">Tech Stack &amp; Arsenal</p>
                </div>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">code</span> Core Stats
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between mb-1 font-bold">
                                    <span>Frontend Development</span>
                                    <span>95%</span>
                                </div>
                                <div className="h-6 w-full bg-white overflow-hidden border-black hand-drawn-border">
                                    <div className="h-full bg-black" style={{ width: "95%" }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-1 font-bold">
                                    <span>Backend Development</span>
                                    <span>88%</span>
                                </div>
                                <div className="h-6 w-full bg-white overflow-hidden border-black hand-drawn-border">
                                    <div className="h-full bg-black" style={{ width: "88%" }}></div>
                                </div>
                            </div>
                            {/* <div>
                                <div className="flex justify-between mb-1 font-bold">
                                    <span>DevOps &amp; Cloud</span>
                                    <span>72%</span>
                                </div>
                                <div className="h-6 w-full bg-white overflow-hidden border-black hand-drawn-border">
                                    <div className="h-full bg-black" style={{ width: "72%" }}></div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">terminal</span> Tech Mastery
                        </h3>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="flex items-center gap-3 border-2 border-black bg-white p-4 hover:bg-black hover:text-white transition-colors hand-drawn-border">
                                <span className="material-symbols-outlined text-primary">javascript</span>
                                <span className="font-bold">TypeScript</span>
                            </div>
                            <div className="flex items-center gap-3 border-2 border-black bg-white p-4 hover:bg-black hover:text-white transition-colors hand-drawn-border">
                                <span className="material-symbols-outlined text-primary">deployed_code</span>
                                <span className="font-bold">Next.js</span>
                            </div>
                            <div className="flex items-center gap-3 border-2 border-black bg-white p-4 hover:bg-black hover:text-white transition-colors hand-drawn-border">
                                <span className="material-symbols-outlined text-primary">code_blocks</span>
                                <span className="font-bold">Python</span>
                            </div>
                            <div className="flex items-center gap-3 border-2 border-black bg-white p-4 hover:bg-black hover:text-white transition-colors hand-drawn-border">
                                <span className="material-symbols-outlined text-primary">html</span>
                                <span className="font-bold">HTML5</span>
                            </div>
                            <div className="flex items-center gap-3 border-2 border-black bg-white p-4 hover:bg-black hover:text-white transition-colors hand-drawn-border">
                                <span className="material-symbols-outlined text-primary">css</span>
                                <span className="font-bold">CSS / Tailwind</span>
                            </div>
                            <div className="flex items-center gap-3 border-2 border-black bg-white p-4 hover:bg-black hover:text-white transition-colors hand-drawn-border">
                                <span className="material-symbols-outlined text-primary">database</span>
                                <span className="font-bold">PostgreSQL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
