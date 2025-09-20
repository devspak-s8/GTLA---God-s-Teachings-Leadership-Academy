import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const footerLinks = {
    programs: [
      { name: "Foundation Leadership", href: "#" },
      { name: "Advanced Intensive", href: "#" },
      { name: "Executive Mastery", href: "#" },
      { name: "Youth Programs", href: "#" },
    ],
    resources: [
      { name: "Leadership Courses", href: "#courses" },
      { name: "Digital Store", href: "#store" },
      { name: "Events & Workshops", href: "#events" },
      { name: "Blog & Articles", href: "#" },
    ],
    support: [
      { name: "Contact Us", href: "#contact" },
      { name: "Discovery Call", href: "#discovery-call" },
      { name: "Student Portal", href: "#" },
      { name: "Help Center", href: "#" },
    ],
    company: [
      { name: "About GTLA", href: "#about" },
      { name: "Our Team", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press Kit", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand & Newsletter */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-black text-sidebar-foreground font-[family-name:var(--font-montserrat)]">
                  GTLA
                </h3>
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  Empowering faith-centered leaders to create positive change in their communities and beyond.
                </p>
              </div>

              {/* Newsletter Signup */}
              <div className="mb-6">
                <h4 className="font-semibold text-sidebar-foreground mb-3">Stay Connected</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Get leadership insights and program updates delivered to your inbox.
                </p>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-background border-border text-foreground"
                  />
                  <Button className="gtla-gradient text-white">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (555) 123-GTLA
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@gtla.org
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Atlanta, GA
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-4 grid md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-semibold text-sidebar-foreground mb-4">Programs</h4>
                <ul className="space-y-2">
                  {footerLinks.programs.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-sidebar-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sidebar-foreground mb-4">Resources</h4>
                <ul className="space-y-2">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-sidebar-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sidebar-foreground mb-4">Support</h4>
                <ul className="space-y-2">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-sidebar-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sidebar-foreground mb-4">Company</h4>
                <ul className="space-y-2">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-sidebar-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-sidebar-border py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
              <p>&copy; 2025 God's Teachings Leadership Academy. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-sidebar-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-sidebar-foreground transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-sidebar-foreground transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 bg-sidebar-accent rounded-full flex items-center justify-center text-sidebar-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
