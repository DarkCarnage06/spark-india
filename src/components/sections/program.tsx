"use client";

import { motion } from "framer-motion";
import { Telescope, Rocket, Satellite, Cpu, Lightbulb, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useRef, useState } from "react";

const PROGRAMS = [
  {
    title: "Space Science",
    description: "Explore the fundamental principles of the universe, celestial mechanics, and deep space exploration.",
    icon: Sparkles,
    color: "from-blue-500/20 to-purple-500/20",
    border: "group-hover:border-blue-500/50",
  },
  {
    title: "Astronomy",
    description: "Learn to observe the night sky, understand star life cycles, and operate advanced telescopes.",
    icon: Telescope,
    color: "from-indigo-500/20 to-cyan-500/20",
    border: "group-hover:border-indigo-500/50",
  },
  {
    title: "Rocketry",
    description: "Design, build, and launch model rockets while learning propulsion and aerodynamics.",
    icon: Rocket,
    color: "from-orange-500/20 to-red-500/20",
    border: "group-hover:border-orange-500/50",
  },
  {
    title: "Satellite Technology",
    description: "Hands-on experience in building CanSats and understanding orbital mechanics and payloads.",
    icon: Satellite,
    color: "from-green-500/20 to-emerald-500/20",
    border: "group-hover:border-green-500/50",
  },
  {
    title: "STEM Innovation",
    description: "Apply scientific methodology to solve real-world problems using advanced technology.",
    icon: Lightbulb,
    color: "from-yellow-500/20 to-orange-500/20",
    border: "group-hover:border-yellow-500/50",
  },
  {
    title: "IoT & Robotics",
    description: "Integrate hardware and software to build automated systems for space applications.",
    icon: Cpu,
    color: "from-cyan-500/20 to-blue-500/20",
    border: "group-hover:border-cyan-500/50",
  },
];

function TiltCard({ program, index }: { program: typeof PROGRAMS[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    setRotateX(yPct * 20); // max 10 deg
    setRotateY(xPct * 20);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        animate={{ rotateX: -rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="h-full"
      >
        <Card className={`group relative h-full bg-background/50 backdrop-blur-md border-white/10 ${program.border} transition-colors duration-500 overflow-hidden`}>
          {/* Hover Glow Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          
          <CardContent className="p-8 relative z-10 flex flex-col items-start gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500">
              <program.icon className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">{program.title}</h4>
              <p className="text-white/70 text-sm leading-relaxed">{program.description}</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export function ProgramOverview() {
  return (
    <section id="program" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm text-primary font-bold tracking-widest uppercase mb-2">Core Domains</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Space Curriculum
            </h3>
            <p className="text-lg text-white/70 font-light">
              Our multidisciplinary approach covers everything from the basics of astronomy to advanced satellite engineering, preparing students for the future of space tech.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((program, index) => (
            <TiltCard key={program.title} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
