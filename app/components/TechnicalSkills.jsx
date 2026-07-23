"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import SectionHeading from "./SectionHeading";

export default function TechnicalSkills() {
  return (
    <div id="skills" className="mb-16">
      <SectionHeading icon={FaReact} title="Tech Arsenal" />

      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 lg:grid-cols-5">
        {skillsData.map((skill, index) => {
          const img = skillsImage(skill);
          return (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group flex flex-col items-center rounded-xl border border-sky-500/30 bg-surface p-4 transition-colors duration-500 hover:bg-surface-hover"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center">
                {img?.src && (
                  <Image
                    src={img.src}
                    alt={skill}
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                )}
              </div>
              <span className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                {skill}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
