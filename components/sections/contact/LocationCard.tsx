'use client';

import { MapPin, Phone, Mail, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LocationCardProps {
  title: string;
  address: string;
  phone: string;
  email: string;
  mapEmbedUrl: string;
}

export function LocationCard({ title, address, phone, email, mapEmbedUrl }: LocationCardProps) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You might want to add a toast notification here
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1">
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-2 w-6 bg-[#A5D66F] rounded-full"></div>
          <h3 className="text-2xl font-bold text-[#2C2C2C] font-quicksand">{title}</h3>
        </div>
        
        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <div className="mt-1 p-2 bg-[#F0F7E6] rounded-lg">
              <MapPin className="h-5 w-5 text-[#4C9A2A]" />
            </div>
            <div className="flex-1">
              <p className="text-[#2C2C2C] font-opensans text-base">{address}</p>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-xs text-[#4C9A2A] hover:text-[#3a7a21] p-0 h-auto mt-1.5 font-medium hover:bg-transparent"
                onClick={() => copyToClipboard(address)}
              >
                <Copy className="h-3.5 w-3.5 mr-1.5" /> Copy Address
              </Button>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="p-2 bg-[#F0F7E6] rounded-lg">
              <Phone className="h-5 w-5 text-[#4C9A2A]" />
            </div>
            <div className="flex-1">
              <p className="text-[#2C2C2C] font-opensans text-base">{phone}</p>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-xs text-[#4C9A2A] hover:text-[#3a7a21] p-0 h-auto mt-1.5 font-medium hover:bg-transparent"
                onClick={() => copyToClipboard(phone.replace(/\D/g, ''))}
              >
                <Copy className="h-3.5 w-3.5 mr-1.5" /> Copy Number
              </Button>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="p-2 bg-[#F0F7E6] rounded-lg">
              <Mail className="h-5 w-5 text-[#4C9A2A]" />
            </div>
            <div className="flex-1">
              <p className="text-[#2C2C2C] font-opensans text-base">{email}</p>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-xs text-[#4C9A2A] hover:text-[#3a7a21] p-0 h-auto mt-1.5 font-medium hover:bg-transparent"
                onClick={() => copyToClipboard(email)}
              >
                <Copy className="h-3.5 w-3.5 mr-1.5" /> Copy Email
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative h-64 w-full border-t border-gray-100 bg-gray-100 overflow-hidden">
        <img
          src={`https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(address)}&zoom=15&size=600x400&maptype=roadmap&markers=color:red%7C${encodeURIComponent(address)}&key=YOUR_GOOGLE_MAPS_API_KEY`}
          alt={`Map showing ${title}`}
          className="w-full h-full object-cover"
        />
        <a 
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/5 transition-colors group"
          aria-label={`Open ${title} in Google Maps`}
        >
          <span className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-gray-200 group-hover:bg-gray-50 transition-colors">
            Open in Google Maps
          </span>
        </a>
      </div>
    </div>
  );
}
