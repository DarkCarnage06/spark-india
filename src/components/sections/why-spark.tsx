"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const REASONS = [
  { title: "ISRO Collaboration", desc: "Backed by the expertise of ISRO–SPPU Space Technology Cell." },
  { title: "National STEM Mission", desc: "Aligned with India's vision for scientific advancement." },
  { title: "Innovation", desc: "Encouraging original thinking and problem-solving skills." },
  { title: "Hands-on Learning", desc: "Moving beyond textbooks with practical engineering tasks." },
  { title: "CSR Impact", desc: "Scalable model for corporate social responsibility programs." },
  { title: "Future Ready Education", desc: "Preparing students for careers in emerging tech sectors." },
];

export function WhySparkSection() {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm text-primary font-bold tracking-widest uppercase mb-2">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The SPARK Advantage
            </h3>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/5 backdrop-blur-md border-white/10 hover:border-primary/50 transition-colors group">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{reason.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{reason.desc}</p>
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
