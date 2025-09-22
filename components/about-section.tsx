import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Target, Users, BookOpen, Shield, Star, Quote } from "lucide-react"
import { ScrollFadeIn, ScrollSlideIn, ScrollStagger } from "./scroll-animations"

export function AboutSection() {
  const values = [
    {
      icon: Heart,
      title: "Faith-Centered",
      description:
        "Every program is rooted in biblical principles and Christian values that guide our approach to leadership development.",
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      icon: Target,
      title: "Purpose-Driven",
      description:
        "Helping students discover and fulfill their God-given purpose through intentional guidance and support.",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
  
  ]

  return (
    <section id="about" className="py-16 sm:py-20 bg-gradient-to-br from-card to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <img
          src="/faith-based-leadership-symbols--cross--dove--open.jpg"
          alt="Faith symbols background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollFadeIn>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-card-foreground mb-6 font-[family-name:var(--font-montserrat)]">
              About <span className="gtla-text-gradient">GTLA</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              God's Teachings Leadership Academy was founded with a vision to develop the next generation of
              faith-centered leaders who will make a positive impact in their communities and beyond.
            </p>
          </div>
        </ScrollFadeIn>
{/* Two-Column Section */}
<div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-y-12 lg:gap-x-12 items-start mb-16 sm:mb-20">
  {/* Founder Story */}
    <div>
      <div className="mb-6 sm:mb-8 relative">
        <img
          src="/young-person-in-prayer-and-reflection--peaceful-se.jpg"
          alt="GTLA Founder"
          className="w-full aspect-[4/3] object-cover rounded-lg gtla-shadow"
        />
        {/* Badge floats out only on sm+ */}
        <div className="hidden sm:flex absolute -bottom-6 -right-6 w-20 h-20 sm:w-24 sm:h-24 bg-primary rounded-full items-center justify-center">
          <Quote className="h-8 w-8 sm:h-12 sm:w-12 text-white" />
        </div>
      </div>
      <Card className="bg-white/90 backdrop-blur-sm border-0 gtla-shadow">
        <CardContent className="p-6 sm:p-8">
          <blockquote className="text-base sm:text-lg italic text-gray-700 mb-4 sm:mb-6 leading-relaxed">
            "I founded GTLA because I believe every young person has the potential to be a transformational
            leader. Our mission is to unlock that potential through faith, education, and practical experience
            that transforms lives."
          </blockquote>
          <div className="flex items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3 sm:mr-4">
              <Star className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </div>
            <div>
              <p className="font-bold text-primary text-base sm:text-lg">Dr. Sarah Johnson</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Founder & Director</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

  {/* Mission & Vision */}
    <div className="space-y-6 sm:space-y-8">
      <Card className=" sm:p-8 bg-white/80 backdrop-blur-sm border-0 gtla-shadow">
        <CardContent className="pt-0">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3 sm:mr-4">
              <Target className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-card-foreground font-[family-name:var(--font-montserrat)]">
              Our Mission
            </h3>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            To equip young leaders with the knowledge, skills, and character needed to serve their communities
            with excellence, guided by Christian principles and values that transform both leaders and those
            they serve.
          </p>
        </CardContent>
      </Card>

      <Card className="p-6 sm:p-8 bg-white/80 backdrop-blur-sm border-0 gtla-shadow">
        <CardContent className="pt-0">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-3 sm:mr-4">
              <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-card-foreground font-[family-name:var(--font-montserrat)]">
              Our Vision
            </h3>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            A world where faith-centered leaders create positive change, inspire others, and build stronger
            communities through servant leadership and moral excellence that reflects God's love.
          </p>
        </CardContent>
      </Card>

      <div className="flex flex-wrap items-center gap-4 sm:gap-6 bg-white/60 backdrop-blur-sm rounded-lg p-3 sm:p-4">
        <div className="flex items-center">
          <Star className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400 mr-2" />
          <span className="text-xs sm:text-sm font-medium">Founded 2018</span>
        </div>
        <div className="flex items-center">
          <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2" />
          <span className="text-xs sm:text-sm font-medium">Accredited Programs</span>
        </div>
      </div>
    </div>
</div>

      

        {/* CTA */}
        <ScrollFadeIn>
          <div className="text-center">
            <Button
              size="lg"
              className="gtla-gradient text-white font-semibold px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg pulse-glow"
              asChild
            >
              <a href="#enroll">Join Our Community</a>
            </Button>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  )
}
