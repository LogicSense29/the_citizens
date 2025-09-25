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
          {navLinks.map((link) => (
            <SheetClose asChild key={link.href} className="w-[32px]">
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
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
