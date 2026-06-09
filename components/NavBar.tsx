"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import PrismMark from "./PrismMark";

const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver for active section highlighting
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
        scrolled
          ? "bg-brand-cream/80 backdrop-blur-md border-b border-brand-ink/5 shadow-sm"
          : "bg-brand-cream/60 backdrop-blur-sm"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-[1200px] px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          className="flex items-center gap-2.5 group"
          aria-label="VelaBeam home"
        >
          <PrismMark size={28} />
          <span className="font-display font-800 text-xl text-brand-ink tracking-tight">
            VelaBeam
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-[15px] font-medium font-body transition-colors duration-200 ${
                activeSection === link.href.slice(1)
                  ? "text-brand-violet font-semibold"
                  : "text-brand-ink-soft hover:text-brand-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#waitlist"
          onClick={(e) => handleNavClick(e, "#waitlist")}
          className="hidden md:inline-flex btn-primary !py-2.5 !px-6 !text-[15px]"
        >
          Join waitlist
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-brand-ink"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile sheet */}
      {mobileOpen && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 bg-brand-cream/95 backdrop-blur-md border-b border-brand-ink/5 shadow-lg">
          <div className="flex flex-col px-6 py-6 gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-lg font-medium font-body py-2 transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "text-brand-violet font-semibold"
                    : "text-brand-ink-soft"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={(e) => handleNavClick(e, "#waitlist")}
              className="btn-primary mt-2 text-center"
            >
              Join waitlist
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
