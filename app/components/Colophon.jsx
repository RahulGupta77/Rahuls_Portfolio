"use client";

import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";
import { Reveal } from "./motion/Reveal";

export default function Colophon() {
  const year = new Date().getFullYear();

  return (
    <Reveal>
      <footer className="border-t border-border py-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-sm font-semibold text-foreground">
              Rahul
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              © {year}
            </p>
            <a
              href={`mailto:${personalData.email}`}
              className="mt-1 inline-block text-sm text-accent transition-opacity hover:opacity-80"
            >
              {personalData.email}
            </a>
          </div>
          <Link
            href={personalData.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            LinkedIn
          </Link>
        </div>
      </footer>
    </Reveal>
  );
}
