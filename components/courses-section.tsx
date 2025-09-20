import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, Play, BookOpen, ArrowRight } from "lucide-react"
import { ScrollFadeIn, ScrollSlideIn, ScrollStagger } from "./scroll-animations"
import Link from "next/link"
export function CoursesSection() {
  const featuredCourses = [
  {
    id: 1,
    title: "Foundations of Modern Leadership",
    description:
      "Build a strong leadership foundation with timeless strategies, emotional intelligence, and real-world applications.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f", // team training/workshop
    duration: "6 weeks",
    students: 245,
    rating: 4.9,
    price: 149,
    level: "Beginner",
    features: ["12 Video Lessons", "Workbook Included", "Group Discussions", "Certificate"],
    instructor: "Dr. Sarah Johnson",
    popular: true,
  },
  {
    id: 2,
    title: "Servant Leadership in Action",
    description:
      "Learn to lead by serving others and creating positive organizational culture that drives performance.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978", // leadership in action
    duration: "8 weeks",
    students: 189,
    rating: 4.8,
    price: 199,
    level: "Intermediate",
    features: ["16 Video Lessons", "Case Studies", "Peer Mentoring", "Project Work"],
    instructor: "Michael Chen",
  },
  {
    id: 3,
    title: "Leading Through Crisis",
    description:
      "Develop resilience and guide teams through challenging times with clarity, strategy, and confidence.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d", // crisis meeting/team solving
    duration: "4 weeks",
    students: 156,
    rating: 4.9,
    price: 129,
    level: "Advanced",
    features: ["8 Video Lessons", "Crisis Simulations", "Expert Interviews", "Action Plans"],
    instructor: "Dr. Rebecca Martinez",
  },
];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-blue-100 text-blue-800"
      case "Advanced":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-background to-card/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="/educational-background--books--graduation--lear.jpg"
          alt="Educational background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollFadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 font-[family-name:var(--font-montserrat)]">
              Leadership <span className="gtla-text-gradient">Courses</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Develop your leadership skills through our comprehensive, self-paced courses designed by industry experts
              and faith leaders who understand the unique challenges of Christian leadership.
            </p>
          </div>
        </ScrollFadeIn>

        {/* Featured Courses Grid */}
        <ScrollStagger>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course, index) => (
              <ScrollSlideIn key={course.id} direction="up" delay={index * 150}>
                <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white border-0 gtla-shadow hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className={getLevelColor(course.level)}>{course.level}</Badge>
                      {course.popular && <Badge className="bg-secondary text-secondary-foreground">Most Popular</Badge>}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" className="bg-white text-black hover:bg-gray-100 font-semibold">
                        <Play className="w-4 h-4 mr-2" />
                        Preview Course
                      </Button>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl font-bold text-card-foreground leading-tight font-[family-name:var(--font-montserrat)]">
                        {course.title}
                      </CardTitle>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{course.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Course Stats */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-primary" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1 text-primary" />
                        {course.students}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-amber-400 fill-current" />
                        {course.rating}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {course.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                          <BookOpen className="w-3 h-3 mr-2 text-primary flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Instructor */}
                    <div className="text-xs text-muted-foreground bg-primary/5 rounded-lg p-2">
                      <span className="font-medium text-primary">Instructor:</span> {course.instructor}
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="text-2xl font-bold text-primary">${course.price}</div>
                      <Button className="gtla-gradient text-white font-semibold">
                        Enroll Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollSlideIn>
            ))}
          </div>
        </ScrollStagger>

        {/* View All Courses CTA */}
        <ScrollFadeIn>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 gtla-shadow">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-[family-name:var(--font-montserrat)]">
              Ready to Explore More?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Discover our complete catalog of leadership courses designed to meet you wherever you are in your journey.
            </p>
         
<Link href="/courses">
  <Button
    size="lg"
    variant="outline"
    className="px-8 py-4 text-lg bg-transparent border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300"
  >
    View All Leadership Courses
    <ArrowRight className="ml-2 h-5 w-5" />
  </Button>
</Link>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  )
}
