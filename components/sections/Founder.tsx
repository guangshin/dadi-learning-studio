"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Users, BookOpen, Heart } from "lucide-react";

const Founder = () => {
  return (
    <section id="founder" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Founder Image */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/BenFounder.png"
                  alt="Ben Lim, Founder of Da Di Learning Studio"
                  width={600}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </motion.div>

            {/* Founder Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Meet Our Founder
                </h2>
                <div className="w-20 h-1 bg-primary mb-6"></div>
                <h3 className="text-2xl font-bold text-primary mb-2">Ben Lim</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Father of 6. Champion of Mindful Education.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-gray-700 leading-relaxed">
                  After years of watching his own children struggle with Chinese
                  language learning, Ben realized that exam scores don't equate to
                  language confidence or a love for learning.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This insight led him to develop the Da Di approach — combining
                  language acquisition with mindfulness practices that build not
                  just academic skills, but confidence, creativity, and a genuine
                  connection to Chinese culture.
                </p>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Award className="h-5 w-5 text-primary mr-2" />
                    <span className="font-semibold">2023 Winner</span>
                  </div>
                  <p className="text-sm text-gray-600">Speak Mandarin Family Talent Competition</p>
                </div>
                <div className="bg-accent/5 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Users className="h-5 w-5 text-accent mr-2" />
                    <span className="font-semibold">6 Children</span>
                  </div>
                  <p className="text-sm text-gray-600">Personal experience with language learning</p>
                </div>
              </div>

              {/* Quote */}
              <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                <p className="italic text-gray-800 mb-4">
                  "At Da Di, Mandarin is not a subject. It's a way to connect —
                  with others, with culture, and with self."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">Ben's Teaching Philosophy</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
