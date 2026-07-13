"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Medal, Award, CheckCircle } from "lucide-react";

export function AwardsSection() {
  return (
    <section className="py-24  relative overflow-hidden" id="awards">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Recognition</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            The commitment of ISET towards scientific education and innovation has been recognised by prestigious organisations and educational bodies. These recognitions reinforce ISET&apos;s commitment to quality, credibility, and excellence in science education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-purple-500/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">India Book of Records</h3>
            <p className="text-zinc-400">
              Recognition for pioneering student satellite innovation initiatives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-blue-500/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Asia Book of Records</h3>
            <p className="text-zinc-400">
              Recognition for large-scale student participation in satellite education and innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-amber-500/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-6 text-amber-400 group-hover:scale-110 transition-transform">
              <Star className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Sohrab Godrej Science &amp; Technology Award</h3>
            <p className="text-zinc-400">
              Honouring contributions towards science education and technological awareness.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Official ISRO Space Tutor</h3>
            <p className="text-zinc-400">
              Recognised for delivering structured space education programmes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-pink-500/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-6 text-pink-400 group-hover:scale-110 transition-transform">
              <Medal className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Official ISRO Merchandise Partner</h3>
            <p className="text-zinc-400">
              Supporting authentic educational outreach through approved educational resources.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Institutional Recognition</h3>
            <p className="text-zinc-400">
              Recognition by schools, educational institutions, and science organisations for promoting experiential STEM education and innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
