"use client";

import { motion } from "framer-motion";
import { Telescope, Rocket, Satellite, Cpu, Lightbulb, Sparkles, CheckCircle2, GraduationCap, School, Users, Network, Award, Bus, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const BENEFITS = {
  schools: [
    "Structured Space Science & STEM curriculum.",
    "Activity-based and experiential learning.",
    "Enhanced implementation of NEP 2020.",
    "Increased student participation in science.",
    "STEM clubs and innovation culture.",
    "Teacher training and academic support.",
    "Opportunities for exhibitions and competitions.",
    "Improved institutional reputation through national-level programs."
  ],
  teachers: [
    "Professional development and STEM training.",
    "Ready-to-use lesson plans and activity manuals.",
    "Hands-on teaching methodologies.",
    "Exposure to emerging technologies.",
    "Support for conducting practical science sessions.",
    "Opportunities to mentor innovation projects."
  ],
  students: [
    "Hands-on learning experiences.",
    "Scientific curiosity and confidence.",
    "Exposure to ISRO missions and space technology.",
    "Practical skills in robotics, coding, AI, and engineering.",
    "Innovation and research opportunities.",
    "Participation in national exhibitions and competitions.",
    "Career awareness in STEM and Space Science.",
    "Certificates, project portfolios, and recognition."
  ],
  csr: [
    "Support quality STEM education aligned with NEP 2020.",
    "Promote scientific literacy in urban and rural schools.",
    "Create measurable educational impact.",
    "Strengthen innovation ecosystems in schools.",
    "Contribute to Sustainable Development Goals (SDGs).",
    "Build future-ready talent for India's knowledge economy."
  ]
};

const MULTI_DISCIPLINARY = [
  "Space Science & Technology", "Astronomy", "Rocketry & Aeromodelling", "Satellite Design & Development", 
  "Robotics", "Artificial Intelligence", "Internet of Things (IoT)", "Electronics", "Embedded Systems", 
  "Coding & Programming", "Earth Observation", "Remote Sensing", "Geographic Information Systems (GIS)", 
  "Environmental Science", "Engineering Design", "Design Thinking", "Innovation & Entrepreneurship", "Scientific Research"
];

export function ProgramOverview() {
  const [activeBenefit, setActiveBenefit] = useState<"schools" | "teachers" | "students" | "csr">("schools");

  return (
    <section id="program" className="py-24 relative z-10 ">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-zinc-900 to-transparent" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10 space-y-32">
        
        {/* Intro */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm text-blue-400 font-bold tracking-widest uppercase mb-2">India's Flagship School Space Education Initiative</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              SPARK INDIA PROGRAM
            </h3>
            <p className="text-xl font-semibold text-blue-400 mb-6 tracking-widest uppercase">
              Space • Passion • Awareness • Research • Knowledge
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              A Joint Initiative of Indo Science Education Trust (ISET) In Association with - ISRO–SPPU Space Technology Cell (STC), Savitribai Phule Pune University, Pune.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              SPARK INDIA is a structured educational ecosystem that introduces students from Grades 1 to 10 to the fascinating world of Space Science, STEM, Robotics, Artificial Intelligence, Satellite Technology, Astronomy, Electronics, Engineering, and Emerging Technologies through experiential learning.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed">
              It is more than a learning program. It is a national movement dedicated to transforming classrooms into centres of scientific exploration, creativity, and innovation.
            </p>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="bg-zinc-800/50 p-8 rounded-3xl border border-zinc-700"
          >
             <h4 className="text-2xl font-bold text-white mb-4">Our Vision</h4>
             <p className="text-zinc-300 leading-relaxed">
               To create India's largest ecosystem of scientifically empowered students by making world-class Space Science and STEM education accessible to every learner, regardless of geography, background, or economic status.
             </p>
             <p className="text-zinc-300 leading-relaxed mt-4">
               We envision a future where every school becomes a centre of innovation, every classroom inspires scientific inquiry, and every student has the opportunity to become a scientist, engineer, researcher, entrepreneur, or technology leader.
             </p>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="bg-zinc-800/50 p-8 rounded-3xl border border-zinc-700"
          >
             <h4 className="text-2xl font-bold text-white mb-4">Our Mission</h4>
             <ul className="space-y-3 text-zinc-300 text-sm">
               <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0"/> Inspire curiosity and scientific thinking from an early age.</li>
               <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0"/> Integrate Space Science with STEM education.</li>
               <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0"/> Promote activity-based and inquiry-driven learning.</li>
               <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0"/> Build future-ready skills through practical experiences.</li>
               <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0"/> Encourage creativity, innovation, and design thinking.</li>
               <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0"/> Provide exposure to scientists, researchers, and national scientific institutions.</li>
               <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0"/> Create pathways from school education to higher education, research, and careers in science and technology.</li>
               <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0"/> Support India's vision of becoming a global leader in science, innovation, and the space economy.</li>
             </ul>
          </motion.div>
        </div>

        {/* Multi-Disciplinary Ecosystem */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-center text-white mb-10">A Multi-Disciplinary Learning Ecosystem</h3>
          <p className="text-center text-zinc-400 mb-8 max-w-2xl mx-auto">SPARK INDIA integrates multiple domains into one comprehensive educational platform. Students gain exposure to:</p>
          <div className="flex flex-wrap justify-center gap-3">
             {MULTI_DISCIPLINARY.map((domain, i) => (
               <span key={i} className="bg-zinc-800 border border-zinc-700 text-zinc-300 px-4 py-2 rounded-full text-sm">{domain}</span>
             ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-center text-white mb-10">Benefits of SPARK INDIA</h3>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button onClick={() => setActiveBenefit("schools")} className={`px-6 py-2 rounded-full font-medium transition-all ${activeBenefit === "schools" ? "bg-blue-500 text-white" : "bg-zinc-800 text-zinc-400"}`}>Schools</button>
            <button onClick={() => setActiveBenefit("teachers")} className={`px-6 py-2 rounded-full font-medium transition-all ${activeBenefit === "teachers" ? "bg-purple-500 text-white" : "bg-zinc-800 text-zinc-400"}`}>Teachers</button>
            <button onClick={() => setActiveBenefit("students")} className={`px-6 py-2 rounded-full font-medium transition-all ${activeBenefit === "students" ? "bg-emerald-500 text-white" : "bg-zinc-800 text-zinc-400"}`}>Students</button>
            <button onClick={() => setActiveBenefit("csr")} className={`px-6 py-2 rounded-full font-medium transition-all ${activeBenefit === "csr" ? "bg-orange-500 text-white" : "bg-zinc-800 text-zinc-400"}`}>CSR & Partners</button>
          </div>

          <div className="bg-zinc-800/30 border border-zinc-700/50 p-8 rounded-3xl max-w-4xl mx-auto">
            <ul className="grid sm:grid-cols-2 gap-4">
              {BENEFITS[activeBenefit].map((benefit, idx) => (
                <li key={idx} className="flex gap-3 text-zinc-300">
                  <CheckCircle2 className={`w-5 h-5 shrink-0 ${
                    activeBenefit === "schools" ? "text-blue-400" :
                    activeBenefit === "teachers" ? "text-purple-400" :
                    activeBenefit === "students" ? "text-emerald-400" : "text-orange-400"
                  }`} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Assessment, National Events, Teacher Training, ViGyan Yatra, College Internships */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Assessment & Events */}
          <div className="space-y-8">
             <Card className="bg-zinc-900/80 border-zinc-800 hover:border-zinc-700">
               <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Award className="w-8 h-8 text-blue-400"/>
                    <h4 className="text-2xl font-bold text-white">Assessment & Certification</h4>
                  </div>
                  <p className="text-zinc-400 mb-4 text-sm">Student progress is assessed through Activity participation, Practical projects, Innovation assignments, Model presentations, Team-based challenges, Quizzes and evaluations.</p>
                  <p className="text-zinc-400 text-sm">Successful participants receive <strong>Certificates of Participation/Completion</strong>, and outstanding students are recognized through awards, exhibitions, advanced training opportunities, and selected internship pathways.</p>
               </CardContent>
             </Card>

             <Card className="bg-zinc-900/80 border-zinc-800 hover:border-zinc-700">
               <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Network className="w-8 h-8 text-purple-400"/>
                    <h4 className="text-2xl font-bold text-white">National Events & Exhibitions</h4>
                  </div>
                  <p className="text-zinc-400 mb-4 text-sm">ISET organizes and participates in national-level science events that provide students with opportunities to showcase their creativity, scientific knowledge, and engineering skills. These platforms encourage collaboration, innovation, and healthy competition.</p>
                  <p className="text-zinc-400 mb-4 font-semibold text-sm">Major Activities:</p>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-zinc-400">
                    <li>• Space Science & Technology Exhibitions</li>
                    <li>• Student Satellite Exhibitions</li>
                    <li>• Rocketry Competitions</li>
                    <li>• Robotics Championships</li>
                    <li>• Astronomy Festivals</li>
                    <li>• Science Model Competitions</li>
                    <li>• Innovation Challenges</li>
                    <li>• Hackathons</li>
                    <li>• STEM Olympiads</li>
                    <li>• National Science Festivals</li>
                    <li>• Teacher Innovation Conferences</li>
                    <li>• Student Research Presentations</li>
                  </ul>
               </CardContent>
             </Card>
          </div>

          {/* Teacher Training, ViGyan Yatra, College Internships */}
          <div className="space-y-8">
             <Card className="bg-zinc-900/80 border-zinc-800 hover:border-zinc-700">
               <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <School className="w-8 h-8 text-emerald-400"/>
                    <h4 className="text-2xl font-bold text-white">Teacher Training & Capacity Building</h4>
                  </div>
                  <p className="text-zinc-400 mb-4 text-sm">Empowering Educators for Future-Ready Classrooms. Teachers are the foundation of quality education. ISET conducts structured training programs to equip educators with modern teaching methodologies, hands-on STEM activities, and the latest developments in Space Science and Technology.</p>
                  <div className="flex flex-wrap gap-2 text-xs text-emerald-400">
                    <span className="bg-emerald-500/10 px-2 py-1 rounded">Space Science Education</span>
                    <span className="bg-emerald-500/10 px-2 py-1 rounded">STEM Teaching Methodology</span>
                    <span className="bg-emerald-500/10 px-2 py-1 rounded">Robotics & Coding</span>
                    <span className="bg-emerald-500/10 px-2 py-1 rounded">NEP 2020 Implementation</span>
                  </div>
               </CardContent>
             </Card>

             <Card className="bg-zinc-900/80 border-zinc-800 hover:border-zinc-700">
               <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Bus className="w-8 h-8 text-orange-400"/>
                    <h4 className="text-2xl font-bold text-white">ViGyan Yatra</h4>
                  </div>
                  <p className="text-zinc-400 mb-4 text-sm">Educational Knowledge Visits. Learning Beyond the Classroom. ViGyan Yatra provides students with first-hand exposure to India's premier scientific and research institutions (ISRO Centres, PRL, NRSC, IPR, Science Museums, Planetariums, Research Laboratories, Universities & Innovation Centres).</p>
               </CardContent>
             </Card>

             <Card className="bg-zinc-900/80 border-zinc-800 hover:border-zinc-700">
               <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <GraduationCap className="w-8 h-8 text-blue-400"/>
                    <h4 className="text-2xl font-bold text-white">College Internships & Fellowships</h4>
                  </div>
                  <p className="text-zinc-400 mb-4 text-sm">Connecting Education with Research & Industry. ISET provides internship and research opportunities for undergraduate and postgraduate students, enabling them to work on real-world projects under the guidance of scientists, engineers, and industry experts.</p>
                  <div className="flex flex-wrap gap-2 text-xs text-blue-400">
                    <span className="bg-blue-500/10 px-2 py-1 rounded">Space Science & Technology</span>
                    <span className="bg-blue-500/10 px-2 py-1 rounded">Satellite Systems</span>
                    <span className="bg-blue-500/10 px-2 py-1 rounded">Robotics & Automation</span>
                    <span className="bg-blue-500/10 px-2 py-1 rounded">GIS & Remote Sensing</span>
                    <span className="bg-blue-500/10 px-2 py-1 rounded">Agriculture & Smart Farming</span>
                  </div>
               </CardContent>
             </Card>
          </div>

        </div>

      </div>
    </section>
  );
}
