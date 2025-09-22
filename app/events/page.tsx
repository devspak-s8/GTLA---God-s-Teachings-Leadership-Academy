"use client";
import React, { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin,  
  Users,
  Grid3X3,
  List,
  SlidersHorizontal,
    Search,
  X,} from "lucide-react"
import { ScrollFadeIn, ScrollSlideIn, ScrollStagger } from "@/components/scroll-animations"

import { Label } from "@/components/ui/label"
const allEvents = [
  {
    id: 1,
    title: "Tech Leadership Conference",
    description: "Join top leaders in tech to discuss the future of innovation.",
    image: "https://images.unsplash.com/photo-1503424886303-4c6c2b1c8c1f",
    date: "Nov 15, 2025",
    time: "9:00 AM",
    location: "Lagos, Nigeria",
    attendees: 250,
    category: "Conference",
    tags: ["Leadership", "Technology"],
    price: "₦15,000",
    organizer: "S8Globals",
  },
  {
    id: 2,
    title: "Startup Pitch Night",
    description: "Pitch your idea to investors and connect with founders.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    date: "Dec 3, 2025",
    time: "5:00 PM",
    location: "Abuja, Nigeria",
    attendees: 120,
    category: "Meetup",
    tags: ["Entrepreneurship", "Networking"],
    price: "Free",
    organizer: "Startup Hub Abuja",
  },
  {
    id: 3,
    title: "AI for Beginners Workshop",
    description: "Hands-on introduction to artificial intelligence and ML.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    date: "Jan 10, 2026",
    time: "11:00 AM",
    location: "Online (Zoom)",
    attendees: 300,
    category: "Workshop",
    tags: ["AI", "Machine Learning"],
    price: "₦8,000",
    organizer: "AI Nigeria",
  },
  {
    id: 4,
    title: "Digital Marketing Summit",
    description: "Explore the latest digital marketing strategies with global experts.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    date: "Feb 5, 2026",
    time: "10:00 AM",
    location: "Accra, Ghana",
    attendees: 400,
    category: "Conference",
    tags: ["Marketing", "Business"],
    price: "₦12,000",
    organizer: "Marketing Africa",
  },
  {
    id: 5,
    title: "Women in Tech Meetup",
    description: "Empowering women through networking and mentorship.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    date: "Mar 8, 2026",
    time: "2:00 PM",
    location: "Nairobi, Kenya",
    attendees: 180,
    category: "Meetup",
    tags: ["Women", "Technology"],
    price: "Free",
    organizer: "SheTech Africa",
  },
  {
    id: 6,
    title: "Blockchain Bootcamp",
    description: "Learn blockchain fundamentals and build your first dApp.",
    image: "https://images.unsplash.com/photo-1504615755583-2916b52192d7",
    date: "Apr 12, 2026",
    time: "9:00 AM",
    location: "Cape Town, South Africa",
    attendees: 90,
    category: "Workshop",
    tags: ["Blockchain", "Crypto"],
    price: "₦20,000",
    organizer: "Blockchain Hub",
  },
  {
    id: 7,
    title: "Cybersecurity Conference",
    description: "Protecting digital assets in the modern era.",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9",
    date: "May 2, 2026",
    time: "10:00 AM",
    location: "Johannesburg, South Africa",
    attendees: 500,
    category: "Conference",
    tags: ["Cybersecurity", "IT"],
    price: "₦25,000",
    organizer: "Africa Cyber Forum",
  },
  {
    id: 8,
    title: "Freelancers Networking Night",
    description: "Meet, collaborate, and share freelance opportunities.",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
    date: "Jun 18, 2026",
    time: "6:00 PM",
    location: "Kampala, Uganda",
    attendees: 150,
    category: "Meetup",
    tags: ["Freelance", "Networking"],
    price: "Free",
    organizer: "Freelance Africa",
  },
  {
    id: 9,
    title: "Product Management Workshop",
    description: "Learn how to launch and manage successful products.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    date: "Jul 15, 2026",
    time: "9:00 AM",
    location: "Online",
    attendees: 220,
    category: "Workshop",
    tags: ["Product", "Business"],
    price: "₦10,000",
    organizer: "PM Africa",
  },
  {
    id: 10,
    title: "Tech Career Fair",
    description: "Meet recruiters and land your dream job in tech.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    date: "Aug 20, 2026",
    time: "10:00 AM",
    location: "Lagos, Nigeria",
    attendees: 600,
    category: "Conference",
    tags: ["Jobs", "Recruitment"],
    price: "₦5,000",
    organizer: "Tech Careers NG",
  },
  {
    id: 11,
    title: "Design Thinking Bootcamp",
    description: "Learn creative problem-solving techniques.",
    image: "https://images.unsplash.com/photo-1584697964156-3f71e88d40d3",
    date: "Sep 5, 2026",
    time: "9:00 AM",
    location: "Dakar, Senegal",
    attendees: 80,
    category: "Workshop",
    tags: ["Design", "Innovation"],
    price: "₦7,500",
    organizer: "Design Hub Africa",
  },
  {
    id: 12,
    title: "EdTech Leaders Forum",
    description: "Exploring innovation in education technology.",
    image: "https://images.unsplash.com/photo-1584697964231-1a19e1c26f84",
    date: "Oct 12, 2026",
    time: "10:00 AM",
    location: "Kigali, Rwanda",
    attendees: 350,
    category: "Conference",
    tags: ["Education", "Technology"],
    price: "₦18,000",
    organizer: "EdTech Africa",
  },
  {
    id: 13,
    title: "Remote Work Meetup",
    description: "Connect with digital nomads and remote professionals.",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
    date: "Nov 1, 2026",
    time: "4:00 PM",
    location: "Online",
    attendees: 200,
    category: "Meetup",
    tags: ["Remote Work", "Networking"],
    price: "Free",
    organizer: "Remote Africa",
  },
  {
    id: 14,
    title: "Cloud Computing Workshop",
    description: "Master AWS, Azure, and Google Cloud basics.",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    date: "Dec 10, 2026",
    time: "11:00 AM",
    location: "Online",
    attendees: 250,
    category: "Workshop",
    tags: ["Cloud", "DevOps"],
    price: "₦15,000",
    organizer: "Cloud Academy",
  },
  {
    id: 15,
    title: "Social Media Marketing Conference",
    description: "Trends and tactics for 2026 and beyond.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    date: "Jan 22, 2027",
    time: "9:00 AM",
    location: "Cairo, Egypt",
    attendees: 400,
    category: "Conference",
    tags: ["Social Media", "Marketing"],
    price: "₦14,000",
    organizer: "Marketing Pro",
  },
  {
    id: 16,
    title: "Hackathon Africa",
    description: "48 hours of coding, building, and innovation.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    date: "Feb 15, 2027",
    time: "8:00 AM",
    location: "Lagos, Nigeria",
    attendees: 500,
    category: "Hackathon",
    tags: ["Hackathon", "Coding"],
    price: "₦5,000",
    organizer: "Hack Africa",
  },
  {
    id: 17,
    title: "Healthcare Innovation Summit",
    description: "The future of digital health in Africa.",
    image: "https://images.unsplash.com/photo-1576765976791-198b1e1b0f2b",
    date: "Mar 12, 2027",
    time: "9:00 AM",
    location: "Addis Ababa, Ethiopia",
    attendees: 300,
    category: "Conference",
    tags: ["Health", "Technology"],
    price: "₦22,000",
    organizer: "HealthTech Africa",
  },
  {
    id: 18,
    title: "Photography Masterclass",
    description: "Sharpen your skills with top photographers.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    date: "Apr 25, 2027",
    time: "2:00 PM",
    location: "Online",
    attendees: 150,
    category: "Workshop",
    tags: ["Photography", "Art"],
    price: "₦9,000",
    organizer: "PhotoHub",
  },
  {
    id: 19,
    title: "Youth Leadership Forum",
    description: "Building the next generation of African leaders.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    date: "May 30, 2027",
    time: "10:00 AM",
    location: "Accra, Ghana",
    attendees: 350,
    category: "Conference",
    tags: ["Leadership", "Youth"],
    price: "₦10,000",
    organizer: "Youth Leaders Africa",
  },
  {
    id: 20,
    title: "Virtual Reality Expo",
    description: "Experience the future of VR and AR tech.",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
    date: "Jun 15, 2027",
    time: "9:00 AM",
    location: "Online",
    attendees: 500,
    category: "Exhibition",
    tags: ["VR", "AR", "Innovation"],
    price: "₦30,000",
    organizer: "VR Africa",
  },
]


