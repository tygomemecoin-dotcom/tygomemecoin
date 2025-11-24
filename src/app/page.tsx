'use client';
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import AboutSection from "@/sections/About";
import GallerySection from "@/sections/Gallery";
import BuyPortalSection from "@/sections/BuyPortal";
import { TokenomicsSection } from "@/sections/Tokenomics";
import RoadmapSection  from "@/sections/Roadmap";
import BlueprintSection from "@/sections/Blueprint";
import { HowToBuySection } from "@/sections/HowToBuy";
import { FooterSection } from "@/sections/Footer";
import ComicMarquee from "@/components/ComicMarquee";
import FloatingMascot from "@/components/FloatingMascot";
import { FallingTygoProvider } from "@/contexts/FallingTygoContext";

export default function Home() {
  return (
    <FallingTygoProvider>
      <div className="relative min-h-screen text-white">
        <style jsx global>{`
          html { scroll-behavior: smooth; }
          section[id] { scroll-margin-top: 96px; }
          @media (max-width: 768px) {
            section[id] { scroll-margin-top: 88px; }
          }
        `}</style>
        <Navbar />
        <FloatingMascot />

        <main className="relative">
          <Hero />

          <AboutSection />
          <ComicMarquee />
          <GallerySection/>
          <BuyPortalSection />
          <TokenomicsSection />
          <RoadmapSection />
          {/* <BlueprintSection /> */}
          <HowToBuySection />
          <FooterSection />
        </main>
      </div>
    </FallingTygoProvider>
  );
}