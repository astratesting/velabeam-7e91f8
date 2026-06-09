export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const AUDIENCES = ["dev", "agency", "owner"] as const;
export type Audience = (typeof AUDIENCES)[number];

export const DEV_STACKS = ["Next.js", "WordPress", "Webflow", "Custom"] as const;
export const AGENCY_SIZES = ["1", "2–5", "6–20", "20+"] as const;
export const OWNER_TYPES = ["Restaurant", "Retail", "Service", "Other"] as const;

export function isValidAudience(value: string): value is Audience {
  return AUDIENCES.includes(value as Audience);
}

export function validateWaitlistPayload(body: unknown): {
  ok: true;
  data: { email: string; audience: Audience; aux_value: string; referrer?: string; user_agent?: string };
} | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body" };
  }

  const { email, audience, aux_value, referrer, user_agent, website } = body as Record<string, unknown>;

  // Honeypot — silently accept
  if (typeof website === "string" && website.length > 0) {
    return { ok: false, error: "honeypot" };
  }

  if (typeof email !== "string" || !isValidEmail(email)) {
    return { ok: false, error: "A valid email address is required." };
  }

  if (typeof audience !== "string" || !isValidAudience(audience)) {
    return { ok: false, error: "Please select an audience." };
  }

  if (typeof aux_value !== "string" || aux_value.trim().length === 0) {
    return { ok: false, error: "Please fill in the required field." };
  }

  return {
    ok: true,
    data: {
      email: email.toLowerCase().trim(),
      audience,
      aux_value: aux_value.trim(),
      referrer: typeof referrer === "string" ? referrer : undefined,
      user_agent: typeof user_agent === "string" ? user_agent.slice(0, 500) : undefined,
    },
  };
}
