"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Globe, ArrowRight, Send } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "(365) 883-2651", href: "tel:3658832651" },
  { icon: Mail, label: "Email", value: "info@foalegal.ca", href: "mailto:info@foalegal.ca" },
  { icon: Globe, label: "Website", value: "www.foalegal.ca", href: "https://www.foalegal.ca" },
  {
    icon: MapPin,
    label: "Office",
    value: "29 Dryden Lane, Hamilton, ON L8H 0B6",
    href: "https://maps.google.com/?q=29+Dryden+Lane,+Hamilton,+ON+L8H+0B6",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    matter: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, wire this to a backend / email service
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="bg-[#050505] py-32 lg:py-40 border-t border-[#1E1E1E]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-16 h-px bg-[#C9A96E]" />
          <span className="text-[#C9A96E] text-xs tracking-[0.3em] uppercase">
            Contact & Consultations
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-5">
            <h2
              className="text-white text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.05] mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Let&apos;s talk about your{" "}
              <em className="text-[#C9A96E] not-italic">legal matter.</em>
            </h2>
            <p className="text-[#666] text-[15px] leading-8 mb-12">
              We welcome inquiries from individuals, families, and businesses.
              Reach out to schedule a consultation and take the first step toward
              resolving your legal matter with confidence.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-10 h-10 border border-[#1E1E1E] flex items-center justify-center flex-shrink-0 group-hover:border-[#C9A96E33] transition-colors duration-300">
                    <Icon size={14} className="text-[#C9A96E]" />
                  </div>
                  <div>
                    <div className="text-[#444] text-xs tracking-widest uppercase mb-0.5">
                      {label}
                    </div>
                    <div className="text-[#888] text-sm group-hover:text-white transition-colors duration-300">
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="border border-[#C9A96E33] bg-[#0d0d0d] p-12 text-center">
                <div
                  className="text-[#C9A96E] text-3xl font-light mb-4"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Thank you for reaching out.
                </div>
                <p className="text-[#666] text-sm">
                  We have received your message and will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#444] text-xs tracking-widest uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-[#0d0d0d] border border-[#1E1E1E] text-white text-sm px-4 py-3.5 placeholder-[#333] focus:outline-none focus:border-[#C9A96E44] transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-[#444] text-xs tracking-widest uppercase mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-[#0d0d0d] border border-[#1E1E1E] text-white text-sm px-4 py-3.5 placeholder-[#333] focus:outline-none focus:border-[#C9A96E44] transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#444] text-xs tracking-widest uppercase mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(000) 000-0000"
                      className="w-full bg-[#0d0d0d] border border-[#1E1E1E] text-white text-sm px-4 py-3.5 placeholder-[#333] focus:outline-none focus:border-[#C9A96E44] transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-[#444] text-xs tracking-widest uppercase mb-2">
                      Area of Law *
                    </label>
                    <select
                      name="matter"
                      required
                      value={formData.matter}
                      onChange={handleChange}
                      className="w-full bg-[#0d0d0d] border border-[#1E1E1E] text-white text-sm px-4 py-3.5 focus:outline-none focus:border-[#C9A96E44] transition-colors duration-300 appearance-none"
                    >
                      <option value="" disabled className="text-[#333]">
                        Select area
                      </option>
                      <option value="immigration">Immigration Law</option>
                      <option value="family">Family Law</option>
                      <option value="wills">Wills & Estates</option>
                      <option value="contract">Contract Law</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#444] text-xs tracking-widest uppercase mb-2">
                    Brief Description of Your Matter *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your legal matter and how we can help..."
                    className="w-full bg-[#0d0d0d] border border-[#1E1E1E] text-white text-sm px-4 py-3.5 placeholder-[#333] focus:outline-none focus:border-[#C9A96E44] transition-colors duration-300 resize-none"
                  />
                </div>

                <p className="text-[#444] text-xs leading-6">
                  By submitting this form, you acknowledge that the information
                  provided does not constitute legal advice and no solicitor-client
                  relationship is created until formally agreed.
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-[#C9A96E] text-black text-xs font-semibold tracking-widest uppercase hover:bg-[#E8D5A3] transition-colors duration-300"
                >
                  <Send size={14} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
