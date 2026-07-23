"use client";

import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const CERTIFICATES = [
  {
    title: "JLPT N4 Certificate",
    url: "https://drive.google.com/file/d/1rxuDfS3yI83CYvTRpbAGuRqvQETYLAPz/view",
  },
  {
    title: "JLPT N5 Certificate",
    url: "https://drive.google.com/file/d/1TmwzxpZA0AYEWyttwmr96bpQ_jGOFPeI/view",
  },
  {
    title: "Japan Tech Student Exchange Program",
    url: "https://drive.google.com/file/d/1mCppjvr8g4ceyzTVuUxK1eucIi1XtM5f/view",
  },
];

export default function Nihongo() {
  return (
    <div id="nihongo" className="mb-16">
      <SectionHeading icon={FaCertificate} title="日本語" />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-8 text-lg font-medium text-sky-600 dark:text-sky-400"
      >
        Currently Studying for JLPT N3
      </motion.p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {CERTIFICATES.map((cert, index) => (
          <motion.a
            key={cert.title}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="group flex items-center justify-between gap-3 rounded-xl border border-sky-500/30 bg-surface p-5 transition-colors duration-300 hover:bg-surface-hover"
          >
            <span className="text-sm font-medium text-foreground">
              {cert.title}
            </span>
            <FiExternalLink className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-sky-500" />
          </motion.a>
        ))}
      </div>
    </div>
  );
}
