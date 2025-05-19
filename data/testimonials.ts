export type Testimonial = {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  rating?: number;
  quote: string;
  date?: string;
  content?: string; // For CMS HTML/rich text
  relationship?: string; // For CMS relationship field
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Tan",
    role: "Parent",
    relationship: "Parent of P3 student",
    quote: "<p>My son used to dread Chinese lessons. After joining Da Di, he's excited to practice Mandarin at home and even teaches me new words!</p>",
    content: "My son used to dread Chinese lessons. After joining Da Di, he's excited to practice Mandarin at home and even teaches me new words!",
    avatar: "/images/testimonials/avatar1.jpg"
  },
  {
    id: "2",
    name: "David Wong",
    role: "Parent",
    relationship: "Parent of Sec 2 student",
    quote: "<p>The mindfulness practices have helped my daughter not just with Chinese, but with managing exam stress. Her confidence has soared.</p>",
    content: "The mindfulness practices have helped my daughter not just with Chinese, but with managing exam stress. Her confidence has soared.",
    avatar: "/images/testimonials/avatar2.jpg"
  },
  {
    id: "3",
    name: "Michelle Lee",
    role: "Adult learner",
    relationship: "Adult learner",
    quote: "<p>Da Di has given me a new relationship with the language. I'm finally learning with joy instead of pressure.</p>",
    content: "Da Di has given me a new relationship with the language. I'm finally learning with joy instead of pressure.",
    avatar: "/images/testimonials/avatar3.jpg"
  },
  {
    id: "4",
    name: "John Chen",
    role: "Parent",
    relationship: "Parent of preschooler",
    quote: "<p>The way they make learning fun while building mindfulness skills is incredible. My 5-year-old is absorbing Mandarin without even realizing.</p>",
    content: "The way they make learning fun while building mindfulness skills is incredible. My 5-year-old is absorbing Mandarin without even realizing.",
    avatar: "/images/testimonials/avatar4.jpg"
  }
];
