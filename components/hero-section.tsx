import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Users, Award, BookOpen } from "lucide-react"
import { ScrollFadeIn, ScrollSlideIn } from "./scroll-animations"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - replaced with real leadership/education image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/diverse-group-of-young-adults-in-leadership-traini.jpg"
          alt="Students engaged in leadership activities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Content - added scroll animations */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <ScrollFadeIn>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 font-[family-name:var(--font-montserrat)] leading-tight">
              Empowering{" "}
              <span className="gtla-text-gradient bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">
                Faith-Centered
              </span>{" "}
              Leaders
            </h1>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your leadership potential through comprehensive programs rooted in biblical principles and
              practical wisdom.
            </p>
          </ScrollFadeIn>

          {/* CTA Buttons - added staggered animation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-20">
            <ScrollSlideIn direction="up" delay={400}>
              <Button size="lg" className="gtla-gradient text-white font-semibold px-8 py-4 text-lg pulse-glow" asChild>
                <a href="#enroll">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </ScrollSlideIn>
            <ScrollSlideIn direction="up" delay={500}>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg"
                asChild
              >
                <a href="#about">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Our Story
                </a>
              </Button>
            </ScrollSlideIn>
          </div>

       
        </div>
      </div>

      
    </section>
  )
}
