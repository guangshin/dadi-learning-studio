'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  location: string;
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    location: 'ubi',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      location: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // In a real app, you would send this data to your API

      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully! We\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        location: 'ubi',
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="h-2 w-6 bg-[#A5D66F] rounded-full"></div>
        <h3 className="text-2xl font-bold text-[#2C2C2C] font-quicksand">Send Us a Message</h3>
      </div>
      
      {submitStatus && (
        <div 
          className={`mt-4 p-4 rounded-lg text-sm font-opensans ${submitStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}
        >
          {submitStatus.message}
        </div>
      )}
      
      <div className="space-y-6">
        <div className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#2C2C2C] mb-2 font-opensans">
              Full Name <span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-gray-200 rounded-lg focus-visible:ring-2 focus-visible:ring-[#A5D66F] focus-visible:ring-offset-2"
              placeholder="Your name"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#2C2C2C] mb-2 font-opensans">
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-gray-200 rounded-lg focus-visible:ring-2 focus-visible:ring-[#A5D66F] focus-visible:ring-offset-2"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[#2C2C2C] mb-2 font-opensans">
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-gray-200 rounded-lg focus-visible:ring-2 focus-visible:ring-[#A5D66F] focus-visible:ring-offset-2"
              placeholder="+65 1234 5678"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-[#2C2C2C] mb-2 font-opensans">
              Preferred Location
            </label>
            <Select value={formData.location} onValueChange={handleSelectChange}>
              <SelectTrigger className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A5D66F] focus:ring-offset-2">
                <SelectValue placeholder="Select a location" className="font-opensans" />
              </SelectTrigger>
              <SelectContent className="border-gray-200 rounded-lg shadow-lg">
                <SelectItem value="ubi" className="font-opensans hover:bg-[#F0F7E6] focus:bg-[#F0F7E6]">
                  Ubi Branch (Main Studio)
                </SelectItem>
                {/* Add more locations as needed */}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="space-y-2">
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#2C2C2C] mb-2 font-opensans">
              Your Message <span className="text-red-500">*</span>
            </label>
            <Textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="min-h-[140px] w-full px-4 py-3 border border-gray-200 rounded-lg focus-visible:ring-2 focus-visible:ring-[#A5D66F] focus-visible:ring-offset-2 font-opensans"
              placeholder="How can we help you?"
            />
          </div>
        </div>
        
        <div className="pt-2">
          <Button 
            type="submit" 
            className="w-full h-12 bg-[#4C9A2A] hover:bg-[#3a7a21] text-white text-base font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
      </div>
    </form>
  );
}
