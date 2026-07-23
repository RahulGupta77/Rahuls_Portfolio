"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const WIPED = {
  light: "#f7f6f3",
  dark: "#0b0c10",
};

export default function ThemeHorizonWipe({
  next,
  x,
  y,
  onMidpoint,
  onComplete,
}) {
  const [phase, setPhase] = useState("expand");
  const midFired = useMemo(() => ({ current: false }), []);

  const maxRadius = useMemo(() => {
    if (typeof window === "undefined") return 2000;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const dist = Math.hypot(Math.max(x, w - x), Math.max(y, h - y));
    return dist + 80;
  }, [x, y]);

  const twinkles = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => {
      const angle = (i / 18) * Math.PI * 2 + (i % 3) * 0.25;
      const dist = 36 + (i % 6) * 26;
      return {
        id: i,
        dx: Math.cos(angle) * dist,
        dy: Math.sin(angle) * dist * 0.85,
        size: 1.5 + (i % 4),
        delay: 0.05 + (i % 9) * 0.028,
      };
    });
  }, []);

  useEffect(() => {
    const mid = window.setTimeout(() => {
      if (!midFired.current) {
        midFired.current = true;
        onMidpoint?.();
      }
    }, 360);
    return () => window.clearTimeout(mid);
  }, [onMidpoint, midFired]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] overflow-hidden"
    >
      <motion.div
        className="absolute rounded-full"
        style={{
          left: x,
          top: y,
          width: 120,
          height: 120,
          marginLeft: -60,
          marginTop: -60,
          background:
            next === "dark"
              ? "radial-gradient(circle, rgba(126,184,218,0.45) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(59,130,196,0.35) 0%, transparent 70%)",
        }}
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: [0, 1, 0.3], scale: [0.4, 1.6, 2.2] }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      />

      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor: WIPED[next] }}
        initial={{ clipPath: `circle(0px at ${x}px ${y}px)` }}
        animate={{
          clipPath: `circle(${maxRadius}px at ${x}px ${y}px)`,
        }}
        transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
        onAnimationComplete={() => {
          if (phase === "expand") {
            setPhase("done");
            onComplete?.();
          }
        }}
      />

      {twinkles.map((t) => (
        <motion.span
          key={t.id}
          className="absolute rounded-full"
          style={{
            left: x,
            top: y,
            width: t.size,
            height: t.size,
            marginLeft: -t.size / 2,
            marginTop: -t.size / 2,
            backgroundColor: next === "dark" ? "#eeeae3" : "#3b82c4",
            boxShadow:
              next === "dark"
                ? "0 0 6px rgba(238,234,227,0.7)"
                : "0 0 6px rgba(59,130,196,0.55)",
          }}
          initial={{ opacity: 0, x: 0, y: 0, scale: 0.3 }}
          animate={{
            opacity: [0, 1, 0],
            x: t.dx,
            y: t.dy,
            scale: [0.3, 1.5, 0],
          }}
          transition={{
            duration: 0.75,
            delay: t.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
