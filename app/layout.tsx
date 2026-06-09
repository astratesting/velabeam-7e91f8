import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://velabeam.com"),
  title: "VelaBeam — AI websites for local businesses",
  description:
    "VelaBeam finds local businesses without a site and generates one in their industry — in under 60 seconds. For devs, agencies, and local owners.",
  openGraph: {
    title: "VelaBeam — AI websites for local businesses",
    description:
      "VelaBeam finds local businesses without a site and generates one in their industry — in under 60 seconds.",
    url: "https://velabeam.com",
    siteName: "VelaBeam",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "VelaBeam — AI websites for local businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VelaBeam — AI websites for local businesses",
    description:
      "VelaBeam finds local businesses without a site and generates one in their industry — in under 60 seconds.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@700;800&family=Source+Sans+3:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "VelaBeam",
              url: "https://velabeam.com",
              logo: "https://velabeam.com/opengraph-image",
              description:
                "AI-powered website generation platform for local businesses.",
            }),
          }}
        />
      </head>
      <body className="font-body bg-brand-cream text-brand-ink antialiased">
        {children}
        {/* Plausible analytics */}
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
