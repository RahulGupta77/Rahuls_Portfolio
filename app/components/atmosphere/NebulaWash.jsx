"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function NebulaWash() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const yA = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -80]);
  const yB = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <motion.div
        className="absolute -left-[20%] top-[-10%] h-[55vh] w-[55vw] rounded-full blur-3xl"
        style={{
          y: yA,
          background:
            "radial-gradient(circle, var(--nebula-a) 0%, transparent 70%)",
        }}
        animate={
          reduce
            ? undefined
            : {
                x: [0, 30, -10, 0],
                scale: [1, 1.05, 0.98, 1],
              }
        }
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[15%] bottom-[-5%] h-[50vh] w-[50vw] rounded-full blur-3xl"
        style={{
          y: yB,
          background:
            "radial-gradient(circle, var(--nebula-b) 0%, transparent 70%)",
        }}
        animate={
          reduce
            ? undefined
            : {
                x: [0, -25, 15, 0],
                scale: [1, 0.96, 1.04, 1],
              }
        }
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
