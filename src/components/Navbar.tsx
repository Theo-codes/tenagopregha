"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
    }

    const startAudio = async () => {
      if (!audioRef.current) return;
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        removeInteractionListeners();
      } catch (err) {
        // Autoplay blocked, wait for interaction
        console.log("Autoplay blocked, waiting for interaction");
      }
    };

    const handleInteraction = () => {
      startAudio();
    };

    const removeInteractionListeners = () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };

    window.addEventListener("click", handleInteraction);
    window.addEventListener("scroll", handleInteraction);
    window.addEventListener("keydown", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);

    // Initial attempt
    startAudio();

    return () => {
      removeInteractionListeners();
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const isContact = pathname === "/contact";

  let navClasses = "bg-[#0A0A0A] border-b border-white/10";
  let logoClasses = "text-white/90 hover:text-rust";
  let linkClasses = "text-white/40 hover:text-rust";
  let activeLinkClasses = "text-rust";
  let hamburgerColor = "bg-white/90";

  if (isHome) {
    navClasses = "bg-transparent backdrop-blur-sm border-b border-transparent";
  } else if (isContact) {
    navClasses = "bg-[#000000] border-b border-white/10";
    logoClasses = "text-white/90 hover:text-rust";
    linkClasses = "text-white/50 hover:text-rust";
    activeLinkClasses = "text-rust";
    hamburgerColor = "bg-white/90";
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-colors duration-300 ${navClasses}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className={`font-playfair font-black text-2xl tracking-tighter transition-colors ${logoClasses}`}>
            Tena.
          </Link>

          {/* Desktop Links */}
          <div className="max-md:hidden hidden md:flex items-center gap-12">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-dm-mono text-[0.7rem] uppercase tracking-widest transition-colors ${pathname === link.href ? activeLinkClasses : linkClasses
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/Theophilus_Gopregha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-dm-mono text-[0.7rem] uppercase tracking-widest transition-colors flex items-center gap-1 ${linkClasses}`}
            >
              Resume <span className="text-[1.1em] opacity-70">↗</span>
            </a>
            <button
              onClick={togglePlay}
              className={`w-7 h-7 flex items-center justify-center rounded-full border transition-colors ${isPlaying
                ? "border-rust text-rust"
                : "border-white/20 text-white/50 hover:border-rust hover:text-rust"
                }`}
              aria-label={isPlaying ? "Pause music" : "Play music"}
            >
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]">
                  <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px] translate-x-[1px]">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-[1.5px] transition-transform ${hamburgerColor} ${isOpen ? "rotate-45 translate-y-[7.5px]" : ""}`} />
            <span className={`w-6 h-[1.5px] transition-opacity ${hamburgerColor} ${isOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-[1.5px] transition-transform ${hamburgerColor} ${isOpen ? "-rotate-45 -translate-y-[7.5px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#0A0A0A] z-[110] transition-all duration-500 flex flex-col items-center justify-center gap-8 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={`font-dm-mono text-2xl uppercase tracking-[0.2em] transition-colors ${pathname === link.href ? "text-rust" : "text-white/40 hover:text-rust"
              }`}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="/tena-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="font-dm-mono text-2xl uppercase tracking-[0.2em] transition-colors text-muted hover:text-rust flex items-center gap-2"
        >
          Resume <span className="text-[0.9em] opacity-70">↗</span>
        </a>
        <button
          onClick={togglePlay}
          className={`mt-4 w-12 h-12 flex items-center justify-center rounded-full border transition-colors ${isPlaying
            ? "border-rust text-rust"
            : "border-white/20 text-white/50 hover:border-rust hover:text-rust"
            }`}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 translate-x-[2px]">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
            </svg>
          )}
        </button>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 text-muted font-dm-mono text-[0.7rem] uppercase tracking-widest"
        >
          Close
        </button>
      </div>

      <audio
        ref={audioRef}
        src="/fassounds-lofi-study-calm-peaceful-chill-hop-112191.mp3"
        loop
        preload="auto"
      />
    </>
  );
}
