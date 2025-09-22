import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ShoppingCart, Download, BookOpen, Heart, Star, Gift, ArrowRight } from "lucide-react"
import { ScrollFadeIn, ScrollSlideIn, ScrollStagger } from "./scroll-animations"

export function DigitalStoreSection() {
 const products = [
  {
    id: 1,
    title: "Leadership Journal & Planner",
    description:
      "A comprehensive 365-day journal designed for leaders to track goals, reflect on growth, and plan with purpose.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f", // notebook/journal on desk
    price: 29.99,
    originalPrice: 39.99,
    type: "Physical + Digital",
    rating: 4.9,
    reviews: 156,
    bestseller: true,
    features: ["Daily Reflection Pages", "Goal Setting Templates", "Leadership Insights", "Motivational Quotes"],
  },
  {
    id: 2,
    title: "Business Leadership Devotional",
    description:
      "30-day guide focusing on leadership principles with practical applications for modern entrepreneurs and executives.",
    image: "https://images.unsplash.com/photo-1515169067865-5387ec356754", // open book with pen
    price: 19.99,
    type: "Digital Download",
    rating: 4.8,
    reviews: 203,
    features: ["30 Daily Lessons", "Reflection Questions", "Guides", "Action Steps"],
  },
  {
    id: 3,
    title: "The Servant Leader's Handbook",
    description:
      "Comprehensive eBook covering the fundamentals of servant leadership in modern organizations.",
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f", // eBook style tablet
    price: 24.99,
    type: "eBook",
    rating: 4.9,
    reviews: 89,
    features: ["200+ Pages", "Case Studies", "Practical Exercises", "Bonus Resources"],
  },
 
];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Physical":
        return "bg-green-100 text-green-800"
      case "Digital Download":
        return "bg-blue-100 text-blue-800"
      case "eBook":
        return "bg-purple-100 text-purple-800"
      case "Digital Bundle":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <section
      id="store"
      className="py-20 bg-gradient-to-br from-card via-background to-secondary/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <img
          src="/abstract-geometric-pattern--leadership-symbols--su.jpg"
          alt="Store background pattern"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-24">
        <ScrollFadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-card-foreground mb-6 font-[family-name:var(--font-montserrat)]">
              Digital <span className="gtla-text-gradient">Store</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Enhance your leadership journey with our carefully curated collection of journals, devotionals, eBooks,
              and branded materials.
            </p>
          </div>
        </ScrollFadeIn>
</div>

        <ScrollStagger>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <ScrollSlideIn key={product.id} direction="up" delay={index * 100}>
                <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white hover:-translate-y-2 gtla-shadow">
                  <div className="relative overflow-hidden">
                    <img
                      src={`/leadership-resources--books--journals--digital-${product.id}.jpg` || product.image}
                      alt={product.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className={getTypeColor(product.type)}>{product.type}</Badge>
                      {product.bestseller && (
                        <Badge className="bg-secondary text-secondary-foreground">Bestseller</Badge>
                      )}
                    </div>
                    {product.originalPrice && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-red-500 text-white">
                          Save ${(product.originalPrice - product.price).toFixed(2)}
                        </Badge>
                      </div>
                    )}
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg font-bold text-card-foreground leading-tight">
                        {product.title}
                      </CardTitle>
                      <Button variant="ghost" size="sm" className="p-1 h-auto">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Price */}
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-amber-400 fill-current" />
                        <span className="ml-1 font-medium">{product.rating}</span>
                      </div>
                      <span className="text-muted-foreground">({product.reviews} reviews)</span>
                    </div>

                    {/* Features */}
                    <div className="space-y-1">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-xs text-muted-foreground">
                          <BookOpen className="w-3 h-3 mr-2 text-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-2">
                      <Button className="flex-1 gtla-gradient text-white font-semibold">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                      {product.type.includes("Digital") && (
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </ScrollSlideIn>
            ))}
          </div>
        </ScrollStagger>

        <ScrollStagger>
         <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-12"> {[
              { icon: Download, title: "Instant Download", desc: "Get digital products immediately after purchase" },
              { icon: Heart, title: "Satisfaction Guarantee", desc: "30-day money-back guarantee on all purchases" },
              { icon: Gift, title: "Member Discounts", desc: "Exclusive discounts for GTLA program members" },
            ].map((feature, index) => (
              <ScrollSlideIn key={index} direction="up" delay={index * 150}>
                <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 gtla-shadow hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 gtla-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </ScrollSlideIn>
            ))}
          </div>
        </ScrollStagger>

      </div>
    </section>
  )
}
