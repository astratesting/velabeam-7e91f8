"use client";

import React, { useState } from "react";
import { Code2, Building2, Store } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import WaitlistForm from "./WaitlistForm";
import PrismMark from "./PrismMark";
import type { Audience } from "@/lib/validation";

const AUDIENCE_TABS: { id: Audience; label: string; Icon: typeof Code2 }[] = [
  { id: "dev", label: "Dev", Icon: Code2 },
  { id: "agency", label: "Agency", Icon: Building2 },
  { id: "owner", label: "Owner", Icon: Store },
];

const HEADLINES: Record<Audience, string> = {
  dev: "Get weekly leads as a dev",
  agency: "Scale your agency output",
  owner: "Get a free site for your business",
};

export default function WaitlistCTA() {
  const [audience, setAudience] = useState<Audience>("dev");

  return (
    <section
      id="waitlist"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #EDE8FE 0%, #FAF6EF 100%)",
      }}
    >
      {/* Decorative prism marks */}
      <PrismMark
        size={120}
        className="absolute top-8 right-8 opacity-10 rotate-12"
      />
      <PrismMark
        size={80}
        className="absolute bottom-12 left-12 opacity-10 -rotate-6"
      />

      <div className="mx-auto max-w-[520px] px-6 relative z-10">
        <ScrollReveal>
          <p className="eyebrow text-center mb-4">Join the beta</p>
          <h2 className="font-display font-700 text-brand-ink text-center mb-3">
            Be on the list when we open the beta.
          </h2>
          <p className="text-brand-ink-soft text-lg text-center mb-12 leading-[1.7]">
            One email when the doors open. That&apos;s it.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="gradient-border p-8">
            {/* Audience selector */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex bg-brand-cream rounded-full p-1 gap-1">
                {AUDIENCE_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setAudience(tab.id)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold font-body transition-all duration-200 ${
                      audience === tab.id
                        ? "bg-brand-violet text-white shadow-sm"
                        : "text-brand-ink-soft hover:text-brand-ink"
                    }`}
                    aria-pressed={audience === tab.id}
                  >
                    <tab.Icon size={14} strokeWidth={1.75} />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Audience headline */}
            <h3 className="font-display font-700 text-lg text-brand-ink text-center mb-6">
              {HEADLINES[audience]}
            </h3>

            {/* Form */}
            <WaitlistForm audience={audience} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
