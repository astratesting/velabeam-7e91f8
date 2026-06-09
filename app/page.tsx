import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import FeaturesGrid from "@/components/FeaturesGrid";
import AudienceTabs from "@/components/AudienceTabs";
import PricingTeaser from "@/components/PricingTeaser";
import FAQ from "@/components/FAQ";
import WaitlistCTA from "@/components/WaitlistCTA";
import SiteFooter from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        {/* Prism divider */}
        <div className="flex justify-center py-4" aria-hidden="true">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-violet/30 to-transparent" />
        </div>
        <HowItWorks />
        <FeaturesGrid />
        <AudienceTabs />
        <PricingTeaser />
        <FAQ />
        <WaitlistCTA />
      </main>
      <SiteFooter />
    </>
  );
}
