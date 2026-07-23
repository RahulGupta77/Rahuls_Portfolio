"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaRegSmileWink } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="border-t border-border"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <p className="text-sm text-muted-foreground">
          Made with ❤️ in{" "}
          <span className="text-sky-600 dark:text-sky-400">India</span>
        </p>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/rahul-gupta-aa60611a7/"
          className="flex items-center gap-2 text-sm uppercase text-muted-foreground transition-colors hover:text-sky-600 dark:hover:text-sky-400"
        >
          <FaRegSmileWink className="h-5 w-5" />
          <span>See You Soon!!</span>
        </Link>
      </div>
    </motion.footer>
  );
}
