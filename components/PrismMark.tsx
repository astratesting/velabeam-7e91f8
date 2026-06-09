import React from "react";

export default function PrismMark({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="prismGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6E4FF2" />
          <stop offset="50%" stopColor="#FF6F61" />
          <stop offset="100%" stopColor="#F5B947" />
        </linearGradient>
      </defs>
      <polygon
        points="32,4 58,52 6,52"
        fill="url(#prismGrad)"
        stroke="none"
      />
      <polygon
        points="32,14 50,48 14,48"
        fill="#FAF6EF"
        opacity="0.3"
      />
      <line x1="32" y1="4" x2="58" y2="52" stroke="#FAF6EF" strokeWidth="1" opacity="0.2" />
      <line x1="32" y1="4" x2="6" y2="52" stroke="#FAF6EF" strokeWidth="1" opacity="0.2" />
    </svg>
  );
}
