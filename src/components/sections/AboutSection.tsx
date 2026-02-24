export default function AboutSection() {
  return (
    <section className="px-6 py-20 lg:px-20 bg-black hand-drawn-border" id="about">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden border-4 border-white bg-white p-8 md:p-12 text-black hand-drawn-border">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 h-40 w-40 opacity-10">
            <span className="material-symbols-outlined text-[10rem]">fingerprint</span>
          </div>
          <div className="relative flex flex-col md:flex-row gap-10">
            <div className="flex flex-col items-center gap-4">
              <div className="h-48 w-48 rounded-2xl border-4 border-primary/40 bg-slate-800 overflow-hidden">
                <div className="h-full w-full bg-cover bg-center" data-alt="Anime portrait of the creative professional" style={{ backgroundImage: 'url("assets/images/sub-avatar.png")' }}></div>
              </div>
              <div className="text-center">
                <p className="font-bold text-black uppercase tracking-tighter">Rank</p>
                <p className="text-xl font-black">ENGINEER CLASS</p>
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <div>
                <h2 className="text-4xl font-black uppercase text-black">Character Profile</h2>
                <p className="text-xl font-bold">Class: Full-Stack Engineer</p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <p className="font-bold text-black uppercase tracking-tighter">Experience</p>
                  <p>2+ Years Active</p>
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-black uppercase tracking-tighter">Location</p>
                  <p>Vietnam, DaNang</p>
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-black uppercase tracking-tighter">Specialty</p>
                  <p>Frontend Developer</p>
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-black uppercase tracking-tighter">Alignment</p>
                  <p>Chaotic Good Formatted</p>
                </div>
              </div>
              <div className="border-t border-primary/20 pt-6">
                <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                  Born from the intersection of logical problem-solving and modern web standards, I build digital bridges between complex requirements and scalable solutions. My mission is to craft systems that don&apos;t just work—they perform flawlessly. When I&apos;m not writing code, you&apos;ll find me exploring software architectures or diving deep into the latest tech frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}