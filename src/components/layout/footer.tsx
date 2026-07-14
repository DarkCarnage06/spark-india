import Link from "next/link";
import { Rocket } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-background/80 backdrop-blur-lg pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <div className="bg-primary/20 p-2 rounded-lg">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <div className="font-bold text-xl tracking-wider">
                <span className="text-white">SPARK</span>{" "}
                <span className="text-primary">INDIA</span>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Empowering Future Scientists Through Space Education. A Joint Initiative by Indo Science Education Trust (ISET) & ISRO–SPPU Space Technology Cell (STC).
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Program', 'Innovation Labs', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-sm text-white/60 hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-white/60 hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <Link href="https://m.facebook.com/indoscience/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors text-white/60">
                <FaFacebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors text-white/60">
                <FaTwitter className="w-5 h-5" />
              </Link>
              <Link href="https://www.instagram.com/_indosciedu_?igsh=NTc4MTIwNjQ2YQ==" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors text-white/60">
                <FaInstagram className="w-5 h-5" />
              </Link>
              <Link href="https://www.linkedin.com/company/indo-science-education-trust-pune?originalSubdomain=in" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors text-white/60">
                <FaLinkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Indo Science Education Trust. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-white/40">
            <span>Made for India's Future Scientists</span>
            <span className="text-red-500">❤️</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
