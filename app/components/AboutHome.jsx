"use client";

import {
  MdOutlineDirectionsRun,
  MdOutlineHiking,
  MdOutlineLocalCafe,
  MdOutlineMenuBook,
  MdOutlinePool,
  MdSelfImprovement,
  MdOutlineLiveTv,
} from "react-icons/md";
import { GiShuttlecock } from "react-icons/gi";
import { aboutHome } from "@/utils/data/about-home";
import { Reveal } from "./motion/Reveal";

const ICONS = {
  badminton: GiShuttlecock,
  running: MdOutlineDirectionsRun,
  hiking: MdOutlineHiking,
  reading: MdOutlineMenuBook,
  shows: MdOutlineLiveTv,
  swimming: MdOutlinePool,
  coffee: MdOutlineLocalCafe,
  default: MdSelfImprovement,
};

export default function AboutHome() {
  const { interests } = aboutHome;

  return (
    <section id="about" className="scroll-mt-24 border-t border-border py-10 sm:py-12">
      <Reveal className="mb-5">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {interests.title}
        </h2>
      </Reveal>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {interests.items.map((item, index) => {
          const Icon = ICONS[item.icon] || ICONS.default;
          return (
            <Reveal
              key={item.label}
              delay={index * 0.04}
              className="flex gap-3 rounded-lg border border-border bg-surface/60 px-3.5 py-3 transition-colors hover:bg-surface-hover"
            >
              <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-border bg-background text-icon">
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground">{item.label}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
