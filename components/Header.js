"use client";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-8 xl:py-8 text-white backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Desktop Navigation */}
        <div className="w-full hidden xl:flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href={"/"}>
            <Image
              src="/logo.png"
              className="w-[180px] h-auto"
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>
          <Nav />
          <Link href={"/contact"}>
            <Button>Join us Online</Button>
          </Link>
        </div>
        {/* Mobile Navigation */}
        <div className="flex xl:hidden items-center justify-between w-full">
          {/* Logo */}
          <Link href={"/"}>
            <Image
              src="/logo.png"
              className="w-[180px] h-auto"
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
