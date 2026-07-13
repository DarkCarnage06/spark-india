"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradients for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-background z-0" />
      
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
            className="inline-flex flex-col sm:flex-row items-center gap-3 mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm font-medium text-blue-400 backdrop-blur-sm">
              <Rocket className="w-4 h-4" />
              <span>Official ISRO Space Tutor & Merchandise Partner</span>
            </div>
          </motion.div>

          <p className="text-sm md:text-base text-blue-400 font-bold tracking-widest uppercase mb-2">
            India&apos;s Flagship School Space Education Initiative
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white/70 leading-tight">
            SPARK INDIA PROGRAM
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-light mt-4 uppercase tracking-widest text-blue-300">
            Space • Passion • Awareness • Research • Knowledge
          </p>

          <p className="text-base text-zinc-400 max-w-3xl mx-auto mt-4 leading-relaxed">
            SPARK INDIA is a structured educational ecosystem that introduces students from Grades 1 to 10 to the fascinating world of Space Science, STEM, Robotics, Artificial Intelligence, Satellite Technology, Astronomy, Electronics, Engineering, and Emerging Technologies through experiential learning.
          </p>

          <p className="text-sm text-zinc-500 max-w-2xl mx-auto mt-2 italic">
            A Joint Initiative of Indo Science Education Trust (ISET) In Association with - ISRO–SPPU Space Technology Cell (STC), Savitribai Phule Pune University, Pune.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-8"
          >
            <a href="#program" onClick={(e) => { e.preventDefault(); document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-12 text-base group">
                Explore Program
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/80 text-white backdrop-blur-sm">
                Become an Intern
              </Button>
            </a>
            <a href="#gallery" onClick={(e) => { e.preventDefault(); document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <Button size="lg" variant="ghost" className="rounded-full px-8 h-12 text-base hover:bg-white/5 text-zinc-300 hover:text-white">
                View Gallery
              </Button>
            </a>
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
        <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 opacity-20" />
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
