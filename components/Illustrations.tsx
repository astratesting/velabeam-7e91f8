import React from "react";

export function ScanIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Background card */}
      <rect x="20" y="20" width="160" height="100" rx="12" fill="#EDE8FE" />
      {/* Search magnifier */}
      <circle cx="80" cy="60" r="20" stroke="#6E4FF2" strokeWidth="3" fill="none" />
      <line x1="94" y1="74" x2="110" y2="90" stroke="#6E4FF2" strokeWidth="3" strokeLinecap="round" />
      {/* Signal waves */}
      <path d="M120 40 Q130 35 140 40" stroke="#FF6F61" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M118 50 Q130 43 142 50" stroke="#FF6F61" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M116 60 Q130 51 144 60" stroke="#FF6F61" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Pins */}
      <circle cx="40" cy="45" r="4" fill="#F5B947" />
      <circle cx="55" cy="90" r="3" fill="#6E4FF2" />
      <circle cx="150" cy="75" r="3" fill="#F5B947" />
    </svg>
  );
}

export function GenerateIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Screen frame */}
      <rect x="30" y="15" width="140" height="95" rx="8" fill="#FFFFFF" stroke="#EDE8FE" strokeWidth="2" />
      {/* Header bar */}
      <rect x="30" y="15" width="140" height="20" rx="8" fill="#6E4FF2" />
      <rect x="30" y="27" width="140" height="8" fill="#6E4FF2" />
      {/* Dots in header */}
      <circle cx="44" cy="25" r="3" fill="#FF6F61" />
      <circle cx="54" cy="25" r="3" fill="#F5B947" />
      <circle cx="64" cy="25" r="3" fill="#3CB371" />
      {/* Content lines */}
      <rect x="45" y="45" width="80" height="6" rx="3" fill="#EDE8FE" />
      <rect x="45" y="57" width="60" height="6" rx="3" fill="#EDE8FE" />
      <rect x="45" y="69" width="100" height="6" rx="3" fill="#EDE8FE" />
      {/* Button */}
      <rect x="45" y="85" width="50" height="14" rx="7" fill="#FF6F61" />
      {/* Sparkle / wand */}
      <path d="M140 55 L145 45 L150 55 L145 65 Z" fill="#F5B947" />
      <line x1="145" y1="40" x2="145" y2="35" stroke="#F5B947" strokeWidth="2" strokeLinecap="round" />
      <line x1="155" y1="50" x2="160" y2="48" stroke="#F5B947" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function DeliverIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Envelope / package */}
      <rect x="40" y="30" width="120" height="80" rx="10" fill="#FFFFFF" stroke="#EDE8FE" strokeWidth="2" />
      {/* Envelope flap */}
      <path d="M40 40 L100 75 L160 40" stroke="#6E4FF2" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Check mark */}
      <circle cx="100" cy="70" r="18" fill="#3CB371" opacity="0.15" />
      <path d="M90 70 L97 77 L112 62" stroke="#3CB371" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Speed lines */}
      <line x1="25" y1="55" x2="35" y2="55" stroke="#F5B947" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="70" x2="35" y2="70" stroke="#F5B947" strokeWidth="2" strokeLinecap="round" />
      <line x1="25" y1="85" x2="35" y2="85" stroke="#F5B947" strokeWidth="2" strokeLinecap="round" />
      {/* Arrow pointing right */}
      <path d="M165 70 L180 70" stroke="#FF6F61" strokeWidth="2" strokeLinecap="round" />
      <path d="M175 65 L180 70 L175 75" stroke="#FF6F61" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PreviewCard({ audience }: { audience: "dev" | "agency" | "owner" }) {
  if (audience === "dev") {
    return (
      <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full">
        <rect x="10" y="10" width="260" height="180" rx="12" fill="#FFFFFF" stroke="#EDE8FE" strokeWidth="2" />
        <rect x="10" y="10" width="260" height="28" rx="12" fill="#6E4FF2" />
        <rect x="10" y="30" width="260" height="8" fill="#6E4FF2" />
        <text x="24" y="30" fill="white" fontSize="10" fontFamily="monospace">Lead Pipeline</text>
        {/* Lead rows */}
        <rect x="24" y="52" width="232" height="24" rx="6" fill="#FAF6EF" />
        <rect x="34" y="58" width="80" height="8" rx="4" fill="#6E4FF2" opacity="0.3" />
        <circle cx="230" cy="64" r="6" fill="#3CB371" />
        <rect x="24" y="84" width="232" height="24" rx="6" fill="#FAF6EF" />
        <rect x="34" y="90" width="60" height="8" rx="4" fill="#6E4FF2" opacity="0.3" />
        <circle cx="230" cy="96" r="6" fill="#F5B947" />
        <rect x="24" y="116" width="232" height="24" rx="6" fill="#FAF6EF" />
        <rect x="34" y="122" width="90" height="8" rx="4" fill="#6E4FF2" opacity="0.3" />
        <circle cx="230" cy="128" r="6" fill="#3CB371" />
        <rect x="24" y="148" width="232" height="24" rx="6" fill="#FAF6EF" />
        <rect x="34" y="154" width="70" height="8" rx="4" fill="#6E4FF2" opacity="0.3" />
        <circle cx="230" cy="160" r="6" fill="#FF6F61" />
      </svg>
    );
  }

  if (audience === "agency") {
    return (
      <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full">
        <rect x="10" y="10" width="260" height="180" rx="12" fill="#FFFFFF" stroke="#EDE8FE" strokeWidth="2" />
        <rect x="10" y="10" width="260" height="28" rx="12" fill="#6E4FF2" />
        <rect x="10" y="30" width="260" height="8" fill="#6E4FF2" />
        <text x="24" y="30" fill="white" fontSize="10" fontFamily="monospace">White-label Dashboard</text>
        {/* Cards */}
        <rect x="24" y="52" width="108" height="60" rx="8" fill="#EDE8FE" />
        <rect x="34" y="62" width="60" height="6" rx="3" fill="#6E4FF2" opacity="0.4" />
        <rect x="34" y="74" width="40" height="14" rx="7" fill="#FF6F61" />
        <rect x="148" y="52" width="108" height="60" rx="8" fill="#EDE8FE" />
        <rect x="158" y="62" width="70" height="6" rx="3" fill="#6E4FF2" opacity="0.4" />
        <rect x="158" y="74" width="40" height="14" rx="7" fill="#F5B947" />
        <rect x="24" y="124" width="108" height="60" rx="8" fill="#EDE8FE" />
        <rect x="34" y="134" width="50" height="6" rx="3" fill="#6E4FF2" opacity="0.4" />
        <rect x="34" y="146" width="40" height="14" rx="7" fill="#3CB371" />
        <rect x="148" y="124" width="108" height="60" rx="8" fill="#EDE8FE" />
        <rect x="158" y="134" width="65" height="6" rx="3" fill="#6E4FF2" opacity="0.4" />
        <rect x="158" y="146" width="40" height="14" rx="7" fill="#6E4FF2" />
      </svg>
    );
  }

  // Owner
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full">
      <rect x="10" y="10" width="260" height="180" rx="12" fill="#FFFFFF" stroke="#EDE8FE" strokeWidth="2" />
      {/* Hero section */}
      <rect x="10" y="10" width="260" height="70" rx="12" fill="#6E4FF2" />
      <rect x="10" y="68" width="260" height="12" fill="#6E4FF2" />
      <text x="24" y="40" fill="white" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Tony&apos;s Pizza</text>
      <text x="24" y="56" fill="white" fontSize="8" fontFamily="sans-serif" opacity="0.8">Best pizza in Brooklyn since 1998</text>
      {/* Nav */}
      <rect x="140" y="30" width="30" height="8" rx="4" fill="white" opacity="0.3" />
      <rect x="176" y="30" width="30" height="8" rx="4" fill="white" opacity="0.3" />
      <rect x="212" y="30" width="40" height="8" rx="4" fill="#FF6F61" />
      {/* Content */}
      <rect x="24" y="94" width="100" height="8" rx="4" fill="#1B1530" opacity="0.2" />
      <rect x="24" y="110" width="232" height="6" rx="3" fill="#FAF6EF" />
      <rect x="24" y="122" width="200" height="6" rx="3" fill="#FAF6EF" />
      <rect x="24" y="134" width="220" height="6" rx="3" fill="#FAF6EF" />
      {/* Contact form */}
      <rect x="24" y="152" width="80" height="12" rx="6" fill="#EDE8FE" />
      <rect x="114" y="152" width="60" height="12" rx="6" fill="#FF6F61" />
      {/* Map pin */}
      <circle cx="240" cy="160" r="8" fill="#FF6F61" opacity="0.2" />
      <circle cx="240" cy="160" r="3" fill="#FF6F61" />
    </svg>
  );
}

