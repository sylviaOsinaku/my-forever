"use client"

import { Navigation } from "@/components/navigation"
import { WelcomeHero } from "@/components/welcome-hero"
import { FloatingHearts } from "@/components/heart-icon"

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background">
      <FloatingHearts />
      <Navigation />
      <WelcomeHero />
    </main>
  )
}
