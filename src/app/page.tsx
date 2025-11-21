'use client';
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import AboutSection from "@/sections/About";
import GallerySection from "@/sections/Gallery";
import BuyPortalSection from "@/sections/BuyPortal";
import { TokenomicsSection } from "@/sections/Tokenomics";
import RoadmapSection  from "@/sections/Roadmap";
import { HowToBuySection } from "@/sections/HowToBuy";
import { FooterSection } from "@/sections/Footer";
import ComicMarquee from "@/components/ComicMarquee";

export default function Home() {
  return (
    <div className="relative min-h-screen text-white">
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        section[id] { scroll-margin-top: 96px; }
        @media (max-width: 768px) {
          section[id] { scroll-margin-top: 88px; }
        }
      `}</style>
      <Navbar />

      <main className="relative">
        <Hero />

        <AboutSection />
        <ComicMarquee />
        {/* <GallerySection/> */}
        {/* <BuyPortalSection />
        <TokenomicsSection />
        <RoadmapSection />
        <HowToBuySection />
        <FooterSection /> */}
      </main>
    </div>
  );
}