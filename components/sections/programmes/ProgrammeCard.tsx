'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ProgrammeCardProps {
  title: string;
  tagline: string;
  summary: string;
  details: string[];
  color: 'green' | 'yellow' | 'neutral';
  image: string;
}

const colorMap = {
  green: {
    bg: 'bg-[#E8F5E9]',
    text: 'text-[#2E7D32]',
    border: 'border-[#A5D66F]',
    button: 'bg-[#A5D66F] hover:bg-[#8BC34A] text-white',
  },
  yellow: {
    bg: 'bg-[#FFF8E1]',
    text: 'text-[#F57F17]',
    border: 'border-[#FFD54F]',
    button: 'bg-[#FFF385] hover:bg-[#FFEB3B] text-gray-800',
  },
  neutral: {
    bg: 'bg-white',
    text: 'text-gray-700',
    border: 'border-gray-200',
    button: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
  },
};

export function ProgrammeCard({ title, tagline, summary, details, color, image }: ProgrammeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const colors = colorMap[color];

  return (
    <div className={`rounded-2xl overflow-hidden shadow-md border ${colors.border} ${colors.bg} transition-all duration-300`}>
      <div className="p-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
            <p className="text-lg font-medium text-gray-600 mb-4">{tagline}</p>
            <p className="text-gray-700 mb-6">{summary}</p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {details.slice(0, 3).map((detail, index) => (
                <span key={index} className="text-sm px-3 py-1 rounded-full bg-white/50 text-gray-700">
                  {detail}
                </span>
              ))}
            </div>
            
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className={`${colors.button} px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2`}
            >
              {isExpanded ? (
                <>
                  Show Less
                  <ChevronUp size={18} />
                </>
              ) : (
                <>
                  Learn More
                  <ChevronDown size={18} />
                </>
              )}
            </button>
          </div>
          
          <div className="w-full md:w-1/3 h-48 md:h-auto rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
              <span>Image: {title}</span>
            </div>
          </div>
        </div>
        
        {isExpanded && (
          <div className="mt-6 pt-6 border-t border-gray-100">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span className="text-gray-700">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
