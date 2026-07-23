"use client";

import { FiMapPin } from "react-icons/fi";
import { educations } from "@/utils/data/educations";
import { experiences } from "@/utils/data/experience";
import { skillGroups } from "@/utils/data/skills";
import { Reveal } from "./motion/Reveal";

export default function ProfessionalJourney() {
  const school = educations[0];

  return (
    <section id="journey" className="scroll-mt-24 border-t border-border py-10 sm:py-12">
      <Reveal className="mb-6">
        <p className="mb-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Work
        </p>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Professional journey
        </h2>
        <p className="mt-1.5 max-w-lg text-sm text-muted-foreground">
          Experience as a software engineer building system design, microservices,
          and reliable backends in Bangalore
        </p>
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10">
        <Reveal>
          <ol className="relative space-y-0 border-l border-border pl-5">
            {experiences.map((exp, i) => (
              <li key={exp.id} className="relative pb-7 last:pb-0">
                <span
                  aria-hidden
                  className="absolute -left-[1.4rem] top-1.5 h-2 w-2 rounded-full border border-accent bg-background"
                />
                <p className="text-xs text-muted-foreground">{exp.duration}</p>
                <h3 className="mt-0.5 text-base font-semibold text-foreground">
                  {exp.title}
                </h3>
                <p className="mt-0.5 flex items-center gap-1.5 text-sm text-accent">
                  <FiMapPin className="h-3.5 w-3.5 flex-shrink-0 text-icon" aria-hidden />
                  {exp.company}
                </p>
                {exp.highlights?.length > 0 && (
                  <ul className="mt-2.5 space-y-1.5">
                    {exp.highlights.map((line) => (
                      <li
                        key={line}
                        className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent/70" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {i === experiences.length - 1 && school && (
                  <p className="mt-5 text-sm text-muted-foreground">
                    {school.title} · {school.institution} ({school.duration})
                  </p>
                )}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mb-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Tech stack
          </p>
          <div className="space-y-4">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-1.5 text-xs font-medium text-foreground">
                  {group.label}
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border bg-surface px-2 py-0.5 text-xs text-foreground/90"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
