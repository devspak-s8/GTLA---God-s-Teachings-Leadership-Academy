"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Emily Rodriguez",
      role: "Student",
      program: "Advanced Leadership Intensive",
      image: "/placeholder.svg?key=emily",
      rating: 5,
      quote:
        "GTLA transformed my understanding of leadership. The faith-centered approach helped me discover my true calling and gave me the confidence to lead with purpose. The community support has been incredible.",
      results: "Promoted to Team Lead within 6 months",
    },
    {
      id: 2,
      name: "David Chen",
      role: "Parent",
      program: "Foundation Leadership Program",
      image: "/placeholder.svg?key=david",
      rating: 5,
      quote:
        "Watching my daughter grow through the GTLA program has been amazing. She's developed confidence, leadership skills, and most importantly, a strong moral foundation. The investment was worth every penny.",
      results: "Daughter became Student Council President",
    },
    {
      id: 3,
      name: "Pastor Michael Thompson",
      role: "Mentor",
      program: "Youth Ministry Leadership",
      image: "/placeholder.svg?key=michael",
      rating: 5,
      quote:
        "As a mentor in the GTLA program, I've seen firsthand how it shapes young leaders. The curriculum is excellent, and the focus on character development alongside leadership skills is exactly what our youth need.",
      results: "Mentored 15+ successful graduates",
    },
    {
      id: 4,
      name: "Sarah Williams",
      role: "Student",
      program: "Executive Leadership Mastery",
      image: "/placeholder.svg?key=sarah",
      rating: 5,
      quote:
        "The Executive Leadership program challenged me to think differently about leadership. The biblical principles integrated with modern leadership theory created a powerful framework for my career growth.",
      results: "Started own nonprofit organization",
    },
    {
      id: 5,
      name: "Maria Gonzalez",
      role: "Parent",
      program: "Foundation Leadership Program",
      image: "/placeholder.svg?key=maria",
      rating: 5,
      quote:
        "GTLA didn't just teach my son leadership skills; it helped him develop character and integrity. The mentorship component was invaluable, and the community became like a second family to us.",
      results: "Son received full scholarship to college",
    },
    {
      id: 6,
      name: "Rev. James Wilson",
      role: "Mentor",
      program: "Community Leadership Workshop",
      image: "/placeholder.svg?key=james",
      rating: 5,
      quote:
        "The impact GTLA has on young people is remarkable. I've been privileged to mentor several students, and seeing them grow into confident, faith-centered leaders has been one of my greatest joys.",
      results: "Helped launch 3 community initiatives",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-sidebar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-sidebar-foreground mb-6 font-[family-name:var(--font-montserrat)]">
            Success <span className="gtla-text-gradient">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from students, parents, and mentors about their transformational experiences with GTLA programs.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative mb-16">
          <Card className="max-w-4xl mx-auto gtla-shadow bg-white">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Testimonial Content */}
                <div className="md:col-span-2">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-primary mr-3" />
                    <div className="flex">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-lg md:text-xl text-card-foreground leading-relaxed mb-6 italic">
                    "{currentTestimonial.quote}"
                  </blockquote>
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-card-foreground">{currentTestimonial.name}</h4>
                    <p className="text-muted-foreground">
                      {currentTestimonial.role} • {currentTestimonial.program}
                    </p>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-4">
                    <p className="text-sm font-medium text-primary">Result: {currentTestimonial.results}</p>
                  </div>
                </div>

                {/* Profile Image */}
                <div className="text-center">
                  <img
                    src={currentTestimonial.image || "/placeholder.svg"}
                    alt={currentTestimonial.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover gtla-shadow"
                  />
                  <div className="text-sm text-muted-foreground">
                    {currentIndex + 1} of {testimonials.length}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <Button variant="outline" size="sm" onClick={prevTestimonial} className="bg-white">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={nextTestimonial} className="bg-white">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.slice(0, 3).map((testimonial) => (
            <Card key={testimonial.id} className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-sm text-card-foreground leading-relaxed italic">
                  "{testimonial.quote.substring(0, 120)}..."
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Students Transformed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">150+</div>
            <div className="text-sm text-muted-foreground">Parent Testimonials</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Mentor Partners</div>
          </div>
        </div>
      </div>
    </section>
  )
}
