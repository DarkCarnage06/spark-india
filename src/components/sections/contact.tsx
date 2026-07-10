"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm text-primary font-bold tracking-widest uppercase mb-2">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h3>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full bg-background/50 backdrop-blur-md border-white/10">
              <CardContent className="p-8 h-full flex flex-col justify-center space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Address</h4>
                    <p className="text-white/70"># 2, Kalaban Park, Walnut School Road,<br/>Phursungi, Hadapsar, Pune, 412 308</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Phone</h4>
                    <p className="text-white/70">+91 9822090659 <br/> +91 7774001234</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-isro)]/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-[var(--color-isro)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Email</h4>
                    <p className="text-white/70">santosh@indoscience.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Website</h4>
                    <p className="text-white/70">www.indoscience.org</p>
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
            <Card className="h-full bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Full Name</label>
                    <Input placeholder="John Doe" className="bg-background/50 border-white/10 focus-visible:ring-primary text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Email</label>
                    <Input type="email" placeholder="john@example.com" className="bg-background/50 border-white/10 focus-visible:ring-primary text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Message</label>
                    <textarea 
                      className="flex w-full rounded-md border border-white/10 bg-background/50 px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white min-h-[120px]" 
                      placeholder="How can we collaborate?"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg rounded-xl">
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
