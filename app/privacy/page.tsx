import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy — VelaBeam",
  description: "VelaBeam privacy policy.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="mx-auto max-w-[720px] px-6 py-24 md:py-32">
        <h1 className="font-display font-800 text-4xl text-brand-ink mb-8">
          Privacy
        </h1>
        <div className="prose prose-lg">
          <p className="text-brand-ink-soft text-lg leading-[1.7] mb-6 font-body">
            We take your privacy seriously. VelaBeam collects only the
            information necessary to provide our service — specifically, the
            email address and preferences you share when joining our waitlist.
            We never sell, rent, or share your personal data with third parties
            for marketing purposes.
          </p>
          <p className="text-brand-ink-soft text-lg leading-[1.7] mb-6 font-body">
            Any business data we surface during the scanning process is pulled
            from publicly available listings. We do not access private databases
            or scrape protected information.
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
