"use client";

import { FaFlask, FaBalanceScale } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { GiThroneKing } from "react-icons/gi";
import { MdSelfImprovement } from "react-icons/md";
import StrawHatIcon from "./icons/StrawHatIcon";
import { funFacts } from "@/utils/data/fun-facts";
import { moving } from "@/utils/data/moving";
import { nihongo } from "@/utils/data/nihongo";
import { watching } from "@/utils/data/watching";
import { Reveal } from "./motion/Reveal";

const SHOW_ICONS = {
  "one-piece": StrawHatIcon,
  got: GiThroneKing,
  bb: FaFlask,
  saul: FaBalanceScale,
  default: MdSelfImprovement,
};

function OrbitNode({ title, children, delay = 0 }) {
  return (
    <Reveal
      delay={delay}
      className="min-w-0 rounded-lg border border-border bg-surface p-4"
    >
      <h3 className="mb-3 text-sm font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      {children}
    </Reveal>
  );
}

export default function LifeOrbit() {
  return (
    <section id="life" className="scroll-mt-24 border-t border-border py-10 sm:py-12">
      <Reveal className="mb-6">
        <p className="mb-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Life
        </p>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Orbit
        </h2>
        <p className="mt-1.5 max-w-lg text-sm text-muted-foreground">
          Fun facts, shows, stats, and 日本語 - the personal side of my space
        </p>
      </Reveal>

      <div className="grid gap-3 sm:grid-cols-2">
        <OrbitNode title="Fun facts" delay={0.03}>
          <ul className="space-y-3">
            {funFacts.map((item) => (
              <li key={item.id}>
                <p className="text-sm font-medium text-accent">{item.label}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                  {item.fact}
                </p>
              </li>
            ))}
          </ul>
        </OrbitNode>

        <OrbitNode title="Shows" delay={0.05}>
          <ul className="space-y-2.5">
            {watching.map((show) => {
              const Icon = SHOW_ICONS[show.icon] || SHOW_ICONS.default;
              return (
                <li key={show.id} className="flex gap-2.5">
                  <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md border border-border bg-background text-icon">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground">
                      {show.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-accent">{show.status}</span>
                      {show.note ? ` · ${show.note}` : ""}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </OrbitNode>

        <OrbitNode title="Stats" delay={0.07}>
          <ul className="grid grid-cols-2 gap-3">
            {moving.map((item) => (
              <li
                key={item.id}
                className="rounded-md border border-border bg-background/40 px-3 py-2.5"
              >
                <p className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                  {item.title}
                </p>
                <p className="mt-1 font-display text-xl font-semibold tracking-tight text-accent">
                  {item.value}
                  <span className="ml-1 text-xs font-medium text-muted-foreground">
                    {item.unit}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </OrbitNode>

        <OrbitNode title="日本語" delay={0.09}>
          <p className="mb-2.5 text-xs text-accent">{nihongo.status}</p>
          <ul className="space-y-1.5">
            {nihongo.certificates.map((cert) => (
              <li key={cert.title}>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm text-foreground transition-colors hover:text-accent"
                >
                  {cert.title}
                  <FiExternalLink className="h-3 w-3 text-icon group-hover:opacity-80" />
                </a>
              </li>
            ))}
          </ul>
        </OrbitNode>
      </div>
    </section>
  );
}
