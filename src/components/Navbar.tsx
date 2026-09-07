"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

// Hashes are root-relative ("/#about", not "#about") so they resolve from any
// route — e.g. clicking "About" from /blog navigates home and then scrolls.
const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-200",
        scrolled
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto grid w-full max-w-5xl grid-cols-[1fr_auto] items-center px-6 py-1 sm:h-14 sm:grid-cols-[1fr_auto_auto] sm:gap-x-5 sm:px-8 sm:py-0 md:px-12">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center text-sm font-semibold tracking-tight text-foreground sm:min-h-9"
        >
          Daiki Koike
        </Link>
        <div className="contents">
          <ul className="col-span-2 row-start-2 grid grid-cols-4 items-center text-sm text-muted-foreground sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:flex sm:gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 min-w-11 items-center justify-center transition-colors hover:text-foreground sm:min-h-9 sm:min-w-0"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="col-start-2 row-start-1 justify-self-end sm:col-start-3">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
