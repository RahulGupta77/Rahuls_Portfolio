"use client";

import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projectsData } from "@/utils/data/projects-data";
import { Reveal } from "./motion/Reveal";

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 0.04}>
      <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:bg-surface-hover">
        {project.image ? (
          <div className="relative aspect-[16/9] overflow-hidden border-b border-border">
            <Image
              src={project.image}
              alt={`${project.name} — ${project.tag || "project"} screenshot by Rahul Gupta`}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
              placeholder="blur"
            />
          </div>
        ) : (
          <div
            className="relative flex aspect-[16/9] items-end border-b border-border p-4"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--accent) 22%, transparent), transparent 60%), var(--surface)",
            }}
          >
            <div>
              {project.tag && (
                <p className="mb-1 text-[10px] uppercase tracking-[0.16em] text-accent">
                  {project.tag}
                </p>
              )}
              <p className="text-sm text-muted-foreground">
                {project.stack?.slice(0, 3).join(" · ")}
              </p>
            </div>
          </div>
        )}

        <div className="flex flex-1 flex-col p-4">
          <div className="mb-1.5 flex items-baseline justify-between gap-2">
            <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
              {project.name}
            </h3>
            <span className="font-mono text-xs text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {project.description[0]}
          </p>

          {project.stack?.length > 0 && (
            <ul className="mt-2.5 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
          )}

          {(project.demo || project.code) && (
            <div className="mt-3 flex flex-wrap gap-3 border-t border-border pt-3 text-sm">
              {project.demo && (
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-foreground transition-colors hover:text-accent"
                >
                  <FiExternalLink className="h-3.5 w-3.5" />
                  Live
                </Link>
              )}
              {project.code && (
                <Link
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <FiGithub className="h-3.5 w-3.5" />
                  Code
                </Link>
              )}
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export default function Builds() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-border py-10 sm:py-12">
      <Reveal className="mb-6">
        <p className="mb-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Work
        </p>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Projects
        </h2>
        <p className="mt-1.5 max-w-lg text-sm text-muted-foreground">
          Featured software projects — Spring Boot microservices and selected
          full-stack builds
        </p>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
