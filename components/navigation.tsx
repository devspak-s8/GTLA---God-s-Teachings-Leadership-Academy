"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/", type: "route" },
    { name: "About", href: pathname === "/" ? "#about" : "/#about", type: "hash" },
    {
      name: "Courses",
      href: "/courses",
      type: "dropdown",
      items: [
        { name: "All Courses", href: "/courses" },
        { name: "Faith-Based Leadership", href: "/courses?category=Faith-Based+Leadership" },
        { name: "Servant Leadership", href: "/courses?category=Servant+Leadership" },
        { name: "Crisis Management", href: "/courses?category=Crisis+Management" },
        { name: "Personal Development", href: "/courses?category=Personal+Development" },
      ],
    },
    { name: "Events", href: pathname === "/" ? "#events" : "/#events", type: "hash" },
    { name: "Store", href: pathname === "/" ? "#store" : "/#store", type: "hash" },
    { name: "Contact", href: pathname === "/" ? "#contact" : "/#contact", type: "hash" },
  ]

  const isActiveRoute = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  return (
    <nav
      className={`bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-black text-primary font-[family-name:var(--font-montserrat)] hover:text-primary/80 transition-colors">
                GTLA
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => {
                if (item.type === "dropdown") {
                  return (
                    <DropdownMenu key={item.name}>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className={`text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors ${
                            isActiveRoute(item.href) ? "text-primary bg-primary/10" : ""
                          }`}
                        >
                          {item.name}
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-56">
                        {item.items?.map((subItem) => (
                          <DropdownMenuItem key={subItem.name} asChild>
                            <Link href={subItem.href} className="w-full cursor-pointer">
                              {subItem.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )
                }

                if (item.type === "route") {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActiveRoute(item.href) ? "text-primary bg-primary/10" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                }

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                )
              })}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <a href={pathname === "/" ? "#discovery-call" : "/#discovery-call"}>
                <Phone className="w-4 h-4 mr-2" />
                Discovery Call
              </a>
            </Button>
            <Button size="sm" asChild>
              <a href={pathname === "/" ? "#enroll" : "/#enroll"} className="gtla-gradient text-white">
                Enroll Now
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t">
            {navItems.map((item) => {
              if (item.type === "dropdown") {
                return (
                  <div key={item.name} className="space-y-1">
                    <div className="text-card-foreground font-medium px-3 py-2 text-base">{item.name}</div>
                    {item.items?.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="text-card-foreground hover:text-primary block px-6 py-2 text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )
              }

              if (item.type === "route") {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-card-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium ${
                      isActiveRoute(item.href) ? "text-primary bg-primary/10" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              }

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-card-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              )
            })}
            <div className="flex flex-col space-y-2 px-3 pt-4 border-t">
              <Button variant="outline" size="sm" asChild>
                <a href={pathname === "/" ? "#discovery-call" : "/#discovery-call"}>
                  <Phone className="w-4 h-4 mr-2" />
                  Discovery Call
                </a>
              </Button>
              <Button size="sm" asChild>
                <a href={pathname === "/" ? "#enroll" : "/#enroll"} className="gtla-gradient text-white">
                  Enroll Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
