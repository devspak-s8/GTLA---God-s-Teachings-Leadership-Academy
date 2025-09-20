"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, Phone, Video, CheckCircle, User, MessageCircle } from "lucide-react"

export function DiscoveryCallSection() {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    timezone: "",
    interests: "",
    questions: "",
    callType: "video",
  })

  const timeSlots = [
    { id: "mon-9", day: "Monday", time: "9:00 AM", available: true },
    { id: "mon-11", day: "Monday", time: "11:00 AM", available: false },
    { id: "mon-2", day: "Monday", time: "2:00 PM", available: true },
    { id: "tue-10", day: "Tuesday", time: "10:00 AM", available: true },
    { id: "tue-1", day: "Tuesday", time: "1:00 PM", available: true },
    { id: "tue-3", day: "Tuesday", time: "3:00 PM", available: false },
    { id: "wed-9", day: "Wednesday", time: "9:00 AM", available: true },
    { id: "wed-11", day: "Wednesday", time: "11:00 AM", available: true },
    { id: "wed-4", day: "Wednesday", time: "4:00 PM", available: true },
    { id: "thu-10", day: "Thursday", time: "10:00 AM", available: false },
    { id: "thu-2", day: "Thursday", time: "2:00 PM", available: true },
    { id: "fri-9", day: "Friday", time: "9:00 AM", available: true },
  ]

const benefits = [
  "Personalized career and leadership recommendations",
  "Clarity on your professional goals",
  "Overview of S8Globals community and resources",
  "Answers to all your questions",
  "No pressure, just an open conversation",
]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle booking submission
    console.log("Discovery call booked:", { ...formData, timeSlot: selectedTimeSlot })
  }

  return (
    <section id="discovery-call" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 font-[family-name:var(--font-montserrat)]">
            Free <span className="gtla-text-gradient">Discovery Call</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Not sure which program is right for you? Book a free 15-minute discovery call with our team to explore your
            leadership journey and find the perfect fit.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="gtla-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-card-foreground font-[family-name:var(--font-montserrat)]">
                  Schedule Your Call
                </CardTitle>
                <p className="text-muted-foreground">Choose a time that works best for you</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-card-foreground">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                        />
                      </div>
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
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
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
                      <div>
                        <Label htmlFor="timezone">Timezone</Label>
                        <Select onValueChange={(value) => handleInputChange("timezone", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your timezone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="est">Eastern Time (EST)</SelectItem>
                            <SelectItem value="cst">Central Time (CST)</SelectItem>
                            <SelectItem value="mst">Mountain Time (MST)</SelectItem>
                            <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Call Preferences */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-card-foreground">Call Preferences</h3>
                    <div>
                      <Label>Call Type</Label>
                      <div className="flex gap-4 mt-2">
                        <Button
                          type="button"
                          variant={formData.callType === "video" ? "default" : "outline"}
                          onClick={() => handleInputChange("callType", "video")}
                          className="flex items-center"
                        >
                          <Video className="w-4 h-4 mr-2" />
                          Video Call
                        </Button>
                        <Button
                          type="button"
                          variant={formData.callType === "phone" ? "default" : "outline"}
                          onClick={() => handleInputChange("callType", "phone")}
                          className="flex items-center"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Phone Call
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Time Slot Selection */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-card-foreground">Available Time Slots</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {timeSlots.map((slot) => (
                        <Button
                          key={slot.id}
                          type="button"
                          variant={selectedTimeSlot === slot.id ? "default" : "outline"}
                          disabled={!slot.available}
                          onClick={() => setSelectedTimeSlot(slot.id)}
                          className={`p-4 h-auto flex flex-col items-center ${
                            !slot.available ? "opacity-50 cursor-not-allowed" : ""
                          }`}
                        >
                          <div className="font-medium">{slot.day}</div>
                          <div className="text-sm">{slot.time}</div>
                          {!slot.available && <div className="text-xs text-muted-foreground">Booked</div>}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-card-foreground mb-4">Tell Us More</h3>
                    <div>
                      <Label htmlFor="interests"className=" mb-4">What interests you most about GTLA?</Label>
                      <Select onValueChange={(value) => handleInputChange("interests", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your primary interest" />
                        </SelectTrigger>
                    <SelectContent>
  <SelectItem value="leadership-development">Leadership Development</SelectItem>
  <SelectItem value="entrepreneurship">Entrepreneurship</SelectItem>
  <SelectItem value="community-building">Networking & Community</SelectItem>
  <SelectItem value="career-advancement">Career Advancement</SelectItem>
  <SelectItem value="personal-growth">Personal Growth</SelectItem>
</SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="questions" className=" mb-4">Questions or specific topics you'd like to discuss?</Label>
                      <Textarea
                        id="questions"
                        placeholder="Let us know what you'd like to learn more about..."
                        value={formData.questions}
                        onChange={(e) => handleInputChange("questions", e.target.value)}
                        rows={3}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gtla-gradient text-white font-semibold"
                    disabled={!selectedTimeSlot || !formData.name || !formData.email}
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book My Discovery Call
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Call Information & Benefits */}
          <div className="space-y-6">
            {/* Call Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-card-foreground flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  Call Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Duration:</span>
                  <span className="font-medium">15 minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Cost:</span>
                  <span className="font-medium text-primary">Free</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Format:</span>
                  <span className="font-medium">Video or Phone</span>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-xs text-muted-foreground">
                    You'll receive a confirmation email with call details and a calendar invite.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-card-foreground flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2 text-primary" />
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Team Member */}
            <Card className="bg-muted">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  
<div>
  <h4 className="font-semibold text-card-foreground">David Carter</h4>
  <p className="text-sm text-muted-foreground">Program Advisor</p>
</div>
                </div>
                <blockquote className="text-sm italic text-muted-foreground">
                  "I love helping prospective students discover how GTLA can support their leadership journey. Every
                  conversation is unique and valuable."
                </blockquote>
              </CardContent>
            </Card>

            {/* Alternative Contact */}
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold text-card-foreground mb-2">Prefer to talk now?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Call us directly during business hours (9 AM - 5 PM EST)
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  <Phone className="w-4 h-4 mr-2" />
                  (555) 123-GTLA
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
