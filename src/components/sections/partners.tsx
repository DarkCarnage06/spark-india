"use client";

import { motion } from "framer-motion";
import { Rocket, Satellite, Building2, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PARTNERS = [
  { name: "ISRO", subtitle: "Indian Space Research Organisation", icon: Rocket, glow: "from-orange-500/20" },
  { name: "SPPU STC", subtitle: "Space Technology Cell", icon: Satellite, glow: "from-blue-500/20" },
  { name: "ISET", subtitle: "Indo Science Education Trust", icon: Globe, glow: "from-green-500/20" },
  { name: "CSR Partners", subtitle: "Corporate Contributors", icon: Building2, glow: "from-purple-500/20" },
];

export function PartnersSection() {
  return (
    <section id="partners" className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm text-primary font-bold tracking-widest uppercase mb-2">Collaborations</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Esteemed Partners
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background/50 backdrop-blur-md border-white/10 hover:border-white/30 transition-all duration-500 group overflow-hidden">
                <CardContent className="p-8 flex flex-col items-center justify-center text-center h-full relative z-10">
                  <div className={`absolute inset-0 bg-gradient-to-t ${partner.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 relative z-10">
                    <partner.icon className="w-8 h-8 text-white/80 group-hover:text-white" />
                  </div>
                  
                  <h4 className="text-2xl font-black text-white mb-1 relative z-10 tracking-wider">
                    {partner.name}
                  </h4>
                  <p className="text-xs text-white/50 uppercase tracking-widest relative z-10">
                    {partner.subtitle}
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
