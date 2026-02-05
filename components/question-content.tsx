"use client"

import { useState, useRef, useEffect } from "react"
import { HeartIcon } from "./heart-icon"
import { Button } from "@/components/ui/button"

const noButtonMessages = [
  "Are you sure?",
  "Really?",
  "Think again!",
  "Please?",
  "Pretty please?",
  "I will be sad...",
  "Catch me if you can!",
  "You cannot click me!",
  "Not today!",
  "Try again!",
]

const CELEBRATION_HEARTS = [
  { x: -150, y: -200, rotate: 45, scale: 0.8, delay: 0 },
  { x: 150, y: -180, rotate: -30, scale: 1.1, delay: 0.1 },
  { x: -200, y: -100, rotate: 20, scale: 0.9, delay: 0.2 },
  { x: 200, y: -120, rotate: -45, scale: 0.7, delay: 0.3 },
  { x: -100, y: -250, rotate: 60, scale: 1.0, delay: 0.4 },
  { x: 100, y: -220, rotate: -15, scale: 0.85, delay: 0.5 },
  { x: 0, y: -280, rotate: 0, scale: 1.2, delay: 0.6 },
  { x: -180, y: -50, rotate: 35, scale: 0.75, delay: 0.7 },
  { x: 180, y: -80, rotate: -55, scale: 0.95, delay: 0.8 },
  { x: -50, y: -300, rotate: 25, scale: 0.65, delay: 0.9 },
  { x: 50, y: -260, rotate: -40, scale: 1.05, delay: 1.0 },
  { x: 0, y: -180, rotate: 10, scale: 0.8, delay: 1.1 },
]

