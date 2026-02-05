"use client"

import { Navigation } from "@/components/navigation"
import { OurStoryContent } from "@/components/our-story-content"
import { FloatingHearts } from "@/components/heart-icon"

export default function OurStoryPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <FloatingHearts />
      <Navigation />
      <OurStoryContent />
    </main>
  )
}
