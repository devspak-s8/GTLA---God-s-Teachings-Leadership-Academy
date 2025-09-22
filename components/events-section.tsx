import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock, ArrowRight, Star } from "lucide-react"
import { ScrollFadeIn, ScrollSlideIn } from "./scroll-animations"
import Link from "next/link"
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
      image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe",
      featured: true,
      highlights: ["3 Days of Content", "20+ Speakers", "Networking Events", "Resource Materials"],
    },
    // rest unchanged
  ]

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
             <div className="mb-24">
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
</div>
        {events
          .filter((event) => event.featured)
          .map((event) => (
            <ScrollSlideIn key={event.id} direction="up">
              <Card className="mb-12 overflow-hidden gtla-shadow bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
                <div className="grid lg:grid-cols-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={event.image}
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

        {/* CTA only */}
      
        <ScrollFadeIn>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 gtla-shadow">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-[family-name:var(--font-montserrat)]">
              Ready to Explore More?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Discover our complete catalog of leadership courses designed to meet you wherever you are in your journey.
            </p>
         
<Link href="/events">
  <Button
    size="lg"
    variant="outline"
    className="px-8 py-4 text-lg bg-transparent border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300"
  >
    View All Events
    <ArrowRight className="ml-2 h-5 w-5" />
  </Button>
</Link>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  )
}
