import { ScrollFadeIn, ScrollSlideIn } from "./scroll-animations"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function LeadershipJourneySection() {
  const journeySteps = [
    {
      step: "01",
      title: "Discover Your Calling",
      description:
        "Explore your God-given gifts and understand your unique leadership potential through comprehensive assessments and spiritual guidance.",
      image: "/young-person-in-prayer-and-reflection--peaceful-se.jpg",
      features: ["Spiritual Assessment", "Gift Discovery", "Purpose Mapping", "Personal Reflection"],
    },
    {
      step: "02",
      title: "Develop Your Skills",
      description:
        "Build essential leadership competencies through interactive courses, practical exercises, and mentorship from experienced leaders.",
      image: "/leadership-training-session--mentor-and-student--s.jpg",
      features: ["Interactive Courses", "Skill Building", "Expert Mentorship", "Practical Application"],
    },
    {
      step: "03",
      title: "Deploy Your Leadership",
      description:
        "Apply your newfound skills in real-world scenarios with ongoing support, community engagement, and continuous growth opportunities.",
      image: "/young-leader-presenting-to-group--community-leader.jpg",
      features: ["Real-World Projects", "Community Impact", "Ongoing Support", "Leadership Network"],
    },
  ]

  return (
    <section className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 font-[family-name:var(--font-montserrat)]">
              Your Leadership <span className="gtla-text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Follow our proven three-step process to transform from aspiring leader to confident, faith-centered
              change-maker.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="space-y-20">
          {journeySteps.map((step, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <ScrollSlideIn direction={index % 2 === 0 ? "left" : "right"} delay={200}>
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative">
                    <img
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      className="w-full h-80 object-cover rounded-lg gtla-shadow"
                    />
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-2xl font-black text-white">{step.step}</span>
                    </div>
                  </div>
                </div>
              </ScrollSlideIn>

              <ScrollSlideIn direction={index % 2 === 0 ? "right" : "left"} delay={400}>
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <Card className="p-8 bg-card border-0 gtla-shadow">
                    <CardContent className="pt-0">
                      <h3 className="text-3xl font-bold text-card-foreground mb-4 font-[family-name:var(--font-montserrat)]">
                        {step.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{step.description}</p>

                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {step.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <Button className="gtla-gradient text-white font-semibold">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </ScrollSlideIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
