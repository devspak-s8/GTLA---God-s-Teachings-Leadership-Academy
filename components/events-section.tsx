import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock, ArrowRight, Star } from "lucide-react"
import { ScrollFadeIn, ScrollSlideIn, ScrollStagger } from "./scroll-animations"

export function EventsSection() {
const events = [
  {
    id: 1,
    title: "Leadership Summit 2025",
    description:
      "Join top industry leaders for 3 days of keynotes, workshops, and networking opportunities.",
    date: "March 15-17, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Atlanta Convention Center",
    type: "Conference",
    price: 299,
    capacity: 500,
    registered: 342,
    image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe", // conference stage
    featured: true,
    speakers: ["Dr. Sarah Johnson", "Michael Chen, MBA", "CEO Maria Rodriguez"],
    highlights: ["3 Days of Content", "20+ Speakers", "Networking Events", "Resource Materials"],
  },
  {
    id: 2,
    title: "Young Leaders Bootcamp",
    description: "Intensive 2-day bootcamp designed specifically for emerging leaders aged 18-25.",
    date: "April 8-9, 2025",
    time: "8:00 AM - 6:00 PM",
    location: "TechHub Innovation Campus, Room 101",
    type: "Workshop",
    price: 149,
    capacity: 50,
    registered: 38,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d", // workshop team
    highlights: ["Hands-on Activities", "Peer Mentoring", "Leadership Assessment", "Action Planning"],
  },
  {
    id: 3,
    title: "Innovation & Leadership Retreat",
    description: "Step away from the city and sharpen your leadership skills in a focused, creative environment.",
    date: "May 20-22, 2025",
    time: "Friday 6 PM - Sunday 2 PM",
    location: "Aspen Leadership Lodge",
    type: "Retreat",
    price: 399,
    capacity: 75,
    registered: 23,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", // mountain retreat
    highlights: ["Scenic Setting", "Strategy Sessions", "Team Activities", "All Meals Included"],
  },
  {
    id: 4,
    title: "Executive Leadership Masterclass",
    description:
      "Advanced masterclass for senior leaders and executives looking to refine their leadership approach.",
    date: "June 12, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Downtown Business Center",
    type: "Masterclass",
    price: 199,
    capacity: 30,
    registered: 18,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df", // boardroom style
    highlights: ["Executive Focus", "Case Studies", "Peer Learning", "Certificate"],
  },
  {
    id: 5,
    title: "Community Leadership Workshop",
    description: "Learn how to create positive change in your local community through effective leadership.",
    date: "July 10, 2025",
    time: "10:00 AM - 3:00 PM",
    location: "Community Center Hall",
    type: "Workshop",
    price: 79,
    capacity: 100,
    registered: 45,
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70", // community meeting
    highlights: ["Community Focus", "Action Planning", "Local Speakers", "Lunch Included"],
  },
  {
    id: 6,
    title: "Women in Leadership Conference",
    description:
      "Empowering women leaders with tools, strategies, and community support for success.",
    date: "August 14-15, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Grand Hotel Conference Center",
    type: "Conference",
    price: 249,
    capacity: 200,
    registered: 156,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692", // women networking
    highlights: ["Women-Focused", "Inspiring Speakers", "Networking", "Mentorship Matching"],
  },
];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Conference":
        return "bg-purple-100 text-purple-800"
      case "Workshop":
        return "bg-blue-100 text-blue-800"
      case "Retreat":
        return "bg-green-100 text-green-800"
      case "Masterclass":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getAvailabilityStatus = (registered: number, capacity: number) => {
    const percentage = (registered / capacity) * 100
    if (percentage >= 90) return { status: "Almost Full", color: "text-red-600" }
    if (percentage >= 70) return { status: "Filling Fast", color: "text-orange-600" }
    return { status: "Available", color: "text-green-600" }
  }

  return (
    <section
      id="events"
      className="py-20 bg-gradient-to-br from-card via-background to-primary/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <img
          src="/young-leader-presenting-to-group--community-leader.jpg"
          alt="Events background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollFadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-card-foreground mb-6 font-[family-name:var(--font-montserrat)]">
              Upcoming <span className="gtla-text-gradient">Events</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join us for transformational events, workshops, and retreats designed to accelerate your leadership
              journey and connect you with like-minded individuals.
            </p>
          </div>
        </ScrollFadeIn>

        {events
          .filter((event) => event.featured)
          .map((event) => (
            <ScrollSlideIn key={event.id} direction="up">
              <Card className="mb-12 overflow-hidden gtla-shadow bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
                <div className="grid lg:grid-cols-2">
                  <div className="relative overflow-hidden">
                    <img
                      src="/leadership-conference--diverse-audience--inspi.jpg"
                      alt={event.title}
                      className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-secondary text-secondary-foreground shadow-lg">Featured Event</Badge>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className={getTypeColor(event.type)}>{event.type}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star className="w-4 h-4 mr-1 text-amber-400" />
                        Premium Event
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-card-foreground mb-4 font-[family-name:var(--font-montserrat)]">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{event.description}</p>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2 text-primary" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-2 text-primary" />
                        {event.registered}/{event.capacity} registered
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-card-foreground mb-2">Event Highlights:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {event.highlights.map((highlight, index) => (
                          <div key={index} className="text-sm text-muted-foreground">
                            • {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-primary">${event.price}</div>
                        <div
                          className={`text-sm font-medium ${
                            getAvailabilityStatus(event.registered, event.capacity).color
                          }`}
                        >
                          {getAvailabilityStatus(event.registered, event.capacity).status}
                        </div>
                      </div>
                      <Button size="lg" className="gtla-gradient text-white font-semibold">
                        Register Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollSlideIn>
          ))}

        <ScrollStagger>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {events
              .filter((event) => !event.featured)
              .map((event, index) => (
                <ScrollSlideIn key={event.id} direction="up" delay={index * 100}>
                  <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white hover:-translate-y-2 gtla-shadow">
                    <div className="relative overflow-hidden">
                      <img
                        src={`/leadership-event-${event.type.toLowerCase()}--workshop--.jpg` || event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 left-4">
                        <Badge className={getTypeColor(event.type)}>{event.type}</Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-bold text-card-foreground leading-tight">
                        {event.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Event Details */}
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2 text-primary" />
                          {event.date}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2 text-primary" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="w-4 h-4 mr-2 text-primary" />
                          {event.registered}/{event.capacity} registered
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-1">
                        {event.highlights.slice(0, 2).map((highlight, index) => (
                          <div key={index} className="text-xs text-muted-foreground">
                            • {highlight}
                          </div>
                        ))}
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between pt-2 border-t">
                        <div>
                          <div className="text-xl font-bold text-primary">${event.price}</div>
                          <div
                            className={`text-xs font-medium ${
                              getAvailabilityStatus(event.registered, event.capacity).color
                            }`}
                          >
                            {getAvailabilityStatus(event.registered, event.capacity).status}
                          </div>
                        </div>
                        <Button size="sm" className="gtla-gradient text-white font-semibold">
                          Register
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollSlideIn>
              ))}
          </div>
        </ScrollStagger>

        {/* CTA */}
        <ScrollFadeIn>
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              className="px-8 bg-white/80 backdrop-blur-sm border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              View All Events
            </Button>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  )
}
