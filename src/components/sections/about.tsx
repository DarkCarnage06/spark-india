"use client";

import { motion } from "framer-motion";
import { Users, GraduationCap, School, BrainCircuit, Quote, Target, Eye, Star, Heart, Compass } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

function AnimatedCounter({ end, label, icon: Icon, suffix = "" }: any) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2000;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(easeOutQuart * end));
      
      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end]);

  return (
    <Card className="bg-background/40 backdrop-blur-sm border-white/10 hover:border-primary/50 transition-colors">
      <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-2">
        <Icon className="w-8 h-8 text-primary mb-2" />
        <div className="text-3xl md:text-4xl font-bold text-white">
          {count}{suffix}
        </div>
        <div className="text-sm text-white/60 font-medium uppercase tracking-wider">
          {label}
        </div>
      </CardContent>
    </Card>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative z-10 ">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10 space-y-32">
        
        {/* Chairman's Message */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 space-y-6"
          >
            <h2 className="text-sm text-blue-400 font-bold tracking-widest uppercase mb-2">Chairman&apos;s Message</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Building India&apos;s Scientific Future
            </h3>
            <div className="prose prose-invert max-w-none text-zinc-300 font-light leading-relaxed space-y-4">
              <p>
                India stands at the threshold of a remarkable scientific era. From launching record-breaking satellite missions to planning human spaceflight and interplanetary exploration, our nation is inspiring the world through innovation and technological excellence.
              </p>
              <p>
                Yet the foundation of every scientific achievement begins in a classroom—with a curious child, an inspiring teacher, and an opportunity to explore beyond textbooks.
              </p>
              <p>
                At Indo Science Education Trust (ISET), we believe every student possesses the potential to become a scientist, engineer, innovator, researcher, or entrepreneur. Our responsibility is to provide the right environment where curiosity transforms into creativity and imagination evolves into innovation.
              </p>
              <p>
                Our vision extends beyond teaching science. We strive to build scientific temperament, critical thinking, problem-solving abilities, leadership, collaboration, and innovation skills that prepare students for the challenges of the twenty-first century.
              </p>
              <p>
                Through our collaboration with the ISRO–SPPU Space Technology Cell, educational institutions, scientists, research organizations, and industry experts, we have created one of India&apos;s most comprehensive experiential learning ecosystems in Space Science, STEM, Robotics, Artificial Intelligence, Satellite Technology, Astronomy, and Innovation.
              </p>
              <p>
                Today, ISET has reached more than 20 lakh students across India through hands-on workshops, exhibitions, teacher development initiatives, satellite programs, robotics education, research opportunities, and national innovation platforms.
              </p>
              <p>
                Every activity we conduct has one objective—to inspire students to dream bigger, think scientifically, innovate fearlessly, and contribute meaningfully to the nation.
              </p>
              <p>
                As India progresses toward becoming a global leader in the space economy, advanced manufacturing, artificial intelligence, and scientific research, we are committed to nurturing the next generation of innovators who will drive this transformation.
              </p>
              <p className="font-medium text-white italic">
                &quot;Today&apos;s curious student will become tomorrow&apos;s scientist.&quot;
              </p>
              <div className="pt-4 border-t border-zinc-800">
                <p className="font-semibold text-white">Mr. Santosh Pise</p>
                <p className="text-sm text-blue-400">Founder & President<br/>Indo Science Education Trust (ISET)</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4"
          >
             <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50 aspect-[3/4]">
                <img src="/images/extracted/chairman.jpg" alt="Mr. Santosh Pise" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
             </div>
          </motion.div>
        </div>

        {/* About ISET */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-zinc-900/40 border border-zinc-800/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Indo Science Education Trust (ISET)</h2>
              <h3 className="text-xl text-blue-400 mb-4 font-semibold">Shaping India&apos;s Future Scientists, Innovators & Space Leaders</h3>
              <p className="text-lg text-blue-200/85 font-light italic mb-4">
                &quot;Igniting Young Minds in Space Science, Technology & Innovation&quot;
              </p>
              <p className="text-sm text-zinc-400 mb-6">
                Building India&apos;s Next Generation of Scientists Through Experiential Learning, Innovation & Research
              </p>
              <div className="space-y-4 text-zinc-300 font-light leading-relaxed">
                <p>
                  Indo Science Education Trust (ISET) is a leading non-profit educational organization dedicated to transforming science education through experiential learning, innovation, research, and technology-driven education.
                </p>
                <p>
                  Recognized as an Official ISRO Space Tutor and Official Merchandise Partner, ISET has emerged as one of India&apos;s most active organizations working toward democratizing quality STEM and Space Science education for students from primary schools to higher education.
                </p>
                <p>
                  Established with the vision of creating scientifically empowered citizens, ISET bridges the gap between traditional classroom learning and real-world scientific applications. Our programs integrate scientific concepts with practical experimentation, enabling students to understand, design, build, test, and innovate.
                </p>
                <p>
                  From simple science experiments in Grade 1 to student-built satellites, robotics systems, artificial intelligence, space technology, research internships, and innovation challenges, ISET provides a complete learning ecosystem that prepares students for future careers in science and technology.
                </p>
                <p>
                  Working closely with educational institutions, scientists, researchers, government agencies, and industry experts, ISET delivers structured educational programs aligned with the National Education Policy (NEP 2020) while promoting scientific temper and innovation among young learners.
                </p>
              </div>
            </div>
            <div>
               <h3 className="text-2xl font-bold text-white mb-6">Who We Are</h3>
               <p className="text-zinc-300 font-light mb-6">
                 We are a national organization committed to creating India&apos;s largest ecosystem for experiential Space Science and STEM education.
               </p>
               <h4 className="text-lg font-semibold text-white mb-4">Our work focuses on:</h4>
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-zinc-300">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>Space Science Education</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>STEM Education</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>Astronomy</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>Satellite Technology</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>Rocketry & Aeromodelling</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>Robotics</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>Artificial Intelligence</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>Internet of Things (IoT)</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>Research & Innovation</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>Teacher Capacity Building</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>Educational Infrastructure Development</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>National Knowledge Visits</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>Innovation Competitions</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>Student Research Programs</li>
               </ul>

               <div className="mt-8 p-6 bg-blue-900/10 border border-blue-500/20 rounded-2xl">
                 <h4 className="text-lg font-semibold text-white mb-2">Our Philosophy</h4>
                 <p className="text-sm text-zinc-300 mb-2">Education should inspire students to ask questions rather than memorize answers.</p>
                 <p className="text-sm text-zinc-300 mb-2">Science should be experienced through observation, experimentation, design, innovation, and research.</p>
                 <p className="text-sm text-zinc-300 mb-2">Technology should empower students to solve real-world problems.</p>
                 <p className="text-sm text-zinc-300">Learning should prepare students not only for examinations but also for life, careers, and nation building.</p>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Vision, Mission, Core Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 hover:border-blue-500/50 transition-colors"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
              <Eye className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
            <p className="text-zinc-400 leading-relaxed">
              To position India as a global science and space superpower by nurturing future-ready scientists, engineers, innovators, researchers, and technology leaders through world-class experiential education.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 hover:border-purple-500/50 transition-colors"
          >
            <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Mission</h3>
            <p className="text-zinc-400 leading-relaxed">
              Our mission is to democratize access to high-quality Space Science and STEM education by providing experiential learning, innovation opportunities, research exposure, and industry-relevant skills that empower every learner to contribute to India&apos;s scientific and technological advancement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 lg:col-span-1 bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 hover:border-emerald-500/50 transition-colors"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400">
              <Compass className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Guiding Principle</h3>
            <p className="text-xl font-semibold text-emerald-400 mb-4">
              Learn • Build • Innovate • Explore • Inspire
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Every program delivered by ISET follows this philosophy, ensuring that students progress from understanding concepts to creating innovative solutions that can make a meaningful impact on society.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center text-white mb-10">Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Excellence", desc: "Delivering high-quality educational experiences that meet global standards." },
              { title: "Innovation", desc: "Encouraging creativity, experimentation, and problem-solving through hands-on learning." },
              { title: "Scientific Integrity", desc: "Ensuring technical accuracy and evidence-based education in every program." },
              { title: "Inclusivity", desc: "Making quality STEM education accessible to rural, urban, and underserved communities." },
              { title: "Collaboration", desc: "Building partnerships with schools, universities, research institutions, industries, and government organizations." },
              { title: "Sustainability & Nation Building", desc: "Developing scientific solutions that contribute to national development and preparing responsible citizens for the future." }
            ].map((value, i) => (
              <div key={i} className="p-6 bg-zinc-900/40 rounded-2xl border border-zinc-800 hover:bg-zinc-800/60 transition-colors">
                <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                <p className="text-zinc-400 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Our Journey Summary */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-white mb-6">Our Journey</h3>
          <p className="text-lg text-zinc-400 mb-8">
            What began as a vision to make quality science education accessible to every child has evolved into a nationwide movement promoting scientific literacy and innovation. Over the years, ISET has organized hundreds of educational programs, established collaborations with premier scientific institutions, developed innovative learning models, and inspired more than twenty lakh students across India.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
