"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from '@/lib/motion';
import { useInView } from '@/lib/hooks';
import TestimonialCard from '../shared/TestimonialCard';

const testimonials = [
  {
    id: 1,
    name: "Sarah Tan",
    role: "Parent of P3 student",
    content: "My son used to dread Chinese lessons. After joining Da Di, he's excited to practice Mandarin at home and even teaches me new words!",
    image: "https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg",
  },
  {
    id: 2,
    name: "David Wong",
    role: "Parent of Sec 2 student",
    content: "The mindfulness practices have helped my daughter not just with Chinese, but with managing exam stress. Her confidence has soared.",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
  },
  {
    id: 3,
    name: "Michelle Lee",
    role: "Adult learner",
    content: "As someone who struggled with Mandarin in school, Da Di has given me a new relationship with the language. I'm finally conversationally fluent!",
    image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg",
  },
  {
    id: 4,
    name: "John Chen",
    role: "Parent of preschooler",
    content: "The way they make learning fun while building mindfulness skills is incredible. My 5-year-old is absorbing Mandarin without even realizing she's learning!",
    image: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < testimonials.length - visibleCount ? prevIndex + 1 : prevIndex));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Community Says</h2>
          <p className="text-gray-700 leading-relaxed">
            Hear from parents and learners who have experienced the Da Di difference.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="px-4"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <TestimonialCard 
                    name={testimonial.name}
                    role={testimonial.role}
                    content={testimonial.content}
                    image={testimonial.image}
                    delay={index * 0.1}
                    inView={inView}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md focus:outline-none ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
            }`}
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          
          <button
            onClick={handleNext}
            disabled={currentIndex >= testimonials.length - visibleCount}
            className={`absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md focus:outline-none ${
              currentIndex >= testimonials.length - visibleCount ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
            }`}
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Dots for mobile */}
        <div className="flex justify-center mt-8 md:hidden">
          {Array.from({ length: testimonials.length }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 mx-1 rounded-full ${
                index === currentIndex ? 'bg-[#9BC53D]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;