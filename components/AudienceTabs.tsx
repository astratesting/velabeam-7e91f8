"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Code2, Building2, Store } from "lucide-react";
import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { PreviewCard } from "./Illustrations";
import { trackEvent } from "@/lib/analytics";
import type { Audience } from "@/lib/validation";

interface TabData {
  id: Audience;
  label: string;
  Icon: typeof Code2;
  headline: string;
  bullets: string[];
}

const TABS: TabData[] = [
  {
    id: "dev",
    label: "Devs",
    Icon: Code2,
    headline: "Stop cold-pitching. Get warm leads delivered weekly.",
    bullets: [
      "Pre-qualified local business leads with no web presence",
      "Each lead includes business type, location, and contact info",
      "Generate a starter site in seconds to close the deal faster",
    ],
  },
  {
    id: "agency",
    label: "Agencies",
    Icon: Building2,
    headline: "White-label sites in minutes, not sprints.",
    bullets: [
      "Ship polished client sites in a fraction of the usual time",
      "Export under your own brand — your clients never see ours",
      "Volume pricing and multi-seat accounts for growing teams",
    ],
  },
  {
    id: "owner",
    label: "Owners",
    Icon: Store,
    headline: "A real website for your shop, by Friday.",
    bullets: [
      "No code, no design skills needed — we handle the hard parts",
      "Industry-specific templates with copy that sounds like you",
      "Contact forms, maps, and click-to-call built right in",
    ],
  },
];

export default function AudienceTabs() {
  const [active, setActive] = useState<Audience>("dev");
  const prefersReducedMotion = useReducedMotion();

  const handleTabChange = (id: Audience) => {
    setActive(id);
    trackEvent("audience_tab_changed", { audience: id });
  };

  const activeTab = TABS.find((t) => t.id === active)!;

  return (
    <section id="audience" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <p className="eyebrow text-center mb-4">Built for you</p>
          <h2 className="font-display font-700 text-brand-ink text-center mb-12">
            One tool, three audiences.
          </h2>
        </ScrollReveal>

        {/* Tab buttons */}
        <ScrollReveal>
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-brand-violet-soft rounded-full p-1.5 gap-1">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold font-body transition-all duration-200 ${
                    active === tab.id
                      ? "bg-brand-violet text-white shadow-md"
                      : "text-brand-ink-soft hover:text-brand-ink"
                  }`}
                  aria-pressed={active === tab.id}
                >
                  <tab.Icon size={16} strokeWidth={1.75} />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? {} : { opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Text content */}
            <div>
              <h3 className="font-display font-700 text-2xl text-brand-ink mb-6 leading-[1.2]">
                {activeTab.headline}
              </h3>
              <ul className="space-y-4">
                {activeTab.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-brand-success/15 flex items-center justify-center">
                      <Check size={12} className="text-brand-success" strokeWidth={2.5} />
                    </span>
                    <span className="text-brand-ink-soft text-base leading-[1.7]">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Preview mock */}
            <div className="flex justify-center">
              <div className="w-full max-w-[340px]">
                <PreviewCard audience={active} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
