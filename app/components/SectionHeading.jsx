"use client";

import { motion } from "framer-motion";

/**
 * Shared section heading: icon badge + gradient title + animated underline.
 */
export default function SectionHeading({ icon: Icon, title, centered = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <div
        className={`mb-4 flex items-center gap-4 ${
          centered ? "justify-center" : ""
        }`}
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-xl border border-sky-500/30 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 p-3"
        >
          <Icon className="h-6 w-6 text-sky-600 dark:text-sky-400" />
        </motion.div>
        <h2 className="text-gradient-title text-3xl font-bold lg:text-4xl">
          {title}
        </h2>
      </div>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className={`h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent ${
          centered ? "mx-auto max-w-md" : ""
        }`}
      />
    </motion.div>
  );
}
