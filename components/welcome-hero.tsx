"use client"

import Link from "next/link"
import { HeartIcon } from "./heart-icon"
import { Button } from "@/components/ui/button"
import photo1 from '../public/photo1.jpeg'
import photo2 from '../public/photo2.jpeg'
import photo3 from '../public/photo3.jpeg'
import photo4 from '../public/photo7.jpeg'
import photo5 from '../public/photo10.jpeg'
import photo6 from '../public/WhatsApp Image 2026-02-05 at 06.22.16.jpeg'
import Image from "next/image"

const photos = [
  { id: 1, placeholder: photo1 },
  { id: 2, placeholder: photo2 },
  { id: 3, placeholder: photo3 },
  { id: 4, placeholder: photo4 },
  { id: 5, placeholder: photo5 },
  { id: 6, placeholder: photo6 },
]

const loveNotes = [
  "The way you smile lights up my entire world",
  "Every moment with you is a gift I treasure",
  "You are the poem I never knew how to write",
  "My heart chose you before I even knew it",
]

export function WelcomeHero() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/40 via-background to-background" />
      
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="pt-24 pb-8 text-center px-6 animate-fade-in">
          <p 
            className="text-xs uppercase tracking-[0.4em] text-primary font-medium mb-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            A love letter in pixels
          </p>
          
          <h1 
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-4 leading-none opacity-0 animate-fade-in-scale"
            style={{ animationDelay: "0.5s" }}
          >
            To My <span className="text-primary italic">Everything</span>
          </h1>
          
          <div 
            className="h-0.5 bg-primary mx-auto mb-6 w-0 animate-expand-width"
            style={{ animationDelay: "0.8s" }}
          />
          
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            You are the reason my heart beats with purpose. This is my love, captured in moments.
          </p>
        </div>

        <div className="flex-1 px-4 md:px-8 lg:px-16 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-6xl mx-auto h-full">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className={`relative group cursor-pointer opacity-0 animate-fade-in hover:scale-[1.03] hover:z-10 transition-transform duration-300 ${
                  index === 0 ? "md:row-span-2" : ""
                } ${index === 3 ? "md:col-span-2" : ""}`}
                style={{ animationDelay: `${1.2 + index * 0.15}s` }}
              >
                <div className="relative h-full min-h-[200px] md:min-h-[240px] bg-card rounded-xl overflow-hidden border-2 border-border/50 shadow-lg group-hover:shadow-2xl group-hover:border-primary/30 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/80 to-primary/10 flex items-center justify-center">
                    <div className="text-center p-4">
                      <HeartIcon className="w-10 h-10 text-primary/40 mx-auto mb-2" />
                      
                      <p className="text-xs text-muted-foreground/60 mt-1">
                        Add her photo here
                        <Image src={photo.placeholder} alt={"My lovely girlfriend"}/>
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-background font-serif text-sm md:text-base italic leading-snug">
                      {`"${loveNotes[index % loveNotes.length]}"`}
                    </p>
                  </div>
                </div>

                <div className="absolute -top-1 -right-1 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <HeartIcon className="w-full h-full text-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div 
          className="py-12 text-center px-6 bg-gradient-to-t from-secondary/30 to-transparent opacity-0 animate-fade-in"
          style={{ animationDelay: "2.2s" }}
        >
          <p className="font-serif text-2xl md:text-3xl text-foreground mb-2 italic">
            Every picture tells our story
          </p>
          <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
            But words can say what images cannot. Let me share our memories...
          </p>
          
          <Button asChild size="lg" className="px-10 py-7 text-base rounded-full group">
            <Link href="/our-story" className="flex items-center gap-3">
              <span>Explore Our Memories</span>
              <HeartIcon className="w-5 h-5 group-hover:scale-110 transition-transform animate-bounce-subtle" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
