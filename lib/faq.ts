export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "What exactly does VelaBeam generate?",
    answer:
      "VelaBeam scans local-business listings to find shops, services, and practices that don't have a website. For each one, it assembles an industry-tuned starter site — complete with copy, layout, a color palette, contact form, and click-to-call — in under 60 seconds. You can edit it, brand it, and publish it.",
  },
  {
    question: "Who owns the generated site?",
    answer:
      "You do. Every site VelaBeam generates is yours to keep, edit, export, and host wherever you like. There's no VelaBeam watermark or lock-in. If you're a dev or agency, you can hand it off to your client under your own brand.",
  },
  {
    question: "When does the beta open?",
    answer:
      "We're targeting a private beta launch later this year. Join the waitlist and we'll email you the moment your spot is ready — no spam, just one update when the doors open.",
  },
  {
    question: "Where does the business data come from?",
    answer:
      "VelaBeam pulls publicly available business listings — things like Google Business profiles, Yelp, and local directories. We only use data that businesses have already published about themselves. We never scrape private information or sell data to third parties.",
  },
  {
    question: "Can I get a refund during the beta?",
    answer:
      "During the beta, the Starter plan is completely free. If you upgrade to Pro and decide it's not for you, just let us know within the first 30 days and we'll issue a full refund — no questions asked.",
  },
  {
    question: "I'm a solo owner with no tech skills — is this for me?",
    answer:
      "Absolutely. That's one of the core reasons we built VelaBeam. You don't need to know code, design, or hosting. We generate the site, you pick the colors, swap in your logo, and hit publish. If you can send an email, you can use VelaBeam.",
  },
];
