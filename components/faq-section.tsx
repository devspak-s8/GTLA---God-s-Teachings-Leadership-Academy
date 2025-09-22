"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What is GTLA?",
        answer:
          "GTLA (God's Teachings Leadership Academy) is a faith-based leadership school that blends biblical principles with modern leadership training.",
      },
      {
        question: "Who can enroll?",
        answer:
          "Anyone seeking leadership growth—youth, adults, or executives. No prior experience required.",
      },
  
    ],
  },
  {
    category: "Programs & Courses",
    questions: [
      {
        question: "How long are programs?",
        answer:
          "Foundation: 3 months, Advanced: 6 months, Executive: 12 months.",
      },
   
      {
        question: "What support is provided?",
        answer:
          "Mentors, peer groups, resources, office hours, and alumni access.",
      },
      {
        question: "Do you issue certificates?",
        answer:
          "Yes. Advanced and Executive tracks include continuing education credits.",
      },
    ],
  },
  {
    category: "Enrollment & Payment",
    questions: [
      {
        question: "How much does it cost?",
        answer:
          "Foundation: $299, Executive: $1,199. Payment plans and scholarships available.",
      },
     
      {
        question: "Is there a refund policy?",
        answer:
          "Yes, a 30-day money-back guarantee.",
      },
    ],
  },
  {
    category: "Events & Community",
    questions: [
      {
        question: "Do you host events?",
        answer:
          "Yes—annual summits, workshops, webinars, and retreats.",
      },
      {
        question: "Can non-students attend?",
        answer:
          "Yes, many events are open to the public.",
      },

    ],
  },
]

  return (
    <section className="py-20 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-card-foreground mb-6 font-[family-name:var(--font-montserrat)]">
            Frequently Asked <span className="gtla-text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about GTLA programs, enrollment, and community.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-card-foreground mb-6 font-[family-name:var(--font-montserrat)] flex items-center">
                <HelpCircle className="w-6 h-6 mr-3 text-primary" />
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex
                  const isOpen = openItems.includes(globalIndex)
                  return (
                    <Card key={questionIndex} className="bg-white border-border">
                      <CardContent className="p-0">
                        <Button
                          variant="ghost"
                          className="w-full p-6 text-left justify-between hover:bg-muted/50"
                          onClick={() => toggleItem(globalIndex)}
                        >
                          <span className="font-semibold text-card-foreground pr-4">{faq.question}</span>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                          )}
                        </Button>
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-card-foreground mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Our team is here to help you with any questions about GTLA
                programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="gtla-gradient text-white font-semibold" asChild>
                  <a href="#contact">Contact Support</a>
                </Button>
                <Button variant="outline" className="bg-transparent" asChild>
                  <a href="#discovery-call">Schedule Discovery Call</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
