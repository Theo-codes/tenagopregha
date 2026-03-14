"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import SectionLabel from "@/components/SectionLabel";

import {
  HOME_FLOATING_CARDS as FLOATING_CARDS,
  HOME_SKILLS as SKILLS,
  HOME_PROJECTS as PROJECTS,
  SOCIAL_LINKS as CONTACTS,
} from "@/lib/data";

// Helper component for animating skill bars when they enter viewport
function SkillBar({ skill }: { skill: typeof SKILLS[0] }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(skill.percent);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [skill.percent]);

  return (
    <div className="mb-6" ref={ref}>
      <div className="flex justify-between font-dm-mono text-rust text-[0.7rem] uppercase tracking-widest mb-2">
        <span>{skill.name}</span>
        <span>{width}%</span>
      </div>
      <div className="h-[3px] w-full bg-black/40 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-rust to-rust rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* SECTION 1: Hero */}
      <section className="relative min-h-screen pt-24 pb-12 px-6 md:px-12 max-w-[1400px] mx-auto flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="flex flex-col items-start z-10 w-full">
            <RevealOnScroll delay={0}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-white/20 inline-block"></span>
                <span className="font-dm-mono text-white/40 text-sm uppercase tracking-widest">
                  Available for opportunities
                </span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <h1 className="font-playfair font-black text-[clamp(4rem,8vw,7rem)] leading-[0.9] text-white/90 tracking-tight mb-4">
                Theophilus <span className="italic text-rust">Tena.</span> Gopregha
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <p className="font-playfair italic text-xl md:text-2xl text-white/40 mb-10 max-w-lg">
                Products That Think. Interfaces That Feel.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={300} className="w-full">
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Link
                  href="/work"
                  className="font-dm-mono text-xs uppercase tracking-[0.2em] bg-white text-[#0A0A0A] py-4 px-8 text-center hover:bg-rust hover:text-white transition-all duration-300 transform hover:-translate-y-[2px] block w-full sm:w-auto"
                >
                  See My Work
                </Link>
                <Link
                  href="/contact"
                  className="font-dm-mono text-xs uppercase tracking-[0.2em] border border-white/20 text-white/90 py-4 px-8 text-center hover:border-rust hover:text-rust transition-all duration-300 transform hover:-translate-y-[2px] block w-full sm:w-auto"
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column (Hidden on Mobile) */}
          <div className="hidden md:flex flex-col relative w-full items-center justify-center gap-8">
            {/* Image Section */}
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Subtle Glow behind image */}
              <div className="absolute w-[60%] h-[60%] bg-rust/20 blur-[100px] rounded-full animate-pulse" />

              {/* Hero Image Container */}
              <RevealOnScroll delay={400} className="relative z-0 w-[80%] h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
                <div className="relative w-full h-full overflow-hidden border border-white/5 shadow-2xl">
                  <Image
                    src="/mypic.png"
                    alt="Tena Gopregha"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                {/* Decorative Frame Element */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-rust" />
              </RevealOnScroll>
            </div>

            {/* Horizontal Cards Section */}
            <RevealOnScroll delay={600} className="w-full">
              <div className="flex flex-row flex-wrap justify-center gap-6 z-10 px-4">
                {FLOATING_CARDS.map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-[#1A1A1A] border border-white/10 px-6 py-4 shadow-[4px_4px_0_var(--rust)] transition-transform hover:-translate-y-1 duration-300"
                  >
                    <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-rust animate-pulse" />
                    <p className="font-dm-mono text-[0.6rem] text-white/40 uppercase tracking-wider mb-1">
                      {card.label}
                    </p>
                    <p className="font-playfair font-semibold text-white/90 text-lg whitespace-nowrap">
                      {card.value}
                    </p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-6 md:left-12 flex items-center gap-4">
          <p className="font-dm-mono text-xs text-white/40 uppercase tracking-[0.2em]">Scroll to explore</p>
          <div className="w-12 h-[1px] bg-white/10 overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full w-full bg-white/40 animate-[translateX_2s_ease-in-out_infinite] -translate-x-full" />
          </div>
        </div>
      </section>

      {/* SECTION 2: About */}
      <section id="about" className="bg-[#000000] text-white/90 py-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="flex flex-col">
            <RevealOnScroll>
              <SectionLabel text="About me" light />
              <h2 className="font-playfair font-black text-4xl md:text-5xl mt-6 mb-8 leading-tight">
                Designer who builds. Developer who <span className="italic text-rust">thinks.</span>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <div className="font-playfair text-[#d4a373] text-lg leading-[1.8] space-y-6">
                <p>
                  I&apos;m a multidisciplinary creator passionate about building digital experiences that don&apos;t just function, but resonate. My background in UI/UX allows me to craft visual systems that earn trust, while my frontend engineering skills let me bring those designs to life without compromise.
                </p>
                <p>
                  Whether I&apos;m mapping out user journeys in Figma or obsessing over the perfect CSS lerp animation in Next.js, I treat every pixel as an opportunity to delight. I bring a strategic product management lens to ensure what we build actually solves the right problems.
                </p>
              </div>
            </RevealOnScroll>
          </div>

          <div className="flex flex-col justify-center mt-8 md:mt-0">
            <RevealOnScroll delay={200}>
              {SKILLS.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 3: Work Preview */}
      <section id="work" className="bg-[#0A0A0A] py-24 px-2 md:px-12">
        <div className="max-w-[1400px] mx-auto mb-16 px-4 md:px-0">
          <RevealOnScroll>
            <SectionLabel text="Featured work" />
            <h2 className="font-playfair font-black text-4xl md:text-6xl text-white/90 mt-6">
              Projects I&apos;ve <span className="italic text-rust">shipped</span>
            </h2>
          </RevealOnScroll>
        </div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-white/5 border-y border-white/10">
          {PROJECTS.map((project, idx) => (
            <RevealOnScroll key={project.name} delay={idx * 50}>
              <Link
                href={project.url}
                target={project.url.startsWith("http") ? "_blank" : "_self"}
                rel={project.url.startsWith("http") ? "noopener noreferrer" : ""}
                className={`group relative flex flex-col h-full min-h-[300px] p-8 overflow-hidden bg-[#0A0A0A] text-white/90 ${project.featured ? "md:col-span-2 bg-[#1A1A1A]" : ""
                  }`}
              >
                {/* Number & Tags */}
                <div className="flex justify-between items-start z-10 mb-auto">
                  <span className="font-dm-mono text-sm text-white/40">{project.num}</span>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {project.tags.map(tag => (
                      <span key={tag} className="font-dm-mono text-[0.6rem] uppercase tracking-wider border border-rust text-rust px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="z-10 mt-12 transition-transform duration-500 group-hover:translate-x-2">
                  <h3 className="font-playfair font-bold text-3xl mb-3 text-white/90 group-hover:text-white transition-colors">
                    {project.name}
                  </h3>
                  <p className="font-playfair text-[#d4a373] text-lg max-w-sm group-hover:text-[#F3D4B0] transition-colors">
                    {project.desc}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-rust/90 to-terracotta/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Arrow Icon */}
                <div className="absolute bottom-8 right-8 z-10 text-rust group-hover:text-white transform transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                    <line x1="5" y1="19" x2="19" y2="5"></line>
                    <polyline points="9 5 19 5 19 15"></polyline>
                  </svg>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>

        <div className="max-w-[1400px] mx-auto mt-16 px-4 md:px-0 flex justify-center">
          <RevealOnScroll>
            <Link
              href="/work"
              className="group inline-flex items-center gap-4 font-dm-mono text-xs uppercase tracking-[0.2em] border border-white/20 text-white/90 py-4 px-8 hover:bg-white hover:text-[#0A0A0A] transition-all duration-300"
            >
              View All Projects
              <span className="transform transition-transform group-hover:translate-x-2">→</span>
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 4: Contact Preview */}
      <section id="contact" className="bg-[#050505] py-24 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col">
            <RevealOnScroll>
              <SectionLabel text="Contact" />
              <h2 className="font-playfair font-black text-5xl md:text-7xl text-white/90 mt-6 mb-8 leading-[0.9] tracking-tight">
                Let&apos;s build something <span className="italic text-rust">great.</span>
              </h2>
              <p className="font-playfair text-xl text-white/40 mb-12 max-w-md leading-relaxed">
                Whether you have a project in mind, need technical strategy, or just want to chat about design—my inbox is open.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div className="flex flex-col gap-2">
                {CONTACTS.map((contact) => (
                  <a
                    key={contact.platform}
                    href={contact.url}
                    target={contact.url.startsWith("http") ? "_blank" : "_self"}
                    rel={contact.url.startsWith("http") ? "noopener noreferrer" : ""}
                    className="group flex items-center gap-6 py-4 border-b border-white/10 hover:border-white/0 transition-all duration-300"
                  >
                    <div className="text-xl w-8 text-center">{contact.icon}</div>
                    <div className="flex-grow flex flex-col md:flex-row md:items-center justify-between transform transition-transform duration-300 group-hover:translate-x-2">
                      <span className="font-dm-mono text-xs uppercase tracking-widest text-white/90 font-bold">
                        {contact.platform}
                      </span>
                      <span className="font-playfair text-white/40 italic group-hover:text-rust transition-colors">
                        {contact.handle}
                      </span>
                    </div>
                    {/* Orange left border indicator on hover */}
                    <div className="absolute left-[-24px] h-8 w-1 bg-rust opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          <div className="hidden md:flex flex-col items-end justify-center">
            <RevealOnScroll delay={200}>
              <div className="relative">
                <span
                  className="font-playfair font-black italic text-[20rem] leading-none select-none"
                  style={{ color: "transparent", WebkitTextStroke: "2px rgba(255,255,255,0.1)" }}
                >
                  T.
                </span>
                <p className="absolute bottom-12 right-0 font-dm-mono text-sm uppercase tracking-[0.2em] text-rust whitespace-nowrap text-right bg-[#0A0A0A]/80 px-4 py-2 backdrop-blur-sm">
                  Tena Gopregha<br /><span className="text-white/40 text-xs">Lagos, Nigeria</span>
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
