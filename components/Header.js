"use client";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-none ${
        scrolled
          ? "py-4 bg-[#0A0D11]/90 backdrop-blur-xl"
          : "py-7 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">

        {/* Desktop layout */}
        <div className="w-full hidden xl:flex items-center justify-between gap-8">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              className="w-[160px] h-auto"
              alt="The Citizens Place Church"
              width={160}
              height={50}
              priority
            />
          </Link>

          <Nav />

          {/* CTA — ghost outlined, matches hero style */}
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-6 py-2.5 border border-white/20 hover:border-[#006CFF] hover:bg-[#006CFF] text-white text-xs font-black uppercase tracking-[0.2em] rounded-md transition-all duration-300"
          >
            Join Us
            <BsArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile layout */}
        <div className="flex xl:hidden items-center justify-between w-full">
          <Link href="/">
            <Image
              src="/logo.png"
              className="w-[140px] h-auto"
              alt="The Citizens Place Church"
              width={140}
              height={45}
              priority
            />
          </Link>
          <MobileNav />
        </div>

      </div>
    </header>
  );
}
