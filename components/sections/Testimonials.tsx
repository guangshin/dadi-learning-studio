"use client";

import { ReviewsComponent } from '@/components/shared/ReviewsComponent';

export default function Testimonials() {
  return (
    <ReviewsComponent 
      title="What Our Community Says"
      subtitle="Hear from parents and learners who have experienced the Da Di difference."
      maxItems={4}
      variant="dark"
    />
  );
}