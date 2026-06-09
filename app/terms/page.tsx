import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms — VelaBeam",
  description: "VelaBeam terms of service.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="mx-auto max-w-[720px] px-6 py-24 md:py-32">
        <h1 className="font-display font-800 text-4xl text-brand-ink mb-8">
          Terms
        </h1>
        <div className="prose prose-lg">
          <p className="text-brand-ink-soft text-lg leading-[1.7] mb-6 font-body">
            By using VelaBeam, you agree to use the service responsibly and in
            compliance with all applicable laws. The sites we generate are
            provided as starter templates — you own them and are responsible for
            their final content and publication.
          </p>
          <p className="text-brand-ink-soft text-lg leading-[1.7] mb-6 font-body">
            During the beta period, pricing is provisional and may change. We
            will notify you before any billing begins. You may cancel at any
            time during the beta without charge.
          </p>
          <p className="text-brand-ink-soft text-sm font-body mt-12 text-center">
            Last updated: [launch date] — This page will be finalized before
            public launch.
          </p>
        </div>
      </div>
    </div>
  );
}
