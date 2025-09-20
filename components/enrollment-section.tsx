"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Shield, Clock, Users, CheckCircle } from "lucide-react"
import { ScrollFadeIn, ScrollSlideIn, ScrollStagger } from "./scroll-animations"

export function EnrollmentSection() {
  const [selectedProgram, setSelectedProgram] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    program: "",
    experience: "",
    goals: "",
    agreeTerms: false,
    agreeMarketing: false,
  })

  const programs = [
    {
      id: "foundation",
      name: "Foundation Leadership Program",
      duration: "3 months",
      price: 299,
      description: "Perfect for beginners looking to develop core leadership skills",
      features: ["12 Interactive Modules", "Weekly Group Sessions", "Personal Mentor", "Certificate of Completion"],
    },
    {
      id: "advanced",
      name: "Advanced Leadership Intensive",
      duration: "6 months",
      price: 599,
      description: "Comprehensive program for experienced leaders seeking growth",
      features: ["24 Advanced Modules", "Bi-weekly 1-on-1 Coaching", "Leadership Project", "Alumni Network Access"],
      popular: true,
    },
    {
      id: "executive",
      name: "Executive Leadership Mastery",
      duration: "12 months",
      price: 1199,
      description: "Elite program for senior leaders and executives",
      features: ["48 Mastery Modules", "Weekly Executive Coaching", "Capstone Project", "Lifetime Alumni Access"],
    },
  ]

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission and payment processing
    console.log("Enrollment submitted:", formData)
  }

  const selectedProgramData = programs.find((p) => p.id === selectedProgram)

  return (
    <section
      id="enroll"
      className="py-20 bg-gradient-to-br from-background via-card/20 to-primary/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <img
          src="/leadership-training-session--mentor-and-student--s.jpg"
          alt="Leadership training background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollFadeIn>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 font-[family-name:var(--font-montserrat)]">
              Enroll <span className="gtla-text-gradient">Today</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Take the first step towards transformational leadership. Choose your program and begin your journey with
              GTLA.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Program Selection */}
          <div className="lg:col-span-2">
              <div className="mb-12">
            
                <ScrollStagger>
                  <div className="grid gap-6">
                    {programs.map((program, index) => (
                      <ScrollSlideIn key={program.id} direction="up" delay={index * 100}>
                        <Card
                          className={`cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 gtla-shadow ${
                            selectedProgram === program.id
                              ? "ring-2 ring-primary border-primary bg-primary/5"
                              : "bg-white"
                          }`}
                          onClick={() => {
                            setSelectedProgram(program.id)
                            handleInputChange("program", program.id)
                          }}
                        >
                          <CardHeader className="pb-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <CardTitle className="text-xl font-bold text-card-foreground flex items-center gap-2">
                                  {program.name}
                                  {program.popular && (
                                    <Badge className="bg-secondary text-secondary-foreground">Most Popular</Badge>
                                  )}
                                </CardTitle>
                                <p className="text-muted-foreground mt-1">{program.description}</p>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-primary">${program.price}</div>
                                <div className="text-sm text-muted-foreground">{program.duration}</div>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="grid md:grid-cols-2 gap-2">
                              {program.features.map((feature, index) => (
                                <div key={index} className="flex items-center text-sm text-muted-foreground">
                                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </ScrollSlideIn>
                    ))}
                  </div>
                </ScrollStagger>
              </div>

            {/* Enrollment Form */}
            {selectedProgram && (
                <Card className="gtla-shadow bg-white/95 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-card-foreground font-[family-name:var(--font-montserrat)]">
                      Enrollment Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="age">Age Range</Label>
                        <Select onValueChange={(value) => handleInputChange("age", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your age range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="16-18">16-18 years</SelectItem>
                            <SelectItem value="19-25">19-25 years</SelectItem>
                            <SelectItem value="26-35">26-35 years</SelectItem>
                            <SelectItem value="36-45">36-45 years</SelectItem>
                            <SelectItem value="46+">46+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="experience">Leadership Experience</Label>
                        <Textarea
                          id="experience"
                          placeholder="Tell us about your current leadership experience or roles..."
                          value={formData.experience}
                          onChange={(e) => handleInputChange("experience", e.target.value)}
                          rows={3}
                        />
                      </div>

                      <div>
                        <Label htmlFor="goals">Leadership Goals</Label>
                        <Textarea
                          id="goals"
                          placeholder="What do you hope to achieve through this program?"
                          value={formData.goals}
                          onChange={(e) => handleInputChange("goals", e.target.value)}
                          rows={3}
                        />
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="terms"
                            checked={formData.agreeTerms}
                            onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                          />
                          <Label htmlFor="terms" className="text-sm">
                            I agree to the{" "}
                            <a href="#" className="text-primary hover:underline">
                              Terms of Service
                            </a>{" "}
                            and{" "}
                            <a href="#" className="text-primary hover:underline">
                              Privacy Policy
                            </a>{" "}
                            *
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="marketing"
                            checked={formData.agreeMarketing}
                            onCheckedChange={(checked) => handleInputChange("agreeMarketing", checked as boolean)}
                          />
                          <Label htmlFor="marketing" className="text-sm">
                            I would like to receive updates about GTLA programs and events
                          </Label>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full gtla-gradient text-white font-semibold"
                        disabled={!formData.agreeTerms}
                      >
                        <CreditCard className="mr-2 h-5 w-5" />
                        Proceed to Payment
                      </Button>
                    </form>
                  </CardContent>
                </Card>
            )}
          </div>

          {/* Order Summary & Benefits */}
            <div className="space-y-6">
              {selectedProgramData && (
                <Card className="gtla-shadow bg-white/95 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-card-foreground">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-card-foreground">{selectedProgramData.name}</h4>
                      <p className="text-sm text-muted-foreground">{selectedProgramData.duration} program</p>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Total</span>
                        <span className="text-2xl font-bold text-primary">${selectedProgramData.price}</span>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      * Payment plans available. Contact us for details.
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Benefits */}
              <Card className="bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-card-foreground">Why Choose GTLA?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-sm">Secure Payment</h5>
                      <p className="text-xs text-muted-foreground">SSL encrypted and secure payment processing</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-sm">Flexible Schedule</h5>
                      <p className="text-xs text-muted-foreground">Self-paced learning with live sessions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-sm">Community Support</h5>
                      <p className="text-xs text-muted-foreground">Join a network of like-minded leaders</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Support */}
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-card-foreground mb-2">Need Help?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our enrollment team is here to help you choose the right program.
                  </p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                    <a href="#contact">Contact Support</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
        </div>
      </div>
    </section>
  )
}
