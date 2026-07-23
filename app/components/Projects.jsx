"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiCode, FiExternalLink, FiGithub } from "react-icons/fi";
import { projectsData } from "@/utils/data/projects-data";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <div id="projects" className="mb-16">
      <SectionHeading icon={FiCode} title="Featured Projects" />

      <div className="flex flex-col gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-xl border border-sky-500/30"
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full overflow-hidden bg-muted md:w-1/3">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={800}
                  height={600}
                  className="h-full min-h-[180px] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="p-6 md:w-2/3">
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  {project.name}
                </h3>

                <ul className="mb-4 space-y-2">
                  {project.description.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: i * 0.08,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-[15px] text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-500" />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-4">
                  <motion.a
                    whileHover={{ scale: 1.02, x: 2 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-sky-600 transition-colors hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
                  >
                    <FiExternalLink className="h-4 w-4" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.02, x: 2 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <FiGithub className="h-4 w-4" />
                    Source Code
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
