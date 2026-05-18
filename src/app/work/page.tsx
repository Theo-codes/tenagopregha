"use client";

import { useState } from "react";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import SectionLabel from "@/components/SectionLabel";
import CountUp from "@/components/CountUp";

import { WORK_PROJECTS as PROJECTS, WORK_FILTERS as FILTERS, PROCESS } from "@/lib/data";

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = PROJECTS.filter(
    (p) => activeFilter === "All" || p.tags.includes(activeFilter)
  );

  return (
    <div className="pt-20">
      {/* SECTION 1: Page Hero */}
      <section className="relative bg-[#141410] text-white pt-40 md:pt-40 pb-20 px-8 md:px-[4rem] min-h-[60vh] flex flex-col justify-center">
        <div className="max-w-[1100px] mx-auto w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="flex flex-col">
            <RevealOnScroll>
              <div className="mb-6">
                <span className="font-dm-mono text-rust text-[0.7rem] uppercase tracking-[0.3em]">
                  [ Selected projects ]
                </span>
              </div>
              <h1 className="font-barlow font-black text-[clamp(4rem,8vw,7rem)] uppercase leading-[0.88] tracking-[-0.01em]">
                Things I&apos;ve <span className="text-rust">built.</span>
              </h1>
            </RevealOnScroll>
          </div>

          {/* Right Column */}
          <div className="flex flex-col mt-8 md:mt-0">
            <RevealOnScroll delay={100}>
              <p className="font-dm-mono text-white/70 text-base md:text-lg mb-12 leading-[1.7]">
                Ten projects across fintech, mobility, AI, proptech, consulting, and beyond — each one a distinct challenge, a real product, and something shipped to the world.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="flex flex-row flex-wrap gap-8 md:gap-12">
                <div className="flex flex-col">
                  <CountUp end={10} suffix="+" className="font-barlow font-black text-rust text-[2.5rem] leading-none mb-2 uppercase" />
                  <span className="font-dm-mono text-white/40 text-xs uppercase tracking-widest">Projects shipped</span>
                </div>
                <div className="flex flex-col">
                  <CountUp end={6} className="font-barlow font-black text-rust text-[2.5rem] leading-none mb-2 uppercase" />
                  <span className="font-dm-mono text-white/40 text-xs uppercase tracking-widest">Industries</span>
                </div>
                <div className="flex flex-col">
                  <CountUp end={3} suffix="y+" className="font-barlow font-black text-rust text-[2.5rem] leading-none mb-2 uppercase" />
                  <span className="font-dm-mono text-white/40 text-xs uppercase tracking-widest">In production</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 2: Filter Bar */}
      <section className="sticky top-[80px] z-50 bg-[#0D0D0A] border-b border-white/10 px-6 md:px-12 py-4 shadow-sm">
        <div className="max-w-[1100px] mx-auto w-full flex flex-col md:flex-row items-start md:items-center gap-4">
          <span className="font-dm-mono text-xs uppercase tracking-widest text-white/40 whitespace-nowrap">
            Filter:
          </span>
          <div className="flex flex-row flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`font-dm-mono text-xs uppercase tracking-widest px-4 py-2 border transition-colors duration-300 ${activeFilter === f
                    ? "bg-white text-[#141410] border-white"
                    : "bg-transparent text-white/90 border-white/20 hover:border-white"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Projects */}
      <section className="bg-[#141410] pb-24">
        <div className="max-w-[1100px] mx-auto w-full px-4 md:px-0 flex flex-col gap-12 pt-12">
          {filteredProjects.length === 0 ? (
            <div className="py-24 text-center text-white/40 font-dm-mono uppercase tracking-widest">
              No projects found for this filter.
            </div>
          ) : (
            filteredProjects.map((project, idx) => (
              <div key={project.num} className="w-full bg-[#1A1A14] text-white min-h-[500px] grid grid-cols-1 lg:grid-cols-2 group">

                {/* Left: Decorative or Cover Image */}
                <div className="relative flex items-center justify-center overflow-hidden min-h-[300px] lg:min-h-full border-b lg:border-b-0 lg:border-r border-white/10 p-12">
                  {(project as any).coverImage ? (
                    <img
                      src={(project as any).coverImage}
                      alt={`${project.title} Cover`}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <>
                      <div className="absolute w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,var(--rust)_0%,transparent_60%)] opacity-10 group-hover:opacity-20 transition-opacity duration-700 animate-pulse" />
                      <span
                        className="font-barlow font-black uppercase text-[5rem] md:text-[8rem] lg:text-[10rem] leading-none select-none z-10 transform -rotate-12 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6"
                        style={{ color: "transparent", WebkitTextStroke: "2px rgba(255,255,255,0.08)" }}
                      >
                        {project.title}
                      </span>
                    </>
                  )}
                </div>

                {/* Right: Content */}
                <div className="bg-[#141410] p-8 md:p-12 flex flex-col justify-center">
                  <RevealOnScroll delay={idx * 50}>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-white/10 pb-4">
                      <span className="font-dm-mono text-xs uppercase tracking-widest text-white/40">
                        Project · {project.num}
                      </span>
                      <div className="flex gap-2 flex-wrap">
                        {project.tags.map((tag) => (
                          <span key={tag} className="font-dm-mono text-[0.6rem] uppercase tracking-wider border border-white/20 text-white/60 px-2 py-1">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h2 className="font-barlow font-black text-4xl md:text-5xl text-white uppercase leading-[0.9] mb-6">
                      {project.title}
                    </h2>

                    <p className="font-dm-mono text-white/70 text-[0.9rem] leading-[1.7] mb-12 max-w-lg">
                      {project.desc}
                    </p>

                    {project.caseStudy ? (
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-4 font-dm-mono text-xs uppercase tracking-[0.2em] border border-white/20 text-white hover:bg-white hover:text-[#141410] py-4 px-8 transition-colors duration-300 w-max group/btn"
                      >
                        View Case Study
                        <span className="transform group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                      </Link>
                    ) : (
                      <a
                        href={project.url}
                        target={project.url.startsWith("http") ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 font-dm-mono text-xs uppercase tracking-[0.2em] border border-white/20 text-white hover:bg-white hover:text-[#141410] py-4 px-8 transition-colors duration-300 w-max group/btn"
                      >
                        Visit Website
                        <span className="transform group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                      </a>
                    )}
                  </RevealOnScroll>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* SECTION 4: Process */}
      <section className="bg-[#0D0D0A] py-24 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto w-full">
          <div className="mb-16">
            <RevealOnScroll>
              <SectionLabel text="My process" />
              <h2 className="font-barlow font-black text-4xl md:text-5xl text-white uppercase leading-[0.9] mt-6">
                How it gets <span className="text-rust">built.</span>
              </h2>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((step, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                <div className="relative bg-white/5 border border-white/5 p-8 h-full min-h-[250px] overflow-hidden group hover:bg-white/10 transition-colors">
                  <div className="absolute top-4 right-6 font-barlow font-black text-6xl text-white/5 group-hover:text-rust/10 transition-colors select-none">
                    {step.num}
                  </div>
                  <h3 className="font-barlow font-bold text-xl text-white uppercase mb-4 z-10 relative">
                    {step.title}
                  </h3>
                  <p className="font-dm-mono text-white/70 text-[0.875rem] leading-relaxed z-10 relative">
                    {step.desc}
                  </p>
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-rust scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-out" />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA Strip */}
      <section className="bg-rust py-16 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <RevealOnScroll>
            <h2 className="font-barlow font-black text-3xl md:text-4xl text-white uppercase leading-[0.9]">
              Got a project that needs building?
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <Link
              href="/contact"
              className="inline-block font-dm-mono text-sm uppercase tracking-[0.2em] bg-white text-rust py-4 px-10 hover:bg-[#141410] hover:text-white transition-colors duration-300"
            >
              Start a project
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
