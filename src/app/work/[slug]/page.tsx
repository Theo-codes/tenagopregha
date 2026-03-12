import { notFound } from "next/navigation";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import SectionLabel from "@/components/SectionLabel";
import { WORK_PROJECTS } from "@/lib/data";

export function generateStaticParams() {
  return WORK_PROJECTS.filter(p => p.caseStudy).map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = WORK_PROJECTS.find((p) => p.slug === slug);

  if (!project || !project.caseStudy) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <div className="pt-20 bg-[#0A0A0A] min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#000000] text-white/90 pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto w-full">
          <RevealOnScroll>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8">
                <div>
                  <Link href="/work" className="font-dm-mono text-xs uppercase tracking-widest text-white/40 hover:text-rust transition-colors mb-6 inline-flex items-center gap-2 border border-white/10 px-4 py-2 rounded-full">
                    <span>←</span> Back to projects
                  </Link>
                  <h1 className="font-playfair font-black text-5xl md:text-7xl lg:text-8xl mt-8">
                    {project.title}
                  </h1>
                </div>
                <div className="flex flex-col flex-wrap gap-2 md:items-end w-full md:w-auto mt-4 md:mt-0">
                  <span className="font-dm-mono text-[0.6rem] uppercase tracking-widest text-white/40 mb-2">Role</span>
                  <span className="font-dm-mono text-xs md:text-sm text-rust border-b border-rust/30 pb-1">Product Designer</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-4">
                {project.tags.map(tag => (
                  <span key={tag} className="font-dm-mono text-[0.6rem] uppercase tracking-wider border border-white/20 text-white/60 px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Overview & Problem */}
      <section className="py-24 px-6 md:px-12 bg-[#0A0A0A]">
        <div className="max-w-[1100px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12">

          <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-12">
            <RevealOnScroll>
              <SectionLabel text="The Problem" />
              <p className="font-playfair text-white/40 text-xl leading-relaxed mt-8">
                {caseStudy.problem}
              </p>
            </RevealOnScroll>
          </div>

          <div className="md:col-span-7 lg:col-span-7 lg:col-start-6 flex flex-col gap-12 border-t md:border-t-0 md:border-l border-white/10 pt-12 md:pt-0 md:pl-12">
            <RevealOnScroll delay={100}>
              <SectionLabel text="The Solution" />
              <p className="font-playfair text-white/90 text-2xl leading-relaxed mt-8 font-medium">
                {caseStudy.solution}
              </p>
            </RevealOnScroll>
          </div>

        </div>
      </section>

      {/* Personas */}
      <section className="bg-[#050505] py-24 px-6 md:px-12 border-y border-white/10">
        <div className="max-w-[1100px] mx-auto w-full">
          <RevealOnScroll>
            <SectionLabel text="Target Personas" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {caseStudy.personas.map((persona, idx) => (
                <div key={idx} className="bg-[#1A1A1A] border border-white/10 p-8 md:p-12 flex flex-col gap-6 group hover:shadow-sm transition-shadow">
                  <span className="font-playfair font-black text-4xl text-rust/80 group-hover:text-rust transition-colors">
                    0{idx + 1}
                  </span>
                  <p className="font-dm-mono text-sm leading-relaxed text-white/90">
                    {persona}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Visual Design placeholders */}
      <section className="py-24 px-6 md:px-12 bg-[#0A0A0A]">
        <div className="max-w-[1100px] mx-auto w-full flex flex-col gap-32">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 border-b border-white/10 pb-8">
              <h3 className="font-playfair font-bold text-3xl md:text-5xl text-white/90">
                Low Fidelity & Wireframes
              </h3>
            </div>
            {/* Concept Placeholder, Video or Miro Embed */}
            {(caseStudy as any).videoEmbedUrl ? (
              <div className="w-full h-[500px] md:h-[700px] bg-[#000000] border border-white/10 relative overflow-hidden flex items-center justify-center">
                <video
                  src={(caseStudy as any).videoEmbedUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (caseStudy as any).miroEmbedUrl ? (
              <div className="w-full h-[500px] md:h-[700px] bg-[#1A1A1A] border border-white/10 relative overflow-hidden">
                <iframe
                  src={(caseStudy as any).miroEmbedUrl}
                  frameBorder="0"
                  scrolling="no"
                  allow="fullscreen; clipboard-read; clipboard-write"
                  allowFullScreen
                  className="w-full h-full absolute inset-0"
                ></iframe>
              </div>
            ) : (
              <div className="w-full h-[400px] md:h-[600px] bg-[#1A1A1A]/50 flex flex-col items-center justify-center border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#FFF 1px, transparent 1px), linear-gradient(90deg, #FFF 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                <p className="font-dm-mono text-xs uppercase tracking-widest text-white/40 bg-[#000000] px-4 py-2 border border-white/10 z-10 text-center">
                  [ Early structural explorations loading... ]
                </p>
              </div>
            )}
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 border-b border-white/10 pb-8">
              <h3 className="font-playfair font-bold text-3xl md:text-5xl text-white/90">
                High Fidelity & Components
              </h3>
            </div>
            {/* Concept Placeholder or High-Fi Image */}
            {(caseStudy as any).highFiImage ? (
              <div className="w-full flex items-center justify-center overflow-hidden border border-white/10 rounded-xl bg-[#000000]">
                <img
                  src={(caseStudy as any).highFiImage}
                  alt={`${project.title} High Fidelity Interface`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ) : (
              <div className="w-full h-[500px] md:h-[700px] bg-[#000000] flex items-center justify-center overflow-hidden relative group border border-white/10">
                <div className="absolute w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,var(--rust)_0%,transparent_60%)] opacity-20 animate-pulse" />
                <span
                  className="font-playfair font-black italic text-[3rem] md:text-[6rem] lg:text-[8rem] leading-none select-none z-10 transform -rotate-12 group-hover:scale-110 transition-transform duration-700 text-center px-4"
                  style={{ color: "transparent", WebkitTextStroke: "2px rgba(255,255,255,0.1)" }}
                >
                  {project.title} Interface
                </span>
              </div>
            )}
          </RevealOnScroll>
        </div>
      </section>

      {/* Impact & Conclusion */}
      <section className="bg-[#0A0A0A] text-white/90 py-32 px-6 md:px-12">
        <div className="max-w-[900px] mx-auto w-full text-center flex flex-col items-center">
          <RevealOnScroll>
            <SectionLabel text="The Impact" light />
            <h2 className="font-playfair font-black text-5xl md:text-6xl lg:text-7xl mt-8 mb-12">
              The <span className="italic text-rust">results.</span>
            </h2>
            <p className="font-playfair text-white/40 text-xl md:text-2xl lg:text-3xl leading-relaxed mb-16">
              {caseStudy.impact}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center w-full">
              <a
                href={project.url}
                target={project.url.startsWith("http") ? "_blank" : "_self"}
                rel={project.url.startsWith("http") ? "noopener noreferrer" : ""}
                className="inline-flex items-center justify-center gap-4 font-dm-mono text-sm uppercase tracking-[0.2em] bg-rust text-[#0A0A0A] hover:bg-white py-4 px-10 transition-colors duration-300 group/btn"
              >
                Visit Live Site
                <span className="transform group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
              </a>
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-4 font-dm-mono text-sm uppercase tracking-[0.2em] border border-white/20 text-white hover:bg-white hover:text-[#0A0A0A] py-4 px-10 transition-colors duration-300"
              >
                Back to Work
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
}
