"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Contact form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-GTLA",
      subtext: "Mon-Fri, 9 AM - 5 PM EST",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@gtla.org",
      subtext: "We respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Leadership Way, Atlanta, GA 30309",
      subtext: "Visit us by appointment",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Monday - Friday: 9 AM - 5 PM",
      subtext: "Saturday: 10 AM - 2 PM",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 font-[family-name:var(--font-montserrat)]">
            Get In <span className="gtla-text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about our programs? Need support? We're here to help you on your leadership journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="gtla-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-card-foreground font-[family-name:var(--font-montserrat)]">
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you soon.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <Select onValueChange={(value) => handleInputChange("inquiryType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Information</SelectItem>
                          <SelectItem value="enrollment">Enrollment Questions</SelectItem>
                          <SelectItem value="programs">Program Details</SelectItem>
                          <SelectItem value="events">Events & Workshops</SelectItem>
                          <SelectItem value="support">Student Support</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gtla-gradient text-white font-semibold">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-card-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">{info.title}</h4>
                      <p className="text-sm text-card-foreground">{info.details}</p>
                      <p className="text-xs text-muted-foreground">{info.subtext}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* WhatsApp Chat */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800">WhatsApp Support</h4>
                    <p className="text-sm text-green-700">Chat with us instantly</p>
                  </div>
                </div>
                <p className="text-sm text-green-700 mb-4">
                  Get quick answers to your questions through our WhatsApp support channel.
                </p>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start WhatsApp Chat
                </Button>
              </CardContent>
            </Card>

          
       
          </div>

          {/* Map */}
<Card className="w-full lg:col-span-3 gtla-shadow">
  <CardHeader>
    <CardTitle className="text-lg font-bold text-card-foreground">
      Visit Our Campus
    </CardTitle>
  </CardHeader>
  <CardContent>
    <div className="aspect-video rounded-lg overflow-hidden mb-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.8477152140264!2d-84.38798218478967!3d33.74909898068759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50463c9b6c7cf%3A0x40f9fb88c15d3e7a!2sAtlanta%2C%20GA%2C%20USA!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <Button
      variant="outline"
      size="sm"
      className="w-full bg-transparent"
      asChild
    >
      <a
        href="https://maps.google.com/?q=123+Leadership+Way,+Atlanta,+GA"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get Directions
      </a>
    </Button>
  </CardContent>
</Card>

        </div>
      </div>
    </section>
  )
}
