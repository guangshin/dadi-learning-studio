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
  childAge: string;
  subject: string;
  message: string;
};

export function CampaignContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    subject: 'general',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
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
        childAge: '',
        subject: 'general',
        message: '',
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
      <div className="flex items-center gap-3 mb-2">
        <div className="h-2 w-6 bg-[#A5D66F] rounded-full"></div>
        <h3 className="text-2xl font-bold text-[#2C2C2C]">Send Us a Message</h3>
      </div>
      <p className="text-gray-600 mb-6 ml-9">We'll get back to you within 1 working day.</p>
      
      {submitStatus && (
        <div 
          className={`mt-4 p-4 rounded-lg text-sm ${submitStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}
        >
          {submitStatus.message}
        </div>
      )}
      
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-[#4C9A2A] focus:border-[#4C9A2A]"
            placeholder="Your name"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-[#4C9A2A] focus:border-[#4C9A2A]"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-[#4C9A2A] focus:border-[#4C9A2A]"
              placeholder="+65 1234 5678"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-1">
            Child's Age (if applicable)
          </label>
          <Input
            id="childAge"
            name="childAge"
            type="text"
            value={formData.childAge}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-[#4C9A2A] focus:border-[#4C9A2A]"
            placeholder="e.g., 5-7"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Enquiry Type <span className="text-red-500">*</span>
          </label>
          <Select 
            name="subject" 
            value={formData.subject} 
            onValueChange={(value) => handleSelectChange('subject', value)}
          >
            <SelectTrigger className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring-[#4C9A2A] focus:border-[#4C9A2A]">
              <SelectValue placeholder="Select an enquiry type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">General Enquiry</SelectItem>
              <SelectItem value="trial">Book a Trial Class</SelectItem>
              <SelectItem value="feedback">Feedback</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            className="min-h-[140px] w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:ring-[#4C9A2A] focus:border-[#4C9A2A]"
            placeholder="How can we help you?"
          />
        </div>
        
        <div className="pt-2">
          <Button 
            type="submit" 
            className="w-full h-12 bg-[#4C9A2A] hover:bg-[#3a7a21] text-white text-base font-medium rounded-lg transition-colors duration-200"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
      </div>
    </form>
  );
}