export function QuestionContent() {
  const [answer, setAnswer] = useState<"yes" | null>(null)
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [noClickCount, setNoClickCount] = useState(0)
  const [noButtonSize, setNoButtonSize] = useState(1)
  const [showCelebration, setShowCelebration] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleNoInteraction = () => {
    if (!containerRef.current) return
    
    const container = containerRef.current.getBoundingClientRect()
    const maxX = Math.min(container.width / 2 - 80, 200)
    const maxY = Math.min(container.height / 2 - 40, 150)
    
    const newX = (Math.random() - 0.5) * maxX * 2
    const newY = (Math.random() - 0.5) * maxY * 2
    
    setNoButtonPosition({ x: newX, y: newY })
    setNoClickCount(prev => prev + 1)
    setNoButtonSize(prev => Math.max(0.5, prev - 0.08))
  }

  const handleYes = () => {
    setAnswer("yes")
    setShowCelebration(true)
  }

  useEffect(() => {
    const handleResize = () => {
      setNoButtonPosition({ x: 0, y: 0 })
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section 
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/50 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      {answer === null && (
        <div className="max-w-3xl relative z-10 animate-fade-in">
          {/* Decorative floating hearts */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -left-10 text-primary/20 animate-bounce-subtle">
              <HeartIcon className="w-16 h-16" />
            </div>
            <div 
              className="absolute -top-16 -right-8 text-primary/20 animate-bounce-subtle"
              style={{ animationDelay: "0.5s" }}
            >
              <HeartIcon className="w-12 h-12" />
            </div>
            <div 
              className="absolute -bottom-16 left-1/4 text-primary/15 animate-bounce-subtle"
              style={{ animationDelay: "1s" }}
            >
              <HeartIcon className="w-10 h-10" />
            </div>
          </div>

          {/* Main beating heart */}
          <div 
            className="flex justify-center mb-8 opacity-0 animate-fade-in-scale"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              <HeartIcon className="w-24 h-24 md:w-32 md:h-32 text-primary drop-shadow-lg" animate />
              <div className="absolute inset-0 blur-xl bg-primary/30 rounded-full scale-75" />
            </div>
          </div>

          <p 
            className="text-sm uppercase tracking-[0.5em] text-primary font-medium mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            The Most Important Question
          </p>

          <h1 
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-6 leading-none opacity-0 animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            Will You Be My
          </h1>
          
          <h1 
            className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-primary mb-8 italic opacity-0 animate-fade-in-scale"
            style={{ animationDelay: "1s" }}
          >
            Valentine?
          </h1>

          <p 
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-16 max-w-xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: "1.3s" }}
          >
            You are the most beautiful thing that ever happened to me. 
            I want to spend this day of love celebrating us — celebrating you.
          </p>

          {/* Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-8 relative min-h-[120px] opacity-0 animate-fade-in"
            style={{ animationDelay: "1.5s" }}
          >
            {/* Yes Button */}
            <div style={{ transform: `scale(${1 + (1 - noButtonSize) * 0.3})` }}>
              <Button
                size="lg"
                className="px-16 py-8 text-xl rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse-glow"
                onClick={handleYes}
              >
                <span>Yes, I Will!</span>
                <HeartIcon className="w-6 h-6 ml-3" />
              </Button>
            </div>

            {/* No Button */}
            <div
              className="relative transition-all duration-300 ease-out"
              style={{ 
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px) scale(${noButtonSize}) rotate(${noClickCount * 15}deg)`,
              }}
            >
              <Button
                size="lg"
                variant="outline"
                className="px-12 py-7 text-lg rounded-full bg-transparent hover:bg-transparent cursor-pointer select-none"
                onMouseEnter={handleNoInteraction}
                onTouchStart={handleNoInteraction}
                onClick={handleNoInteraction}
              >
                {noClickCount > 0 ? noButtonMessages[noClickCount % noButtonMessages.length] : "No..."}
              </Button>
              
              {noClickCount >= 3 && (
                <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground whitespace-nowrap animate-fade-in">
                  (The right answer is Yes!)
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Celebration Screen */}
      {answer === "yes" && (
        <div className="max-w-3xl relative z-10 animate-fade-in-scale">
          {/* Explosion of hearts */}
          {showCelebration && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              {CELEBRATION_HEARTS.map((heart, i) => (
                <div
                  key={i}
                  className="absolute text-primary"
                  style={{
                    animation: `heart-explode 2s ease-out forwards`,
                    animationDelay: `${heart.delay}s`,
                    transform: `translate(0, 0) scale(0)`,
                    ["--end-x" as string]: `${heart.x}px`,
                    ["--end-y" as string]: `${heart.y}px`,
                    ["--end-scale" as string]: heart.scale,
                    ["--end-rotate" as string]: `${heart.rotate}deg`,
                  }}
                >
                  <HeartIcon className="w-8 h-8 md:w-12 md:h-12" />
                </div>
              ))}
            </div>
          )}

          {/* Main celebration content */}
          <div 
            className="flex justify-center mb-10 opacity-0 animate-fade-in-scale"
            style={{ animationDelay: "0.3s" }}
          >
            <HeartIcon className="w-32 h-32 md:w-40 md:h-40 text-primary drop-shadow-2xl" animate />
          </div>

          <h1 
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            You Said <span className="text-primary">Yes!</span>
          </h1>

          <p 
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            You just made me the happiest person in the world. 
            I cannot wait to spend this Valentine{"'"}s Day with you.
          </p>

          <div 
            className="space-y-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            <div className="flex flex-wrap justify-center gap-3">
              {[...Array(7)].map((_, i) => (
                <span
                  key={i}
                  className="opacity-0 animate-fade-in-scale"
                  style={{ animationDelay: `${1.2 + i * 0.1}s` }}
                >
                  <HeartIcon className="w-8 h-8 text-primary/70" />
                </span>
              ))}
            </div>

            <div 
              className="pt-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "1.8s" }}
            >
              <p className="font-serif text-3xl md:text-4xl text-primary italic">
                I love you
              </p>
              <p className="text-muted-foreground mt-2">
                Forever and always
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
