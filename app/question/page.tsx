"use client"

import { Navigation } from "@/components/navigation"
import { QuestionContent } from "@/components/question-content"
import { FloatingHearts } from "@/components/heart-icon"

export default function QuestionPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <FloatingHearts />
      <Navigation />
      <QuestionContent />
    </main>
  )
}
