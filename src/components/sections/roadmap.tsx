"use client";

import { motion } from "framer-motion";

const MILESTONES = [
  { year: "2014", title: "Inception of ISET", desc: "Focus on grassroots science popularization." },
  { year: "2016", title: "Aryabhata Educational Satellite Programme", desc: "Launched to inspire students through hands-on satellite building." },
  { year: "2018", title: "MoU with ISRO-SPPU STC", desc: "Formal MoU signed for Space Technology Cell collaboration." },
  { year: "2019", title: "National Water Rocket Championship", desc: "Introduced the first national-level championship." },
  { year: "2020", title: "Virtual STEM Education", desc: "Transitioned during pandemic, reaching 5 Lakh+ students." },
  { year: "2022", title: "100-School STEM Innovation Lab", desc: "Launched initiative to establish high-tech innovation labs." },
  { year: "2023", title: "WeMoSat CanSat Training", desc: "Executed the CanSat training programme for high school students." },
  { year: "2024", title: "20 Lakh+ Students Impacted", desc: "Crosses the major milestone of empowering students across India." },
];

export function RoadmapSection() {
  return (
    <section className="py-24 relative z-10 overflow-hidden ">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm text-blue-400 font-bold tracking-widest uppercase mb-2">Our Journey</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Timeline of Key Milestones
            </h3>
            <p className="text-lg text-zinc-400 font-light max-w-3xl mx-auto">
              A decade of empowering young minds, popularizing science, and creating future-ready innovators.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Vertical Line for Mobile */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-zinc-800" />

          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-4 md:gap-y-16 md:gap-x-8">
            {MILESTONES.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10 flex md:flex-col items-start md:items-center gap-6 md:gap-4 group"
              >
                {/* Dot */}
                <div className="w-16 h-16 rounded-full bg-zinc-900 border-2 border-zinc-700 flex flex-col items-center justify-center shrink-0 group-hover:border-blue-500 group-hover:bg-blue-900/20 transition-all shadow-xl relative z-10">
                  <span className="text-blue-400 font-bold text-sm">{milestone.year}</span>
                </div>
                
                {/* Connecting Line (Desktop) */}
                {index < MILESTONES.length - 1 && (index + 1) % 4 !== 0 && (
                   <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-zinc-800" />
                )}
                {/* Wrap Around Line (Desktop) */}
                {index < MILESTONES.length - 1 && (index + 1) % 4 === 0 && (
                   <div className="hidden md:block absolute top-8 left-[50%] w-0.5 h-[calc(100%+4rem)] bg-zinc-800" />
                )}

                {/* Content */}
                <div className="text-left md:text-center pt-2 md:pt-0">
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{milestone.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
