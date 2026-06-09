"use client";

import React, { useState, useEffect } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import { trackEvent } from "@/lib/analytics";
import { DEV_STACKS, AGENCY_SIZES, OWNER_TYPES } from "@/lib/validation";
import type { Audience } from "@/lib/validation";

interface WaitlistFormProps {
  audience: Audience;
}

interface FormState {
  status: "idle" | "loading" | "success" | "error" | "already";
  message?: string;
}

export default function WaitlistForm({ audience }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [auxValue, setAuxValue] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [state, setState] = useState<FormState>({ status: "idle" });
  const [errors, setErrors] = useState<{ email?: string; aux?: string }>({});
  const [savedEmail, setSavedEmail] = useState<string | null>(null);

  // Check localStorage for existing waitlist
  useEffect(() => {
    const stored = localStorage.getItem("vela_waitlisted");
    if (stored) {
      setSavedEmail(stored);
      setState({ status: "success" });
    }
  }, []);

  // Reset aux field when audience changes
  useEffect(() => {
    setAuxValue("");
    setErrors({});
  }, [audience]);

  const getAuxLabel = () => {
    switch (audience) {
      case "dev":
        return "Primary stack";
      case "agency":
        return "Team size";
      case "owner":
        return "Business type";
    }
  };

  const getAuxOptions = () => {
    switch (audience) {
      case "dev":
        return DEV_STACKS;
      case "agency":
        return AGENCY_SIZES;
      case "owner":
        return OWNER_TYPES;
    }
  };

  const validate = (): boolean => {
    const newErrors: { email?: string; aux?: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim() || !emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!auxValue) {
      newErrors.aux = `Please select ${getAuxLabel().toLowerCase()}.`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (honeypot) {
      setState({ status: "success" });
      return;
    }

    if (!validate()) return;

    setState({ status: "loading" });

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          audience,
          aux_value: auxValue,
          referrer: document.referrer || undefined,
          user_agent: navigator.userAgent,
          website: honeypot || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setState({ status: "error", message: data.error || "Something went wrong. Try again?" });
        return;
      }

      if (data.status === "already") {
        setState({ status: "already" });
      } else {
        setState({ status: "success" });
        trackEvent("waitlist_submitted", { audience });

        // Fire confetti
        if (typeof window !== "undefined" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          confetti({
            particleCount: 40,
            spread: 60,
            origin: { y: 0.7 },
            colors: ["#6E4FF2", "#FF6F61", "#F5B947"],
            disableForReducedMotion: true,
          });
        }
      }

      // Save to localStorage
      localStorage.setItem("vela_waitlisted", email);
      setSavedEmail(email);
    } catch {
      setState({ status: "error", message: "Something went wrong. Try again?" });
    }
  };

  // Already waitlisted state
  if (state.status === "success" && savedEmail) {
    return (
      <div className="text-center py-4">
        <CheckCircle2 size={48} className="text-brand-success mx-auto mb-4" />
        <h3 className="font-display font-700 text-xl text-brand-ink mb-2">
          You&apos;re on the list.
        </h3>
        <p className="text-brand-ink-soft text-sm font-body">
          We&apos;ll email you at <span className="font-semibold text-brand-ink">{savedEmail}</span> when beta opens.
        </p>
      </div>
    );
  }

  // Fresh success state
  if (state.status === "success" && !savedEmail) {
    return (
      <div className="text-center py-4">
        <CheckCircle2 size={48} className="text-brand-success mx-auto mb-4" />
        <h3 className="font-display font-700 text-xl text-brand-ink mb-2">
          You&apos;re on the list. We&apos;ll email you when beta opens.
        </h3>
        <p className="text-xs text-brand-ink-soft font-body mt-2">
          We&apos;ll never sell your email. One launch update, no spam.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Honeypot — hidden from users */}
      <div aria-hidden="true" className="absolute -left-[9999px]" tabIndex={-1}>
        <label>
          Website
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            autoComplete="off"
            tabIndex={-1}
          />
        </label>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <input
          id="waitlist-email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
          }}
          disabled={state.status === "loading"}
          required
          className={`w-full px-4 py-3.5 rounded-xl bg-brand-cream border text-brand-ink font-body text-base placeholder:text-brand-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-brand-violet focus:border-transparent transition-all ${
            errors.email ? "border-brand-coral ring-1 ring-brand-coral" : "border-brand-ink/10"
          }`}
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-brand-coral font-body">{errors.email}</p>
        )}
      </div>

      {/* Audience-specific field */}
      <div>
        <label htmlFor="waitlist-aux" className="sr-only">
          {getAuxLabel()}
        </label>
        <select
          id="waitlist-aux"
          value={auxValue}
          onChange={(e) => {
            setAuxValue(e.target.value);
            if (errors.aux) setErrors((prev) => ({ ...prev, aux: undefined }));
          }}
          disabled={state.status === "loading"}
          required
          className={`w-full px-4 py-3.5 rounded-xl bg-brand-cream border text-brand-ink font-body text-base focus:outline-none focus:ring-2 focus:ring-brand-violet focus:border-transparent transition-all appearance-none ${
            !auxValue ? "text-brand-ink-soft/50" : ""
          } ${errors.aux ? "border-brand-coral ring-1 ring-brand-coral" : "border-brand-ink/10"}`}
        >
          <option value="" disabled>
            {getAuxLabel()}
          </option>
          {getAuxOptions().map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.aux && (
          <p className="mt-1.5 text-xs text-brand-coral font-body">{errors.aux}</p>
        )}
      </div>

      {/* Error banner */}
      {state.status === "error" && (
        <div className="bg-brand-coral/10 border border-brand-coral/20 rounded-xl px-4 py-3 text-sm text-brand-coral font-body">
          {state.message}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={state.status === "loading"}
        className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {state.status === "loading" ? (
          <span className="flex items-center gap-2">
            <Loader2 size={18} className="animate-spin" />
            Reserving…
          </span>
        ) : (
          "Reserve my spot"
        )}
      </button>

      <p className="text-xs text-brand-ink-soft text-center font-body">
        We&apos;ll never sell your email. One launch update, no spam.
      </p>
    </form>
  );
}
