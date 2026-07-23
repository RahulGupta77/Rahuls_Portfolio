"use client";

/** Subtle blueprint-style grid behind content. */
export default function GridBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        backgroundImage: `
          linear-gradient(var(--grid-line) 1px, transparent 1px),
          linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
        backgroundPosition: "center top",
        maskImage:
          "radial-gradient(ellipse 90% 70% at 50% 30%, black 20%, transparent 75%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 90% 70% at 50% 30%, black 20%, transparent 75%)",
      }}
    />
  );
}
