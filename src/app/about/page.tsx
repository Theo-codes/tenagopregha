"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import SectionLabel from "@/components/SectionLabel";
import { ABOUT_SKILLS as SKILLS, VALUES } from "@/lib/data";

export default function AboutPage() {
  const [activeHash, setActiveHash] = useState("origin");

  // Scroll spy for the Story section navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["origin", "approach", "now"];
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold to set active state when section reaches middle of screen
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
            break;
          }
        }
      }

      if (current && current !== activeHash) {
        setActiveHash(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeHash]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    const element = document.getElementById(hash);
    if (element) {
      // Smooth scroll to the element. Optional offset for sticky header if needed.
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-20">
      {/* SECTION 1: Page Hero */}
      <section className="relative bg-[#0A0A0A] text-white/90 pt-40 md:pt-40 pb-20 px-8 md:px-[4rem] min-h-[70vh] flex flex-col justify-center overflow-hidden">
        <div className="max-w-[1100px] mx-auto w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="flex flex-col">
            <RevealOnScroll>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-rust inline-block"></span>
                <span className="font-dm-mono text-rust text-xs uppercase tracking-widest">
                  The person behind the work
                </span>
              </div>
              <h1 className="font-playfair font-black text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.9] tracking-tight">
                About <span className="italic text-rust">Tena.</span>
              </h1>
            </RevealOnScroll>
          </div>

          {/* Right Column */}
          <div className="flex flex-col mt-8 md:mt-0">
            <RevealOnScroll delay={100}>
              <p className="font-playfair italic text-white/40 text-xl md:text-2xl mb-8 leading-snug">
                A Product Designer and frontend developer who believes the best interfaces are the ones that feel inevitable, like they couldn&apos;t have looked any other way.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div className="flex flex-wrap gap-3">
                {["Product Designer", "UI/UX", "Frontend Dev", "Next.js", "Figma", "Lagos, Nigeria", "CS Graduate"].map((tag) => (
                  <span
                    key={tag}
                    className="font-dm-mono text-xs uppercase tracking-wider text-rust border border-rust/30 px-3 py-1.5 rounded-full bg-rust/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Decorative Background Text */}
        <div className="absolute bottom-[-10%] right-[-5%] pointer-events-none select-none overflow-hidden opacity-20">
          <span
            className="font-playfair font-black italic text-[15rem] md:text-[25rem] leading-none"
            style={{ color: "transparent", WebkitTextStroke: "2px var(--rust)" }}
          >
            About
          </span>
        </div>
      </section>

      {/* SECTION 2: Story (Scroll Spy) */}
      <section className="bg-[#000000] py-24 px-6 md:px-12 relative">
        <div className="max-w-[1100px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 relative">

          {/* Left Sidebar (Sticky) */}
          <div className="md:col-span-4 lg:col-span-3 relative">
            <div className="md:sticky md:top-36 flex flex-row md:flex-col items-start gap-6 border-b md:border-b-0 border-white/10 pb-6 md:pb-0 mb-8 md:mb-0 overflow-x-auto no-scrollbar whitespace-nowrap">
              <div className="hidden md:block mb-4">
                <SectionLabel text="Navigate" />
              </div>
              {[
                { id: "origin", label: "Origin" },
                { id: "approach", label: "Approach" },
                { id: "now", label: "Right Now" },
              ].map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`font-dm-mono text-sm uppercase tracking-widest transition-all duration-300 md:pl-4 md:border-l-2 py-1 ${activeHash === link.id
                    ? "text-rust md:border-rust"
                    : "text-white/40 hover:text-white/90 md:border-transparent"
                    }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="md:col-span-8 lg:col-span-9 space-y-32">

            {/* Origin */}
            <div id="origin" className="scroll-mt-36">
              <RevealOnScroll>
                <h3 className="font-playfair font-bold text-4xl text-white/90 mb-6">
                  Where it <span className="italic text-rust">started</span>.
                </h3>
                <div className="font-playfair text-white/40 text-lg leading-[1.8] space-y-6 max-w-2xl">
                  <p>
                    My journey began with a curiosity about how complex systems work under the hood. Pursuing a B.Sc. in Computer Science gave me the foundational logic, but I quickly realized that writing code was only half the equation. I was drawn deeply into the visual and experiential side of software, how things look, feel, and ultimately earn trust.
                  </p>
                  <p>
                    For me, design thinking came first. I learned to obsess over user flows and interfaces, visualizing solutions before typing any syntax. Code simply became the necessary tool to bring those designs to life exactly as intended, without compromise or loss of fidelity during handoff.
                  </p>
                </div>
              </RevealOnScroll>
            </div>

            {/* Approach */}
            <div id="approach" className="scroll-mt-36">
              <RevealOnScroll>
                <h3 className="font-playfair font-bold text-4xl text-white/90 mb-6">
                  How I <span className="italic text-rust">build</span>.
                </h3>
                <div className="font-playfair text-white/40 text-lg leading-[1.8] space-y-6 max-w-2xl">
                  <p>
                    I lead with a design-first process. I think in visual systems, map out the user experience, and create high-fidelity prototypes in Figma. Once the design feels inevitable, I switch hats and personally build what I&apos;ve designed using Next.js and Tailwind CSS.
                  </p>
                  <p>
                    Product management thinking is the strategic layer I bring on top of that foundation. It&apos;s the lens I use to ensure that the beautiful interface I&apos;m building is actually solving the right problem, for the right users, at the right time.
                  </p>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right Now */}
            <div id="now" className="scroll-mt-36">
              <RevealOnScroll>
                <h3 className="font-playfair font-bold text-4xl text-white/90 mb-6">
                  What I&apos;m doing <span className="italic text-rust">now</span>.
                </h3>
                <div className="font-playfair text-white/40 text-lg leading-[1.8] space-y-6 max-w-2xl">
                  <p>
                    Currently, I&apos;m leading design and frontend development at an early-stage startup in Lagos. I own the UI/UX from wireframe to shipped component for our core mobile application and admin systems, ensuring quality at every step.
                  </p>
                  <p>
                    Alongside that, I take on frontend client work and explore roles where design leadership meets deep technical execution. I&apos;m particularly interested in taking complex, institutional problems and untangling them through intuitive design and robust engineering.
                  </p>
                </div>
              </RevealOnScroll>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: Skills */}
      <section className="bg-[#0A0A0A] py-24 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto w-full">
          <RevealOnScroll>
            <SectionLabel text="Skills & tools" light />
            <h2 className="font-playfair font-black text-4xl md:text-5xl text-white/90 mt-6 mb-16">
              The <span className="italic text-rust">toolkit.</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-white/5 border border-white/10">
            {SKILLS.map((skill, idx) => (
              <RevealOnScroll key={skill.title} delay={idx * 50}>
                <div className="group relative bg-[#1A1A1A] p-8 h-full min-h-[220px] transition-colors hover:bg-[#252525] flex flex-col justify-between overflow-hidden">
                  <div className="text-3xl mb-4">{skill.icon}</div>
                  <div>
                    <h4 className="font-dm-mono text-sm uppercase tracking-widest text-rust mb-3">
                      {skill.title}
                    </h4>
                    <p className="font-playfair text-white/40 text-[0.95rem] leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                  {/* Left Border Hover Reveal */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-rust scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-out" />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Values */}
      <section className="bg-[#000000] py-24 px-6 md:px-12 border-y border-white/10">
        <div className="max-w-[1100px] mx-auto w-full">
          <div className="mb-16">
            <RevealOnScroll>
              <SectionLabel text="Core values" />
              <h2 className="font-playfair font-black text-4xl md:text-5xl text-white/90 mt-6">
                Principles I <span className="italic text-rust">build</span> by.
              </h2>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((val, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                <div className="relative bg-[#0A0A0A] border border-white/10 p-8 md:p-12 h-full overflow-hidden group">
                  <div className="absolute top-4 right-6 font-playfair font-black italic text-6xl text-white/5 group-hover:text-rust/10 transition-colors select-none">
                    {val.num}
                  </div>
                  <h3 className="font-playfair font-bold text-2xl text-white/90 mb-4 z-10 relative">
                    {val.title}
                  </h3>
                  <p className="font-playfair text-white/40 text-lg leading-relaxed z-10 relative">
                    {val.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA Strip */}
      <section className="bg-rust py-16 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <RevealOnScroll>
            <h2 className="font-playfair italic font-medium text-3xl md:text-4xl text-white/90 max-w-lg">
              &quot;Ready to build something worth remembering?&quot;
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <Link
              href="/contact"
              className="inline-block font-dm-mono text-sm uppercase tracking-[0.2em] bg-white text-rust py-4 px-10 hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300"
            >
              Start a conversation
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
