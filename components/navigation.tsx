"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { HeartIcon } from "./heart-icon"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Welcome" },
  { href: "/our-story", label: "Our Story" },
  { href: "/question", label: "The Question" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-primary">
            <HeartIcon className="w-6 h-6" animate />
            <span className="font-serif text-xl font-medium">For You</span>
          </Link>
          
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm tracking-wide transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
