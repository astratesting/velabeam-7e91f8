"use client";

import React from "react";
import {
  LayoutTemplate,
  Palette,
  MailCheck,
  Accessibility,
  Share2,
  Pencil,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const FEATURES = [
  {
    Icon: LayoutTemplate,
    title: "Industry-tuned templates",
    description:
      "40+ verticals, copy that sounds like a human wrote it. Each template is designed for the specific needs of that business type.",
  },
  {
    Icon: Palette,
    title: "One-click brand match",
    description:
      "Drop a logo or pick a palette; the site re-skins instantly. Colors, fonts, and layout adjust to your brand in one click.",
  },
  {
    Icon: MailCheck,
    title: "Built-in lead capture",
    description:
      "Contact forms, click-to-call, Google Maps, schema markup. No plugins, no configuration — it just works out of the box.",
  },
  {
    Icon: Accessibility,
    title: "Accessibility by default",
    description:
      "WCAG AA contrast, keyboard nav, semantic HTML on every generated site. Accessible to everyone, no extra effort required.",
  },
  {
    Icon: Share2,
    title: "White-label exports",
    description:
      "Hand off a polished site under your own brand. Perfect for devs and agencies who want to deliver fast without showing the tooling.",
  },
  {
    Icon: Pencil,
    title: "Edit without code",
    description:
      "A visual editor that doesn't feel like a CMS from 2012. Change text, swap images, update hours — all with a few clicks.",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-24 md:py-32 bg-brand-surface">
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <p className="eyebrow text-center mb-4">Features</p>
          <h2 className="font-display font-700 text-brand-ink text-center mb-4">
            Everything a local business site needs.
          </h2>
          <p className="text-brand-ink-soft text-lg text-center max-w-[560px] mx-auto mb-16 leading-[1.7]">
            No bloated plugins, no confusing dashboards. Just the features that
            matter — built in from the start.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.08}>
              <div className="card group h-full">
                <div className="w-12 h-12 rounded-2xl bg-brand-violet-soft flex items-center justify-center mb-5 group-hover:bg-brand-violet/10 transition-colors">
                  <feature.Icon
                    size={24}
                    className="text-brand-violet"
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="font-display font-700 text-lg text-brand-ink mb-2">
                  {feature.title}
                </h3>
                <p className="text-brand-ink-soft text-base leading-[1.7]">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
