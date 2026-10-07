"use client";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";

const navLinks = [
  { href: "/worship", label: "Worship" },
  { href: "/messages", label: "Messages" },
  { href: "/im-new", label: "I'm New" },
  { href: "/give", label: "Give" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
];

const socialLinks = [
  { href: "https://www.instagram.com/thecitizensplace", icon: <FaInstagram />, label: "Instagram" },
  { href: "https://www.facebook.com/thecitizensplace", icon: <FaFacebook />, label: "Facebook" },
  { href: "https://www.twitter.com/thecitizensplace", icon: <FaTwitter />, label: "Twitter" },
  { href: "https://www.youtube.com/@ThecitizensplaceTV", icon: <FaYoutube />, label: "YouTube" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(""); }
  };

  return (
    <footer className="relative w-full bg-[#0A0D11] overflow-hidden">

      {/* Top fade from page */}
      <div className="w-full h-px bg-white/5" />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#006CFF]/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-12 lg:px-20 pt-20 pb-8 relative z-10">

        {/* ── Large statement ── */}
        {/* <div className="relative overflow-hidden mb-16">
          <h2
            className="font-black leading-[0.85] whitespace-nowrap"
            style={{ fontSize: "clamp(3.5rem, 10vw, 11rem)" }}
          >
            <span className="text-white">The Citizens</span>
          </h2>
          <h2
            className="font-black leading-[0.85] whitespace-nowrap"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 11rem)",
              WebkitTextStroke: "2px rgba(255,255,255,0.12)",
              color: "transparent",
            }}
          >
            Place Church.
          </h2>
        </div> */}

        {/* ── Three columns ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mb-16">

          {/* Col 1 — Identity */}
          <div className="flex flex-col gap-6">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="The Citizens Place Church"
                width={140}
                height={45}
                className="w-[140px] h-auto"
              />
            </Link>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                {/* <span className="block w-5 h-px bg-[#006CFF]" /> */}
                <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.25em]">
                  Address
                </span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed pl-8">
                4420 Connecticut Avenue NW<br />
                Washington, DC 20008
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                {/* <span className="block w-5 h-px bg-[#006CFF]" /> */}
                <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.25em]">
                  Service Times
                </span>
              </div>
              <div className="text-white/50 text-sm leading-relaxed pl-8">
                <p>Sundays · 6:00 PM EST</p>
                <p>Tuesdays · 9:00 PM EST</p>
                <p>3rd Fridays · 10:00 PM EST</p>
              </div>
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-2">
              {/* <span className="block w-5 h-px bg-[#006CFF]" /> */}
              <span className="text-[#006CFF] text-[10px] font-black uppercase tracking-[0.25em]">
                Quick Links
              </span>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-2 text-white/40 hover:text-white text-xs font-black uppercase tracking-[0.15em] transition-colors duration-200"
              >
                <span className="block w-0 h-px bg-[#006CFF] transition-all duration-300 group-hover:w-4" />
                {link.label}
              </Link>
            ))}
          </div>

          {/* Col 3 — Newsletter + Social */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                {/* <span className="block w-5 h-px bg-[#006CFF]" /> */}
                <span className="text-[#006CFF] text-[10px] font-black uppercase tracking-[0.25em]">
                  Newsletter
                </span>
              </div>
              <p className="text-white/30 text-xs leading-relaxed">
                Stay connected and informed.
              </p>
              {submitted ? (
                <p className="text-[#006CFF] text-xs font-black uppercase tracking-widest">
                  You&apos;re in. Welcome.
                </p>
              ) : (
                <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                    className="flex-1 bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white text-xs placeholder:text-white/20 focus:outline-none focus:border-[#006CFF] transition-colors duration-200"
                  />
                  <button
                    type="submit"
                    className="group px-4 py-3 bg-[#006CFF] hover:bg-[#0055cc] rounded-md transition-colors duration-300 flex items-center justify-center"
                    aria-label="Subscribe"
                  >
                    <BsArrowRight className="text-white text-sm transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Social icons */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                {/* <span className="block w-5 h-px bg-[#006CFF]" /> */}
                <span className="text-[#006CFF] text-[10px] font-black uppercase tracking-[0.25em]">
                  Follow Us
                </span>
              </div>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/8 rounded-md hover:bg-[#006CFF] hover:border-[#006CFF] text-white/40 hover:text-white text-base transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="w-full h-px bg-white/5 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-[10px] text-center font-black uppercase tracking-[0.2em]">
            © {year} The Citizens Place Church. All rights reserved.
          </p>
          <p
            className="text-[10px] font-black uppercase tracking-[0.2em]"
            style={{ WebkitTextStroke: "0.5px rgba(255,255,255,0.15)", color: "transparent" }}
          >
            We Connect Creation to the CREATOR
          </p>
        </div>

      </div>
    </footer>
  );
}
