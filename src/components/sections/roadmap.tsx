"use client";

import { motion } from "framer-motion";

const MILESTONES = [
  { phase: "Phase 1", title: "Launch", desc: "Program inauguration and school onboarding." },
  { phase: "Phase 2", title: "Training", desc: "Educator training and mentor allocation." },
  { phase: "Phase 3", title: "Satellite Building", desc: "CanSat assembly and payload programming." },
  { phase: "Phase 4", title: "Rocketry", desc: "Model rocket design and aerodynamics testing." },
  { phase: "Phase 5", title: "Innovation Projects", desc: "Students work on independent STEM projects." },
  { phase: "Phase 6", title: "Final Showcase", desc: "National exhibition and joint certification." },
];

export function RoadmapSection() {
  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm text-primary font-bold tracking-widest uppercase mb-2">The Journey</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              10-Month Roadmap
            </h3>
          </motion.div>
        </div>

        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center mt-12 gap-8 md:gap-0">
          {/* Connecting Line */}
          <div className="absolute left-[27px] md:left-0 md:top-1/2 md:-translate-y-1/2 w-1 md:w-full h-full md:h-1 bg-white/10 rounded-full" />
          <motion.div 
            initial={{ height: 0, width: 0 }}
            whileInView={{ height: "100%", width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[27px] md:left-0 md:top-1/2 md:-translate-y-1/2 w-1 md:w-full h-full md:h-1 bg-gradient-to-b md:bg-gradient-to-r from-primary via-accent to-primary rounded-full hidden md:block origin-left"
          />

          {MILESTONES.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative z-10 flex md:flex-col items-center gap-6 md:gap-4 group w-full md:w-1/6"
            >
              {/* Dot */}
              <div className="w-14 h-14 rounded-full bg-background border-2 border-white/20 flex items-center justify-center shrink-0 group-hover:border-primary group-hover:bg-primary/20 transition-all shadow-xl">
                <div className="w-4 h-4 rounded-full bg-white/50 group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />
              </div>
              
              {/* Content */}
              <div className="text-left md:text-center w-full">
                <div className="text-primary font-mono text-xs mb-1 uppercase">{milestone.phase}</div>
                <h4 className="text-lg font-bold text-white mb-1 group-hover:text-accent transition-colors">{milestone.title}</h4>
                <p className="text-white/60 text-xs leading-relaxed hidden md:block">{milestone.desc}</p>
                <p className="text-white/60 text-sm leading-relaxed md:hidden">{milestone.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
