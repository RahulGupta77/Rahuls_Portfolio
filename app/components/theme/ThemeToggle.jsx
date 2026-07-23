"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme, isTransitioning } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      disabled={isTransitioning}
      onClick={(e) => toggleTheme(e)}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.9 }}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:bg-surface-hover disabled:opacity-70"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: -100, y: 6, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 80, y: -6, scale: 0.6 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <FiSun className="h-4 w-4 text-amber-300" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: 100, y: 6, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -80, y: -6, scale: 0.6 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <FiMoon className="h-4 w-4 text-icon" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
