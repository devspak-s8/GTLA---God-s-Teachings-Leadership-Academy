"use client"

import type React from "react"


import { Analytics } from "@vercel/analytics/next"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"


function SearchParamsWrapper({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  // You can pass searchParams to children via context or props if needed
  return <>{children}</>;
}

export function ClientLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Suspense fallback={null}>
        <SearchParamsWrapper>{children}</SearchParamsWrapper>
      </Suspense>
      <Analytics />
    </>
  );
}
