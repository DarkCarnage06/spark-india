"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Rocket, BrainCircuit, Globe2, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export function WhySparkSection() {
  const [activeTab, setActiveTab] = useState("space");

  return (
    <section className="py-24 relative z-10 " id="why-spark">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-zinc-900 to-transparent" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm text-indigo-400 font-bold tracking-widest uppercase mb-2">Why Spark India</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Need for Transformative Education
            </h3>
          </motion.div>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("space")}
            className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
              activeTab === "space" ? "bg-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
            }`}
          >
            <Rocket className="w-5 h-5" /> Why Space Education?
          </button>
          <button
            onClick={() => setActiveTab("stem")}
            className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
              activeTab === "stem" ? "bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
            }`}
          >
            <BrainCircuit className="w-5 h-5" /> Why India Needs STEM
          </button>
          <button
            onClick={() => setActiveTab("inclusion")}
            className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
              activeTab === "inclusion" ? "bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
            }`}
          >
            <Globe2 className="w-5 h-5" /> STEM for Every Child
          </button>
          <button
            onClick={() => setActiveTab("nep")}
            className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
              activeTab === "nep" ? "bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
            }`}
          >
            <BookOpen className="w-5 h-5" /> NEP 2020 Alignment
          </button>
        </div>

        {/* Tab Content: Space Education */}
        {activeTab === "space" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-4">Inspiring the Next Generation of Scientists, Innovators & Nation Builders</h3>
              <p className="text-indigo-400 italic text-xl border-l-4 border-indigo-500 pl-4 py-2">
                "The future belongs to nations that inspire young minds to dream beyond the horizon."
              </p>
              <div className="space-y-4 text-zinc-300 font-light leading-relaxed">
                <p>The twenty-first century is widely recognized as the <strong>Space Age</strong>, where advances in science and technology are transforming every aspect of human life. Satellites guide our navigation systems, monitor weather patterns, support agriculture, enable digital communication, strengthen national security, manage disaster response, and power countless services we rely on every day.</p>
                <p>As India rapidly emerges as one of the world's leading space-faring nations, there is an urgent need to prepare a generation equipped with the knowledge, skills, creativity, and scientific mindset required to contribute to this exciting future.</p>
                <p>Space education is not merely about learning planets, rockets, or astronauts. It is a multidisciplinary approach that integrates <strong>Science, Technology, Engineering, Mathematics (STEM), Artificial Intelligence, Robotics, Electronics, Data Science, Environmental Studies, Design Thinking, Innovation, and Research</strong> into a meaningful and inspiring learning experience.</p>
                <p>At Indo Science Education Trust (ISET), we believe that space is one of the most powerful contexts for making science relevant, exciting, and purposeful. It transforms curiosity into exploration, ideas into innovation, and classrooms into laboratories of discovery.</p>
              </div>
            </div>
            <div className="space-y-8">
              <Card className="bg-zinc-800/50 border-zinc-700">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3">The Power of Space Education</h4>
                  <p className="text-zinc-400 text-sm mb-4">Space has an extraordinary ability to inspire learners of all ages. By exploring space, students understand interconnected principles. For example:</p>
                  <ul className="space-y-2 text-sm text-zinc-300">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5"/> Designing a rocket introduces Newton's Laws of Motion, aerodynamics, and propulsion.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5"/> Building a satellite combines electronics, coding, sensors, and mechanical design.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5"/> Studying Earth from space develops understanding of climate change and sustainability.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5"/> Programming a Mars rover strengthens logical thinking, robotics, and AI.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800/50 border-zinc-700">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3">Building Scientific Temperament</h4>
                  <p className="text-zinc-400 text-sm mb-2">Space education naturally encourages students to:</p>
                  <div className="grid grid-cols-2 gap-2 text-sm text-zinc-300 mb-4">
                    <div className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4 text-indigo-400"/> Ask meaningful questions</div>
                    <div className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4 text-indigo-400"/> Investigate phenomena</div>
                    <div className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4 text-indigo-400"/> Test ideas via experiments</div>
                    <div className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4 text-indigo-400"/> Analyze observations</div>
                    <div className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4 text-indigo-400"/> Learn from failures</div>
                    <div className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4 text-indigo-400"/> Improve designs iteratively</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        )}

        {/* Tab Content: STEM */}
        {activeTab === "stem" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-12 gap-8"
          >
            <div className="lg:col-span-8 space-y-6">
              <h3 className="text-3xl font-bold text-white mb-4">Building the Scientific Workforce for a Developed India</h3>
              <p className="text-blue-400 italic text-xl border-l-4 border-blue-500 pl-4 py-2">
                "The future of India will be determined not only by its population, but by the knowledge, skills, creativity, and innovation of its people."
              </p>
              <div className="space-y-4 text-zinc-300 font-light leading-relaxed">
                <p>India is home to the world's largest youth population, with more than 250 million school-going children and one of the fastest-growing economies. As the nation advances toward becoming a global leader in science, technology, manufacturing, digital innovation, and space exploration, the demand for a highly skilled, scientifically literate, and innovation-driven workforce has never been greater.</p>
                <p>Traditional education has produced generations of knowledgeable students. However, the future demands individuals who can think critically, innovate, collaborate, solve complex problems, and apply scientific knowledge to real-world challenges.</p>
                <h4 className="text-xl font-semibold text-white pt-4">Moving Beyond Rote Learning</h4>
                <p>For many years, education has largely emphasized memorization, examinations, and theoretical understanding. STEM education transforms classrooms into environments where students become active participants in learning. Instead of simply reading scientific concepts, students investigate them through observation, experimentation, model building, engineering challenges, coding activities, and collaborative projects.</p>
                <h4 className="text-xl font-semibold text-white pt-4">Bridging the Gap Between Education and Industry</h4>
                <p>Employers increasingly seek graduates who can apply scientific concepts practically, solve complex engineering problems, work effectively in multidisciplinary teams, and use modern technologies confidently. STEM education bridges this gap by integrating academic learning with practical experiences, industry exposure, mentorship, internships, and innovation-based projects.</p>
              </div>
            </div>
            <div className="lg:col-span-4 space-y-6">
              <Card className="bg-zinc-800/50 border-zinc-700">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-white mb-4">India's Knowledge Economy Sectors</h4>
                  <ul className="space-y-2 text-sm text-zinc-300">
                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5"/> Space Exploration & Satellite Tech</li>
                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5"/> AI & Machine Learning</li>
                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5"/> Robotics & Automation</li>
                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5"/> Semiconductor Manufacturing</li>
                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5"/> Green Energy & Sustainability</li>
                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5"/> Defence Technology</li>
                    <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5"/> Cyber Security & Data Science</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800/50 border-zinc-700">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-white mb-4">21st Century Skills Developed</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Critical Thinking', 'Problem Solving', 'Creativity', 'Design Thinking', 'Collaboration', 'Leadership', 'Adaptability', 'Digital Literacy'].map(skill => (
                      <span key={skill} className="bg-zinc-700/50 text-zinc-300 text-xs px-2 py-1 rounded">{skill}</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        )}

        {/* Tab Content: Inclusion */}
        {activeTab === "inclusion" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <div className="w-20 h-20 mx-auto bg-emerald-500/20 rounded-full flex items-center justify-center">
              <Globe2 className="w-10 h-10 text-emerald-400" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">STEM for Every Child</h3>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Quality STEM education should not be limited to metropolitan schools or specialised institutions. Students in rural, tribal, semi-urban, and economically disadvantaged communities deserve equal opportunities to explore science, technology, and innovation.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left mt-8">
              <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700">
                <h4 className="font-bold text-white mb-4 text-lg">Inclusive STEM education:</h4>
                <ul className="space-y-3 text-zinc-300">
                  <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0"/> Reduces educational disparities</li>
                  <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0"/> Encourages scientific curiosity across communities</li>
                  <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0"/> Improves confidence among first-generation learners</li>
                  <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0"/> Creates pathways to higher education</li>
                  <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0"/> Promotes social and economic mobility</li>
                  <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0"/> Builds a more equitable knowledge society</li>
                </ul>
              </div>
              <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700 flex flex-col justify-center">
                <p className="text-zinc-300 italic text-lg leading-relaxed border-l-4 border-emerald-500 pl-4">
                  ISET is committed to making STEM education accessible to learners from all backgrounds through affordable programs, mobile outreach initiatives, teacher training, and community engagement.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab Content: NEP */}
        {activeTab === "nep" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Supporting National Education Policy (NEP 2020)</h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                The National Education Policy 2020 envisions an education system that is holistic, multidisciplinary, flexible, experiential, and competency-based. STEM education strongly aligns with the objectives of NEP 2020.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Through structured STEM initiatives, schools can effectively implement NEP recommendations while improving student engagement and learning outcomes.
              </p>
              <div className="bg-purple-900/20 border border-purple-500/20 rounded-2xl p-6">
                <p className="text-purple-300 font-medium">
                  By integrating these elements into every program, ISET helps schools translate the vision of NEP 2020 into meaningful classroom practice.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Experiential Learning", "Inquiry-Based Education", "Project-Based Learning", 
                "Critical Thinking", "Scientific Temper", "Design Thinking", 
                "Innovation & Creativity", "Skill Development", "Coding & Computational Thinking", 
                "Multidisciplinary Learning", "Technology Integration", "Career Awareness"
              ].map(item => (
                <div key={item} className="bg-zinc-800/50 border border-zinc-700 p-4 rounded-xl flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                  <span className="text-white text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
