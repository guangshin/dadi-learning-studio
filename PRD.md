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

### 2025-05-27
- Contact page improvements:
  - Fixed section ordering to follow the specified sequence:
    - Mobile Order (top to bottom): Get in Touch → Book a Trial Class → Send us a Message → General Enquiries → Our Locations
    - Desktop Order: Top (Get in Touch), Left column (Book a Trial Class, General Enquiries, Our Locations), Right column (Send us a Message)
  - Added proper spacing to hero section to prevent header overlap
  - Fixed Google Maps embed to use fallback URL when CMS data is empty
  - Fixed form styling by explicitly setting white background for input fields with both className and inline styles
  - Changed form label from "Subject" to "Enquiry Type" for clarity
  - Updated "Book a Trial" button in header to link directly to Calendly
- Philosophy page improvements:
  - Increased top padding in hero section (from py-16 to pt-24 on mobile and pt-32 on desktop) to prevent content from being covered by the header on smaller screens
- Programmes page improvements:
  - Fixed the Moments gallery carousel to smoothly loop through all photos without abruptly resetting
  - Implemented a more robust infinite scroll by using three sets of images and seamless position transitioning
  - Added proper TypeScript type annotations to improve code quality
- Build improvements:
  - Fixed build errors by removing temporary files
  - Ensured successful production build with no critical errors
- Improved CMS data fetching reliability and performance:
  - Added robust timeout and retry mechanism to handle connection issues
  - Implemented fetchWithRetry utility function for all CMS API calls
  - Enhanced error handling and logging for better debugging
  - Extended timeout duration to 15 seconds with 3 retry attempts
  - Added exponential backoff strategy for failed API requests
- Fixed gallery images loading issue:
  - Improved error handling in MomentsGallery component
  - Added fallback for failed image loads to prevent UI breaking
  - Enhanced URL processing to ensure compatibility with Next.js Image component
  - Added better debugging tools including console logging of image data structure
  - Implemented filter to remove invalid image entries with empty URLs
- General system improvements:
  - Created reusable fetchWithRetry utility for all network requests
  - Improved error messages to provide more actionable information
  - Enhanced loading states with better visual feedback

### 2025-05-26
- Enhanced Contact page with comprehensive CMS integration:
  - Integrated branches information with CMS model to display multiple locations
  - Improved data handling to properly prioritize CMS data with fallbacks only when needed
  - Added validation for CMS data completeness to ensure reliable display
  - Refactored operating hours to use raw text format from CMS instead of structured JSON
  - Improved spacing between multiple branch locations with clear visual separation
  - Fixed Google Maps display on homepage by integrating with CMS data
  - Enhanced error handling for maps with appropriate fallbacks for different scenarios
  - Fixed contact page section order for proper mobile and desktop experience:
    - Mobile (top to bottom): Get in Touch → Book a Trial Class → Send us a Message → General Enquiries → Our Locations
    - Desktop: Top (Get in Touch), Left column (Book a Trial Class, General Enquiries, Our Locations), Right column (Send us a Message)
  - Created utility function to fetch branch data from CMS
  - Added loading state to location sections with animated placeholder
  - Updated API endpoint to handle branches data type
  - Created new ContactInfo model in CMS to store contact information
  - Added API endpoint to fetch contact information from CMS
  - Simplified hero text to be more concise
  - Updated Book a Trial Class button to link to Calendly URL from CMS (https://calendly.com/contact-dadi/2hrs)
  - All contact information (phone, email, social media links) now dynamically loaded from CMS
- Improved consistency across blog/insights section:
  - Changed "Insights & Articles" to "Insights" on the blog page header
  - Updated footer to change "Blog" to "Insights"
  - Changed "Back to Blog" button to "Back to Insights" on individual blog posts
  - Removed hardcoded author description from blog post pages
  - Fixed HTML entity rendering issues in blog previews to properly handle &nbsp; and other entities
- Fixed images on Philosophy page: swapped the incorrectly assigned images between "修 · Apply" and "静 · Stillness" sections
- Reordered homepage sections to follow the sequence: Meet the Founder, Media Features, What the Community Says
- Fixed programme section links in the homepage:
  - Updated Primary School link to '/programmes#primary'
  - Updated Secondary School link to '/programmes#secondary'
  - Updated Adult Learners link to '/programmes#adult'
  - Made Preschool button text color white for consistency
  - Changed Book a Free Trial button to link to the contact page
- Changed "Our Philosophy" to "Philosophy" in both header and footer for consistency
- Removed the "Scroll to explore" mouse animation from the homepage hero section

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
