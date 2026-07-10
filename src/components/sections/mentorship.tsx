"use client";

import { motion } from "framer-motion";
import { User, Users, GraduationCap, Compass, Lightbulb, Satellite } from "lucide-react";

export function MentorshipSection() {
  const nodes = [
    { title: "Scientists", icon: User, color: "text-blue-400", bg: "bg-blue-400/20" },
    { title: "Teachers", icon: Users, color: "text-green-400", bg: "bg-green-400/20" },
    { title: "College Interns", icon: GraduationCap, color: "text-purple-400", bg: "bg-purple-400/20" },
    { title: "Career Guidance", icon: Compass, color: "text-orange-400", bg: "bg-orange-400/20" },
    { title: "Innovation Mentoring", icon: Lightbulb, color: "text-yellow-400", bg: "bg-yellow-400/20" },
  ];

  return (
    <section id="mentorship" className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm text-primary font-bold tracking-widest uppercase mb-2">Guidance</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              A Constellation of Mentors
            </h3>
            <p className="text-lg text-white/70 font-light max-w-2xl mx-auto">
              Our students are never alone in their journey. They are guided by a multi-tiered mentorship program featuring real space scientists, trained educators, and enthusiastic college interns.
            </p>
          </motion.div>
        </div>

        <div className="relative h-[600px] w-full max-w-4xl mx-auto flex items-center justify-center mt-10">
          {/* Center Hub */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute z-20 w-32 h-32 rounded-full bg-primary/20 backdrop-blur-md border-2 border-primary flex items-center justify-center flex-col shadow-[0_0_50px_rgba(15,76,255,0.4)]"
          >
            <Satellite className="w-10 h-10 text-white mb-2" />
            <span className="text-xs font-bold text-white tracking-widest">STUDENT</span>
          </motion.div>

          {/* Orbits */}
          <div className="absolute w-[300px] h-[300px] rounded-full border border-white/10" />
          <div className="absolute w-[500px] h-[500px] rounded-full border border-white/5" />

          {/* Orbiting Nodes */}
          {nodes.map((node, i) => {
            const angle = (i * (360 / nodes.length)) * (Math.PI / 180);
            const radius = i % 2 === 0 ? 150 : 250;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={node.title}
                initial={{ x: 0, y: 0, opacity: 0 }}
                whileInView={{ x, y, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.2, type: "spring" }}
                className="absolute z-10 flex flex-col items-center gap-3"
              >
                {/* Floating animation for each node */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                  className={`w-16 h-16 rounded-full ${node.bg} backdrop-blur-md border border-white/20 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform`}
                >
                  <node.icon className={`w-8 h-8 ${node.color}`} />
                </motion.div>
                <div className="text-sm font-semibold text-white/90 bg-background/50 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10 whitespace-nowrap">
                  {node.title}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
