/** Simple One Piece-style straw hat mark. */
export default function StrawHatIcon({ className = "h-3.5 w-3.5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* brim */}
      <ellipse cx="12" cy="15.5" rx="10" ry="3.2" fill="currentColor" opacity="0.95" />
      {/* crown */}
      <path
        d="M6.5 15c0-4.2 2.3-7.5 5.5-7.5S17.5 10.8 17.5 15"
        fill="currentColor"
      />
      {/* ribbon band */}
      <rect x="6.2" y="13.1" width="11.6" height="2" rx="0.6" fill="currentColor" opacity="0.35" />
      {/* ribbon knot hint */}
      <circle cx="12" cy="14.1" r="0.7" fill="currentColor" opacity="0.2" />
    </svg>
  );
}
