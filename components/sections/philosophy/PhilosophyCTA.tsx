"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export function PhilosophyCTA() {
  return (
    <section className="py-20 bg-[#FAF9F6] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Quote */}
          <div className="relative mb-12">
            <div className="absolute -top-6 -left-6 text-6xl text-[#A5D66F]/30">"</div>
            <blockquote className="text-2xl md:text-3xl font-medium text-[#2C2C2C] italic mb-6 font-noto">
              At Da Di, we believe that how we learn is just as important as what we learn.
            </blockquote>
            <div className="absolute -bottom-6 -right-6 text-6xl text-[#A5D66F]/30 transform rotate-180">"</div>
            
            <div className="mt-8">
              <p className="text-lg text-[#2C2C2C]/80 max-w-3xl mx-auto font-opensans">
                Through 问 (Ask), 思 (Analyze), 修 (Apply), and 静 (Stillness), our students grow in both language and character — with confidence, calm, and heart.
              </p>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-[#2C2C2C] mb-4 font-quicksand">
              Ready to experience Da Di's mindful approach?
            </h3>
            <p className="text-xl text-[#2C2C2C]/80 mb-8 max-w-2xl mx-auto font-opensans">
              Book a trial class and discover how Mandarin can be joyful, grounded, and deeply human.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-[#A5D66F] hover:bg-[#8BC34A] text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg font-quicksand"
            >
              Book a Trial Class
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
