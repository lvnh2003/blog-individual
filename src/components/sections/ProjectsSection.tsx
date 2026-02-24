export default function ProjectsSection() {
    return (
        <section className="bg-black text-white px-6 py-20 lg:px-20 border-white hand-drawn-border" id="projects">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                    <div>
                        <h2 className="text-3xl font-black uppercase tracking-widest text-white">Missions</h2>
                        <p className="text-4xl font-bold">Featured Operations</p>
                    </div>
                    <a className="flex items-center gap-2 font-bold text-white border-b-2 border-white" href="#">VIEW ARCHIVE <span className="material-symbols-outlined">arrow_forward</span></a>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Project Card 1 */}
                    <a href="https://vn-group.remoq.jp/" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-background-light dark:bg-background-dark transition-all hover:-translate-y-2 hover:border-primary block">
                        <div className="aspect-video w-full overflow-hidden bg-white">
                            <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url("/assets/images/remoq-demo.png")' }}>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="mb-3 flex items-center gap-2">
                                <span className="border border-primary px-2 py-1 text-[10px] font-bold text-primary dark:border-white dark:text-white">app</span>
                                <span className="border border-primary px-2 py-1 text-[10px] font-bold text-primary dark:border-white dark:text-white">Web App</span>
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-black dark:text-white">REMOQ GROUP</h3>
                            <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">Tạo quiz remote bằng hình thức đồng bộ mà không cần cài đặt! Trò chơi đố vui trên Website.</p>
                            <div className="flex gap-2">
                                <span className="border border-primary px-2 py-1 text-[10px] font-bold text-primary dark:border-white dark:text-white">FRONTEND</span>
                                <span className="border border-primary px-2 py-1 text-[10px] font-bold text-primary dark:border-white dark:text-white">WEBSOCKET</span>
                            </div>
                        </div>
                    </a>
                    {/* Project Card 2 */}
                    <a href="https://discal.jp/" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-background-light dark:bg-background-dark transition-all hover:-translate-y-2 hover:border-primary block">
                        <div className="aspect-video w-full overflow-hidden bg-white">
                            <div className="h-full w-full bg-cover bg-top transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url("/assets/images/discal-demo.png")' }}>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="mb-3 flex items-center gap-2">
                                <span className="border border-primary px-2 py-1 text-[10px] font-bold text-primary dark:border-white dark:text-white">system</span>
                                <span className="border border-primary px-2 py-1 text-[10px] font-bold text-primary dark:border-white dark:text-white">Platform</span>
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-black dark:text-white">Discal</h3>
                            <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">Nền tảng hệ thống quản lý lịch trình, phân công công việc chuyên nghiệp.</p>
                            <div className="flex gap-2">
                                <span className="border border-primary px-2 py-1 text-[10px] font-bold text-primary dark:border-white dark:text-white">FRONTEND</span>
                                <span className="border border-primary px-2 py-1 text-[10px] font-bold text-primary dark:border-white dark:text-white">SYSTEM</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
