"use client";

import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import { educations } from "@/utils/data/educations";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <div id="education" className="mb-16">
      <SectionHeading icon={FiBookOpen} title="Education" />

      <div className="space-y-10">
        {educations.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  {edu.institution}
                </h3>
                <p className="text-lg font-medium text-sky-600 dark:text-sky-400">
                  {edu.title}
                </p>
              </div>
              <span className="text-muted-foreground">{edu.duration}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
