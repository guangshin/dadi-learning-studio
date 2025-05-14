"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PhoneCall, Mail, MapPin } from 'lucide-react';
import { motion } from '@/lib/motion';
import { useInView } from '@/lib/hooks';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your interest! We will contact you shortly to arrange your trial class.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact & Location</h2>
          <p className="text-gray-700 leading-relaxed">
            Ready to experience the Da Di difference? Book a trial class or reach out with any questions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 h-full">
              <div className="aspect-w-16 aspect-h-9 w-full h-[300px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7622990144035!2d103.89260841475395!3d1.3191699990356783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da181c17d1e855%3A0x31c5306176d46632!2sKampong%20Ubi%20Community%20Centre!5e0!3m2!1sen!2ssg!4v1654876543210!5m2!1sen!2ssg" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Da Di Learning Studio location"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-[#9BC53D] mt-1 mr-3" />
                    <p className="text-gray-700">10 Jalan Ubi, Kampong Ubi Community Centre, #02-03, Singapore 409075</p>
                  </div>
                  <div className="flex items-center">
                    <PhoneCall className="h-5 w-5 text-[#9BC53D] mr-3" />
                    <p className="text-gray-700">+65 8699 8667</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-[#9BC53D] mr-3" />
                    <p className="text-gray-700">contact@dadi.com.sg</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-6">Book a Trial Class</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 border-gray-200"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 border-gray-200"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 border-gray-200"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your interest (e.g., programme, age of learner)"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-gray-50 border-gray-200 min-h-[120px]"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-[#9BC53D] hover:bg-[#8AB22E] text-white"
                >
                  Book a Trial Class
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;