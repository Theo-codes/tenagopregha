"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import SectionLabel from "@/components/SectionLabel";

import {
  HOME_SKILLS as SKILLS,
  HOME_PROJECTS as PROJECTS,
  SOCIAL_LINKS as CONTACTS,
} from "@/lib/data";

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
      <div className="h-[3px] w-full bg-white/10 overflow-hidden">
        <div
          className="h-full bg-rust transition-all duration-1000 ease-out"
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
      <section className="relative min-h-screen px-6 md:px-12 flex flex-col justify-center items-center text-center">
        <div className="max-w-[1100px] mx-auto w-full flex flex-col items-center">
          <RevealOnScroll delay={0}>
            <div className="mb-6">
              <span className="font-dm-mono text-rust text-[0.7rem] uppercase tracking-[0.3em]">
                [ Available for opportunities ]
              </span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <h1 className="font-barlow font-black text-[clamp(4.375rem,11vw,9.875rem)] uppercase leading-[0.88] text-white tracking-[-0.02em] mb-8">
              <span className="group relative inline-block">
                <span className="wavy-underline cursor-default">Clean</span>
                <div className="absolute left-0 top-[105%] w-[300px] bg-[#F0EEE6] text-[#141410] p-6 z-50 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-2xl">
                  <p className="font-dm-mono text-[0.6rem] uppercase tracking-[0.3em] text-rust mb-4">
                    What does Clean mean?
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      "Design systems that scale without breaking",
                      "Interfaces that feel inevitable, not forced",
                      "Visual hierarchy that guides, never confuses",
                      "Every pixel placed with intention",
                    ].map((item, i) => (
                      <li key={i} className="font-dm-mono text-[0.8rem] flex items-start gap-2 normal-case tracking-normal leading-snug">
                        <span className="text-rust shrink-0 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </span>{" "}Design, <span className="text-rust">More Impact,</span> Less Friction.
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <p className="font-dm-mono text-base text-white/70 mb-12 max-w-[580px] leading-[1.75] text-center">
              A multidisciplinary product designer and frontend engineer based in Lagos. I bridge the gap between strategic thinking and pixel-perfect execution — building digital products that don&apos;t just look good, but solve real problems.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/work"
                className="font-dm-mono text-xs uppercase tracking-[0.2em] bg-white text-[#141410] py-4 px-10 text-center hover:bg-rust hover:text-white transition-all duration-300"
              >
                See My Work
              </Link>
              <Link
                href="/contact"
                className="font-dm-mono text-xs uppercase tracking-[0.2em] border border-white/20 text-white/90 py-4 px-10 text-center hover:border-rust hover:text-rust transition-all duration-300"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </RevealOnScroll>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-6 md:left-12 flex items-center gap-4">
          <p className="font-dm-mono text-xs text-white/40 uppercase tracking-[0.2em]">Scroll to explore</p>
          <div className="w-12 h-[1px] bg-white/10 overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full w-full bg-white/40 -translate-x-full" />
          </div>
        </div>
      </section>

      {/* SECTION 2: About */}
      <section id="about" className="bg-[#0D0D0A] text-white py-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="flex flex-col">
            <RevealOnScroll>
              <SectionLabel text="About me" />
              <h2 className="font-barlow font-black text-4xl md:text-5xl uppercase leading-[0.9] tracking-[-0.01em] mt-6 mb-8">
                Designer who builds. Developer who <span className="text-rust">thinks.</span>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <div className="font-dm-mono text-white/70 text-[0.9rem] leading-[1.7] space-y-6">
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
      <section id="work" className="bg-[#141410] py-24 px-2 md:px-12">
        <div className="max-w-[1400px] mx-auto mb-16 px-4 md:px-0">
          <RevealOnScroll>
            <SectionLabel text="Featured work" />
            <h2 className="font-barlow font-black text-4xl md:text-6xl text-white uppercase leading-[0.9] mt-6">
              Projects I&apos;ve <span className="text-rust">shipped</span>
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
                className={`group relative flex flex-col h-full min-h-[300px] p-8 overflow-hidden bg-[#141410] text-white ${project.featured ? "md:col-span-2 bg-[#1A1A14]" : ""}`}
              >
                <div className="flex justify-between items-start z-10 mb-auto">
                  <span className="font-dm-mono text-sm text-white/40">{project.num}</span>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {project.tags.map(tag => (
                      <span key={tag} className="font-dm-mono text-[0.6rem] uppercase tracking-wider border border-rust text-rust px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="z-10 mt-12 transition-transform duration-500 group-hover:translate-x-2">
                  <h3 className="font-barlow font-bold text-2xl mb-3 text-white uppercase group-hover:text-white transition-colors">
                    {project.name}
                  </h3>
                  <p className="font-dm-mono text-white/70 text-sm max-w-sm group-hover:text-white/90 transition-colors">
                    {project.desc}
                  </p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-rust/90 to-terracotta/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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
              className="group inline-flex items-center gap-4 font-dm-mono text-xs uppercase tracking-[0.2em] border border-white/20 text-white/90 py-4 px-8 hover:bg-white hover:text-[#141410] transition-all duration-300"
            >
              View All Projects
              <span className="transform transition-transform group-hover:translate-x-2">→</span>
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 4: Contact Preview */}
      <section id="contact" className="bg-[#0D0D0A] py-24 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col">
            <RevealOnScroll>
              <SectionLabel text="Contact" />
              <h2 className="font-barlow font-black text-5xl md:text-7xl text-white uppercase leading-[0.88] tracking-[-0.01em] mt-6 mb-8">
                Let&apos;s build something <span className="text-rust">great.</span>
              </h2>
              <p className="font-dm-mono text-base text-white/70 mb-12 max-w-md leading-[1.7]">
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
                      <span className="font-dm-mono text-xs uppercase tracking-widest text-white font-bold">
                        {contact.platform}
                      </span>
                      <span className="font-dm-mono text-white/50 group-hover:text-rust transition-colors">
                        {contact.handle}
                      </span>
                    </div>
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
                  className="font-barlow font-black uppercase text-[20rem] leading-none select-none"
                  style={{ color: "transparent", WebkitTextStroke: "2px rgba(255,255,255,0.07)" }}
                >
                  T.
                </span>
                <p className="absolute bottom-12 right-0 font-dm-mono text-sm uppercase tracking-[0.2em] text-rust whitespace-nowrap text-right bg-[#141410]/80 px-4 py-2 backdrop-blur-sm">
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
