import { ScrollFadeIn, ScrollSlideIn, ScrollStagger } from "./scroll-animations"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Globe, Heart, Star, Users, Award } from "lucide-react"

export function ImpactStatsSection() {
  const stats = [
    {
      icon: Users,
      number: "2,500+",
      label: "Lives Transformed",
      description: "Students who have completed our programs",
      color: "text-blue-500",
    },
    {
      icon: Globe,
      number: "45",
      label: "Countries Reached",
      description: "Global impact across continents",
      color: "text-green-500",
    },
    {
      icon: Award,
      number: "98%",
      label: "Success Rate",
      description: "Students achieving their leadership goals",
      color: "text-amber-500",
    },
    {
      icon: Heart,
      number: "15,000+",
      label: "Community Members",
      description: "Active participants in our programs",
      color: "text-pink-500",
    },
    {
      icon: TrendingUp,
      number: "250%",
      label: "Growth Rate",
      description: "Year-over-year program expansion",
      color: "text-purple-500",
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Student Rating",
      description: "Average satisfaction score",
      color: "text-orange-500",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img src="/abstract-geometric-pattern--leadership-symbols--su.jpg" alt="Background pattern" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollFadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 font-[family-name:var(--font-montserrat)]">
              Our <span className="gtla-text-gradient">Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              See the transformational results of faith-centered leadership development across our global community.
            </p>
          </div>
        </ScrollFadeIn>

        <ScrollStagger>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <ScrollSlideIn key={index} direction="up" delay={index * 100}>
                <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 gtla-shadow group">
                  <CardContent className="pt-6">
                    <div
                      className={`w-16 h-16 ${stat.color} bg-current/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                    <div className="text-4xl font-black text-foreground mb-2 font-[family-name:var(--font-montserrat)]">
                      {stat.number}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{stat.label}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
                  </CardContent>
                </Card>
              </ScrollSlideIn>
            ))}
          </div>
        </ScrollStagger>
      </div>
    </section>
  )
}
