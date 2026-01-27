"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/worship", label: "Worship" },
  { href: "/messages", label: "Messages" },
  { 
    label: "Our Pastors", 
    subLinks: [
      { href: "/yinka-oladeru", label: "Yinka Oladeru" },
      { href: "/nike-oladeru", label: "Nike Oladeru" },
      { href: "/about", label: "Pastor Muyiwa" },
    ]
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
        {/* <Button
          variant="default"
          size="icon"
          className="md:hidden"
          aria-label="Open navigation menu"
        >
          <MenuIcon className="h-6 w-6" />
        </Button> */}
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col gap-6 pt-16 pb-8 px-6 md:hidden w-4/5 max-w-xs bg-black border-r border-zinc-200 dark:border-zinc-800 shadow-lg"
        style={{
          maxHeight: "calc(100dvh - env(safe-area-inset-bottom, 0px))",
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <nav className="flex flex-col gap-4 text-lg font-medium">
          {navLinks.map((link, index) => (
            <div key={index} className="flex flex-col gap-2">
              {link.href ? (
                <SheetClose asChild className="w-full">
                  <Link
                    href={link.href}
                    className={cn(
                      "transition-colors hover:text-zinc-900 dark:hover:text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black dark:focus-visible:ring-white rounded w-full",
                      pathname === link.href
                        ? "text-white"
                        : "text-zinc-600 dark:text-zinc-400"
                    )}
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ) : (
                <>
                  <p className="text-zinc-600 dark:text-zinc-400 font-semibold uppercase text-xs tracking-widest mt-2">
                    {link.label}
                  </p>
                  <div className="flex flex-col gap-2 pl-4 border-l border-zinc-800">
                    {link.subLinks.map((sub) => (
                      <SheetClose asChild key={sub.href} className="w-full">
                        <Link
                          href={sub.href}
                          className={cn(
                            "transition-colors hover:text-zinc-900 dark:hover:text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black dark:focus-visible:ring-white rounded w-full text-base",
                            pathname === sub.href
                              ? "text-white"
                              : "text-zinc-600 dark:text-zinc-400"
                          )}
                        >
                          {sub.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
