"use client"

export function HeartIcon({ className = "w-6 h-6", animate = false }: { className?: string; animate?: boolean }) {
  return (
    <svg
      className={`${className} ${animate ? "animate-heartbeat" : ""}`}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  )
}

const HEART_DATA = [
  { x: 5, duration: 18, delay: 0 },
  { x: 15, duration: 22, delay: 2 },
  { x: 25, duration: 16, delay: 4 },
  { x: 35, duration: 20, delay: 6 },
  { x: 45, duration: 24, delay: 8 },
  { x: 55, duration: 19, delay: 10 },
  { x: 65, duration: 21, delay: 12 },
  { x: 75, duration: 17, delay: 14 },
  { x: 85, duration: 23, delay: 16 },
  { x: 92, duration: 25, delay: 18 },
]

export function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {HEART_DATA.map((heart, i) => (
        <div
          key={i}
          className="absolute text-primary/20 animate-float-up"
          style={{
            left: `${heart.x}vw`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          <HeartIcon className="w-8 h-8" />
        </div>
      ))}
    </div>
  )
}
