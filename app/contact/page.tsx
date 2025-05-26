'use client';

import { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Copy, MessageSquare } from 'lucide-react';
import { fetchContactInfo, type ContactInfo } from '@/lib/fetchContactInfo';
import { fetchBranches, type Branch } from '@/lib/fetchBranches';

// Represents a location with contact information and operating hours
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
  
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    phone: "+6586998667",
    email: "contact@dadi.com.sg",
    calendlyUrl: "https://calendly.com/contact-dadi/2hrs",
    instagramLink: "https://www.instagram.com/dadilearningstudio",
    facebookLink: "https://www.facebook.com/profile.php?id=61575097831744"
  });
  
  const [locations, setLocations] = useState<Location[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);
  
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        // Fetch contact info
        const info = await fetchContactInfo();
        setContactInfo(info);
        console.log('Contact info loaded from CMS:', info);
        
        // Fetch branches
        const branches = await fetchBranches();
        console.log('Branches loaded from CMS:', branches);
        
        // Convert branch data to location format
        if (branches.length > 0) {
          const formattedLocations = branches.map(branch => {
            // Parse operating hours from the CMS text field
            const hoursLines = branch.operatingHours.split('\n');
            let weekdays = '', saturday = '', sunday = '';
            
            if (hoursLines.length >= 1) weekdays = hoursLines[0];
            if (hoursLines.length >= 2) saturday = hoursLines[1];
            if (hoursLines.length >= 3) sunday = hoursLines[2];
            
            return {
              id: branch.id,
              title: branch.title,
              address: branch.address,
              phone: info.phone,
              email: info.email,
              mapEmbedUrl: branch.mapEmbedUrl,
              operatingHours: {
                weekdays,
                saturday,
                sunday
              }
            };
          });
          
          setLocations(formattedLocations);
        } else {
          // Fallback location if no branches found
          setLocations([{
            id: 'eunos',
            title: 'Eunos Branch (Main Studio)',
            address: '10 Jalan Ubi, Kampong Ubi Community Centre, #02-03, Singapore 409075 (Opposite Eunos MRT)',
            phone: info.phone,
            email: info.email,
            mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.785197998048!2d103.89041258255615!3d1.319989299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da18335cf5ef73%3A0xdf6e31cfca048cfd!2sDa%20Di%20Learning%20Studio!5e0!3m2!1sen!2ssg!4v1716347995637!5m2!1sen!2ssg',
            operatingHours: {
              weekdays: 'Wednesday to Sunday: 9:00 AM - 6:00 PM',
              saturday: 'Monday and Tuesday: Closed',
              sunday: 'Public Holidays: Closed'
            }
          }]);
        }
      } catch (error) {
        console.error('Error loading data:', error);
        // Set fallback location if data fetching fails
        setLocations([{
          id: 'eunos',
          title: 'Eunos Branch (Main Studio)',
          address: '10 Jalan Ubi, Kampong Ubi Community Centre, #02-03, Singapore 409075 (Opposite Eunos MRT)',
          phone: contactInfo.phone,
          email: contactInfo.email,
          mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.785197998048!2d103.89041258255615!3d1.319989299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da18335cf5ef73%3A0xdf6e31cfca048cfd!2sDa%20Di%20Learning%20Studio!5e0!3m2!1sen!2ssg!4v1716347995637!5m2!1sen!2ssg',
          operatingHours: {
            weekdays: 'Wednesday to Sunday: 9:00 AM - 6:00 PM',
            saturday: 'Monday and Tuesday: Closed',
            sunday: 'Public Holidays: Closed'
          }
        }]);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); // Prevent the default form submission
    
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Create form data
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('childAge', formData.childAge);
      
      // Add FormSubmit.co specific fields
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('_subject', 'New Enquiry from Da Di Learning Studio');
      formDataToSend.append('_template', 'box');
      formDataToSend.append('_next', window.location.href); // This prevents redirection
      
      // Send the form data using fetch
      const response = await fetch(
        'https://formsubmit.co/ajax/contact@dadi.com.sg', 
        {
          method: 'POST',
          body: formDataToSend
        }
      );
      
      const responseData = await response.json();
      
      if (response.ok) {
        // Success
        setSubmitStatus({
          success: true,
          message: 'Thank you for your message! We will get back to you soon.'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'general',
          message: '',
          childAge: ''
        });
        
        // Scroll to the success message
        const formElement = document.getElementById('contact-form');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // Error
        setSubmitStatus({
          success: false,
          message: responseData.message || 'There was an error sending your message. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'There was an error sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
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
              Start your child's learning journey with Da Di today.
            </p>
          </div>
        </section>
        
        <div className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* General Enquiries Section */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-semibold mb-6 text-gray-900">General Enquiries</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-[#F0F7E6] rounded-lg">
                      <Phone className="h-5 w-5 text-[#4C9A2A]" />
                    </div>
                    <div>
                      <p className="text-gray-700">{contactInfo.phone}</p>
                      <button 
                        className="text-sm text-[#4C9A2A] hover:underline mt-1 flex items-center"
                        onClick={() => handleCopy(contactInfo.phone)}
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
                      <p className="text-gray-700">{contactInfo.email}</p>
                      <button 
                        className="text-sm text-[#4C9A2A] hover:underline mt-1 flex items-center"
                        onClick={() => handleCopy(contactInfo.email)}
                      >
                        <Copy className="h-3.5 w-3.5 mr-1" /> Copy Email
                      </button>
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-2 bg-[#F0F7E6] rounded-lg">
                        <MessageSquare className="h-5 w-5 text-[#4C9A2A]" />
                      </div>
                      <p className="text-gray-700 font-medium">Connect with us on social media:</p>
                    </div>
                    <div className="flex space-x-6 pl-14">
                      <a 
                        href={contactInfo.instagramLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#4C9A2A] transition-colors flex flex-col items-center group"
                        aria-label="Instagram"
                      >
                        <div className="p-2 bg-[#F0F7E6] rounded-full group-hover:bg-[#E0EDD1] transition-colors">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="1.5" />
                            <circle cx="12" cy="12" r="4.5" strokeWidth="1.5" />
                            <circle cx="18" cy="6" r="1" fill="currentColor" />
                          </svg>
                        </div>
                        <span className="text-xs mt-1">Instagram</span>
                      </a>
                      
                      <a 
                        href={contactInfo.facebookLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#4C9A2A] transition-colors flex flex-col items-center group"
                        aria-label="Facebook"
                      >
                        <div className="p-2 bg-[#F0F7E6] rounded-full group-hover:bg-[#E0EDD1] transition-colors">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" strokeWidth="1.5" />
                          </svg>
                        </div>
                        <span className="text-xs mt-1">Facebook</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Book a Trial Section */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-semibold mb-6 text-gray-900">Book a Trial Class</h2>
                <div className="space-y-6">
                  <p className="text-gray-700">
                    Ready to experience our teaching style? Book a free trial class with us!
                  </p>
                  <div className="pt-2">
                    <a
                      href={contactInfo.calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-[#4C9A2A] border border-transparent rounded-md shadow-sm hover:bg-[#3e7e22] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4C9A2A] transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      Book a Free Trial
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Our Locations Section */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-semibold mb-6 text-gray-900">Our Location(s)</h2>
                {isLoading ? (
                  <div className="animate-pulse space-y-4">
                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-20 bg-gray-200 rounded"></div>
                  </div>
                ) : locations.map((location) => (
                  <div key={location.id} className="space-y-4">
                    <h3 className="text-xl font-medium text-gray-900">{location.title}</h3>
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
                      
                      <div className="mt-4 aspect-video rounded-lg overflow-hidden relative group">
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
                        <a 
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <div className="bg-white hover:bg-gray-50 px-6 py-3 rounded-full shadow-lg flex items-center text-gray-800 font-medium text-lg transition-colors">
                            <svg className="w-6 h-6 mr-2 text-[#4C9A2A]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                              <path d="M12 10a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                            Open in Google Maps
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Contact Form */}
            <div id="enquiryform" className="scroll-mt-20">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Send Us a Message</h2>
                <p className="text-gray-600">We'll get back to you within 1 working day.</p>
              </div>
              
              <form 
                id="contact-form"
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                {submitStatus && (
                  <div className={`p-5 rounded-md ${
                    submitStatus.success 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  } flex items-start`}>
                    <div className={`mr-3 flex-shrink-0 ${submitStatus.success ? 'text-green-600' : 'text-red-600'}`}>
                      {submitStatus.success ? (
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{submitStatus.success ? 'Success!' : 'Error!'}</p>
                      <p className="mt-1">{submitStatus.message}</p>
                    </div>
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
                    placeholder="De Cheng Lim"
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
                      placeholder="you@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4C9A2A] focus:border-[#4C9A2A] outline-none transition"
                      placeholder="+65 xxxx xxxx"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Enquiry Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4C9A2A] focus:border-[#4C9A2A] outline-none transition"
                  >
                    <option value="general">General Enquiry</option>
                    <option value="programme">Programme Information</option>
                    <option value="trial">Book a Trial Class</option>
                    <option value="fees">Fee Structure</option>
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
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4C9A2A] focus:border-[#4C9A2A] outline-none transition"
                    placeholder="e.g. 5 years old"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4C9A2A] focus:border-[#4C9A2A] outline-none transition"
                    placeholder="Please provide details about your enquiry..."
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full sm:w-auto px-6 py-3 text-white font-medium rounded-lg transition-colors ${isSubmitting ? 'bg-[#78B86C] cursor-not-allowed' : 'bg-[#4C9A2A] hover:bg-[#3A7420]'}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Careers Banner */}
          <div className="mt-16 bg-[#F8F9F7] rounded-2xl p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Join Our Team</h3>
              <p className="text-gray-700 mb-6">Passionate about teaching Mandarin? We're always looking for dedicated educators to join our growing family.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="mailto:contact@dadi.com.sg" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#4C9A2A] hover:bg-[#3a7a21] transition-colors"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  contact@dadi.com.sg
                </a>
                <button 
                  onClick={() => handleCopy('contact@dadi.com.sg')}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-[#4C9A2A] hover:text-[#3a7a21]"
                >
                  <Copy className="mr-1.5 h-4 w-4" />
                  Copy Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
