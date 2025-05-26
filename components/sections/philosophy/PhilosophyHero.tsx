"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function PhilosophyHero({
  image,
  loading,
}: {
  image?: { src: string; alt: string; width?: number; height?: number };
  loading?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FAF9F6] to-[#FCE569]/30">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/patterns/cross-dots.svg')] bg-center"></div>
      </div>
      <div className="container mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Text */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Teaching Philosophy:
              <span className="block text-primary mt-2">
                问 · 思 · 修 · 静
              </span>
            </h1>
            <div className="relative inline-block">
              <p className="text-lg md:text-xl text-[#2C2C2C]/90 max-w-xl mx-auto lg:mx-0 leading-relaxed font-opensans">
                At Da Di Learning Studio, learning Mandarin is a journey of
                curiosity, reflection, application, and stillness.
              </p>
              <div className="w-24 h-1 bg-[#A5D66F] rounded-full mt-6 mx-auto lg:mx-0"></div>
            </div>
          </motion.div>
          {/* Right Column - Image */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-[#FCE569]/20">
              {/* Always render the image but hide it when loading to prevent layout shift */}
              <div
                className={`w-full h-full transition-opacity duration-300 ${
                  loading ? "opacity-0 absolute" : "opacity-100"
                }`}
              >
                <Image
                  src={image?.src || "/images/philosophy/classroom.jpg"}
                  alt={
                    image?.alt ||
                    "Teacher and children learning Mandarin together"
                  }
                  fill
                  className="object-cover"
                  priority
                  unoptimized={!!image?.src}
                />
              </div>

              {/* Skeleton loader that fades out when image is loaded */}
              <div
                className={`w-full h-full bg-gray-200 transition-opacity duration-300 ${
                  loading ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={!loading}
              >
                <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
              </div>

              {/* Fallback background with calligraphy */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-9xl font-noto text-[#2C2C2C]/5">
                  问思修静
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Soft wave divider at bottom */}
      <div className="w-full h-16 md:h-24 bg-gradient-to-t from-white to-transparent absolute bottom-0 left-0"></div>
    </section>
  );
}
