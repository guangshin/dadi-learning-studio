'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Copy, MessageSquare } from 'lucide-react';

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
      weekdays: '9:00 AM - 6:00 PM',
      saturday: '9:00 AM - 1:00 PM',
      sunday: 'Closed'
    }
  }
];

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    // Let the form submit naturally to Formsubmit.co
    setIsSubmitting(true);
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
              Ready to begin your child's learning adventure with Da Di? Our team is here to answer your questions and guide you through the enrollment process.
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
                      <p className="text-gray-700">+65 8699 8667</p>
                      <button 
                        className="text-sm text-[#4C9A2A] hover:underline mt-1 flex items-center"
                        onClick={() => handleCopy('+6586998667')}
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
                      <p className="text-gray-700">contact@dadi.com.sg</p>
                      <button 
                        className="text-sm text-[#4C9A2A] hover:underline mt-1 flex items-center"
                        onClick={() => handleCopy('contact@dadi.com.sg')}
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
                        href="https://www.instagram.com/dadilearningstudio" 
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
                        <span className="text-xs mt-1.5 text-gray-600">Instagram</span>
                      </a>
                      <a 
                        href="https://www.facebook.com/people/Da-Di-Learning-Studio/61575097831744/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#4C9A2A] transition-colors flex flex-col items-center group"
                        aria-label="Facebook"
                      >
                        <div className="p-2 bg-[#F0F7E6] rounded-full group-hover:bg-[#E0EDD1] transition-colors">
<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="1.5" />
  <circle cx="12" cy="12" r="4.5" strokeWidth="1.5" />
  <circle cx="18" cy="6" r="1" fill="currentColor" />
</svg>
                        </div>
                        <span className="text-xs mt-1.5 text-gray-600">Facebook</span>
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
                    Ready to experience our teaching style? Book a free 30-minute trial class with us!
                  </p>
                  <div className="pt-2">
                    <a
                      href="https://calendly.com/tanguangshin/30min"
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
                  <p className="text-sm text-gray-500">
                    After booking, you'll receive a confirmation email with the class details.
                  </p>
                </div>
              </div>

              {/* Our Locations Section */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-semibold mb-6 text-gray-900">Our Location(s)</h2>
                {locations.map((location) => (
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
                      
                      <div className="mt-4 aspect-video rounded-lg overflow-hidden">
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
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-6">We'll get back to you within 1 working day.</p>
              
              <form 
                action="https://formsubmit.co/guangshin.tan@zerotoonestudios.com" 
                method="POST" 
                id="contact-form"
                className="space-y-6"
                onSubmit={handleSubmit}
              >
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
                      name="subject"
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
                      name="childAge"
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

          {/* Careers Banner */}
          <div className="mt-16 bg-[#F8F9F7] rounded-2xl p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Join Our Team</h3>
              <p className="text-gray-700 mb-6">Passionate about teaching Mandarin? We're always looking for dedicated educators to join our growing family.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="mailto:careers@dadi.com.sg" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#4C9A2A] hover:bg-[#3a7a21] transition-colors"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  careers@dadi.com.sg
                </a>
                <button 
                  onClick={() => handleCopy('careers@dadi.com.sg')}
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
