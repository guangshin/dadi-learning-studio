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
  - Redesigned with a modern, two-column layout
  - Interactive location cards with embedded maps
  - Copy-to-clipboard functionality for contact details
  - Comprehensive contact form with validation
  - Social media integration
  - CMS-ready structure for future locations

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
- **Implementation**: Interactive contact page with form handling and dynamic location cards
- **Components**:
  - SectionHeaderCentered - Consistent page header with animated elements
  - LocationCard - Reusable component for each branch location with:
    - Interactive Google Maps embed
    - Copy-to-clipboard functionality
    - Contact information display
  - ContactForm - Comprehensive form with:
    - Form validation
    - Loading states
    - Success/error messaging
    - Future-proof location selection
  - SocialMedia - Interactive social media links with hover effects
- **API**: 
  - Form submission handler
  - Location data structure ready for CMS integration

## 6. Outstanding Bugs / Risks

- Performance optimization for animations
- Form submission handling 
- Ongoing monitoring of Plasmic CMS integration

## 7. Changelog

### 2025-05-20
- Updated contact form to send emails directly to contact@dadi.com.sg
- Improved Google Maps embed on Contact page with specific marker for Da Di Learning Studio at "10 Jalan Ubi, Kampong Ubi Community Centre, #02-03, Singapore 409075"
- Added "Open in Google Maps" link with icon below the embedded map for better user experience
- Modified Book a Free Trial button to have no behavior (removed Calendly link) for future implementation
- Updated Facebook link to point to new business profile URL
- Enhanced blog post fetching with direct Plasmic API fallback
- Improved `/blog/[slug]` page handling with dynamic routing
- Completely overhauled mobile navigation with proper z-index management and display handling
- Fixed Logo link styling to ensure black text and no underline on hover
- Improved "Scroll to explore" indicator handling on different screen sizes
  - Hidden completely on mobile screens to prevent layout conflicts
  - Only visible on sm (small) screens and above
  - Properly centered on desktop/tablet displays
- Optimized Logo component to prevent text cutoff on mobile navbar
- Added improved error handling for Plasmic API responses
  - Enhanced error handling and diagnostics for CMS data fetching
  - Added automatic detection and recovery for API failures
  - Improved client-side experience with better state management during navigation
- Enhanced contact form to prevent redirects to FormSubmit confirmation page
  - Implemented client-side AJAX form submission
  - Added loading state with spinner during submission
  - Improved success/error notifications with icons
  - Fixed all form structure issues and syntax errors
- Improved mobile responsiveness for About page
  - Added founder image above text on mobile devices
  - Created dedicated mobile image container with appropriate sizing
  - Ensured logical content flow on small screens

### 2025-05-18
- **Contact Page Redesign**
  - Implemented new two-column layout with location cards and contact form
  - Added interactive Google Maps with proper embedding
  - Created copy-to-clipboard functionality for contact details
  - Built comprehensive contact form with validation and submission handling
  - Added social media integration with hover effects
  - Implemented responsive design for all screen sizes
  - Added developer notes for future CMS integration
  - Ensured accessibility compliance for all interactive elements
  - Added animations and transitions for better user experience

### 2025-05-17
- Initial project setup and scaffolding
- Created PRD document
- Set up page structure for all required routes
