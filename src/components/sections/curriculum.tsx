"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Star, Target, Lightbulb, Compass, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const FRAMEWORK = [
  {
    level: "Primary Level (Grades 1–2)",
    theme: "Discovering Science Through Fun",
    topics: ["Introduction to Science & Space", "Earth, Sun, Moon & Solar System", "Weather & Seasons", "Simple Machines", "Basic Robotics Concepts", "Paper Rockets & STEM Activities", "Scientific Toys & Models"]
  },
  {
    level: "Upper Primary (Grades 3–5)",
    theme: "Exploring Science Through Activities",
    topics: ["Astronomy & Space Exploration", "Rocket Science Fundamentals", "Satellites and Their Uses", "Motion, Force & Energy", "Electricity & Magnetism", "Engineering Challenges", "STEM Innovation Projects"]
  },
  {
    level: "Middle School (Grades 6–8)",
    theme: "Learning Through Innovation",
    topics: ["Space Missions & ISRO", "Human Spaceflight & Gaganyaan", "Satellite Technology", "Rocket Design & Aerodynamics", "Robotics & Coding", "Artificial Intelligence & IoT", "Space Research Projects"]
  },
  {
    level: "Secondary Level (Grades 9–10)",
    theme: "Future Technologies & Research",
    topics: ["Advanced Space Science", "Satellite Systems & Communication", "Remote Sensing & GIS", "Artificial Intelligence", "Robotics & Automation", "Electronics & Embedded Systems", "Innovation & Entrepreneurship", "Career Guidance in STEM"]
  }
];

const DETAILED_PROGRAMS = [
  {
    id: "space-education",
    title: "1. Space Education Programs",
    subtitle: "Inspiring Young Minds to Explore the Universe",
    desc: "Our Space Education Programs introduce students to the fascinating world of space science through engaging, activity-based learning. Students explore the evolution of space exploration, India's achievements in space, and the technologies shaping the future.",
    highlights: ["Introduction to Space Science & Astronomy", "History of Space Exploration", "ISRO Missions & Achievements", "Chandrayaan, Mangalyaan, Aditya-L1 & Gaganyaan", "Solar System & Beyond", "Human Spaceflight", "Space Applications in Daily Life", "Hands-on STEM Activities", "Space Science Exhibitions", "Scientist Interaction Sessions"]
  },
  {
    id: "satellite",
    title: "2. Satellite Programs",
    subtitle: "Learning Satellite Technology Through Design & Innovation",
    desc: "Students gain practical knowledge of satellite systems by designing, assembling, and understanding the working principles of satellites. The program develops engineering skills while introducing learners to communication, navigation, weather monitoring, and Earth observation technologies.",
    highlights: ["Introduction to Satellite Technology", "Types of Satellites & Their Applications", "Satellite Components & Payloads", "Student Satellite Model Building", "WeMoSat Educational Satellite Program", "Aryabhata Satellite Initiative", "CubeSat Concepts", "Communication & Remote Sensing", "Satellite Data Applications", "Student Innovation Projects"]
  },
  {
    id: "rocketry",
    title: "3. Rocketry & Aeromodelling",
    subtitle: "Understanding the Science Behind Space Launches",
    desc: "The Rocketry Program enables students to learn the principles of flight, propulsion, aerodynamics, and engineering through exciting practical activities. Students design, build, and launch different types of educational rockets while understanding the science that powers modern space missions.",
    highlights: ["History of Rocketry", "Principles of Flight", "Newton's Laws of Motion", "Rocket Design & Construction", "Water Rockets & Air Rockets", "Model Rocket Launches", "Aerodynamics Experiments", "Flight Stability & Recovery Systems", "Rocket Testing & Performance Analysis", "Aerospace Engineering Fundamentals"]
  },
  {
    id: "robotics",
    title: "4. Robotics & Automation",
    subtitle: "Building Intelligent Machines for Tomorrow",
    desc: "The Robotics Program introduces students to engineering, automation, and intelligent systems through project-based learning. Students build working robots while developing logical thinking, coding skills, and engineering design capabilities.",
    highlights: ["Introduction to Robotics", "Mechanical Design", "Sensors & Actuators", "Arduino Programming", "Motor Control Systems", "Line Following Robots", "Obstacle Avoidance Robots", "Space Rover Design", "Agricultural Robotics", "Automation Projects"]
  },
  {
    id: "ai",
    title: "5. Artificial Intelligence & Emerging Technologies",
    subtitle: "Preparing Students for the Future of Technology",
    desc: "Artificial Intelligence is transforming every sector of society. This program introduces students to AI concepts, machine learning, data analysis, and emerging technologies through practical demonstrations and real-world applications.",
    highlights: ["Introduction to Artificial Intelligence", "Machine Learning Basics", "Computer Vision", "Internet of Things (IoT)", "Smart Sensors", "Automation & Smart Systems", "AI in Space Missions", "Data Science Fundamentals", "Ethical AI", "Future Technology Projects"]
  },
  {
    id: "astronomy",
    title: "6. Astronomy Programs",
    subtitle: "Exploring the Wonders of the Universe",
    desc: "Astronomy inspires curiosity and scientific thinking by helping students understand our place in the universe. Through observations, planetarium activities, and practical sessions, students explore celestial objects and astronomical phenomena.",
    highlights: ["Introduction to Astronomy", "The Solar System", "Stars & Constellations", "Moon Phases & Eclipses", "Galaxies & the Universe", "Telescopes & Observatories", "Night Sky Observation", "Astrophotography Basics", "Space Weather", "Citizen Science Projects"]
  }
];

