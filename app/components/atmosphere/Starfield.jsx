"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

function makeStars(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${(i * 37 + 13) % 100}%`,
    top: `${(i * 53 + 7) % 100}%`,
    size: i % 7 === 0 ? 2.4 : i % 4 === 0 ? 1.7 : 1.15,
    delay: (i % 14) * 0.35,
    duration: 2.2 + (i % 8) * 0.55,
    opacity: 0.2 + (i % 6) * 0.1,
  }));
}

export default function Starfield() {
  const reduce = useReducedMotion();
  const stars = useMemo(() => makeStars(64), []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            backgroundColor: "var(--star)",
            boxShadow: `0 0 ${star.size * 2}px color-mix(in srgb, var(--star) 50%, transparent)`,
          }}
          initial={{ opacity: star.opacity * 0.25 }}
          animate={
            reduce
              ? { opacity: star.opacity * 0.6 }
              : {
                  opacity: [
                    star.opacity * 0.15,
                    star.opacity,
                    star.opacity * 0.25,
                    star.opacity * 0.85,
                    star.opacity * 0.2,
                  ],
                  scale: [1, 1.45, 1, 1.25, 1],
                }
          }
          transition={
            reduce
              ? { duration: 0 }
              : {
                  duration: star.duration,
                  delay: star.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />
      ))}
    </div>
  );
}
