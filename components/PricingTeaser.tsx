"use client";

import React from "react";
import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { pricingPlans } from "@/lib/pricing";
import { trackEvent } from "@/lib/analytics";

export default function PricingTeaser() {
  const handleCta = (e: React.MouseEvent<HTMLAnchorElement>, action?: string) => {
    if (action === "scroll") {
      e.preventDefault();
      trackEvent("pricing_cta_clicked");
      document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 md:py-32 bg-brand-surface">
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <p className="eyebrow text-center mb-4">Pricing</p>
          <h2 className="font-display font-700 text-brand-ink text-center mb-4">
            Simple, honest pricing.
          </h2>
          <p className="text-brand-ink-soft text-lg text-center max-w-[480px] mx-auto mb-16 leading-[1.7]">
            Start free during the beta. Upgrade when you&apos;re ready — no surprises.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
          {pricingPlans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.1}>
              <div
                className={`card h-full flex flex-col ${
                  plan.highlighted
                    ? "ring-2 ring-brand-violet relative"
                    : ""
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-violet text-white text-xs font-semibold font-body px-3 py-1 rounded-full">
                    Most popular
                  </span>
                )}
                <h3 className="font-display font-700 text-lg text-brand-ink mb-1">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-display font-800 text-4xl text-brand-ink">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-brand-ink-soft text-base font-body">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="text-brand-ink-soft text-sm leading-[1.7] mb-6">
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check
                        size={16}
                        className="text-brand-success mt-0.5 flex-shrink-0"
                        strokeWidth={2.5}
                      />
                      <span className="text-brand-ink-soft text-sm font-body">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.ctaAction === "contact" ? "mailto:hello@velabeam.com" : "#waitlist"}
                  onClick={(e) => handleCta(e, plan.ctaAction)}
                  className={
                    plan.highlighted
                      ? "btn-primary w-full text-center"
                      : "btn-secondary w-full text-center"
                  }
                >
                  {plan.cta}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-center text-xs text-brand-ink-soft mt-8 font-body">
            Prices are placeholders for the upcoming beta. We&apos;ll confirm before billing anyone.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
