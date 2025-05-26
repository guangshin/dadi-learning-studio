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
          operatingHours: 'Wednesday to Sunday: 9:00 AM - 6:00 PM\nMonday and Tuesday: Closed\nPublic Holidays: Closed'
        }]);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, []);
