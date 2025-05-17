# PRD – Da Di Learning Studio

## 1. Overview

Da Di Learning Studio is a Mandarin learning center in Singapore that provides immersive and engaging Mandarin education for all ages, from preschoolers to adults. The website serves as the primary digital touchpoint for prospective students and parents to learn about the programs, teaching philosophy, and book classes.

## 2. Target Users

- Parents of preschool and school-aged children
- Adult learners interested in Mandarin
- Educational institutions seeking partnerships
- Job seekers interested in teaching positions

## 3. Features

### 3.1 MVP Scope

- [x] About Page
  - Hero section with engaging visual design and mission statement
  - Animated elements for better user engagement
  - Responsive layout that works on all devices
  - Clear call-to-action buttons for navigation

- [x] Programmes Page
  - Program overview
  - Age-specific program details (Preschool, Primary, Secondary, Adults)
  - Testimonials from students and parents

- [x] Philosophy Page
  - Teaching methodology overview
  - The 4 pillars of learning (Ask, Analyze, Apply, Stillness)
  - Call-to-action for trial class

- [x] Blog Section
  - Blog listing page
  - Individual blog post pages
  - Category filtering (future)

- [x] Contact Page
  - Contact form
  - Location map
  - Business hours and contact information

- [x] Responsive Design
  - Mobile-first approach
  - Tablet and desktop optimizations
  - Accessible navigation

- [x] SEO Optimization
  - Semantic HTML structure
  - Metadata for all pages
  - Performance optimizations

### 3.2 Nice-to-Have

- Online booking system
- Student portal
- Interactive learning resources
- Video testimonials
- Multi-language support

### 3.3 Out of Scope

- E-commerce functionality
- Full online course platform
- Mobile app

## 4. Data Schema

### Models

```prisma
model BlogPost {
  id          String   @id @default(cuid())
  title       String
  slug        String   @unique
  content     String
  excerpt     String
  coverImage  String?
  publishedAt DateTime @default(now())
  updatedAt   DateTime @updatedAt
  author      String
  categories  String[]
}

class Program {
  id: string
  title: string
  description: string
  ageGroup: string
  duration: string
  schedule: string
  price: string
  features: string[]
}
```

## 5. Implementation Plan

### Page: About
- **Implementation**: Static page with team member cards and timeline component
- **Components**: 
  - HeroSection
  - TeamGrid
  - Timeline
- **API**: None (static content)

### Page: Programmes
- **Implementation**: Dynamic page with program cards and filtering
- **Components**:
  - ProgramCard
  - TestimonialCarousel
  - CTA Section
- **API**: Static data for programs

### Page: Philosophy
- **Implementation**: Interactive page with animated sections
- **Components**:
  - PhilosophyPillars
  - CalligraphyAnimation
  - QuoteBlock
- **API**: None

### Page: Blog
- **Implementation**: Dynamic routes with content from CMS
- **Components**:
  - BlogList
  - BlogPost
  - CategoryFilter
- **API**: Strapi/Notion API integration

### Page: Contact
- **Implementation**: Form with form handling and map
- **Components**:
  - ContactForm
  - LocationMap
  - ContactInfo
- **API**: Form submission handler

## 6. Outstanding Bugs / Risks

- Performance optimization for animations
- Form submission handling
- CMS integration for blog
- Mobile responsiveness testing

## 7. Changelog

### 2025-05-17
- Initial project setup and scaffolding
- Created PRD document
- Set up page structure for all required routes
