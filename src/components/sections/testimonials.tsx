"use client";

import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const TESTIMONIALS = [
  {
    role: "ISRO Scientist",
    quote: "SPARK INDIA is doing phenomenal work in bringing actual space technology to the grassroots level. The enthusiasm in these young minds is the future of India's space program.",
    author: "ISRO Scientist",
  },
  {
    role: "School Principal",
    quote: "The practical approach to teaching astronomy and rocketry has transformed our students. They no longer just memorize formulas; they apply them to build real models.",
    author: "School Principal",
  },
  {
    role: "Grade 8 Student",
    quote: "Building my first CanSat and launching a water rocket was the best experience of my life. I now know I want to become an aerospace engineer.",
    author: "Grade 8 Student",
  },
  {
    role: "Parent",
    quote: "The hands-on activities are incredibly engaging. My child has developed a keen interest in science and technology thanks to the SPARK INDIA programme.",
    author: "Parent",
  },
  {
    role: "Education Director",
    quote: "The STEM Innovation Lab has revolutionized our teaching methods. Our teachers are more empowered, and our students are more curious.",
    author: "Education Director",
  },
  {
    role: "College Intern",
    quote: "Mentoring these school kids not only helped them but also strengthened my own foundational knowledge. The ecosystem built by ISET is truly remarkable.",
    author: "College Intern",
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-24 relative z-10 overflow-hidden ">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/10 via-zinc-900 to-transparent" />
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm text-blue-400 font-bold tracking-widest uppercase mb-2">Voices</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Impact Stories
            </h3>
          </motion.div>
        </div>

        <div className="relative">
          {/* Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-20">
            <button onClick={prev} className="p-2 rounded-full bg-zinc-800 hover:bg-blue-600 text-white transition-colors border border-zinc-700">
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-20">
            <button onClick={next} className="p-2 rounded-full bg-zinc-800 hover:bg-blue-600 text-white transition-colors border border-zinc-700">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="overflow-hidden px-4 md:px-0 py-4">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-zinc-800/50 backdrop-blur-md border-zinc-700 shadow-2xl relative">
                <CardContent className="p-8 md:p-12 text-center">
                  <Quote className="w-12 h-12 text-blue-500/40 mx-auto mb-6" />
                  <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed mb-8 italic">
                    "{TESTIMONIALS[currentIndex].quote}"
                  </p>
                  <div>
                    <h4 className="text-lg font-bold text-white">{TESTIMONIALS[currentIndex].author}</h4>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8 relative z-20">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? "w-8 bg-blue-500" : "bg-zinc-700"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
