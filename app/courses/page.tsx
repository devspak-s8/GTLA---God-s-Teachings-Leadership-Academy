"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import {
  Search,
  Clock,
  Users,
  Star,
  Play,
  BookOpen,
  ArrowRight,
  Grid3X3,
  List,
  SlidersHorizontal,
  X,
} from "lucide-react"
import { ScrollFadeIn, ScrollSlideIn, ScrollStagger } from "@/components/scroll-animations"

interface Course {
  id: number
  title: string
  description: string
  image: string
  duration: string
  students: number
  rating: number
  price: number
  level: "Beginner" | "Intermediate" | "Advanced"
  category: string
  instructor: string
  features: string[]
  popular?: boolean
  new?: boolean
  tags: string[]
}

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLevel, setSelectedLevel] = useState<string>("all")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [priceRange, setPriceRange] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("popular")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const coursesPerPage = 9
const allCourses: Course[] = [
  {
    id: 1,
    title: "Foundations of Christian Leadership",
    description:
      "Build your leadership foundation on biblical principles and timeless wisdom that transforms lives and communities.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    duration: "6 weeks",
    students: 245,
    rating: 4.9,
    price: 149,
    level: "Beginner",
    category: "Faith-Based Leadership",
    instructor: "Dr. Sarah Johnson",
    features: ["12 Video Lessons", "Workbook Included", "Group Discussions", "Certificate"],
    popular: true,
    tags: ["christian", "foundation", "biblical", "principles"],
  },
  {
    id: 2,
    title: "Servant Leadership in Action",
    description:
      "Learn to lead by serving others and creating positive organizational culture that honors God and empowers people.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    duration: "8 weeks",
    students: 189,
    rating: 4.8,
    price: 199,
    level: "Intermediate",
    category: "Servant Leadership",
    instructor: "Pastor Michael Chen",
    features: ["16 Video Lessons", "Case Studies", "Peer Mentoring", "Project Work"],
    tags: ["servant", "community", "service", "culture"],
  },
  {
    id: 3,
    title: "Leading Through Crisis",
    description:
      "Develop resilience and guide others through challenging times with unwavering faith and strategic wisdom.",
    image: "https://images.unsplash.com/photo-1515165562835-c4c6b2b56a82",
    duration: "4 weeks",
    students: 156,
    rating: 4.9,
    price: 129,
    level: "Advanced",
    category: "Crisis Management",
    instructor: "Dr. Rebecca Martinez",
    features: ["8 Video Lessons", "Crisis Simulations", "Expert Interviews", "Action Plans"],
    tags: ["crisis", "resilience", "problem-solving", "strategy"],
  },
  {
    id: 4,
    title: "Emotional Intelligence for Leaders",
    description:
      "Master the art of emotional intelligence to build stronger relationships and lead with empathy and understanding.",
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f",
    duration: "5 weeks",
    students: 203,
    rating: 4.7,
    price: 179,
    level: "Intermediate",
    category: "Personal Development",
    instructor: "Dr. Amanda Foster",
    features: ["15 Video Lessons", "Self-Assessment Tools", "Practice Exercises", "Peer Feedback"],
    new: true,
    tags: ["emotional", "intelligence", "relationships", "empathy"],
  },
  {
    id: 5,
    title: "Team Building and Collaboration",
    description:
      "Create high-performing teams through effective communication, trust-building, and collaborative leadership strategies.",
    image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde16",
    duration: "6 weeks",
    students: 167,
    rating: 4.6,
    price: 159,
    level: "Beginner",
    category: "Team Leadership",
    instructor: "Coach Maria Rodriguez",
    features: ["12 Video Lessons", "Team Exercises", "Communication Tools", "Progress Tracking"],
    tags: ["team", "collaboration", "communication", "trust"],
  },
  {
    id: 6,
    title: "Strategic Leadership and Vision",
    description:
      "Develop strategic thinking skills and learn to cast compelling visions that inspire and mobilize others toward success.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    duration: "10 weeks",
    students: 134,
    rating: 4.8,
    price: 249,
    level: "Advanced",
    category: "Strategic Leadership",
    instructor: "CEO David Thompson",
    features: ["20 Video Lessons", "Strategic Planning Tools", "Vision Workshops", "Executive Coaching"],
    tags: ["strategy", "vision", "planning", "executive"],
  },
  {
    id: 7,
    title: "Women in Leadership Excellence",
    description:
      "Empower women leaders with specialized strategies, confidence-building techniques, and networking opportunities.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    duration: "7 weeks",
    students: 198,
    rating: 4.9,
    price: 189,
    level: "Intermediate",
    category: "Specialized Leadership",
    instructor: "Dr. Jennifer Williams",
    features: ["14 Video Lessons", "Mentorship Program", "Networking Events", "Leadership Assessment"],
    popular: true,
    tags: ["women", "empowerment", "confidence", "networking"],
  },
  {
    id: 8,
    title: "Youth Leadership Development",
    description:
      "Equip young leaders with essential skills, character development, and practical tools for making a positive impact.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
    duration: "4 weeks",
    students: 89,
    rating: 4.5,
    price: 99,
    level: "Beginner",
    category: "Youth Leadership",
    instructor: "Pastor James Wilson",
    features: ["8 Video Lessons", "Peer Groups", "Character Building", "Service Projects"],
    new: true,
    tags: ["youth", "character", "development", "impact"],
  },
  {
    id: 9,
    title: "Nonprofit Leadership Mastery",
    description:
      "Master the unique challenges of nonprofit leadership including fundraising, volunteer management, and mission focus.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    duration: "8 weeks",
    students: 112,
    rating: 4.7,
    price: 219,
    level: "Advanced",
    category: "Nonprofit Leadership",
    instructor: "Director Lisa Chang",
    features: ["16 Video Lessons", "Fundraising Strategies", "Volunteer Training", "Impact Measurement"],
    tags: ["nonprofit", "fundraising", "volunteers", "mission"],
  },
  {
    id: 10,
    title: "Leadership in the Digital Age",
    description:
      "Adapt leadership practices to thrive in a fast-paced digital world, leveraging technology for better results.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    duration: "6 weeks",
    students: 154,
    rating: 4.8,
    price: 229,
    level: "Intermediate",
    category: "Digital Leadership",
    instructor: "Tech Leader Mark Evans",
    features: ["12 Video Lessons", "Digital Transformation Tools", "Innovation Frameworks", "Capstone Project"],
    tags: ["digital", "technology", "innovation", "future"],
  },
  {
    id: 11,
    title: "Ethical Leadership and Integrity",
    description:
      "Lead with honesty, transparency, and values that build trust and long-term impact.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    duration: "5 weeks",
    students: 121,
    rating: 4.6,
    price: 139,
    level: "Beginner",
    category: "Ethics",
    instructor: "Professor John Edwards",
    features: ["10 Video Lessons", "Case Studies", "Integrity Assessments", "Reflection Guides"],
    tags: ["ethics", "honesty", "integrity", "trust"],
  },
  {
    id: 12,
    title: "Diversity and Inclusive Leadership",
    description:
      "Champion diversity and inclusion in the workplace to foster creativity and fairness.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    duration: "6 weeks",
    students: 144,
    rating: 4.8,
    price: 189,
    level: "Intermediate",
    category: "Diversity & Inclusion",
    instructor: "Dr. Anita Patel",
    features: ["12 Video Lessons", "Workplace Scenarios", "Inclusive Practices", "Action Plans"],
    tags: ["diversity", "inclusion", "equity", "culture"],
  },
  {
    id: 13,
    title: "Coaching and Mentoring for Leaders",
    description:
      "Learn to guide and develop others through structured coaching and mentoring techniques.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    duration: "7 weeks",
    students: 132,
    rating: 4.7,
    price: 199,
    level: "Intermediate",
    category: "Coaching",
    instructor: "Coach Steven Miller",
    features: ["14 Video Lessons", "Practice Coaching", "Feedback Tools", "Growth Plans"],
    tags: ["coaching", "mentoring", "guidance", "growth"],
  },
  {
    id: 14,
    title: "Innovation and Creative Leadership",
    description:
      "Spark innovation and lead teams in developing creative solutions to complex challenges.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    duration: "8 weeks",
    students: 173,
    rating: 4.9,
    price: 239,
    level: "Advanced",
    category: "Innovation",
    instructor: "Entrepreneur Alex Carter",
    features: ["16 Video Lessons", "Innovation Labs", "Creative Exercises", "Capstone Project"],
    tags: ["innovation", "creativity", "future", "ideas"],
  },
  {
    id: 15,
    title: "Military Principles of Leadership",
    description:
      "Adopt discipline, resilience, and mission-focused strategies inspired by military leadership.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
    duration: "6 weeks",
    students: 115,
    rating: 4.5,
    price: 169,
    level: "Advanced",
    category: "Military Leadership",
    instructor: "Colonel Richard Hayes",
    features: ["12 Video Lessons", "Case Studies", "Simulations", "Drills"],
    tags: ["discipline", "resilience", "mission", "military"],
  },
  {
    id: 16,
    title: "Corporate Governance and Leadership",
    description:
      "Understand governance, accountability, and corporate responsibility as a leader.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    duration: "9 weeks",
    students: 126,
    rating: 4.7,
    price: 249,
    level: "Advanced",
    category: "Corporate Leadership",
    instructor: "CFO Linda Moore",
    features: ["18 Video Lessons", "Governance Models", "Compliance Tools", "Boardroom Simulations"],
    tags: ["corporate", "governance", "accountability", "compliance"],
  },
  {
    id: 17,
    title: "Global Leadership Perspectives",
    description:
      "Navigate cross-cultural leadership challenges and opportunities in an interconnected world.",
    image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
    duration: "8 weeks",
    students: 138,
    rating: 4.6,
    price: 229,
    level: "Advanced",
    category: "Global Leadership",
    instructor: "Ambassador Maria Lopez",
    features: ["16 Video Lessons", "Cross-Cultural Training", "Case Studies", "Group Projects"],
    tags: ["global", "culture", "international", "perspective"],
  },
  {
    id: 18,
    title: "Public Speaking for Leaders",
    description:
      "Enhance communication and public speaking skills to inspire and influence audiences.",
    image: "https://images.unsplash.com/photo-1517502166878-35c93a0072bb",
    duration: "5 weeks",
    students: 212,
    rating: 4.9,
    price: 179,
    level: "Beginner",
    category: "Communication",
    instructor: "Speech Coach Emily Brown",
    features: ["10 Video Lessons", "Speech Practice", "Feedback Sessions", "Presentation Skills"],
    tags: ["speaking", "communication", "influence", "confidence"],
  },
  {
    id: 19,
    title: "Conflict Resolution and Mediation",
    description:
      "Develop conflict management strategies and negotiation skills to resolve disputes effectively.",
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b",
    duration: "6 weeks",
    students: 175,
    rating: 4.8,
    price: 199,
    level: "Intermediate",
    category: "Conflict Management",
    instructor: "Mediator Paul Anderson",
    features: ["12 Video Lessons", "Negotiation Role-Play", "Mediation Tools", "Case Studies"],
    tags: ["conflict", "mediation", "resolution", "negotiation"],
  },
  {
    id: 20,
    title: "Change Management Leadership",
    description:
      "Equip yourself with strategies to guide organizations and teams through change with confidence.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    duration: "7 weeks",
    students: 162,
    rating: 4.7,
    price: 219,
    level: "Advanced",
    category: "Change Management",
    instructor: "Dr. William Scott",
    features: ["14 Video Lessons", "Change Frameworks", "Action Plans", "Real-Life Cases"],
    tags: ["change", "adaptation", "transformation", "strategy"],
  },
];

  const categories = ["all", ...Array.from(new Set(allCourses.map((course) => course.category)))]
  const levels = ["all", "Beginner", "Intermediate", "Advanced"]

  const filteredCourses = useMemo(() => {
    const filtered = allCourses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesLevel = selectedLevel === "all" || course.level === selectedLevel
      const matchesCategory = selectedCategory === "all" || course.category === selectedCategory

      let matchesPrice = true
      if (priceRange === "under-100") matchesPrice = course.price < 100
      else if (priceRange === "100-200") matchesPrice = course.price >= 100 && course.price <= 200
      else if (priceRange === "over-200") matchesPrice = course.price > 200

      return matchesSearch && matchesLevel && matchesCategory && matchesPrice
    })

    // Sort courses
    switch (sortBy) {
      case "popular":
        filtered.sort((a, b) => b.students - a.students)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "newest":
        filtered.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0))
        break
      default:
        break
    }

    return filtered
  }, [searchQuery, selectedLevel, selectedCategory, priceRange, sortBy])

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage)
  const paginatedCourses = filteredCourses.slice((currentPage - 1) * coursesPerPage, currentPage * coursesPerPage)

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

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedLevel("all")
    setSelectedCategory("all")
    setPriceRange("all")
    setSortBy("popular")
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card/20 to-primary/5">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollFadeIn>
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-black mb-6 font-[family-name:var(--font-montserrat)]">
                Leadership <span className="text-white/90">Courses</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Discover our comprehensive collection of leadership courses designed to transform your leadership
                journey and empower you to make a lasting impact.
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <ScrollSlideIn direction="up">
          <div className="bg-white rounded-2xl p-6 gtla-shadow mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-4">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search courses, instructors, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* View Mode and Filter Toggle */}
              <div className="flex items-center gap-2">
                <div className="flex items-center border rounded-lg p-1">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="h-8 w-8 p-0"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="h-8 w-8 p-0"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
                <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>
            </div>

            {/* Filters */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 ${showFilters || "hidden lg:grid"}`}>
              <div>
                <Label className="text-sm font-medium mb-2 block">Category</Label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-medium mb-2 block">Level</Label>
                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {levels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level === "all" ? "All Levels" : level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-medium mb-2 block">Price Range</Label>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="under-100">Under $100</SelectItem>
                    <SelectItem value="100-200">$100 - $200</SelectItem>
                    <SelectItem value="over-200">Over $200</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-medium mb-2 block">Sort By</Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button variant="outline" onClick={clearFilters} className="w-full bg-transparent">
                  <X className="h-4 w-4 mr-2" />
                  Clear
                </Button>
              </div>
            </div>
          </div>
        </ScrollSlideIn>

        {/* Results Summary */}
        <ScrollFadeIn>
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing {paginatedCourses.length} of {filteredCourses.length} courses
            </p>
            {filteredCourses.length === 0 && (
              <p className="text-muted-foreground">No courses found. Try adjusting your filters.</p>
            )}
          </div>
        </ScrollFadeIn>

        {/* Courses Grid/List */}
        {viewMode === "grid" ? (
          <ScrollStagger>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {paginatedCourses.map((course, index) => (
                <ScrollSlideIn key={course.id} direction="up" delay={index * 100}>
                  <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white hover:-translate-y-2 gtla-shadow">
                    <div className="relative overflow-hidden">
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className={getLevelColor(course.level)}>{course.level}</Badge>
                        {course.popular && <Badge className="bg-secondary text-secondary-foreground">Popular</Badge>}
                        {course.new && <Badge className="bg-green-500 text-white">New</Badge>}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="sm" className="bg-white text-black hover:bg-gray-100 font-semibold">
                          <Play className="w-4 h-4 mr-2" />
                          Preview Course
                        </Button>
                      </div>
                    </div>

                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl font-bold text-card-foreground leading-tight font-[family-name:var(--font-montserrat)]">
                        {course.title}
                      </CardTitle>
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
        ) : (
          <ScrollStagger>
            <div className="space-y-6 mb-12">
              {paginatedCourses.map((course, index) => (
                <ScrollSlideIn key={course.id} direction="up" delay={index * 50}>
                  <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white gtla-shadow">
                    <div className="grid md:grid-cols-4 gap-6 p-6">
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 left-2 flex gap-1">
                          <Badge className={getLevelColor(course.level)}>
                            {course.level}
                          </Badge>
                          {course.popular && (
                            <Badge className="bg-secondary text-secondary-foreground">
                              Popular
                            </Badge>
                          )}
                          {course.new && (
                            <Badge className="bg-green-500 text-white">
                              New
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <h3 className="text-xl font-bold text-card-foreground mb-2 font-[family-name:var(--font-montserrat)]">
                          {course.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{course.description}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1 text-primary" />
                            {course.duration}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1 text-primary" />
                            {course.students} students
                          </div>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 mr-1 text-amber-400 fill-current" />
                            {course.rating}
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          <span className="font-medium text-primary">Instructor:</span> {course.instructor}
                        </p>
                      </div>

                      <div className="flex flex-col justify-between">
                        <div className="text-2xl font-bold text-primary mb-4">${course.price}</div>
                        <Button className="gtla-gradient text-white font-semibold">
                          Enroll Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </ScrollSlideIn>
              ))}
            </div>
          </ScrollStagger>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <ScrollFadeIn>
            <div className="flex items-center justify-center gap-2">
              <Button
                variant="outline"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  onClick={() => setCurrentPage(page)}
                  className="w-10 h-10 p-0"
                >
                  {page}
                </Button>
              ))}
              <Button
                variant="outline"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </ScrollFadeIn>
        )}
      </div>
    </div>
  )
}
