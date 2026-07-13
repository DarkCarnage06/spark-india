"use client";

import { motion } from "framer-motion";
import { Rocket, Satellite, Building2, Globe, GraduationCap, Map, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ASSOCIATIONS = [
  { 
    name: "ISRO–SPPU Space Technology Cell (STC), Savitribai Phule Pune University, Pune", 
    desc: "Technical collaboration for curriculum development, teacher training, and science popularization.",
    icon: Satellite, 
    glow: "from-blue-500/20" 
  },
  { 
    name: "Space Applications Centre (SAC), ISRO, Ahmedabad", 
    desc: "Guidance on educational outreach and technology demonstration.",
    icon: Rocket, 
    glow: "from-orange-500/20" 
  },
  { 
    name: "National Remote Sensing Centre (NRSC), ISRO, Hyderabad", 
    desc: "Resource support for Earth Observation and GIS-based learning.",
    icon: Map, 
    glow: "from-green-500/20" 
  },
  { 
    name: "College of Engineering Pune (COEP)", 
    desc: "Mentorship support through the Swayam Satellite Project team.",
    icon: GraduationCap, 
    glow: "from-purple-500/20" 
  },
  { 
    name: "Various CSR Foundations and Corporate Partners", 
    desc: "Funding and supporting STEM education in rural and underprivileged schools.",
    icon: Building2, 
    glow: "from-rose-500/20" 
  },
];

export function PartnersSection() {
  return (
    <section id="partners" className="py-24 relative z-10 ">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm text-blue-400 font-bold tracking-widest uppercase mb-2">Collaborations</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Strategic Collaborations and Institutional Partnerships
            </h3>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
              To deliver world-class Space Science and STEM education, ISET has established strong linkages with national institutions, educational bodies, and industry leaders.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ASSOCIATIONS.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={index === 3 ? "lg:col-start-1 lg:col-span-1 lg:ml-auto" : index === 4 ? "lg:col-start-2 lg:col-span-2 lg:mr-auto" : ""}
            >
              <Card className={`h-full bg-zinc-900/50 backdrop-blur-md border-zinc-800 hover:border-zinc-600 transition-all duration-500 group overflow-hidden ${index >= 3 ? "lg:w-[400px]" : ""}`}>
                <CardContent className="p-8 flex flex-col items-center text-center h-full relative z-10">
                  <div className={`absolute inset-0 bg-gradient-to-t ${partner.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 relative z-10">
                    <partner.icon className="w-8 h-8 text-white/80 group-hover:text-white" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-4 relative z-10">
                    {partner.name}
                  </h4>
                  <p className="text-sm text-zinc-400 relative z-10 leading-relaxed">
                    {partner.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
