"use client";

import HeroSection from "./components/heroSection";
import Capabilities from "./components/capabilities";
import FAQ from "./components/faq";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <HeroSection />

      <Capabilities />

      <FAQ />

      {/* <ContactUs /> */}
    </main>
  );
}
