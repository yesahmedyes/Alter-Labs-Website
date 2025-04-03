"use client";

import HeroSection from "./components/heroSection";
import Capabilities from "./components/capabilities";
import Services from "./components/services";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <HeroSection />

      {/* <Services /> */}

      <Capabilities />
    </main>
  );
}
