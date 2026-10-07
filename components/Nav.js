"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const links = [
  { path: "/", name: "Home" },
  { path: "/worship", name: "Worship" },
  { path: "/messages", name: "Messages" },
  {
    name: "Our Pastors",
    dropdown: [
      { path: "/yinka-oladeru", name: "Yinka Oladeru" },
      { path: "/nike-oladeru", name: "Nike Oladeru" },
    ],
  },
  { path: "/im-new", name: "I'm new" },
  { path: "/give", name: "Give" },
  { path: "/contact", name: "Contact us" },
];

export default function Nav() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isActive = (path) => pathname === path;

  return (
    <nav className="flex items-center gap-7">
      {links.map((link, index) => {
        if (link.dropdown) {
          return (
            <div
              key={index}
              className="relative border-none"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-200 border-none ${
                  link.dropdown.some((s) => isActive(s.path))
                    ? "text-[#006CFF]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}
                <BsChevronDown
                  className={`text-[10px] transition-transform duration-300 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown */}
              <div
                className={`absolute top-full left-0 w-52 mt-4 py-2 bg-[#0A0D11]/95 border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl transition-all duration-300 ${
                  dropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {/* Small arrow notch */}
                <div className="absolute -top-1.5 left-5 w-3 h-3 bg-[#0A0D11] border-l border-t border-white/10 rotate-45" />
                {link.dropdown.map((subLink) => (
                  <Link
                    key={subLink.path}
                    href={subLink.path}
                    className={`flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] transition-all duration-200 ${
                      isActive(subLink.path)
                        ? "text-[#006CFF] bg-white/5"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {/* Active dot */}
                    {isActive(subLink.path) && (
                      <span className="w-1 h-1 rounded-full bg-[#006CFF] flex-shrink-0" />
                    )}
                    {subLink.name}
                  </Link>
                ))}
              </div>
            </div>
          );
        }

        return (
          <Link
            key={link.path}
            href={link.path}
            className={`relative text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-200  group ${
              isActive(link.path) ? "text-white" : "text-white/65 hover:text-white"
            }`}
          >
            {link.name}
            {/* Active indicator — small dot below, not a thick underline */}
            <span
              className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#006CFF] transition-all duration-300 ${
                isActive(link.path) ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-40 group-hover:scale-100"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}
