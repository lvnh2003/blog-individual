export default function ContactSection() {
    return (
        <section className="px-6 py-20 lg:px-20 bg-white border-t-2 border-black hand-drawn-border" id="contact">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-5xl font-black leading-tight mb-6">ESTABLISH <br /><span className="text-black border-2 border-black px-2 inline-block">COMMUNICATION</span></h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
                            Ready to start a new mission together? Send a transmission or connect through the neural network.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <span className="material-symbols-outlined">mail</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase text-primary">Secure Email</p>
                                    <p className="text-lg font-bold">hq@neodesign.studio</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <span className="material-symbols-outlined">hub</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase text-primary">Social Channels</p>
                                    <div className="flex gap-4 mt-1">
                                        <a className="font-bold hover:text-primary transition-colors" href="#">Twitter</a>
                                        <a className="font-bold hover:text-primary transition-colors" href="#">GitHub</a>
                                        <a className="font-bold hover:text-primary transition-colors" href="#">Behance</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-8 border-4 border-black">
                        <form action="#" className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-primary">Operator Name</label>
                                <input className="w-full border-2 border-black bg-white px-4 py-3 focus:bg-black focus:text-white hand-drawn-border" placeholder="Enter your callsign" type="text" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-primary">Return Link</label>
                                <input className="w-full border-2 border-black bg-white px-4 py-3 focus:bg-black focus:text-white hand-drawn-border" placeholder="you@nebula.com" type="email" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-primary">The Briefing</label>
                                <textarea className="w-full border-2 border-black bg-white px-4 py-3 focus:bg-black focus:text-white hand-drawn-border" placeholder="How can we conquer the galaxy?" rows={4}></textarea>
                            </div>
                            <button className="w-full bg-black py-4 text-lg font-black text-white border-2 border-black transition-all hover:bg-white hover:text-black marker-btn">
                                SEND TRANSMISSION
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
