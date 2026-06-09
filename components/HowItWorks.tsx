"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";
import { ScanIllustration, GenerateIllustration, DeliverIllustration } from "./Illustrations";

const STEPS = [
  {
    num: "01",
    title: "Scan",
    description:
      "We crawl local-business listings and flag the ones with no site, no social, or a dead page.",
    Illustration: ScanIllustration,
  },
  {
    num: "02",
    title: "Generate",
    description:
      "Our model assembles an industry-tuned starter site: copy, layout, color, contact form.",
    Illustration: GenerateIllustration,
  },
  {
    num: "03",
    title: "Deliver",
    description:
      "You get a lead (devs/agencies) or a ready-to-edit site (owners). Both in under a minute.",
    Illustration: DeliverIllustration,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <p className="eyebrow text-center mb-4">How it works</p>
          <h2 className="font-display font-700 text-brand-ink text-center mb-16">
            Three steps. Under a minute.
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.1}>
              <div className="card text-center group">
                <span className="block font-display font-800 text-5xl text-brand-honey mb-4">
                  {step.num}
                </span>
                <h3 className="font-display font-700 text-xl text-brand-ink mb-3">
                  {step.title}
                </h3>
                <p className="text-brand-ink-soft text-base leading-[1.7] mb-6">
                  {step.description}
                </p>
                <div className="flex justify-center">
                  <step.Illustration className="w-[180px] h-auto" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
