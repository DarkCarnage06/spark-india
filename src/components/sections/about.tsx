"use client";

import { motion } from "framer-motion";
import { Users, GraduationCap, School, BrainCircuit } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

function AnimatedCounter({ end, label, icon: Icon, suffix = "" }: any) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2000;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(easeOutQuart * end));
      
      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end]);

  return (
    <Card className="bg-background/40 backdrop-blur-sm border-white/10 hover:border-primary/50 transition-colors">
      <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-2">
        <Icon className="w-8 h-8 text-primary mb-2" />
        <div className="text-3xl md:text-4xl font-bold text-white">
          {count}{suffix}
        </div>
        <div className="text-sm text-white/60 font-medium uppercase tracking-wider">
          {label}
        </div>
      </CardContent>
    </Card>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-sm text-primary font-bold tracking-widest uppercase mb-2">About The Program</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Bridging the Gap to the Stars
              </h3>
              <p className="text-lg text-white/70 font-light leading-relaxed">
                The <strong className="text-white">SPARK INDIA PROGRAM</strong> is a visionary initiative aimed at empowering the next generation of scientists and innovators. Through hands-on space education, rocketry, and satellite technology, we bring cutting-edge STEM concepts directly to students across the nation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="text-xl font-semibold text-white">Our Mission</h4>
                <p className="text-white/60 text-sm">To democratize space education and make advanced STEM concepts accessible to every student in India.</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <span className="text-2xl">👁️</span>
                </div>
                <h4 className="text-xl font-semibold text-white">Our Vision</h4>
                <p className="text-white/60 text-sm">To build a nationwide ecosystem of young innovators capable of contributing to India's future space missions.</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-white mb-2">A Joint Collaboration</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Spearheaded by <strong className="text-[var(--color-isro)]">Indo Science Education Trust (ISET)</strong> in esteemed collaboration with the <strong className="text-[var(--color-isro)]">ISRO–SPPU Space Technology Cell (STC)</strong>.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Stats & Visuals */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 relative"
          >
            {/* Glowing background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[100px] -z-10 rounded-full" />
            
            <AnimatedCounter end={20} suffix=" Lakh+" label="Students Impacted" icon={Users} />
            <div className="mt-8">
              <AnimatedCounter end={165} suffix="+" label="Schools Reached" icon={School} />
            </div>
            <AnimatedCounter end={230} suffix="+" label="College Interns" icon={GraduationCap} />
            <div className="mt-8">
              <AnimatedCounter end={20} suffix="+" label="Expert Mentors" icon={BrainCircuit} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
