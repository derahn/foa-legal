import { Scale, Users, Award, Heart } from "lucide-react";

const values = [
  {
    title: "Integrity",
    desc: "Every client relationship is built on trust, honesty, and unwavering ethical standards.",
    icon: Scale,
  },
  {
    title: "Accessibility",
    desc: "We believe quality legal representation should be approachable, transparent, and empowering for all.",
    icon: Users,
  },
  {
    title: "Excellence",
    desc: "Informed by Lean Six Sigma principles, we deliver precise, organized, and high-quality legal services.",
    icon: Award,
  },
  {
    title: "Compassion",
    desc: "We understand legal matters can be overwhelming. We are here with clear guidance and strong advocacy.",
    icon: Heart,
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#0a0a0a] py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-16 h-px bg-[#C9A96E]" />
          <span className="text-[#C9A96E] text-xs tracking-[0.3em] uppercase">
            About the Firm
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: heading */}
          <div>
            <h2
              className="text-white text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              A modern firm built on
              <em className="text-[#C9A96E] not-italic"> lasting relationships.</em>
            </h2>

            <div className="w-16 h-px bg-[#C9A96E33] my-10" />

            <div className="flex flex-col gap-2 text-[#888] text-xs tracking-widest uppercase">
              <span>Barristers, Solicitors & Notary Public</span>
              <span>29 Dryden Lane, Hamilton, ON L8H 0B6</span>
              <span>info@foalegal.ca · www.foalegal.ca</span>
            </div>
          </div>

          {/* Right: text */}
          <div className="space-y-6 text-[#999] leading-8 text-[15px]">
            <p>
              Welcome to FOA Legal — a modern, client-focused law firm committed to
              providing strategic, compassionate, and results-driven legal services
              to individuals, families, and businesses.
            </p>
            <p>
              Founded by Farihat Olaronke Adewuyi, FOA Legal was established on
              the belief that every client deserves accessible legal support, clear
              guidance, and strong advocacy during life&apos;s most important
              transitions and challenges.
            </p>
            <p>
              We take the time to understand each client&apos;s unique
              circumstances, goals, and concerns — allowing us to provide tailored
              legal solutions that are practical, effective, and aligned with each
              client&apos;s best interests.
            </p>
            <p>
              Our firm proudly serves clients in both{" "}
              <strong className="text-white">English</strong> and{" "}
              <strong className="text-white">Yoruba</strong>, creating a welcoming
              environment for diverse communities.
            </p>
          </div>
        </div>

        {/* Vision / Mission */}
        <div className="mt-24 grid lg:grid-cols-2 gap-px bg-[#1E1E1E]">
          <div className="bg-[#0d0d0d] p-10 lg:p-14">
            <div className="text-[#C9A96E] text-xs tracking-[0.3em] uppercase mb-6">Our Vision</div>
            <p className="text-[#bbb] leading-8 text-[15px]">
              To be a trusted and go-to legal partner for individuals, families,
              and businesses — providing steadfast guidance and support through
              every stage of life with compassion, excellence, and integrity.
            </p>
          </div>
          <div className="bg-[#111111] p-10 lg:p-14">
            <div className="text-[#C9A96E] text-xs tracking-[0.3em] uppercase mb-6">Our Mission</div>
            <p className="text-[#bbb] leading-8 text-[15px]">
              To deliver the highest quality of legal services while pursuing the
              best possible outcomes for every client through professionalism,
              dedication, responsiveness, and personalized representation.
            </p>
          </div>
        </div>

        {/* Values grid */}
        <div className="mt-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-px bg-[#C9A96E33]" />
            <span className="text-[#555] text-xs tracking-[0.3em] uppercase">
              Our Core Values
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map(({ title, desc, icon: Icon }, i) => (
              <div
                key={title}
                className="relative border border-[#1E1E1E] bg-[#0d0d0d] p-8 flex flex-col gap-8 hover:border-[#C9A96E44] hover:bg-[#111111] transition-all duration-300 group"
              >
                {/* Number — top right */}
                <span className="absolute top-6 right-6 text-[#C9A96E88] text-xs tracking-widest group-hover:text-[#C9A96E] transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="w-10 h-10 border border-[#C9A96E33] flex items-center justify-center group-hover:border-[#C9A96E66] transition-colors duration-300">
                  <Icon size={18} className="text-[#C9A96E]" strokeWidth={1.5} />
                </div>

                {/* Text */}
                <div>
                  <div
                    className="text-white text-xl font-light mb-3 group-hover:text-[#C9A96E] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {title}
                  </div>
                  <p className="text-[#666] text-sm leading-7">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
