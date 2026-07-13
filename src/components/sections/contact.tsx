"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative z-10 ">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm text-blue-400 font-bold tracking-widest uppercase mb-2">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join the Movement
            </h3>
            <p className="text-lg text-zinc-400 font-light max-w-3xl mx-auto mb-4">
              Whether you are a school looking to transform your science curriculum, a corporate entity aiming to drive impactful CSR, or a government body focused on educational reform—we invite you to partner with SPARK INDIA.
            </p>
            <p className="text-xl font-medium text-indigo-400 max-w-3xl mx-auto">
              Together, let us build a nation of critical thinkers, innovators, and space explorers!
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full bg-zinc-900/50 backdrop-blur-md border-zinc-800">
              <CardContent className="p-8 h-full flex flex-col justify-center space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Address</h4>
                    <p className="text-zinc-400">INDO SCIENCE EDUCATION TRUST (ISET)<br/># 2, Kalaban Park, Walnut School Road,<br/>Phursungi, Hadapsar, Pune, 412 308</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Phone</h4>
                    <p className="text-zinc-400">+91 9822090659 <br/> +91 7774001234</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Email</h4>
                    <p className="text-zinc-400">santosh@indoscience.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Website</h4>
                    <p className="text-zinc-400">www.indoscience.org</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full bg-zinc-900/50 backdrop-blur-md border-zinc-800">
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300">Full Name</label>
                    <Input placeholder="John Doe" className="bg-zinc-950 border-zinc-800 focus-visible:ring-blue-500 text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300">Email</label>
                    <Input type="email" placeholder="john@example.com" className="bg-zinc-950 border-zinc-800 focus-visible:ring-blue-500 text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300">Message</label>
                    <textarea 
                      className="flex w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-base ring-offset-background placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white min-h-[120px]" 
                      placeholder="How can we collaborate?"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg rounded-xl">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
