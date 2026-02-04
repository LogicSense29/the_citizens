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
      // { path: "/nike-oladeru", name: "Pastor Muyiwa" },
    ]
  },
  { path: "/im-new", name: "I'm new" },
  { path: "/give", name: "Give" },
  { path: "/contact", name: "Contact us" },
];

export default function Nav() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Highlight the active link
  const isActive = (path) => pathname === path;
  
  return (
    <div className="flex items-center gap-8">
      {links.map((link, index) => {
        if (link.dropdown) {
          return (
            <div 
              key={index} 
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 capitalize font-medium hover:text-accent transition-all duration-300">
                {link.name}
                <BsChevronDown className={`text-xs transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 w-48 mt-2 py-2 bg-[#0A0D11] border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl transition-all duration-300 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                {link.dropdown.map((subLink, index) => (
                  <Link
                    key={subLink.path + index}
                    href={subLink.path}
                    className={`${
                      isActive(subLink.path) ? "text-accent bg-white/5" : "text-white"
                    } block px-4 py-2 hover:bg-white/10 hover:text-accent transition-all duration-200`}
                  >
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
            className={`${
              isActive(link.path) && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all duration-300`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
