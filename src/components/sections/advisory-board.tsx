"use client";

import { motion } from "framer-motion";
import { Users, GraduationCap, Award, Rocket, CheckCircle } from "lucide-react";

const advisors = [
  {
    name: "Mr. Pramod Kale",
    title: "Former Director, Space Applications Centre (SAC) & Vikram Sarabhai Space Centre (VSSC), ISRO"
  },
  {
    name: "Mr. A. K. Sinha",
    title: "Former Scientist, Indian Space Research Organisation (ISRO)"
  },
  {
    name: "Mr. J. P. Joshi",
    title: "Former Division Head & Associate Project Director, INSAT & GSAT Programmes, ISRO"
  },
  {
    name: "Mr. V. B. Lal",
    title: "Former Group Director, MSSG, Vikram Sarabhai Space Centre (VSSC), ISRO"
  },
  {
    name: "Mr. Sudheer Kumar",
    title: "Former Director, Capacity Building Programme Office (CBPO), ISRO Headquarters"
  },
  {
    name: "Dr. Arvind Shaligram",
    title: "Director, ISRO–SPPU Space Technology Cell (STC), Savitribai Phule Pune University, Pune"
  },
  {
    name: "Dr. Chidanandappa J.",
    title: "Former Scientist, National Remote Sensing Centre (NRSC), ISRO"
  },
  {
    name: "Dr. Subramaniam Ananthakrishnan",
    title: "Adjunct Professor & INSA Senior Scientist; Space Scientist and Educationist"
  },
  {
    name: "Dr. Manisha Khaladkar",
    title: "In-charge, Swayam Satellite Project, College of Engineering Pune (COEP)"
  },
  {
    name: "Mr. Deepak Pandya",
    title: "Former Engineer, Space Applications Centre (SAC), ISRO"
  },
  {
    name: "Mr. Shrikant Walwadkar",
    title: "Group Captain (Retd.), Indian Air Force; Aerospace & Defence Expert"
  },
  {
    name: "Mrs. Nivedita Madakikar",
    title: "Educationist and Specialist in School Education & Pedagogy"
  }
];

const roles = [
  "Providing strategic direction aligned with India's space missions.",
  "Ensuring scientific accuracy and academic excellence.",
  "Mentoring students, teachers, and research initiatives.",
  "Supporting curriculum development and programme innovation.",
  "Encouraging national and international collaborations.",
  "Guiding future expansion and institutional growth."
];

export function AdvisoryBoardSection() {
  return (
    <section className="py-24  relative overflow-hidden" id="advisory-board">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-900/20 via-zinc-900 to-zinc-900" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Visionary Leadership & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Advisory Board</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-4xl mx-auto mb-6">
            The strength of ISET lies in the guidance of an eminent Advisory Board comprising distinguished scientists, academicians, aerospace experts, defence professionals, and education leaders.
          </p>
          <p className="text-lg text-zinc-400 max-w-4xl mx-auto">
            Their experience and mentorship ensure that ISET programmes remain scientifically accurate, educationally relevant, and aligned with India&apos;s national priorities in science, technology, and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {advisors.map((advisor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6 hover:border-indigo-500/50 transition-all hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 mt-1">
                  <Users className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{advisor.name}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{advisor.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/20 rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Role of the Advisory Board</h3>
              <p className="text-zinc-300 mb-8">
                The Advisory Board provides strategic guidance to strengthen the quality and impact of ISET initiatives by:
              </p>
              <ul className="space-y-4">
                {roles.map((role, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-indigo-400 shrink-0" />
                    <span className="text-zinc-300">{role}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50">
                <Rocket className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Strategic Advantage</h4>
                <p className="text-zinc-400">
                  With direct mentorship from former ISRO leaders, scientists, and national experts, ISET ensures that every student engagement reflects real-world space science, innovation, and future career pathways.
                </p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50">
                <GraduationCap className="w-8 h-8 text-purple-400 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">The ISET Edge</h4>
                <ul className="text-zinc-400 space-y-2">
                  <li>• Direct ISRO Ecosystem Access through advisors</li>
                  <li>• Massive Impact Scale – 20 lakh+ students engaged nationwide</li>
                  <li>• Hands-on Learning Model – Innovation-driven</li>
                  <li>• End-to-End Pipeline – From school labs to ISRO internships</li>
                  <li>• Rural + Urban Inclusion</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
