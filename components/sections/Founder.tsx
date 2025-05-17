"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { QuoteIcon } from "lucide-react";

const Founder = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });

  return (
    <section id="founder" className="py-20 bg-accent/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text">
            Meet Our Founder
          </h2>
          <p className="text-accent leading-relaxed">
            The vision and passion behind Da Di Learning Studio
          </p>
        </motion.div>

        <div
          className="flex flex-col lg:flex-row items-center gap-12"
          ref={ref}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-2/5"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent rounded-full opacity-20"></div>
              <Image
                src="/BenFounder.png"
                alt="Ben Lim, Founder of Da Di Learning Studio"
                width={500}
                height={600}
                className="rounded-2xl relative z-10 w-full lg:max-w-lg object-cover h-[500px]"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent rounded-full opacity-20"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-3/5"
          >
            <h3 className="text-2xl font-bold mb-3 text-accent">
              Ben Lim
            </h3>
            <p className="text-accent font-medium mb-6">
              Father of 6. Champion of Mindful Education.
            </p>

            <p className="text-text mb-4 leading-relaxed">
              After years of watching his own children struggle with Chinese
              language learning, Ben realized that exam scores don't equate to
              language confidence or a love for learning.
            </p>

            <p className="text-text mb-4 leading-relaxed">
              This insight led him to develop the Da Di approach — combining
              language acquisition with mindfulness practices that build not
              just academic skills, but confidence, creativity, and a genuine
              connection to Chinese culture.
            </p>

            <p className="text-text mb-6 leading-relaxed">
              In 2023, Ben and his daughter won the prestigious Speak Mandarin
              Family Talent Competition, demonstrating the effectiveness of his
              innovative teaching philosophy.
            </p>

            <div className="bg-white rounded-xl p-6 border border-accent/20 shadow-sm">
              <div className="flex">
                <QuoteIcon className="text-[#9BC53D] h-8 w-8 mr-4 flex-shrink-0" />
                <p className="text-lg italic text-gray-800">
                  "At Da Di, Mandarin is not a subject. It's a way to connect —
                  with others, with culture, and with self."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