export default function EventsPage() {
const [search, setSearch] = useState("")
const [category, setCategory] = useState("")
const [priceRange, setPriceRange] = useState("")
const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
const [showFilters, setShowFilters] = useState(false)
const [sortBy, setSortBy] = useState("")
const filteredEvents = allEvents
  .filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.description.toLowerCase().includes(search.toLowerCase())
   const matchesCategory = category && category !== "all" ? event.category === category : true
const matchesPrice = priceRange && priceRange !== "all"
  ? priceRange === "Free"
    ? event.price === "Free"
    : event.price !== "Free"
  : true

    return matchesSearch && matchesCategory && matchesPrice
  })
  .sort((a, b) => {
    if (sortBy === "date") {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    }
    if (sortBy === "price-low") {
      const priceA = a.price === "Free" ? 0 : parseInt(a.price.replace(/\D/g, ""))
      const priceB = b.price === "Free" ? 0 : parseInt(b.price.replace(/\D/g, ""))
      return priceA - priceB
    }
    if (sortBy === "price-high") {
      const priceA = a.price === "Free" ? 0 : parseInt(a.price.replace(/\D/g, ""))
      const priceB = b.price === "Free" ? 0 : parseInt(b.price.replace(/\D/g, ""))
      return priceB - priceA
    }
    return 0
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary/90 to-primary text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Explore and join impactful events that drive learning, networking, and leadership.
        </p>
      </section>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <ScrollSlideIn direction="up">
  <div className="bg-white rounded-2xl p-6 gtla-shadow mb-8">
    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-4">
      {/* Search */}
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* View Mode + Filters Toggle */}
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
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden"
        >
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>
    </div>

    {/* Filters */}
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ${
        showFilters || "hidden lg:grid"
      }`}
    >
      {/* Category */}
    <Select value={category} onValueChange={setCategory}>
  <SelectTrigger>
    <SelectValue placeholder="Event Type" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="all">All Types</SelectItem>
    <SelectItem value="Conference">Conference</SelectItem>
    <SelectItem value="Workshop">Workshop</SelectItem>
    <SelectItem value="Meetup">Meetup</SelectItem>
  </SelectContent>
</Select>
      {/* Ticket Price */}
   
<Select value={priceRange} onValueChange={setPriceRange}>
  <SelectTrigger>
    <SelectValue placeholder="Ticket Price" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="all">All Prices</SelectItem>
    <SelectItem value="Free">Free</SelectItem>
    <SelectItem value="Paid">Paid</SelectItem>
  </SelectContent>
</Select>
      {/* Sort By */}
      <div>
        <Label className="text-sm font-medium mb-2 block">Sort By</Label>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger>
            <SelectValue placeholder="Sort Options" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">Date</SelectItem>
            <SelectItem value="popular">Most Popular</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="newest">Newest First</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Reset */}
      <div className="flex items-end">
        <Button
          variant="outline"
          onClick={() => {
            setSearch("")
            setCategory("")
            setPriceRange("")
            setSortBy("")
          }}
          className="w-full bg-transparent"
        >
          <X className="h-4 w-4 mr-2" />
          Clear
        </Button>
      </div>
    </div>
  </div>
</ScrollSlideIn>

        {/* Event Grid */}
        <ScrollStagger>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <motion.div key={event.id} whileHover={{ scale: 1.02 }}>
                <Card className="overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>

                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4 mr-2" /> {event.date} • {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <MapPin className="w-4 h-4 mr-2" /> {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Users className="w-4 h-4 mr-2" /> {event.attendees} attendees
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-primary font-semibold">{event.price}</span>
                      <Button variant="default">Read More</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </ScrollStagger>
      </div>
    </div>
  )
}
