"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CatalogSection } from "@/components/catalog-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { PackagesSection } from "@/components/packages-section"
import { TreatsSection } from "@/components/treats-section"
import { ContactSection } from "@/components/contact-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CatalogSection />
      <HowItWorksSection />
      <PackagesSection />
      <TreatsSection />
      <ContactSection />
      <AboutSection />
      <Footer />
    </main>
  )
}
