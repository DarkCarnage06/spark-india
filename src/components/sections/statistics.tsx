"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Counter({ end, suffix = "", text }: { end: number, suffix?: string, text: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2000;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
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
    <div className="flex flex-col items-center justify-center p-6 text-center border-r last:border-r-0 border-white/10">
      <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base font-medium text-white/70 uppercase tracking-widest">
        {text}
      </div>
    </div>
  );
}

export function StatisticsSection() {
  return (
    <section className="py-16 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-background/60 backdrop-blur-lg border border-white/10 overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <Counter end={122} text="Schools" />
            <Counter end={488} text="Students" />
            <Counter end={10000} suffix="+" text="Beneficiaries" />
            <Counter end={10} text="Months" />
            <div className="flex flex-col items-center justify-center p-6 text-center">
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[var(--color-isro)] to-orange-400 mb-2">
                1
              </div>
              <div className="text-sm md:text-base font-medium text-white/70 uppercase tracking-widest">
                Joint Certification
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
