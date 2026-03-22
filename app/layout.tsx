import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BoldPitch — Cold Outreach for Freelancers Who Hate Cold Outreach",
  description:
    "BoldPitch helps freelancers craft authentic, personalized client outreach messages without feeling salesy. Turn your expertise into conversations that land clients.",
  metadataBase: new URL("https://boldpitch.io"),
  keywords: [
    "freelancer outreach",
    "cold email for freelancers",
    "freelance client acquisition",
    "freelance pitch generator",
    "freelance business development",
  ],
  authors: [{ name: "BoldPitch" }],
  openGraph: {
    title: "BoldPitch — Cold Outreach for Freelancers Who Hate Cold Outreach",
    description:
      "Craft authentic, personalized client outreach messages without feeling salesy. Your confidence engine for landing freelance clients.",
    url: "https://boldpitch.io",
    siteName: "BoldPitch",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BoldPitch — Cold Outreach for Freelancers Who Hate Cold Outreach",
    description:
      "Craft authentic, personalized client outreach messages without feeling salesy.",
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
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="min-h-screen bg-stone-50 font-sans text-stone-900 antialiased">
        {children}
      </body>
    </html>
  );
}