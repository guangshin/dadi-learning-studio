"use client";

import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
  delay?: number;
  inView?: boolean;
}

const TestimonialCard = ({
  name,
  role,
  content,
  image,
  delay = 0,
  inView = true,
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full">
        <CardContent className="pt-6">
          <div className="mb-4">
            <div className="relative h-12 w-12 rounded-full overflow-hidden mb-4">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
              />
            </div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
          <p className="text-gray-700 italic">"{content}"</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;