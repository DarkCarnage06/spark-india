"use client";

import { motion } from "framer-motion";
import { Monitor, Cpu, Scissors, Component, Lightbulb, Satellite, Telescope, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const LABS = [
  { name: "Satellite Workstations", icon: Satellite },
  { name: "Rocket Lab", icon: Rocket },
  { name: "Optics Lab", icon: Telescope },
  { name: "Robotics Centers", icon: Component },
  { name: "IoT & Electronics", icon: Cpu },
  { name: "Coding & AI", icon: Monitor },
  { name: "Maker Spaces", icon: Scissors },
  { name: "Astronomy Clubs", icon: Lightbulb },
];

export function InnovationLabs() {
  return (
    <section id="labs" className="py-24 relative z-10 ">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h2 className="text-sm text-cyan-500 font-bold tracking-widest uppercase mb-2">Infrastructure</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              STEM Innovation Labs
            </h3>
            <p className="text-xl text-cyan-400 font-medium mb-4">
              Transforming Schools into Innovation Ecosystems
            </p>
            <p className="text-lg text-zinc-300 font-light leading-relaxed mb-6">
              A school should be more than a place where students learn concepts—it should be a centre of creativity, experimentation, collaboration, and innovation.
            </p>
            <p className="text-lg text-zinc-300 font-light leading-relaxed">
              Through STEM laboratories, maker spaces, robotics centres, astronomy clubs, space innovation labs, and project-based learning environments, schools become ecosystems where students actively create knowledge rather than simply consume it.
            </p>
            <div className="mt-8 p-4 bg-cyan-900/10 border border-cyan-500/20 rounded-xl">
              <p className="text-cyan-100 font-medium text-sm">
                This transformation strengthens student engagement, teacher effectiveness, institutional reputation, and long-term educational outcomes.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 grid grid-cols-2 gap-4"
          >
            {LABS.map((lab, index) => (
              <motion.div
                key={lab.name}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800 hover:border-cyan-500/50 transition-all flex flex-col items-center text-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <lab.icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                </div>
                <span className="text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors">{lab.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
