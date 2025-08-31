"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { path: "/", name: "Home" },
  { path: "/worship", name: "Worship" },
  { path: "/messages", name: "Messages" },
  { path: "/im-new", name: "I'm new" },
  { path: "/give", name: "Give" },
  { path: "/contact", name: "Contact us" },
];

export default function Nav() {
  const pathname = usePathname();

  // Highlight the active link
  const isActive = (path) => pathname === path;
  return (
    <div className="flex items-center gap-8">
      {links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={`${
            isActive(link.path) && "text-accent border-b-2 border-accent  "
          } capitalize font-medium hover:text-accent transition-all duration-300`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
