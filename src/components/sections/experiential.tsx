"use client";

import { motion } from "framer-motion";
import { CheckCircle2, FlaskConical, Target, Lightbulb, GraduationCap, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const STEM_MODEL = [
  { title: "Foundational Learning", desc: "Introducing young learners to scientific concepts through activity-based exploration, observation, storytelling, models, and experiments." },
  { title: "Experiential Learning", desc: "Hands-on STEM activities, engineering design challenges, robotics, coding, astronomy observations, and maker-based education." },
  { title: "Innovation & Research", desc: "Encouraging students to identify local problems, develop scientific solutions, and participate in research-oriented projects." },
  { title: "Technology Integration", desc: "Exposure to Robotics, Artificial Intelligence, Internet of Things (IoT), electronics, sensors, programming, and automation." },
  { title: "Mentorship", desc: "Guidance from scientists, engineers, researchers, educators, and industry experts." },
  { title: "National Exposure", desc: "Participation in science exhibitions, innovation competitions, STEM festivals, educational tours, and interactions with premier scientific institutions." },
  { title: "Career Development", desc: "Internships, research fellowships, higher education guidance, entrepreneurship awareness, and pathways into science and technology careers." }
];

const FUTURE_SCIENTISTS = [
  { step: "Inspire", desc: "Students discover the excitement of science through engaging demonstrations and activities." },
  { step: "Explore", desc: "They investigate scientific concepts through experimentation and observation." },
  { step: "Build", desc: "Learners design and construct working scientific models, robots, rockets, and satellites." },
  { step: "Innovate", desc: "Students identify challenges, develop solutions, and present original ideas." },
  { step: "Lead", desc: "They become confident innovators, capable of contributing to scientific research, technology, and nation-building." }
];

export function ExperientialLearning() {
  const [activeView, setActiveView] = useState<"model" | "methodology" | "outcomes">("model");

  return (
    <section id="experiential" className="py-24 relative z-10 ">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm text-blue-400 font-bold tracking-widest uppercase mb-2">Hands-on Experience</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Impact Through Experiential Learning
            </h3>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
              The success of ISET lies in its experiential learning philosophy. Students do not merely study scientific theories—they experience them.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveView("model")}
            className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
              activeView === "model" ? "bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]" : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 border border-zinc-800"
            }`}
          >
            <FlaskConical className="w-5 h-5" /> The ISET STEM Model
          </button>
          <button
            onClick={() => setActiveView("methodology")}
            className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
              activeView === "methodology" ? "bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]" : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 border border-zinc-800"
            }`}
          >
            <Lightbulb className="w-5 h-5" /> Learning Methodology
          </button>
          <button
            onClick={() => setActiveView("outcomes")}
            className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
              activeView === "outcomes" ? "bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]" : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 border border-zinc-800"
            }`}
          >
            <Target className="w-5 h-5" /> Key Learning Outcomes
          </button>
        </div>

        {activeView === "model" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-zinc-300 leading-relaxed text-lg">
                At Indo Science Education Trust, STEM education is delivered through an integrated ecosystem that combines scientific learning with innovation, creativity, and practical application.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {STEM_MODEL.map((item, idx) => (
                <Card key={idx} className="bg-zinc-900/50 border-zinc-800 hover:border-blue-500/50 transition-all">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-blue-900/10 border border-blue-500/20 rounded-3xl p-8 lg:p-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-6">Transforming Schools into Innovation Ecosystems</h3>
              <p className="text-zinc-300 text-lg max-w-4xl mx-auto mb-8">
                A school should be more than a place where students learn concepts—it should be a centre of creativity, experimentation, collaboration, and innovation. Through STEM laboratories, maker spaces, robotics centres, astronomy clubs, space innovation labs, and project-based learning environments, schools become ecosystems where students actively create knowledge rather than simply consume it.
              </p>
              <p className="text-blue-400 font-medium">This transformation strengthens student engagement, teacher effectiveness, institutional reputation, and long-term educational outcomes.</p>
            </div>
          </motion.div>
        )}

        {activeView === "methodology" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12"
          >
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white">Learning Beyond the Classroom</h3>
              <p className="text-zinc-300">SPARK INDIA follows the <strong>"Learn – Build – Innovate – Explore"</strong> model. All ISET programs follow an experiential learning model based on:</p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-zinc-300 text-sm">
                {["Interactive Classroom Sessions", "Hands-on Practical Activities", "STEM Experiments", "Project-Based Learning", "Design Thinking", "Innovation Challenges", "Team-Based Activities", "Scientist Interactions", "Educational Visits", "National Exhibitions & Competitions"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> {item}
                  </li>
                ))}
              </ul>

              <h4 className="text-xl font-bold text-white pt-4">Students participate in:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-zinc-300 text-sm">
                {["Hands-on laboratory activities", "Satellite model development", "Rocket launching experiments", "Robotics and AI projects", "Astronomy observation nights", "STEM innovation challenges", "National science exhibitions", "Scientist interaction sessions", "Educational visits to research institutions", "Community science outreach programmes"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-purple-400 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-6">Building Future Scientists</h3>
              <p className="text-zinc-300 mb-8">Every student who participates in an ISET program embarks on a structured journey:</p>
              
              <div className="space-y-4">
                {FUTURE_SCIENTISTS.map((step, idx) => (
                  <div key={idx} className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl flex gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-purple-400 font-bold text-xl">{idx + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{step.step}</h4>
                      <p className="text-zinc-400 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeView === "outcomes" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12"
          >
             <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-6">Student Learning Outcomes</h3>
              <p className="text-zinc-300 mb-6">At the end of the program, students will:</p>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8">
                <ul className="space-y-4 text-zinc-300">
                  {["Develop a strong foundation in Space Science and STEM.", "Understand the basics of satellites, rockets, astronomy, and robotics.", "Improve critical thinking and problem-solving skills.", "Gain practical experience through hands-on projects.", "Learn teamwork, communication, and leadership.", "Build confidence in presenting scientific ideas.", "Develop innovation and research skills.", "Become aware of future careers in science and technology."].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" /> <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-6">Key Learning Outcomes Developed</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Scientific Temper", "Critical Thinking", "Problem-Solving Skills", "Creativity & Innovation", "Engineering Design Skills", "Coding & Digital Literacy", "Research Orientation", "Teamwork & Leadership", "Communication Skills", "Confidence in Scientific Exploration"].map((skill, i) => (
                  <div key={i} className="bg-emerald-900/10 border border-emerald-500/20 p-4 rounded-xl text-center">
                    <span className="text-emerald-100 font-medium text-sm">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl">
                <h4 className="text-xl font-bold text-white mb-4">Building Future-Ready Citizens</h4>
                <p className="text-zinc-400 text-sm mb-4">The program nurtures students who are:</p>
                <div className="flex flex-wrap gap-2">
                  {["Scientifically Curious", "Technologically Skilled", "Creative Thinkers", "Ethical Innovators", "Collaborative Team Members", "Effective Communicators", "Responsible Citizens", "Environmentally Conscious", "Research-Oriented", "Globally Competitive"].map((trait, i) => (
                    <span key={i} className="bg-zinc-800 text-zinc-300 text-xs px-3 py-1.5 rounded-full border border-zinc-700">{trait}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
