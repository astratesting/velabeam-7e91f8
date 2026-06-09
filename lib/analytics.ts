"use client";

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

export function trackEvent(
  event: "waitlist_submitted" | "audience_tab_changed" | "pricing_cta_clicked",
  props?: Record<string, string>
) {
  if (typeof window !== "undefined" && window.plausible) {
    window.plausible(event, props ? { props } : undefined);
  }
}
