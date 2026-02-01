/* ============================================
   app/(marketing)/gse-mac/page.tsx
   GSE MAC MAIN PAGE
   ============================================ */

import React from "react";
import HeroSection from "./components/hero-section";
import StoreBanner from "./components/store-banner";
import BenefitsSection from "./components/benefits-section";
import ProductGrid from "./components/product-grid";
import PriceListCTA from "./components/price-list-cta";
import StoreInfo from "./components/store-info";
import NavigationLinks from "./components/navigation-links";

/* ============================================
   GSE MAC PAGE COMPONENT
   ============================================ */
export default function GseMacPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      <div className="container mx-auto px-4 py-12">
        <StoreBanner />
        <BenefitsSection />
        <ProductGrid />
        <PriceListCTA />
        <StoreInfo />
        <NavigationLinks />
      </div>
    </div>
  );
}
