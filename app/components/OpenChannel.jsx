"use client";

import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { personalData } from "@/utils/data/personal-data";
import ContactForm from "./ContactForm";
import { Reveal } from "./motion/Reveal";

export default function OpenChannel() {
  return (
    <section id="channel" className="scroll-mt-24 border-t border-border py-10 sm:py-12">
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
        <Reveal>
          <p className="mb-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Contact
          </p>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Open channel
          </h2>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Ideas, collaborations, system design chats, or just a hello - reach
            out anytime
          </p>

          <a
            href={`mailto:${personalData.email}`}
            className="mt-5 inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-3 text-base font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <FiMail className="h-4 w-4 text-icon" />
            {personalData.email}
          </a>

          <p className="mt-4 text-sm text-muted-foreground">
            Or{" "}
            <Link
              href={personalData.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline decoration-border underline-offset-4 hover:opacity-80"
            >
              connect on LinkedIn
            </Link>
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
