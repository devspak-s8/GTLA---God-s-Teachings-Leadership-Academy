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
          question: "What is GTLA and what makes it different?",
          answer:
            "GTLA (God's Teachings Leadership Academy) is a faith-centered leadership development organization that combines biblical principles with modern leadership theory. What makes us different is our holistic approach that develops not just leadership skills, but character, integrity, and spiritual foundation.",
        },
        {
          question: "Who can enroll in GTLA programs?",
          answer:
            "Our programs are designed for individuals of all ages and backgrounds who want to develop their leadership potential. We offer specialized programs for youth (16-25), adults, and executives. No prior leadership experience is required for our foundation programs.",
        },
        {
          question: "Do I need to be a Christian to participate?",
          answer:
            "While our programs are rooted in Christian principles, we welcome individuals from all faith backgrounds who are interested in character-based leadership development. We create an inclusive environment that respects diverse perspectives while maintaining our faith-centered approach.",
        },
      ],
    },
    {
      category: "Programs & Courses",
      questions: [
        {
          question: "How long are the leadership programs?",
          answer:
            "Program lengths vary: Foundation Leadership (3 months), Advanced Leadership Intensive (6 months), and Executive Leadership Mastery (12 months). All programs are designed to be flexible and accommodate busy schedules with both self-paced and live components.",
        },
        {
          question: "Are the courses self-paced or scheduled?",
          answer:
            "Our courses combine the best of both approaches. Core content is available for self-paced learning, while live sessions, group discussions, and mentoring calls are scheduled. This hybrid model provides flexibility while maintaining community connection.",
        },
        {
          question: "What kind of support do students receive?",
          answer:
            "Students receive comprehensive support including personal mentors, peer groups, weekly office hours, resource materials, and access to our alumni network. We also provide technical support and academic guidance throughout the program.",
        },
        {
          question: "Do you offer certificates or credentials?",
          answer:
            "Yes, all our programs include certificates of completion. Our Advanced and Executive programs also offer continuing education credits. We're working toward accreditation to provide even more valuable credentials for our graduates.",
        },
      ],
    },
    {
      category: "Enrollment & Payment",
      questions: [
        {
          question: "How much do the programs cost?",
          answer:
            "Program costs range from $299 (Foundation) to $1,199 (Executive Mastery). We offer payment plans, scholarships, and group discounts. The investment includes all materials, mentoring, and lifetime access to our alumni community.",
        },
        {
          question: "Do you offer payment plans or scholarships?",
          answer:
            "Yes! We offer flexible payment plans (3, 6, or 12 months) and need-based scholarships. We believe financial constraints shouldn't prevent anyone from developing their leadership potential. Contact us to discuss options.",
        },
        {
          question: "What's included in the program fee?",
          answer:
            "The program fee includes all course materials, video content, workbooks, personal mentoring, group sessions, access to our online community, and a certificate of completion. There are no hidden fees or additional costs.",
        },
        {
          question: "Is there a money-back guarantee?",
          answer:
            "Yes, we offer a 30-day satisfaction guarantee. If you're not completely satisfied with your program within the first 30 days, we'll provide a full refund. We're confident in the value our programs provide.",
        },
      ],
    },
    {
      category: "Events & Community",
      questions: [
        {
          question: "How often do you host events and workshops?",
          answer:
            "We host events throughout the year including our annual Leadership Summit, quarterly workshops, monthly webinars, and seasonal retreats. Students and alumni receive priority registration and discounted rates for all events.",
        },
        {
          question: "Can I attend events without being enrolled in a program?",
          answer:
            "Many of our events are open to the public. This is a great way to experience GTLA's approach and meet our community before enrolling in a full program. Check our events calendar for upcoming opportunities.",
        },
        {
          question: "How do I stay connected with other students and alumni?",
          answer:
            "We have an active online community platform, regular alumni meetups, mentorship programs, and networking events. Once you're part of GTLA, you're part of our lifelong community of faith-centered leaders.",
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
