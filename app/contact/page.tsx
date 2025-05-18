'use client';

import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Copy } from 'lucide-react';

interface Location {
  id: string;
  title: string;
  address: string;
  phone: string;
  email: string;
  mapEmbedUrl: string;
  operatingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

// This would typically come from a CMS in production
const locations: Location[] = [
  {
    id: 'ubi',
    title: 'Ubi Branch (Main Studio)',
    address: '10 Jalan Ubi, Kampong Ubi Community Centre, #02-03, Singapore 409075',
    phone: '+65 8699 8667',
    email: 'contact@dadi.com.sg',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.788755105551!2d103.892723!3d1.2950088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da197a4d9f0a1f%3A0x9b5a3a11b3fcf166!2sKampong%20Ubi%20Community%20Club!5e0!3m2!1sen!2ssg',
    operatingHours: {
      weekdays: '9:00 AM - 7:00 PM',
      saturday: '9:00 AM - 5:00 PM',
      sunday: 'Closed'
    }
  }
];

// Social media links component with enhanced styling
const SocialMediaLinks = () => (
  <div className="bg-gray-50 py-12 px-6 rounded-2xl text-center">
    <h3 className="text-2xl font-bold text-foreground mb-6">Connect With Us</h3>
    <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
      Stay updated with our latest news, events, and learning tips by following us on social media.
    </p>
    <div className="flex justify-center space-x-8">
      {[
        { 
          name: 'Facebook', 
          icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          ),
          url: 'https://www.facebook.com/people/Da-Di-Learning-Studio/61575097831744/?mibextid=wwXIfr&rdid=iANFEfJDn6d5OLIN&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AVANaFSt8%2F%3Fmibextid%3DwwXIfr' 
        },
        { 
          name: 'Instagram', 
          icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          ),
          url: 'https://www.instagram.com/dadilearningstudio' 
        },
      ].map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-[#4C9A2A] transition-colors transform hover:-translate-y-1 duration-300"
          aria-label={social.name}
        >
          <span className="sr-only">{social.name}</span>
          {social.icon}
        </a>
      ))}
    </div>
  </div>
);

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  childAge: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
    childAge: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);

  // Form submission handling

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    // Let the form submit naturally to Formsubmit.co
    // We'll handle the success/error states on Formsubmit's success/error pages
    setIsSubmitting(true);
  };
  
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    // In a real app, you might want to show a toast notification
    alert('Copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <div className="w-24 h-1.5 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Ready to begin your child's learning adventure with Da Di? Our team is here to answer your questions and guide you through the enrollment process.
            </p>
          </div>
        </section>
        
        <div className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Our Location</h2>
              
              {locations.map((location) => (
                <div key={location.id} className="mb-8">
                  <h3 className="text-xl font-medium mb-4">{location.title}</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 p-2 bg-[#F0F7E6] rounded-lg">
                          <MapPin className="h-5 w-5 text-[#4C9A2A]" />
                        </div>
                        <div>
                          <p className="text-gray-700">{location.address}</p>
                          <button 
                            className="text-sm text-[#4C9A2A] hover:underline mt-1 flex items-center"
                            onClick={() => handleCopy(location.address)}
                          >
                            <Copy className="h-3.5 w-3.5 mr-1" /> Copy Address
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-[#F0F7E6] rounded-lg">
                          <Phone className="h-5 w-5 text-[#4C9A2A]" />
                        </div>
                        <div>
                          <p className="text-gray-700">{location.phone}</p>
                          <button 
                            className="text-sm text-[#4C9A2A] hover:underline mt-1 flex items-center"
                            onClick={() => handleCopy(location.phone.replace(/\D/g, ''))}
                          >
                            <Copy className="h-3.5 w-3.5 mr-1" /> Copy Number
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-[#F0F7E6] rounded-lg">
                          <Mail className="h-5 w-5 text-[#4C9A2A]" />
                        </div>
                        <div>
                          <p className="text-gray-700">{location.email}</p>
                          <button 
                            className="text-sm text-[#4C9A2A] hover:underline mt-1 flex items-center"
                            onClick={() => handleCopy(location.email)}
                          >
                            <Copy className="h-3.5 w-3.5 mr-1" /> Copy Email
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 pt-2">
                        <div className="p-2 bg-[#F0F7E6] rounded-lg">
                          <Clock className="h-5 w-5 text-[#4C9A2A]" />
                        </div>
                        <div className="text-base text-gray-700">
                          <p>Mon - Fri: {location.operatingHours.weekdays}</p>
                          <p>Sat: {location.operatingHours.saturday}</p>
                          <p>Sun: {location.operatingHours.sunday}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 aspect-video rounded-lg overflow-hidden">
                      <iframe
                        src={location.mapEmbedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`${location.title} on Google Maps`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <form 
                action="https://formsubmit.co/guangshin.tan@zerotoonestudios.com" 
                method="POST" 
                id="contact-form"
                className="space-y-6"
              >
                {/* Formsubmit.co Configuration */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Enquiry from Da Di Learning Studio" />
                <input type="hidden" name="_template" value="box" />
                {submitStatus && (
                  <div className={`p-4 rounded-md ${
                    submitStatus.success 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4C9A2A] focus:border-[#4C9A2A] outline-none transition"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4C9A2A] focus:border-[#4C9A2A] outline-none transition"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4C9A2A] focus:border-[#4C9A2A] outline-none transition"
                      placeholder="+65 1234 5678"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="_subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4C9A2A] focus:border-[#4C9A2A] outline-none transition"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="enrollment">Enrollment</option>
                      <option value="trial">Trial Class</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-1">
                      Child's Age (if applicable)
                    </label>
                    <input
                      type="text"
                      id="childAge"
                      name="child_age"
                      value={formData.childAge}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4C9A2A] focus:border-[#4C9A2A] outline-none transition"
                      placeholder="e.g., 5 years old"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4C9A2A] focus:border-[#4C9A2A] outline-none transition"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <div>
                  <div className="space-y-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#4C9A2A] hover:bg-[#3a7a21] text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                    >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                      ) : 'Send Message'}
                    </button>
                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you consent to us contacting you via email or phone. We respect your privacy.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          {/* Full width sections */}
          <div className="space-y-8">
            {/* Career Opportunities Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Join Our Team</h3>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-[#F0F7E6] rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4C9A2A]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 mb-4">Interested in joining our team? We're always looking for passionate educators to join our growing family.</p>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#4C9A2A]" />
                    <a 
                      href="mailto:careers@dadi.com.sg" 
                      className="text-[#4C9A2A] hover:underline font-medium"
                    >
                      careers@dadi.com.sg
                    </a>
                    <button 
                      onClick={() => handleCopy('careers@dadi.com.sg')}
                      className="text-[#4C9A2A] hover:text-[#3a7a21] ml-2"
                      aria-label="Copy email address"
                    >
                      <Copy className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <SocialMediaLinks />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
