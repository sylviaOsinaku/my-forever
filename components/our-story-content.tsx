"use client"

import Link from "next/link"
import { HeartIcon } from "./heart-icon"
import { Button } from "@/components/ui/button"

const memories = [
  {
    title: "How We Met",
    date: "July 2025",
    description: "it was a random Wednesday evening, I was on a call with Segun and my sister talking about your call to bar ceremony, egun shared your call to bar pictures and iwas stunned. Having a conversation with you that day made me realise i struck gold and since then I have been hooked, I knew I had found the one",
    quote: "Some people search their whole lives to find what I found in you.",
  },
  {
    title: "My Favorites quote ", 
    description: "To a forever that is just beginning",
    quote: "Every love story is beautiful, but ours is my favorite.",
  },
  {
    title: "The Moment I Knew",
    date: "September 14th 2025",
    description: "Obim the day we went to the wildlife park, seeing you happy playing the archery game plus the perfect scenery, I couldnt help but say to myself how perfect you are and how lucky I am to have you by my side. You are my happy place babe and my answered prayers",
    quote: "I fell in love the way you fall asleep: slowly, then all at once.",
  },
  {
    title: "Our Adventures Together",
    date: "Countless memories",
    description: "I remember our first climbing experience, we visited the 100 steps in Jos. I could remember the fear in your eyes as you took the steps down, how i held your hands firmly and led you down the stairs, assuring you of safety. I loved you were vulnerable with me.",
    quote: "With you, I am home no matter where we are.",
  },
  {
    title: "The Little Things I Love",
    date: "Every single day",
    description: "When you give that beautiful smile of yours, WHen you show accountability and go out of your way for me",
    quote: "I love you not only for what you are, but for what I am when I am with you.",
  },
]

export function OurStoryContent() {
  return (
    <section className="min-h-screen py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-secondary/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div 
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 opacity-0 animate-fade-in-scale"
            style={{ animationDelay: "0.2s" }}
          >
            <HeartIcon className="w-8 h-8 text-primary" animate />
          </div>
          
          <p 
            className="text-sm uppercase tracking-[0.4em] text-primary font-medium mb-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Our Favourite Memories
          </p>
          
          <h1 
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-foreground mb-6 text-balance leading-tight opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Moments That Made Us <span className="text-primary italic">Forever</span>
          </h1>
          
          <div 
            className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6 w-0 animate-expand-width"
            style={{ animationDelay: "0.8s", maxWidth: "8rem" }}
          />
          
          <p 
            className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            These are the chapters of our story — each one more beautiful than the last, 
            each one a reason I fall deeper in love with you.
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {memories.map((memory, index) => (
            <div
              key={memory.title}
              className={`group opacity-0 ${index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right"}`}
              style={{ animationDelay: `${1.2 + index * 0.2}s` }}
            >
              <div className={`relative ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}>
                <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-border/50 shadow-lg group-hover:shadow-xl group-hover:border-primary/20 transition-all duration-500">
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <span className="text-primary-foreground font-serif font-bold text-lg">{index + 1}</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-xs uppercase tracking-widest text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                        {memory.date}
                      </span>
                    </div>
                    
                    <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground group-hover:text-primary transition-colors">
                      {memory.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                      {memory.description}
                    </p>
                    
                    <div className="pt-4 mt-4 border-t border-border/50">
                      <div className="flex items-start gap-3">
                        <HeartIcon className="w-5 h-5 text-primary/60 flex-shrink-0 mt-1" />
                        <p className="font-serif text-lg italic text-foreground/80 leading-relaxed">
                          {`"${memory.quote}"`}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
                
                {index < memories.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 -bottom-8 md:-bottom-12 w-px h-8 md:h-12 bg-gradient-to-b from-primary/30 to-transparent" />
                )}
              </div>
            </div>
          ))}
        </div>

        <div 
          className="text-center mt-24 pt-12 border-t border-border/30 opacity-0 animate-fade-in"
          style={{ animationDelay: "2.5s" }}
        >
          <div className="inline-block mb-6">
            <HeartIcon className="w-12 h-12 text-primary" animate />
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            But there is one more thing...
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto">
            All of these memories led me to a very important question. 
            One that I have been waiting to ask you.
          </p>
          
          <Button asChild size="lg" className="px-12 py-7 text-lg rounded-full group shadow-lg hover:shadow-xl transition-shadow">
            <Link href="/question" className="flex items-center gap-3">
              <span>The Big Question</span>
              <HeartIcon className="w-5 h-5" animate />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
