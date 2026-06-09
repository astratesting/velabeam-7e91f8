"use client";

import React, { useState, useCallback } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { faqItems } from "@/lib/faq";

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string>("");

  const handleValueChange = useCallback((value: string) => {
    setOpenItem(value);
  }, []);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-[720px] px-6">
        <ScrollReveal>
          <p className="eyebrow text-center mb-4">FAQ</p>
          <h2 className="font-display font-700 text-brand-ink text-center mb-12">
            Common questions.
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <Accordion.Root
            type="single"
            collapsible
            value={openItem}
            onValueChange={handleValueChange}
            className="space-y-3"
          >
            {faqItems.map((item, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="card !p-0 overflow-hidden"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between px-8 py-5 text-left font-display font-700 text-base text-brand-ink hover:text-brand-violet transition-colors group">
                    <span>{item.question}</span>
                    <ChevronDown
                      size={20}
                      className="flex-shrink-0 text-brand-ink-soft transition-transform duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="px-8 pb-6 pt-0">
                    <p className="text-brand-ink-soft text-base leading-[1.7]">
                      {item.answer}
                    </p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </ScrollReveal>
      </div>
    </section>
  );
}
