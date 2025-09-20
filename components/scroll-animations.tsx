"use client"

import type React from "react"
import { useEffect, useRef } from "react"

// Custom hook for scroll-based animations
export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
            observer.unobserve(entry.target) // stop watching once animated
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  return ref
}

// Fade In
export function ScrollFadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// Slide In
export function ScrollSlideIn({
  children,
  direction = "left",
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  direction?: "left" | "right" | "up" | "down"
  className?: string
  delay?: number
}) {
  const ref = useScrollAnimation()

  const getTransform = () => {
    switch (direction) {
      case "left":
        return "-translate-x-8"
      case "right":
        return "translate-x-8"
      case "up":
        return "-translate-y-8"
      case "down":
        return "translate-y-8"
      default:
        return "-translate-x-8"
    }
  }

  return (
    <div
      ref={ref}
      className={`opacity-0 ${getTransform()} transition-all duration-700 ease-out ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// Staggered Animations
export function ScrollStagger({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useScrollAnimation()

  return (
    <div ref={ref} className={`stagger-container ${className}`}>
      {children}
    </div>
  )
}
