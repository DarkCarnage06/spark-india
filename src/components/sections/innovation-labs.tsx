"use client";

import { motion } from "framer-motion";
import { Monitor, Cpu, Scissors, Component, Lightbulb, Satellite, Telescope, Rocket } from "lucide-react";

const LABS = [
  { name: "Satellite Workstations", icon: Satellite },
  { name: "Rocket Lab", icon: Rocket },
  { name: "Optics Lab", icon: Telescope },
  { name: "Robotics", icon: Component },
  { name: "IoT", icon: Cpu },
  { name: "Coding", icon: Monitor },
  { name: "3D Printing", icon: Scissors },
  { name: "Interactive Boards", icon: Lightbulb },
];

export function InnovationLabs() {
  return (
    <section id="labs" className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h2 className="text-sm text-primary font-bold tracking-widest uppercase mb-2">Infrastructure</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              State-of-the-Art <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Innovation Labs</span>
            </h3>
            <p className="text-lg text-white/70 font-light">
              We establish high-tech innovation labs in schools, equipped with everything needed to transform a classroom into a mini space research center.
            </p>
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
                className="p-6 rounded-2xl bg-background/50 backdrop-blur-md border border-white/10 hover:border-primary/50 transition-all flex flex-col items-center text-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <lab.icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">{lab.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
