import PrismMark from "@/components/PrismMark";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-cream flex flex-col items-center justify-center px-6 text-center">
      <PrismMark size={64} className="mb-8 opacity-60" />
      <h1 className="font-display font-800 text-5xl text-brand-ink mb-4">
        Lost the signal.
      </h1>
      <p className="text-brand-ink-soft text-lg font-body mb-8 max-w-md leading-[1.7]">
        We couldn&apos;t find that page. It might have moved, or it never existed in
        the first place.
      </p>
      <Link href="/" className="btn-primary">
        Back to home
      </Link>
    </div>
  );
}
