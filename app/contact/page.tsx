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
  iframe: string; // Added iframe field from CMS Branches model
  operatingHours: string; // Single string with complete operating hours information
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
  
  // Initialize with empty values, will be populated from CMS
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    phone: "",
    email: "",
    calendlyUrl: "",
    instagramLink: "",
    facebookLink: ""
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
        // Only update if we got valid data
        if (info && info.phone && info.email) {
          setContactInfo(info);
          console.log('Contact info loaded from CMS:', info);
        } else {
          console.warn('Contact info from CMS is incomplete, using fallbacks');
          setContactInfo({
            phone: "+6586998667",
            email: "contact@dadi.com.sg",
            calendlyUrl: "https://calendly.com/contact-dadi/2hrs",
            instagramLink: "https://www.instagram.com/dadilearningstudio",
            facebookLink: "https://www.facebook.com/profile.php?id=61575097831744"
          });
        }
        
        // Fetch branches
        const branches = await fetchBranches();
        console.log('Branches loaded from CMS:', branches);
        
        // Convert branch data to location format
        if (branches.length > 0) {
          const formattedLocations = branches.map(branch => {
            return {
              id: branch.id,
              title: branch.title,
              address: branch.address,
              phone: info.phone,
              email: info.email,
              // If mapEmbedUrl is empty from CMS, use a default URL generated from the address
              mapEmbedUrl: branch.mapEmbedUrl || `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(branch.address)}`,
              iframe: branch.iframe || "", // Added iframe field
              operatingHours: branch.operatingHours // Use the operating hours directly as a string
            };
          });
          
          console.log(`Loaded ${formattedLocations.length} locations from CMS`);
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
            iframe: '', // Added empty iframe field for fallback location
            operatingHours: 'Wednesday to Sunday: 9:00 AM - 6:00 PM\nMonday and Tuesday: Closed\nPublic Holidays: Closed'
          }]);
        }
      } catch (error) {
        console.error('Error loading data:', error);
        // Set fallback contact info if data fetching fails
        setContactInfo({
          phone: "+6586998667",
          email: "contact@dadi.com.sg",
          calendlyUrl: "https://calendly.com/contact-dadi/2hrs",
          instagramLink: "https://www.instagram.com/dadilearningstudio",
          facebookLink: "https://www.facebook.com/profile.php?id=61575097831744"
        });
        
        // Set fallback location if data fetching fails
        setLocations([{
          id: 'eunos',
          title: 'Eunos Branch (Main Studio)',
          address: '10 Jalan Ubi, Kampong Ubi Community Centre, #02-03, Singapore 409075 (Opposite Eunos MRT)',
          phone: "+6586998667", // Use hardcoded fallback instead of potentially empty contactInfo
          email: "contact@dadi.com.sg", // Use hardcoded fallback instead of potentially empty contactInfo
          mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.785197998048!2d103.89041258255615!3d1.319989299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da18335cf5ef73%3A0xdf6e31cfca048cfd!2sDa%20Di%20Learning%20Studio!5e0!3m2!1sen!2ssg!4v1716347995637!5m2!1sen!2ssg',
          iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.763132830001!2d103.90070659999999!3d1.3177573999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da181a92e11a3d%3A0x484e3638ce52c330!2sKampong%20Ubi%20Community%20Centre!5e0!3m2!1sen!2smy!4v1748256926235!5m2!1sen!2smy" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
          operatingHours: 'Wednesday to Sunday: 9:00 AM - 6:00 PM\nMonday and Tuesday: Closed\nPublic Holidays: Closed'
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
      <main>
        {/* Hero Section - Styled like programmes page */}
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-background to-[#f5f7f0]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 leading-tight">Get in Touch</h1>
              <p className="text-xl text-text/80 mb-8 max-w-3xl mx-auto">
                Start your child&apos;s learning journey with Da Di today.
              </p>
            </div>
          </div>
        </section>
        
        <div className="container mx-auto px-4 py-8">
          {/* Content Layout */}
          <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column - Desktop & Top Sections - Mobile */}
          <div className="lg:w-1/2 space-y-10">
            {/* Book a Trial Class Section */}
            <section id="BookTrialClass" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 scroll-mt-32 pt-8">
              <h2 className="text-2xl font-semibold mb-4">Book a Trial Class</h2>
              <p className="text-gray-700 mb-6">
                Ready to experience our teaching style? Book a free trial class with us!
              </p>
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
            </section>
            
            {/* General Enquiries Section */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold mb-6">General Enquiries</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
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
                
                <div className="flex items-start gap-4">
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
            </section>
            
            {/* Our Locations Section */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold mb-6">Our Location(s)</h2>
              {isLoading ? (
                <div className="animate-pulse space-y-4">
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-20 bg-gray-200 rounded"></div>
                </div>
              ) : (
                locations.map((location, index) => (
                  <div key={location.id} className={`space-y-6 ${index > 0 ? 'mt-16 pt-16 border-t-2 border-gray-200' : ''}`}>
                    <h3 className="text-xl font-medium text-gray-900">{location.title}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-[#F0F7E6] rounded-lg">
                          <MapPin className="h-5 w-5 text-[#4C9A2A]" />
                        </div>
                        <div className="text-base text-gray-700">
                          {location.address}
                          <button 
                            className="text-sm text-[#4C9A2A] hover:underline mt-1 block"
                            onClick={() => handleCopy(location.address)}
                          >
                            <span className="flex items-center">
                              <Copy className="h-3.5 w-3.5 mr-1" /> Copy Address
                            </span>
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-[#F0F7E6] rounded-lg">
                          <Clock className="h-5 w-5 text-[#4C9A2A]" />
                        </div>
                        <div className="text-base text-gray-700">
                          {location.operatingHours.split('\n').map((line, index) => (
                            <p key={index} className="mb-2">{line}</p>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-4 rounded-lg overflow-hidden relative group">
                        {/* Check if iframe is a complete HTML string (containing '<iframe') */}
                        {location.iframe && location.iframe.includes('<iframe') ? (
                          <div 
                            className="w-full min-h-[300px] rounded-lg overflow-hidden"
                            dangerouslySetInnerHTML={{ 
                              __html: location.iframe.replace(
                                /width="(\d+)" height="(\d+)"/,
                                'width="100%" height="100%" style="border:0; position: absolute; top: 0; left: 0; width: 100%; height: 100%; min-height: 300px;"'
                              )
                            }}
                            style={{ position: 'relative', paddingBottom: '75%', height: 0 }}
                          />
                        ) : (
                          <div className="w-full min-h-[300px] rounded-lg overflow-hidden" style={{ position: 'relative', paddingBottom: '75%', height: 0 }}>
                            <iframe
                              src={location.iframe || location.mapEmbedUrl || `https://www.google.com/maps/embed?q=${encodeURIComponent(location.address)}`}
                              className="rounded-lg"
                              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              title={`${location.title} on Google Maps`}
                              onError={(e) => {
                                console.log(`Failed to load map for ${location.title}`);
                                // If the iframe fails to load, show the fallback
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement?.nextElementSibling?.classList.remove('hidden');
                              }}
                            />
                          </div>
                        )}
                        {/* Fallback placeholder if iframe fails to load */}
                        <div className="hidden flex items-center justify-center h-full bg-gray-200 text-gray-600 absolute inset-0">
                          <p>Map not available</p>
                        </div>
                        <a 
                          href={location.mapEmbedUrl ? 
                            // Extract coordinates from the embed URL if available
                            location.mapEmbedUrl.includes('@') ? 
                              `https://www.google.com/maps/place/${location.mapEmbedUrl.split('@')[1].split(',')[0]},${location.mapEmbedUrl.split('@')[1].split(',')[1]}` :
                              // Fallback to search by address
                              `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}` :
                            // Default fallback to Da Di's location
                            `https://www.google.com/maps/place/1.319989,103.8904126`
                          }
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
                ))
              )}
            </section>
          </div>
          
          {/* Right Column - Form */}
          <div className="lg:w-1/2 order-first lg:order-last mb-10 lg:mb-0">
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-6">We&apos;ll get back to you within 1 working day.</p>
              
              <form 
                id="contact-form"
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                {submitStatus && (
                  <div className={`p-4 ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'} rounded-md flex gap-3 items-start`}>
                    <div className="shrink-0 pt-0.5">
                      <svg className={`h-5 w-5 ${submitStatus.success ? 'text-green-500' : 'text-red-500'}`} fill="currentColor" viewBox="0 0 20 20">
                        {submitStatus.success ? (
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        ) : (
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        )}
                      </svg>
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-[#4C9A2A] focus:border-[#4C9A2A] text-gray-900"
                    style={{ backgroundColor: "white" }}
                  />
                </div>
                
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-[#4C9A2A] focus:border-[#4C9A2A] text-gray-900"
                    style={{ backgroundColor: "white" }}
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-[#4C9A2A] focus:border-[#4C9A2A] text-gray-900"
                    style={{ backgroundColor: "white" }}
                  />
                </div>
                
                <div>
                  <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-1">
                    Child&apos;s Age (if applicable)
                  </label>
                  <input
                    type="text"
                    id="childAge"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-[#4C9A2A] focus:border-[#4C9A2A] text-gray-900"
                    style={{ backgroundColor: "white" }}
                  />
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-[#4C9A2A] focus:border-[#4C9A2A] text-gray-900"
                    style={{ backgroundColor: "white" }}
                  >
                    <option value="general">General Enquiry</option>
                    <option value="trial">Book a Trial Class</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-[#4C9A2A] focus:border-[#4C9A2A] text-gray-900"
                    style={{ backgroundColor: "white" }}
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 bg-[#4C9A2A] hover:bg-[#3e7e22] focus:ring-4 focus:ring-[#4C9A2A] focus:ring-opacity-50 text-white font-medium rounded-md shadow transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
