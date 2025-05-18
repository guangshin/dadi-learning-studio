export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Tan",
    role: "Parent of P3 student",
    quote: "My son used to dread Chinese lessons. After joining Da Di, he's excited to practice Mandarin at home and even teaches me new words!",
    avatar: "/images/testimonials/avatar1.jpg"
  },
  {
    id: 2,
    name: "David Wong",
    role: "Parent of Sec 2 student",
    quote: "The mindfulness practices have helped my daughter not just with Chinese, but with managing exam stress. Her confidence has soared.",
    avatar: "/images/testimonials/avatar2.jpg"
  },
  {
    id: 3,
    name: "Michelle Lee",
    role: "Adult learner",
    quote: "Da Di has given me a new relationship with the language. I'm finally learning with joy instead of pressure.",
    avatar: "/images/testimonials/avatar3.jpg"
  },
  {
    id: 4,
    name: "John Chen",
    role: "Parent of preschooler",
    quote: "The way they make learning fun while building mindfulness skills is incredible. My 5-year-old is absorbing Mandarin without even realizing.",
    avatar: "/images/testimonials/avatar4.jpg"
  }
];
