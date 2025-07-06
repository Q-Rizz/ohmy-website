import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen grid-pattern">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
