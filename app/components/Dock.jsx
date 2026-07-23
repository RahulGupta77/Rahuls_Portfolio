"use client";

import { clsx } from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./theme/ThemeToggle";

const LINKS = [
  { href: "/#journey", label: "Work" },
  { href: "/#life", label: "Life" },
];

export default function Dock() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Reserves layout space while the dock itself is fixed */}
      <div aria-hidden className="h-16 sm:h-[4.25rem]" />

      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-3 sm:px-4">
        <motion.header
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={clsx("dock pointer-events-auto", scrolled && "dock--scrolled")}
        >
          <nav className="flex w-full items-center justify-between gap-3 sm:gap-4">
            <Link
              href="/"
              className="dock-brand font-display font-semibold tracking-tight text-foreground transition-opacity hover:opacity-70"
            >
              Rahul Gupta
            </Link>

            <div className="flex items-center gap-0.5 sm:gap-1">
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground sm:px-3"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#channel"
                className="hidden rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-accent sm:inline"
              >
                Say hi
              </Link>
              <div className="ml-0.5 sm:ml-1">
                <ThemeToggle />
              </div>
            </div>
          </nav>
        </motion.header>
      </div>
    </>
  );
}
