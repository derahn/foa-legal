import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  const year = 2025;

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="FOA Legal Logo"
                width={200}
                height={67}
                className="object-contain h-16 w-auto"
              />
            </div>
            <p className="text-[#555] text-sm leading-7 max-w-sm">
              A client-centered law firm committed to compassionate guidance,
              strategic advocacy, and accessible legal solutions. Serving
              individuals, families, and businesses with integrity and precision.
            </p>
            <div className="flex items-center gap-5 mt-8">
              <a
                href="tel:3658832651"
                className="flex items-center gap-2 text-[#666] text-sm hover:text-[#C9A96E] transition-colors duration-300"
              >
                <Phone size={13} />
                (365) 883-2651
              </a>
              <a
                href="mailto:info@foalegal.ca"
                className="flex items-center gap-2 text-[#666] text-sm hover:text-[#C9A96E] transition-colors duration-300"
              >
                <Mail size={13} />
                info@foalegal.ca
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="text-[#C9A96E] text-xs tracking-[0.25em] uppercase mb-6">
              Navigate
            </div>
            <ul className="space-y-3">
              {[
                { href: "#about", label: "About the Firm" },
                { href: "#practice-areas", label: "Practice Areas" },
                { href: "#founder", label: "Our Founder" },
                { href: "#contact", label: "Book Consultation" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#555] text-sm hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice areas */}
          <div>
            <div className="text-[#C9A96E] text-xs tracking-[0.25em] uppercase mb-6">
              Practice Areas
            </div>
            <ul className="space-y-3">
              {[
                "Immigration Law",
                "Family Law",
                "Wills & Estates",
                "Contract Law",
              ].map((area) => (
                <li key={area}>
                  <a
                    href="#practice-areas"
                    className="text-[#555] text-sm hover:text-white transition-colors duration-300"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1E1E1E] py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#444] text-xs">
            &copy; {year} FOA Legal. All rights reserved. · 29 Dryden Lane,
            Hamilton, ON L8H 0B6
          </p>
          <p className="text-[#333] text-xs">
            The information on this site is not legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
