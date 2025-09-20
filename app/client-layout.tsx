"use client"

import type React from "react"

import { Analytics } from "@vercel/analytics/next"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

export function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const searchParams = useSearchParams()

  return (
    <>
      <Suspense fallback={null}>{children}</Suspense>
      <Analytics />
    </>
  )
}
