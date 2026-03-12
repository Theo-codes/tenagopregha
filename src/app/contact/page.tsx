"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import SectionLabel from "@/components/SectionLabel";

import { SOCIAL_LINKS as SOCIALS, FAQS } from "@/lib/data";

import { toast } from "sonner";

export default function ContactPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        const errorData = await response.json().catch(() => ({}));
        toast.error(errorData.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again or email me directly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="overflow-x-hidden pt-20">
      {/* SECTION 1: Split Hero */}
      <section className="flex flex-col lg:flex-row min-h-[max(calc(100vh-80px),800px)]">
        
        {/* Left Column: Info */}
        <div className="bg-[#0A0A0A] text-white/90 w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <div className="max-w-xl mx-auto lg:mx-0 lg:ml-auto w-full">
            <RevealOnScroll>
              <div className="mb-8">
                <span className="font-dm-mono text-rust text-xs uppercase tracking-widest">
                  Let&apos;s connect
                </span>
              </div>
              <h1 className="font-playfair font-black text-[clamp(3rem,6vw,5.5rem)] leading-[0.9] tracking-tight mb-8">
                Say <span className="italic text-rust">hello.</span>
              </h1>
              <p className="font-playfair text-white/40 text-xl mb-12">
                Whether it&apos;s a design role, a build project, a collaboration, or just a good conversation — I&apos;m open. I usually reply within 24 hours.
              </p>

              <div className="inline-flex items-center gap-3 bg-[#1A1A1A] border border-white/5 rounded-full px-4 py-2 mb-16">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
                <span className="font-dm-mono text-green-500 text-xs uppercase tracking-wider">
                  Available for new opportunities
                </span>
              </div>
            </RevealOnScroll>

            <div className="flex flex-col border-t border-white/10">
              {SOCIALS.map((social, idx) => (
                <RevealOnScroll key={social.platform} delay={idx * 100}>
                  <a
                    href={social.url}
                    target={social.url.startsWith("http") ? "_blank" : "_self"}
                    rel={social.url.startsWith("http") ? "noopener noreferrer" : ""}
                    className="group relative flex items-center justify-between py-6 border-b border-white/10 hover:border-white/0 transition-all duration-300 overflow-hidden"
                  >
                    {/* Hover Scale Border */}
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-rust scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-out" />
                    
                    <div className="flex items-center gap-6 transform group-hover:translate-x-4 transition-transform duration-300 pl-2">
                      <div className="text-xl opacity-80 group-hover:opacity-100 transition-opacity">
                        {social.icon}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                        <span className="font-dm-mono text-xs uppercase tracking-widest font-bold">
                          {social.platform}
                        </span>
                        <span className="font-playfair text-white/40 italic">
                          {social.handle}
                        </span>
                      </div>
                    </div>
                    
                    <div className="text-rust opacity-0 transform -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      →
                    </div>
                  </a>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-[#000000] text-white/90 w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center relative">
          <div className="max-w-xl mx-auto lg:mx-0 lg:mr-auto w-full">
              <RevealOnScroll>
                <div className="mb-12">
                  <h2 className="font-playfair font-black text-4xl md:text-5xl mb-4">
                    Send a <span className="italic text-rust">message.</span>
                  </h2>
                  <p className="font-dm-mono text-white/40 text-sm tracking-wide">
                    Fill out the form below or drop me a direct email.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="firstName" className="font-dm-mono text-xs text-white/60 uppercase tracking-widest">First Name</label>
                      <input 
                        required
                        type="text" 
                        id="firstName" 
                        name="firstName"
                        className="bg-[#1A1A1A] border border-white/10 rounded-none px-4 py-3 text-white/90 focus:outline-none focus:border-rust transition-colors font-playfair"
                        placeholder="Jane"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="lastName" className="font-dm-mono text-xs text-white/60 uppercase tracking-widest">Last Name</label>
                      <input 
                        required
                        type="text" 
                        id="lastName" 
                        name="lastName"
                        className="bg-[#1A1A1A] border border-white/10 rounded-none px-4 py-3 text-white/90 focus:outline-none focus:border-rust transition-colors font-playfair"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-dm-mono text-xs text-white/60 uppercase tracking-widest">Email Address</label>
                    <input 
                      required
                      type="email" 
                      id="email" 
                      name="email"
                      className="bg-[#1A1A1A] border border-white/10 rounded-none px-4 py-3 text-white/90 focus:outline-none focus:border-rust transition-colors font-playfair"
                      placeholder="jane@example.com"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="font-dm-mono text-xs text-white/60 uppercase tracking-widest">Subject</label>
                    <select 
                      id="subject"
                      name="subject"
                      required
                      className="bg-[#1A1A1A] border border-white/10 rounded-none px-4 py-3 text-white/90 focus:outline-none focus:border-rust transition-colors font-playfair appearance-none cursor-pointer"
                    >
                      <option value="job">Job / Role opportunity</option>
                      <option value="freelance">Freelance / Client project</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="hi">Just saying hi</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-dm-mono text-xs text-white/60 uppercase tracking-widest">Message</label>
                    <textarea 
                      required
                      id="message" 
                      name="message"
                      className="bg-[#1A1A1A] border border-white/10 rounded-none px-4 py-3 text-white/90 focus:outline-none focus:border-rust transition-colors font-playfair min-h-[140px] resize-y"
                      placeholder="What's on your mind?"
                    ></textarea>
                  </div>

                  <div className="flex flex-col gap-2">
                    <button 
                      type="submit" 
                      disabled={isLoading}
                      className="bg-rust text-white/90 font-dm-mono text-xs uppercase tracking-[0.2em] py-4 px-8 hover:bg-terracotta transition-colors flex justify-between items-center group disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isLoading ? "Sending..." : "Send message"}
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </form>
              </RevealOnScroll>
          </div>
        </div>

      </section>

      {/* SECTION 2: FAQ Accordion */}
      <section className="bg-[#0A0A0A] py-24 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-[800px] mx-auto w-full">
          <div className="text-center mb-16">
            <RevealOnScroll>
              <SectionLabel text="What to expect" />
              <h2 className="font-playfair font-black text-4xl md:text-5xl text-white/90 mt-6">
                Frequently asked <span className="italic text-rust">questions.</span>
              </h2>
            </RevealOnScroll>
          </div>

          <div className="flex flex-col border-t border-white/10">
            {FAQS.map((faq, idx) => (
              <RevealOnScroll key={idx} delay={idx * 50}>
                <div className="border-b border-white/10 relative">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full flex justify-between items-center py-6 md:py-8 text-left group"
                  >
                    <h3 className={`font-playfair font-bold text-xl md:text-2xl transition-colors ${openFaqIndex === idx ? "text-rust" : "text-white/90 group-hover:text-rust/70"}`}>
                      {faq.question}
                    </h3>
                    <div className="flex shrink-0 ml-6 relative w-6 h-6 items-center justify-center">
                      {/* Vertical line of + */}
                      <div className={`absolute w-[2px] h-6 bg-white/90 transition-all duration-500 ease-in-out ${openFaqIndex === idx ? "rotate-90 bg-rust opacity-0" : "rotate-0"}`} />
                      {/* Horizontal line of + / - */}
                      <div className={`absolute h-[2px] w-6 bg-white/90 transition-all duration-500 ease-in-out ${openFaqIndex === idx ? "rotate-[180deg] bg-rust" : "rotate-0"}`} />
                    </div>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaqIndex === idx ? "max-h-[300px] opacity-100 pb-8" : "max-h-0 opacity-0 pb-0"}`}
                  >
                    <p className="font-playfair text-white/40 text-lg max-w-2xl leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
