export interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  ctaAction?: "scroll" | "contact";
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "Free",
    description: "During the beta — no credit card required.",
    features: [
      "Waitlist priority",
      "5 site generations per month",
      "Industry-tuned templates",
      "Built-in lead capture forms",
    ],
    cta: "Join the waitlist",
    ctaAction: "scroll",
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    description: "For freelancers and small shops ready to scale.",
    features: [
      "Unlimited site generations",
      "White-label export",
      "Lead notifications",
      "One-click brand match",
      "Priority support",
    ],
    cta: "Join the waitlist",
    highlighted: true,
    ctaAction: "scroll",
  },
  {
    name: "Agency",
    price: "Custom",
    description: "Volume pricing for teams that ship at scale.",
    features: [
      "Everything in Pro",
      "Multi-seat accounts",
      "Dedicated onboarding",
      "Volume discounts",
      "Custom integrations",
    ],
    cta: "Talk to us",
    ctaAction: "contact",
  },
];
