"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "@/lib/motion";
import CalligraphyAnimation from "./CalligraphyAnimation";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center pt-20 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-[#FFE066]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-[#9BC53D]/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 z-10 flex-1 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left: Headline and CTA */}
        <div className="max-w-3xl w-full md:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Mandarin. Mindfulness. Mastery.
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              A new kind of Chinese enrichment — where language meets life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                className="bg-[#9BC53D] hover:bg-[#8AB22E] text-white px-8 py-6 text-lg h-auto"
              >
                Book a Free Trial Class
              </Button>
              <Button
                variant="outline"
                className="border-[#9BC53D] text-[#9BC53D] hover:bg-[#9BC53D]/10 px-8 py-6 text-lg h-auto"
                onClick={() => {
                  const aboutSection = document.getElementById("about");
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
        {/* Right: Calligraphy Animation */}
        <div className="mt-12 md:mt-0 md:ml-12 flex-1 flex items-center justify-center w-full md:w-1/2">
          <CalligraphyAnimation />
        </div>
      </div>

      {/* Fixed CTA button that appears when scrolling past hero */}
      <div
        className={`fixed bottom-6 right-6 z-30 transition-all duration-500 transform ${
          isVisible ? "translate-y-24 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <Button
          onClick={scrollToContact}
          className="bg-[#9BC53D] hover:bg-[#8AB22E] text-white px-6 shadow-lg"
        >
          Book a Trial Class
        </Button>
      </div>
    </section>
  );
};

export default Hero;
