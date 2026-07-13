"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Globe2, Building, GraduationCap, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const MODELS = [
  {
    title: "Corporate Social Responsibility (CSR) Partnerships",
    desc: "Collaborating with corporate foundations to adopt schools, establish STEM labs, and sponsor space education programmes for underprivileged students.",
    icon: Building,
    color: "text-blue-400",
    bg: "bg-blue-500/10"
  },
  {
    title: "Government Initiatives & Policy Implementation",
    desc: "Working with state education departments and policy-making bodies to integrate experiential STEM learning into the mainstream curriculum.",
    icon: Globe2,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10"
  },
  {
    title: "School Association Model",
    desc: "Partnering directly with progressive private and public schools to implement the SPARK INDIA curriculum as an integrated academic offering.",
    icon: GraduationCap,
    color: "text-purple-400",
    bg: "bg-purple-500/10"
  }
];

const SDGS = [
  { goal: "SDG 4: Quality Education", desc: "Providing equitable and inclusive STEM education." },
  { goal: "SDG 5: Gender Equality", desc: "Empowering girls in science and technology." },
  { goal: "SDG 9: Industry, Innovation, and Infrastructure", desc: "Building innovation ecosystems in schools." },
  { goal: "SDG 10: Reduced Inequalities", desc: "Bridging the educational divide between urban and rural students." },
  { goal: "SDG 17: Partnerships for the Goals", desc: "Collaborating with governments, institutions, and corporate entities." }
];

export function CsrImpactSection() {
  return (
    <section id="impact" className="py-24 relative z-10 ">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm text-blue-400 font-bold tracking-widest uppercase mb-2">Scaling Impact</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Scaling Impact Through Partnerships
            </h3>
            <p className="text-lg text-zinc-400 font-light max-w-3xl mx-auto">
              To ensure that every student across India has access to quality Space Science and STEM education, ISET works through three primary implementation models:
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {MODELS.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-zinc-900/50 backdrop-blur-md border-zinc-800 hover:border-blue-500/50 transition-colors">
                <CardContent className="p-8">
                  <div className={`w-14 h-14 rounded-2xl ${model.bg} flex items-center justify-center mb-6`}>
                    <model.icon className={`w-7 h-7 ${model.color}`} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">{model.title}</h4>
                  <p className="text-zinc-400 leading-relaxed text-sm">{model.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
           <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
           >
              <h3 className="text-3xl font-bold text-white mb-6">Aligning with Global Sustainable Development Goals (SDGs)</h3>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                SPARK INDIA actively contributes to the United Nations SDGs, specifically targeting areas of education, equality, innovation, and global partnerships.
              </p>
              <ul className="space-y-4">
                 {SDGS.map((sdg, i) => (
                    <li key={i} className="flex gap-3 text-zinc-300">
                       <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                       <div>
                          <span className="font-bold text-white block mb-1">{sdg.goal}</span>
                          <span className="text-sm text-zinc-400">{sdg.desc}</span>
                       </div>
                    </li>
                 ))}
              </ul>
           </motion.div>
           
           <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-indigo-900/20 border border-indigo-500/20 rounded-3xl p-8 lg:p-12"
           >
              <div className="flex items-center gap-4 mb-6">
                 <Target className="w-10 h-10 text-indigo-400" />
                 <h3 className="text-3xl font-bold text-white">Vision 2035</h3>
              </div>
              <p className="text-indigo-200 font-medium mb-6">A Scientifically Empowered Nation</p>
              <p className="text-zinc-300 text-sm leading-relaxed mb-8">
                 As India advances its space exploration capabilities and emerges as a global technology leader, the demand for highly skilled scientists, engineers, and innovators will grow exponentially. ISET's Vision 2035 aims to:
              </p>
              <ul className="space-y-4 text-sm text-zinc-300">
                 <li className="flex gap-3 items-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-400 shrink-0" />
                    Establish Space Science & STEM Innovation Labs in <strong>1,00,000 schools</strong> across India.
                 </li>
                 <li className="flex gap-3 items-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-400 shrink-0" />
                    Engage <strong>5 Crore (50 Million)</strong> students in experiential science learning.
                 </li>
                 <li className="flex gap-3 items-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-400 shrink-0" />
                    Train <strong>10 Lakh (1 Million)</strong> teachers in advanced STEM pedagogies.
                 </li>
                 <li className="flex gap-3 items-start">
                    <div className="w-2 h-2 rounded-full bg-indigo-400 shrink-0 mt-1.5" />
                    Create a robust talent pipeline that actively contributes to India's space missions, technology sectors, and research institutions.
                 </li>
              </ul>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
