import Image from "next/image";
import { ArrowRight } from "lucide-react";

const areas = [
  {
    number: "01",
    title: "Immigration Law",
    image: "/practice-immigration.jpg",
    summary:
      "We are passionate about helping newcomers and families navigate Canada's immigration system with confidence, clarity, and dignity.",
    services: [
      "Refugee Claims",
      "Permanent Residence Applications",
      "Family Sponsorship Applications",
      "Study Permits",
      "Work Permits",
      "Judicial Reviews",
      "Detention Reviews",
      "Immigration Strategy & Consultations",
    ],
  },
  {
    number: "02",
    title: "Family Law",
    image: "/practice-family-v2.jpg",
    summary:
      "We provide compassionate yet strategic representation in sensitive family matters, working diligently to achieve solutions that protect our clients' interests while promoting stability and resolution.",
    services: [
      "Child Protection",
      "Parenting & Custody Matters",
      "Separation Agreements",
      "Division of Assets",
      "Mediation",
      "Negotiation",
      "Arbitration",
    ],
  },
  {
    number: "03",
    title: "Wills, Estates & Contract Law",
    image: "/practice-wills.jpg",
    summary:
      "FOA Legal supports clients with estate planning, legal documentation, and contractual matters designed to protect their families, assets, and future interests through clear and effective legal guidance.",
    services: [
      "Estate Planning",
      "Will Drafting",
      "Contract Drafting & Review",
      "Legal Documentation",
      "Asset Protection",
    ],
  },
];

export default function PracticeAreas() {
  return (
    <section
      id="practice-areas"
      className="bg-[#050505] py-32 lg:py-40 border-t border-[#1E1E1E]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-px bg-[#C9A96E]" />
          <span className="text-[#C9A96E] text-xs tracking-[0.3em] uppercase">
            Practice Areas
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-6">
          <h2
            className="text-white text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            How we can{" "}
            <em className="text-[#C9A96E] not-italic">help you.</em>
          </h2>
          <p className="text-[#666] text-sm max-w-xs leading-7">
            We offer legal support across three core disciplines, each handled
            with precision and care.
          </p>
        </div>

        {/* Practice area cards — always fully visible */}
        <div className="flex flex-col gap-px bg-[#1E1E1E]">
          {areas.map((area) => (
            <div
              key={area.number}
              className="bg-[#050505] hover:bg-[#0d0d0d] transition-colors duration-300 overflow-hidden"
            >
              {/* Card image */}
              <div className="relative h-72 w-full">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]" />
              </div>

              <div className="p-10 lg:p-14">
              {/* Title row */}
              <div className="flex items-baseline gap-6 mb-6">
                <span className="text-[#C9A96E99] text-xs tracking-widest flex-shrink-0">
                  {area.number}
                </span>
                <h3
                  className="text-white text-2xl lg:text-3xl font-light"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {area.title}
                </h3>
              </div>

              {/* Content */}
              <div className="pl-10 grid lg:grid-cols-2 gap-10 lg:gap-16">
                <p className="text-[#888] leading-8 text-[15px]">
                  {area.summary}
                </p>
                <div>
                  <div className="text-[#C9A96E] text-xs tracking-[0.25em] uppercase mb-5">
                    Services Include
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {area.services.map((svc) => (
                      <li
                        key={svc}
                        className="flex items-center gap-3 text-[#777] text-sm"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#C9A96E] flex-shrink-0" />
                        {svc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-px border border-[#1E1E1E] p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 bg-[#0d0d0d] hover:border-[#C9A96E33] transition-colors duration-500">
          <div>
            <div
              className="text-white text-2xl lg:text-3xl font-light mb-2"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Not sure where your matter falls?
            </div>
            <p className="text-[#666] text-sm">
              Book a consultation and we&apos;ll guide you to the right path.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#C9A96E] text-[#C9A96E] text-xs tracking-widest uppercase hover:bg-[#C9A96E] hover:text-black transition-all duration-300 flex-shrink-0"
          >
            Get in Touch
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
