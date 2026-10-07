"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { BsArrowRight } from "react-icons/bs";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/worship", label: "Worship" },
  { href: "/messages", label: "Messages" },
  {
    label: "Our Pastors",
    subLinks: [
      { href: "/yinka-oladeru", label: "Yinka Oladeru" },
      { href: "/nike-oladeru", label: "Nike Oladeru" },
    ],
  },
  { href: "/im-new", label: "I'm new" },
  { href: "/give", label: "Give" },
  { href: "/contact", label: "Contact us" },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          aria-label="Open navigation menu"
          className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] group"
        >
          <span className="block w-6 h-px bg-white transition-all duration-300 group-hover:w-5" />
          <span className="block w-4 h-px bg-[#006CFF] transition-all duration-300 group-hover:w-6" />
          <span className="block w-6 h-px bg-white transition-all duration-300 group-hover:w-4" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="flex flex-col pt-20 pb-10 px-8 w-[85vw] max-w-sm bg-[#0A0D11] border-l border-white/8 shadow-2xl"
        style={{
          maxHeight: "calc(100dvh - env(safe-area-inset-bottom, 0px))",
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#006CFF]/10 rounded-full blur-[80px] pointer-events-none" />

        <nav className="flex flex-col gap-1 relative z-10">
          {navLinks.map((link, index) => (
            <div key={index} className="flex flex-col">
              {link.href ? (
                <SheetClose asChild>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center justify-between py-4 border-b border-white/5 text-xs font-black uppercase tracking-[0.2em] transition-colors duration-200 group",
                      pathname === link.href
                        ? "text-white"
                        : "text-white/40 hover:text-white"
                    )}
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.label}
                    {pathname === link.href ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#006CFF]" />
                    ) : (
                      <BsArrowRight className="text-xs opacity-0 group-hover:opacity-40 transition-opacity" />
                    )}
                  </Link>
                </SheetClose>
              ) : (
                <div className="py-4 border-b border-white/5">
                  <p className="text-white/25 text-[10px] font-black uppercase tracking-[0.25em] mb-3">
                    {link.label}
                  </p>
                  <div className="flex flex-col gap-0.5 pl-3 border-l border-[#006CFF]/30">
                    {link.subLinks.map((sub) => (
                      <SheetClose asChild key={sub.href}>
                        <Link
                          href={sub.href}
                          className={cn(
                            "flex items-center justify-between py-2.5 text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-200 group",
                            pathname === sub.href
                              ? "text-white"
                              : "text-white/40 hover:text-white"
                          )}
                        >
                          {sub.label}
                          {pathname === sub.href && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#006CFF]" />
                          )}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="mt-auto pt-10 relative z-10">
          <SheetClose asChild>
            <Link
              href="/contact"
              className="group flex items-center justify-between w-full px-6 py-4 bg-[#006CFF] hover:bg-[#0055cc] text-white rounded-md transition-all duration-300"
            >
              <span className="text-xs font-black uppercase tracking-[0.2em]">Join Us</span>
              <BsArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </SheetClose>
          <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest text-center mt-6">
            The Citizens Place · Washington DC
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
