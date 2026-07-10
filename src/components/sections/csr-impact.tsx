"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const IMPACT_DATA = [
  { value: "500", label: "Target Schools" },
  { value: "2000+", label: "Direct Students" },
  { value: "230+", label: "College Interns" },
  { value: "10000+", label: "Indirect Beneficiaries" },
  { value: "1000+", label: "STEM Activities" },
  { value: "50+", label: "Scientist Sessions" },
];

export function CsrImpactSection() {
  return (
    <section id="impact" className="py-24 relative z-10 bg-background/50 border-t border-b border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm text-primary font-bold tracking-widest uppercase mb-2">Corporate Social Responsibility</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Creating National Impact
            </h3>
            <p className="text-lg text-white/70 font-light max-w-3xl mx-auto">
              Through strategic CSR partnerships, we are scaling our reach to empower under-resourced schools and create a widespread culture of scientific inquiry.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {IMPACT_DATA.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-white/5 to-white/0 border-white/10 hover:border-primary/50 transition-colors">
                <CardContent className="p-8 text-center flex flex-col items-center justify-center gap-2">
                  <div className="text-4xl md:text-5xl font-black text-white">
                    {item.value}
                  </div>
                  <div className="text-sm font-medium text-white/60 uppercase tracking-widest">
                    {item.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 p-4 rounded-2xl bg-primary/10 border border-primary/20 text-white/80">
            <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <span className="font-medium">Open for CSR Collaborations for 2026-2027</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
