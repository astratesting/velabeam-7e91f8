import React from "react";

export default function PrismGlow({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-40"
        style={{
          background: "radial-gradient(circle at 60% 40%, #6E4FF2 0%, transparent 60%), radial-gradient(circle at 40% 60%, #F5B947 0%, transparent 60%)",
        }}
      />
    </div>
  );
}
