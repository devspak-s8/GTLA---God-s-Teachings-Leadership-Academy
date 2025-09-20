import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EnrollmentSection } from "@/components/enrollment-section"
import { CoursesSection } from "@/components/courses-section"
import { DigitalStoreSection } from "@/components/digital-store-section"
import { DiscoveryCallSection } from "@/components/discovery-call-section"
import { EventsSection } from "@/components/events-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <EnrollmentSection />
        <CoursesSection />
        <DigitalStoreSection />
        <DiscoveryCallSection />
        <EventsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