export function HeroPrism({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heroPrismGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6E4FF2" />
          <stop offset="40%" stopColor="#FF6F61" />
          <stop offset="100%" stopColor="#F5B947" />
        </linearGradient>
        <filter id="prismGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
        </filter>
        <filter id="prismShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="#6E4FF2" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Glow behind */}
      <polygon
        points="200,50 350,330 50,330"
        fill="url(#heroPrismGrad)"
        filter="url(#prismGlow)"
        opacity="0.3"
      />

      {/* Main prism */}
      <polygon
        points="200,60 340,320 60,320"
        fill="url(#heroPrismGrad)"
        filter="url(#prismShadow)"
      />

      {/* Inner facet - lighter */}
      <polygon
        points="200,100 300,300 100,300"
        fill="white"
        opacity="0.15"
      />

      {/* Refraction lines */}
      <line x1="200" y1="60" x2="340" y2="320" stroke="white" strokeWidth="1" opacity="0.2" />
      <line x1="200" y1="60" x2="60" y2="320" stroke="white" strokeWidth="1" opacity="0.2" />
      <line x1="200" y1="100" x2="300" y2="300" stroke="white" strokeWidth="0.5" opacity="0.15" />
      <line x1="200" y1="100" x2="100" y2="300" stroke="white" strokeWidth="0.5" opacity="0.15" />

      {/* Light beam entry */}
      <line x1="30" y1="180" x2="120" y2="180" stroke="#F5B947" strokeWidth="2" opacity="0.6" strokeLinecap="round" />

      {/* Refracted rays */}
      <line x1="280" y1="200" x2="370" y2="160" stroke="#FF6F61" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
      <line x1="280" y1="220" x2="370" y2="240" stroke="#6E4FF2" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
      <line x1="280" y1="250" x2="370" y2="300" stroke="#F5B947" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
    </svg>
  );
}
