"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradients for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background z-0" />
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-6"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm font-medium text-primary mb-4"
          >
            <Rocket className="w-4 h-4" />
            <span>National STEM Mission</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white/70">
            SPARK INDIA <br /> PROGRAM
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light">
            Empowering Future Scientists Through Space Education
          </p>

          <div className="flex flex-col items-center gap-2 mt-4 text-sm text-white/60 uppercase tracking-widest">
            <span>A Joint Initiative by</span>
            <span className="text-white/90 font-medium">Indo Science Education Trust (ISET)</span>
            <span>and</span>
            <span className="text-[var(--color-isro)] font-semibold">ISRO–SPPU Space Technology Cell (STC)</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-8"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base group">
              Explore Program
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
              Become an Intern
            </Button>
            <Button size="lg" variant="ghost" className="rounded-full px-8 h-12 text-base hover:bg-white/5">
              View Gallery
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements (e.g., Astronaut placeholder) */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-10 top-1/4 opacity-30 md:opacity-50 blur-sm md:blur-none hidden md:block"
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-primary to-accent opacity-20" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