const HANDS_ON = [
  "Rocket Building & Launching", "Student Satellite Models", "Balloon Rocket Experiments", 
  "Water Rocket Challenges", "Robotics & Coding Projects", "AI & IoT Demonstrations", 
  "Astronomy Observation Sessions", "Telescope Activities", "Engineering Design Challenges", 
  "Science Experiments", "STEM Competitions"
];

export function CurriculumSection() {
  const [activeTab, setActiveTab] = useState("framework");
  const [activeProgram, setActiveProgram] = useState("space-education");

  return (
    <section id="curriculum" className="py-24 relative z-10 ">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm text-indigo-400 font-bold tracking-widest uppercase mb-2">Learning Today. Innovating Tomorrow. Leading the Future.</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Curriculum Framework & Programs
          </h3>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            The SPARK INDIA curriculum follows a progressive learning approach, where students advance from understanding basic scientific concepts to designing innovative projects and exploring future technologies. Aligned with NEP 2020 for Grades 1 to 10.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button onClick={() => setActiveTab("framework")} className={`px-6 py-3 rounded-full font-medium transition-all ${activeTab === "framework" ? "bg-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]" : "bg-zinc-800 text-zinc-400"}`}>Curriculum Framework</button>
          <button onClick={() => setActiveTab("programs")} className={`px-6 py-3 rounded-full font-medium transition-all ${activeTab === "programs" ? "bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]" : "bg-zinc-800 text-zinc-400"}`}>6 Space Education Programs</button>
          <button onClick={() => setActiveTab("handson")} className={`px-6 py-3 rounded-full font-medium transition-all ${activeTab === "handson" ? "bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]" : "bg-zinc-800 text-zinc-400"}`}>Hands-on Activities</button>
        </div>

        {activeTab === "framework" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent -translate-x-1/2 hidden md:block" />
            <div className="space-y-12">
              {FRAMEWORK.map((item, index) => (
                <div key={item.level} className={`group relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                  <div className="hidden md:block absolute left-1/2 w-4 h-4 rounded-full bg-zinc-950 border-2 border-indigo-500 -translate-x-1/2 z-10" />
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right text-left" : "md:pl-16 text-left"}`}>
                    <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:border-indigo-500/50">
                      <CardContent className="p-6">
                        <div className="text-indigo-400 font-mono text-sm mb-2">{item.level}</div>
                        <h4 className="text-xl font-bold text-white mb-4">Theme: {item.theme}</h4>
                        <ul className={`text-sm text-zinc-400 space-y-2 ${index % 2 === 0 ? "md:inline-block text-left" : ""}`}>
                          {item.topics.map(t => <li key={t} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5"/> {t}</li>)}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "programs" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1 space-y-2">
              {DETAILED_PROGRAMS.map(prog => (
                <button
                  key={prog.id}
                  onClick={() => setActiveProgram(prog.id)}
                  className={`w-full text-left p-4 rounded-xl text-sm font-medium transition-all ${
                    activeProgram === prog.id ? "bg-purple-600/20 border border-purple-500/50 text-white" : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:bg-zinc-800"
                  }`}
                >
                  {prog.title}
                </button>
              ))}
            </div>
            <div className="lg:col-span-3">
              {DETAILED_PROGRAMS.map(prog => (
                activeProgram === prog.id && (
                  <motion.div key={prog.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8">
                    <h4 className="text-2xl font-bold text-white mb-2">{prog.title}</h4>
                    <p className="text-purple-400 font-semibold mb-6">{prog.subtitle}</p>
                    <p className="text-zinc-300 leading-relaxed mb-8">{prog.desc}</p>
                    
                    <h5 className="text-lg font-bold text-white mb-4">Program Highlights</h5>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm text-zinc-400">
                      {prog.highlights.map(h => (
                        <li key={h} className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5"/> {h}</li>
                      ))}
                    </ul>
                  </motion.div>
                )
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "handson" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto">
             <div className="text-center mb-8">
               <h3 className="text-2xl font-bold text-white mb-4">Hands-on Activities</h3>
               <p className="text-zinc-400">SPARK INDIA emphasizes experiential learning through practical activities that make science engaging and meaningful. Students participate in:</p>
             </div>
             <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {HANDS_ON.map(activity => (
                  <div key={activity} className="bg-emerald-900/10 border border-emerald-500/20 p-4 rounded-xl flex items-center gap-3">
                    <Zap className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-emerald-100 font-medium text-sm">{activity}</span>
                  </div>
                ))}
             </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
