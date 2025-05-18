'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ProgrammeCardProps {
  title: string;
  tagline: string;
  summary: string;
  details: string[];
  color: 'green1' | 'green2' | 'green3' | 'yellow';
  image: string;
  features?: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  showGalleryAfter?: boolean;
}

const colorMap = {
  green1: {
    bg: 'bg-[#4C9A2A]/10',
    text: 'text-[#4C9A2A]',
    border: 'border-[#4C9A2A]/30',
    button: 'bg-[#4C9A2A] hover:bg-[#3E7E22] text-white',
  },
  green2: {
    bg: 'bg-[#7BC043]/10',
    text: 'text-[#7BC043]',
    border: 'border-[#7BC043]/30',
    button: 'bg-[#7BC043] hover:bg-[#68A337] text-white',
  },
  green3: {
    bg: 'bg-[#B2D732]/10',
    text: 'text-[#B2D732]',
    border: 'border-[#B2D732]/30',
    button: 'bg-[#B2D732] hover:bg-[#9BBE2D] text-gray-900',
  },
  yellow: {
    bg: 'bg-[#FDE74C]/10',
    text: 'text-[#FDE74C]',
    border: 'border-[#FDE74C]/30',
    button: 'bg-[#FDE74C] hover:bg-[#F5E03E] text-gray-900',
  },
};

export function ProgrammeCard({ 
  title, 
  tagline, 
  summary, 
  details, 
  color, 
  image,
  features = [],
  showGalleryAfter = false
}: ProgrammeCardProps) {
  // Details are collapsed by default
  const [isExpanded, setIsExpanded] = useState(false);
  const colors = colorMap[color];

  // Function to render detail items with special handling for the "What to expect" heading
  const renderDetailItem = (detail: string, index: number) => {
    if (detail === 'What to expect:') {
      return (
        <h4 key={index} className="text-sm font-semibold mt-4 mb-2 text-gray-900">
          {detail}
        </h4>
      );
    } else if (detail.startsWith('• ')) {
      return (
        <li key={index} className="flex items-start">
          <span className={`${colors.text} mr-2 mt-1`}>•</span>
          <span>{detail.substring(2)}</span>
        </li>
      );
    }
    return <p key={index} className="mb-3">{detail}</p>;
  };

  return (
    <div className="space-y-8">
      <div className={`rounded-2xl overflow-hidden border ${colors.border} ${colors.bg} transition-all duration-300`}>
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{title}</h2>
              <p className="text-sm md:text-base text-gray-600 mb-4">{tagline}</p>
              <p className="text-sm text-gray-700 mb-6">{summary}</p>
              
              {/* Feature Cards */}
              <div className="mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {features.map((feature, idx) => (
                    <div key={idx} className="p-4 bg-white/70 rounded-lg border border-gray-100 hover:shadow-sm transition-all">
                      <div className="flex items-start gap-3">
                        <div className={`w-7 h-7 rounded-full ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                          <span className={`${colors.text} text-sm`}>
                            {feature.icon}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-1.5">{feature.title}</h4>
                          <p className="text-xs text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className={`${colors.button} px-4 py-2.5 text-sm rounded-lg font-medium transition-colors flex items-center gap-1.5`}
              >
                {isExpanded ? (
                  <>
                    Show Less
                    <ChevronUp size={16} />
                  </>
                ) : (
                  <>
                    Learn More
                    <ChevronDown size={16} />
                  </>
                )}
              </button>
            </div>
            
            <div className="w-full md:w-5/12 lg:w-4/12 h-48 md:h-56 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
                <span>Image: {title}</span>
              </div>
            </div>
          </div>
          
          {isExpanded && details.length > 0 && (
            <div className="mt-6 pt-6 border-t border-gray-100">
              <h3 className="text-sm font-semibold mb-3 text-gray-900">Programme Details</h3>
              <div className="space-y-3 text-sm text-gray-700">
                {details.map((detail, index) => renderDetailItem(detail, index))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
