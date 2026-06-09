import React from "react";
import PrismMark from "./PrismMark";

const FOOTER_SECTIONS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Docs", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-brand-ink py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <a href="#top" className="flex items-center gap-2 mb-4">
              <PrismMark size={24} />
              <span className="font-display font-800 text-lg text-white tracking-tight">
                VelaBeam
              </span>
            </a>
            <p className="text-white/50 text-sm font-body leading-[1.7]">
              AI websites for local businesses.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="font-display font-700 text-sm text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 text-sm font-body hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <PrismMark size={16} />
            <span className="text-white/40 text-xs font-body">
              &copy; {new Date().getFullYear()} VelaBeam. All rights reserved.
            </span>
          </div>
          <p className="text-white/40 text-xs font-body">
            Made for the neighborhood web.
          </p>
        </div>
      </div>
    </footer>
  );
}
