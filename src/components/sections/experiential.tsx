"use client";

import { motion } from "framer-motion";
import { Wrench, Rocket, Eye, Cpu, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ACTIVITIES = [
  {
    title: "Satellite Building",
    description: "Hands-on experience in building micro-satellites and CanSats with real payload capabilities.",
    icon: Wrench,
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    title: "Rocketry",
    description: "Model rocket fabrication and launch mechanics.",
    icon: Rocket,
    colSpan: "col-span-1 lg:col-span-1",
  },
  {
    title: "Telescope Making",
    description: "Learn optics by building your own Galilean and Newtonian telescopes.",
    icon: Eye,
    colSpan: "col-span-1 lg:col-span-1",
  },
  {
    title: "Payload Integration",
    description: "Integrate sensors, microcontrollers, and communication devices for atmospheric data collection.",
    icon: Cpu,
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    title: "Aryabhatta Tribute",
    description: "Special projects commemorating India's first satellite.",
    icon: Award,
    colSpan: "col-span-1 md:col-span-2 lg:col-span-3",
  },
];

export function ExperientialLearning() {
  return (
    <section id="experiential" className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm text-primary font-bold tracking-widest uppercase mb-2">Hands-on Experience</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experiential Learning
            </h3>
            <p className="text-lg text-white/70 font-light max-w-2xl mx-auto">
              We believe in learning by doing. Our practical modules ensure students don't just read about space, but actively build the technology that goes there.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACTIVITIES.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`h-full ${item.colSpan}`}
            >
              <Card className="h-full bg-background/40 backdrop-blur-md border-white/10 hover:border-primary/40 hover:bg-white/5 transition-all duration-300 group overflow-hidden">
                <CardContent className="p-8 h-full flex flex-col justify-between relative z-10">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
                    <item.icon className="w-32 h-32 text-primary -mt-8 -mr-8" />
                  </div>
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-3">{item.title}</h4>
                    <p className="text-white/70 leading-relaxed">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
