export default function HeroSection() {
  return (
    <section className="relative px-6 py-12 md:py-24 lg:px-20 bg-white border-black hand-drawn-border">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-bold text-primary">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              SYSTEM ONLINE: READY TO CREATE
            </div>
            <h1 className="text-5xl font-black leading-tight tracking-tighter md:text-7xl lg:text-8xl">
              UNLEASHING <span className="text-black scribble-underline">CREATIVE</span> POWER
            </h1>
            <p className="max-w-xl text-lg text-slate-600 dark:text-slate-400">
              Software Engineer building robust, scalable applications. Transforming complex problems into elegant, performant code.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-black px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-black border-2 border-black marker-btn">
                View My Code <span className="material-symbols-outlined">rocket_launch</span>
              </button>
              <button className="flex items-center gap-2 border-2 border-black px-8 py-4 text-lg font-bold text-black transition-all hover:bg-black hover:text-white marker-btn">
                Download CV
              </button>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative aspect-square w-full max-w-[500px] mx-auto">
              <div className="absolute -inset-4 rounded-full bg-primary/20 blur-3xl"></div>
              <div className="relative h-full w-full overflow-hidden border-4 border-black bg-white">
                <div className="h-full w-full bg-cover bg-center" data-alt="Dynamic anime character illustration in a futuristic setting" style={{ backgroundImage: 'url("assets/images/avatar.png")' }}></div>
              </div>
              {/* Floating Badges */}
              <div className="absolute -right-4 top-1/4 rounded-lg bg-background-light p-4 shadow-xl border border-primary/20">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">terminal</span>
                  <span className="font-bold">Engineer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}