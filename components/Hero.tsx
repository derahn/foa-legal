"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    el.style.width = "0px";
    const timer = setTimeout(() => {
      el.style.transition = "width 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      el.style.width = "80px";
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#0a0a0a]">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#C9A96E 1px, transparent 1px), linear-gradient(to right, #C9A96E 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,_#C9A96E08_0%,_transparent_70%)]" />

      {/* Decorative vertical lines */}
      <div className="absolute left-6 lg:left-12 top-0 bottom-0 flex items-start pt-32">
        <div className="w-px h-32 bg-gradient-to-b from-transparent to-[#C9A96E33]" />
      </div>
      <div className="absolute right-6 lg:right-12 top-0 bottom-0 flex items-start pt-32">
        <div className="w-px h-32 bg-gradient-to-b from-transparent to-[#C9A96E33]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-24 pt-40">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-12">
          <div ref={lineRef} className="h-px bg-[#C9A96E]" style={{ width: 0 }} />
          <span className="text-[#C9A96E] text-xs tracking-[0.3em] uppercase">
            Hamilton, Ontario
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-white leading-[0.9] mb-10"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          <span className="block text-[clamp(3.5rem,9vw,8.5rem)] font-light tracking-tight">
            Legal Excellence.
          </span>
          <span className="block text-[clamp(3.5rem,9vw,8.5rem)] font-light tracking-tight text-[#C9A96E]">
            Human Focus.
          </span>
        </h1>

        {/* Subtext + CTA row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mt-16">
          <p className="text-[#888] text-base lg:text-lg leading-relaxed max-w-xl" style={{ fontFamily: "var(--font-inter)" }}>
            Strategic, compassionate, and results-driven legal services for
            individuals, families, and businesses navigating life&apos;s most
            important transitions.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-[#C9A96E] text-black text-xs font-semibold tracking-widest uppercase hover:bg-[#E8D5A3] transition-colors duration-300"
            >
              Book a Consultation
            </a>
            <a
              href="#practice-areas"
              className="inline-flex items-center gap-2 text-[#888] text-xs tracking-widest uppercase hover:text-white transition-colors duration-300"
            >
              Our Services
              <ArrowDown size={14} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
