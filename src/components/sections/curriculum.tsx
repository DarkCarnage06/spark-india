"use client";

import { motion } from "framer-motion";

const CURRICULUM = [
  { title: "Physics", description: "Foundational mechanics, thermodynamics, and electromagnetism applied to space." },
  { title: "Astronomy", description: "Navigating the night sky, deep space observation, and planetary science." },
  { title: "Space Exploration", description: "History of spaceflight, upcoming missions, and astronaut training modules." },
  { title: "Rocketry", description: "Aerodynamics, solid/liquid propulsion, and trajectory calculations." },
  { title: "Satellite Technology", description: "Orbital mechanics, CanSat assembly, communication, and payloads." },
  { title: "Future Technologies", description: "AI in space, robotics, 3D printing habitats, and IoT telemetry." },
];

export function CurriculumSection() {
  return (
    <section id="curriculum" className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-sm text-primary font-bold tracking-widest uppercase mb-2">Curriculum</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            A Journey Through Space
          </h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {CURRICULUM.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative flex items-center gap-8 md:gap-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-1/2 group-hover:scale-150 group-hover:bg-primary transition-transform duration-300 z-10 shadow-[0_0_15px_rgba(15,76,255,0.5)]" />

                {/* Content */}
                <div className={`pl-12 md:pl-0 w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-16 text-left md:text-right" : "md:pl-16 text-left"}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-6 rounded-2xl bg-background/50 backdrop-blur-md border border-white/10 hover:border-primary/50 transition-colors"
                  >
                    <div className="text-primary font-mono text-sm mb-2">Module 0{index + 1}</div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
