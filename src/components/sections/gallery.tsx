"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";

const IMAGES = [
  { id: 1,  src: "/images/SPARK India Inauguration.jpg",        title: "SPARK India Inauguration",             colSpan: "md:col-span-2 md:row-span-2" },
  { id: 2,  src: "/images/SPARK India Inauguration (2).jpg",    title: "SPARK India Inauguration",             colSpan: "md:col-span-1 md:row-span-1" },
  { id: 3,  src: "/images/Scientist Interactive Sessions.jpg",  title: "Scientist Interactive Sessions",       colSpan: "md:col-span-1 md:row-span-1" },
  { id: 4,  src: "/images/IISF Challenge.jpg",                  title: "IISF Challenge",                       colSpan: "md:col-span-1 md:row-span-1" },
  { id: 5,  src: "/images/IISF Challenge (2).jpg",              title: "IISF Challenge",                       colSpan: "md:col-span-1 md:row-span-1" },
  { id: 6,  src: "/images/IISF Challenge-Faridabad.jpg",        title: "IISF Challenge – Faridabad",           colSpan: "md:col-span-2 md:row-span-1" },
  { id: 7,  src: "/images/IISF.jpg",                            title: "IISF",                                 colSpan: "md:col-span-1 md:row-span-1" },
  { id: 8,  src: "/images/Space Exhibition.jpg",                title: "Space Exhibition",                     colSpan: "md:col-span-1 md:row-span-1" },
  { id: 9,  src: "/images/Soharab Godrej Science & Tech Award.jpg", title: "Soharab Godrej Science & Tech Award", colSpan: "md:col-span-1 md:row-span-1" },
  { id: 10, src: "/images/ISRO Space Tutor Certificate.jpg",    title: "ISRO Space Tutor Certificate",         colSpan: "md:col-span-1 md:row-span-1" },
  { id: 11, src: "/images/Certificate.jpg",                     title: "Certificate",                          colSpan: "md:col-span-1 md:row-span-1" },
  { id: 12, src: "/images/Picture9.jpg",                        title: "SPARK India Activity",                 colSpan: "md:col-span-1 md:row-span-1" },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<typeof IMAGES[0] | null>(null);

  return (
    <section id="gallery" className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm text-primary font-bold tracking-widest uppercase mb-2">Our Moments</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Gallery
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {IMAGES.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer ${img.colSpan}`}
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Always-visible caption bar at bottom */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/75 to-transparent pt-8 pb-3 px-4 flex flex-col justify-end">
                <h4 className="text-white font-semibold text-sm leading-tight drop-shadow">{img.title}</h4>
              </div>
              {/* Zoom overlay on hover */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="w-10 h-10 text-white drop-shadow-lg" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl h-full max-h-[80vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h4 className="text-white font-semibold text-2xl text-center">{selectedImage.title}</h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
