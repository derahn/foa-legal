import Image from "next/image";
import { CheckCircle } from "lucide-react";

const credentials = [
  "Called to the Nigerian Bar — 2009",
  "Called to the Ontario Bar — June 2026",
  "Member, Law Society of Ontario",
  "Member, Nigerian Bar Association",
  "LLB & LLM — International Legal Background",
  "Lean Six Sigma Green Belt Certified",
  "Articled at Kingsley Jesuorobo & Associates, Toronto",
];

const expertise = [
  "Immigration Law",
  "Family Law",
  "Contract Law",
  "Wills & Estates",
];

export default function Founder() {
  return (
    <section
      id="founder"
      className="bg-[#0a0a0a] py-32 lg:py-40 border-t border-[#1E1E1E]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-16 h-px bg-[#C9A96E]" />
          <span className="text-[#C9A96E] text-xs tracking-[0.3em] uppercase">
            Meet the Founder
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Photo */}
          <div className="lg:col-span-4">
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/ronke.jpg"
                  alt="Farihat Olaronke Adewuyi — Founder & Principal Lawyer, FOA Legal"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority
                />
                {/* Subtle corner accents over the photo */}
                <div className="absolute top-4 left-4 w-10 h-10 border-t border-l border-[#C9A96E66] pointer-events-none" />
                <div className="absolute bottom-4 right-4 w-10 h-10 border-b border-r border-[#C9A96E66] pointer-events-none" />
              </div>
              {/* Gold accent bar */}
              <div className="h-1 w-20 bg-[#C9A96E]" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8">
            <div className="mb-2">
              <span className="text-[#666] text-xs tracking-widest uppercase">
                LLB, LLM · Barrister & Solicitor
              </span>
            </div>
            <h2
              className="text-white text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Farihat Olaronke{" "}
              <em className="text-[#C9A96E] not-italic">Adewuyi</em>
            </h2>
            <p className="text-[#555] text-xs tracking-widest uppercase mb-10">
              Pronounced: Ron-Keh
            </p>

            <div className="space-y-5 text-[#888] leading-8 text-[15px] mb-10">
              <p>
                Ronke is a foreign-trained lawyer called to the Nigerian Bar in
                2009 and called to the Ontario Bar in June 2026. She is a member
                of both the Nigerian Bar Association and the Law Society of Ontario.
              </p>
              <p>
                She completed her articling at the prestigious
                Toronto-based firm of <strong className="text-[#bbb]">Kingsley Jesuorobo and Associates</strong>,
                gaining extensive experience in legal research, client advocacy,
                drafting, case management, and dispute resolution. She subsequently
                continued her practice under a Supervision Agreement, further
                strengthening her hands-on legal experience in the Canadian legal
                system.
              </p>
              <p>
                Ronke&apos;s practice is defined by a strong commitment to client
                care, clarity, and strategic problem-solving. Her{" "}
                <strong className="text-[#bbb]">Lean Six Sigma Green Belt</strong> certification
                enables her to deliver organized, detail-oriented, and
                high-quality legal services with efficiency and precision.
              </p>
              <p>
                She is fluent in <strong className="text-[#bbb]">English and Yoruba</strong>,
                allowing her to serve a diverse client base with cultural
                understanding and effective communication.
              </p>
            </div>

            {/* Expertise tags */}
            <div className="mb-10">
              <div className="text-[#C9A96E] text-xs tracking-[0.25em] uppercase mb-4">
                Areas of Practice
              </div>
              <div className="flex flex-wrap gap-3">
                {expertise.map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 border border-[#1E1E1E] text-[#888] text-xs tracking-widest uppercase hover:border-[#C9A96E33] hover:text-[#C9A96E] transition-colors duration-300"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Credentials */}
            <div>
              <div className="text-[#C9A96E] text-xs tracking-[0.25em] uppercase mb-5">
                Credentials & Memberships
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {credentials.map((c) => (
                  <div key={c} className="flex items-start gap-3 text-[#666] text-sm">
                    <CheckCircle size={14} className="text-[#C9A96E] mt-0.5 flex-shrink-0" />
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
