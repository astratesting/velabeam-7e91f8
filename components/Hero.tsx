"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { HeroPrism } from "./Illustrations";

const HEADLINE_WORDS = ["A", "real", "website", "for", "every", "shop", "on", "the", "block."];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScrollToWaitlist = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToHow = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      ref={ref}
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
    >
      <div className="mx-auto max-w-[1200px] px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left column — copy */}
        <div className="relative z-10">
          <motion.p
            className="eyebrow mb-5"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 8 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            AI WEBSITES FOR LOCAL BUSINESS
          </motion.p>

          <h1 className="font-display font-800 text-brand-ink mb-6 max-w-[540px]">
            {HEADLINE_WORDS.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.3em]"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: prefersReducedMotion ? 0 : 0.1 + i * 0.04,
                  ease: "easeOut",
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="text-brand-ink-soft text-lg leading-[1.7] mb-8 max-w-[460px]"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 12 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            VelaBeam finds local businesses without a site and generates one in their
            industry — in under 60 seconds.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-start"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 12 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="#waitlist"
              onClick={handleScrollToWaitlist}
              className="btn-primary"
            >
              Join the waitlist
            </a>
            <a
              href="#how-it-works"
              onClick={handleScrollToHow}
              className="inline-flex items-center gap-2 text-brand-violet font-semibold font-body text-base hover:underline underline-offset-4 transition-colors"
            >
              See how it works <ArrowDown size={16} />
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            className="flex flex-wrap gap-3 mt-10"
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {["For freelance devs", "For small agencies", "For local owners"].map((label) => (
              <span
                key={label}
                className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-violet-soft text-brand-violet text-sm font-medium font-body"
              >
                {label}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right column — prism illustration */}
        <motion.div
          className="relative flex justify-center items-center"
          initial={prefersReducedMotion ? {} : { opacity: 0, x: 40 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {/* Glow behind prism */}
          <div
            className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full blur-3xl opacity-30"
            style={{
              background: "radial-gradient(circle, #6E4FF2 0%, #F5B947 50%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <HeroPrism className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px]" />

          {/* Floating preview card */}
          <motion.div
            className="absolute -bottom-4 -left-4 md:bottom-4 md:-left-8 w-[180px] md:w-[220px] bg-white rounded-2xl shadow-card p-3 border border-brand-ink/5"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="w-full h-[100px] md:h-[120px] rounded-xl overflow-hidden bg-brand-violet-soft relative">
              {/* Mini site mock */}
              <div className="absolute inset-0 p-3">
                <div className="w-full h-5 bg-brand-violet rounded-md mb-2 opacity-70" />
                <div className="w-3/4 h-2 bg-brand-ink/10 rounded mb-1.5" />
                <div className="w-full h-2 bg-brand-ink/10 rounded mb-1.5" />
                <div className="w-2/3 h-2 bg-brand-ink/10 rounded mb-3" />
                <div className="w-16 h-5 bg-brand-coral rounded-full" />
              </div>
            </div>
            <p className="text-xs font-body text-brand-ink-soft mt-2 text-center font-medium">
              Generated site preview
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
