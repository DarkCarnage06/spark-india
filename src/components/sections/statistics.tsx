"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

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
    <div className="flex flex-col items-center justify-center p-6 text-center border-b md:border-b-0 md:border-r last:border-r-0 border-white/10">
      <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-indigo-500 mb-2">
        {count === 20 ? "20L" : count.toLocaleString()}{suffix}
      </div>
      <div className="text-xs md:text-sm font-medium text-white/70 uppercase tracking-widest">
        {text}
      </div>
    </div>
  );
}

const EXCELLENCE_AREAS = [
  "Astronomy & Space Education",
  "Student Satellite Development (CanSats, CubeSats, WeMoSat)",
  "Rocketry & Aeromodelling",
  "Robotics, AI, & Coding",
  "STEM Innovation Labs for Schools",
  "Teacher Capacity Building"
];

export function StatisticsSection() {
  return (
    <section className="py-24 relative z-10 ">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm text-blue-400 font-bold tracking-widest uppercase mb-2">Our Impact</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Impact & National Reach
            </h3>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-zinc-900/60 backdrop-blur-lg border border-zinc-800 overflow-hidden shadow-2xl mb-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 lg:divide-x divide-zinc-800">
            <Counter end={20} suffix="+" text="Students Impacted" />
            <Counter end={21} suffix="+" text="States & UTs Reached" />
            <Counter end={3000} suffix="+" text="Schools & Institutions" />
            <Counter end={50000} suffix="+" text="Teachers Trained" />
            <Counter end={150} suffix="+" text="Rural Centres Supported" />
            <Counter end={500} suffix="+" text="Events Conducted" />
          </div>
        </motion.div>

        <div className="text-center mb-12">
           <h3 className="text-3xl font-bold text-white mb-8">Areas of Excellence</h3>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {EXCELLENCE_AREAS.map((area, idx) => (
                <motion.div
                   key={idx}
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: idx * 0.1 }}
                   className="bg-indigo-900/10 border border-indigo-500/20 p-6 rounded-2xl flex items-center justify-center gap-3"
                >
                   <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                   <span className="text-indigo-100 font-medium">{area}</span>
                </motion.div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
}
