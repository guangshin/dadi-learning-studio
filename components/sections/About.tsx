"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { fetchImagesByKey } from "@/lib/fetchPlasmicImages";

type ImageData = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ImagesByKey = {
  [key: string]: ImageData;
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [imageData, setImageData] = useState<ImageData>({
    src: "/images/about-hero.jpg",
    alt: "Students learning Mandarin at Da Di",
    width: 600,
    height: 800,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        setIsLoading(true);
        const images: ImagesByKey = await fetchImagesByKey([
          "where-mandarin-meets-mindfulness",
        ]);
        const imageKey = "where-mandarin-meets-mindfulness";
        if (images && images[imageKey]?.src) {
          setImageData(images[imageKey]);
        }
      } catch (error) {
        console.error("Error fetching image from CMS:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImage();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            className="lg:w-1/2 relative"
            ref={ref}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={container}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-xl"
              variants={item}
            >
              {!isLoading ? (
                <Image
                  src={imageData.src}
                  alt={imageData.alt}
                  width={imageData.width}
                  height={imageData.height}
                  className="w-full h-auto object-cover rounded-2xl"
                  priority
                  unoptimized={imageData.src.startsWith("http")}
                />
              ) : (
                <div className="w-full h-[500px] bg-gray-100 rounded-2xl animate-pulse"></div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-sm">
                <p className="text-primary font-semibold text-lg">大地</p>
                <p className="text-sm text-gray-700">
                  Earth. Foundation. Growth.
                </p>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
              variants={item}
            />
            <motion.div
              className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
              variants={item}
              transition={{ delay: 0.2 }}
            />
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={container}
          >
            <motion.div variants={item}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
                Where <span className="text-primary">Mandarin</span> Meets{" "}
                <span className="text-accent">Mindfulness</span>
              </h2>
              <div className="h-1 w-20 bg-primary mb-8 rounded-full"></div>

              <motion.div variants={container} className="space-y-6">
                <motion.p
                  className="text-lg text-gray-700 leading-relaxed"
                  variants={item}
                >
                  At Da Di Learning Studio, we believe in nurturing the mind and
                  spirit through the beauty of Mandarin language and culture.
                  Our name 大地 (Dà Dì) means "earth" or "ground," symbolizing
                  our commitment to providing a solid foundation for lifelong
                  learning.
                </motion.p>

                <motion.p
                  className="text-lg text-gray-700 leading-relaxed"
                  variants={item}
                >
                  Inspired by the quiet strength and generosity of the earth,
                  our unique programme blends the richness of Chinese language
                  with mindfulness practices, creating a holistic learning
                  experience that goes beyond textbooks and exams.
                </motion.p>
              </motion.div>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed"
                variants={item}
              >
                Whether it's learning to speak Mandarin fluently, training the
                mind to be present, or cultivating kindness and resilience, Da
                Di is where learners grow — deep, steady, and strong.
              </motion.p>
              <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  variant="outline"
                  className="px-8 py-6 text-base font-medium border-2 border-primary text-primary hover:bg-primary/10 hover:border-primary hover:text-primary/80 transition-colors"
                >
                  <Link href="/about">Discover Our Story</Link>
                </Button>
                <Button
                  asChild
                  className="px-8 py-6 text-base font-medium bg-primary text-white hover:bg-accent transition-colors"
                >
                  <Link href="/philosophy">Our Teaching Philosophy</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
