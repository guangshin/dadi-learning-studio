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
      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
    >
      <h2 className="text-2xl font-semibold mb-2">Send Us a Message</h2>
      <p className="text-gray-600 mb-6">We'll get back to you within 1 working day.</p>
      
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
