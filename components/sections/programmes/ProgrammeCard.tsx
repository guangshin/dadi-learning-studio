'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ProgrammeCardProps {
  title: string;
  tagline: string;
  summary: string;
  details: string[];
  features: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
  }>;
  color: 'green1' | 'green2' | 'green3' | 'yellow';
  image: string;
  tabContentP1P3?: string[];
  tabContentP4P6?: string[];
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
  features = [],
  color = 'green1',
  image,
  tabContentP1P3,
  tabContentP4P6,
  showGalleryAfter = false,
}: ProgrammeCardProps) {
  // Details are collapsed by default
  const [isExpanded, setIsExpanded] = useState(false);
  const colors = colorMap[color];

  // State for active tab
  const [activeTab, setActiveTab] = useState('P1–P3');

  // Function to render tab navigation and content
  const renderTabs = (details: string[]) => {
    const tabNames = [];
    let i = 0;
    
    // Find the TABS_START marker
    while (i < details.length && details[i] !== 'TABS_START') {
      i++;
    }
    
    // Collect tab names
    if (i < details.length) {
      i++; // Skip TABS_START
      while (i < details.length && details[i] !== 'TABS_END') {
        tabNames.push(details[i]);
        i++;
      }
    }
    
    // Get the active content based on the selected tab
    const activeContent = activeTab === 'P1–P3' 
      ? tabContentP1P3 || []
      : tabContentP4P6 || [];
    
    return (
      <div key="tab-content">
        <div className="flex border-b border-gray-200 mb-6">
          {tabNames.map((tabName) => (
            <button
              key={tabName}
              onClick={() => setActiveTab(tabName)}
              className={`px-4 py-2 font-medium text-sm ${activeTab === tabName
                ? 'border-b-2 border-primary text-primary'
                : 'text-gray-500 hover:text-gray-700'}`}
            >
              {tabName}
            </button>
          ))}
        </div>
        
        <div className="animate-fadeIn">
          {activeContent.map((content: string, idx: number) => (
            <div key={idx} className="mb-4">
              {renderContent(content, idx)}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  // Function to render detail items
  const renderDetailItem = (detail: string, index: number, details: string[]) => {
    // Handle tab navigation
    if (detail === 'TABS_START') {
      return renderTabs(details);
    }
    
    // Skip control markers
    if (detail === 'TABS_END' || detail.startsWith('TAB_CONTENT_')) {
      return null;
    }
    
    // Regular content rendering
    return renderContent(detail, index);
  };
  
  // Helper function to render different content types
  const renderContent = (content: string, index: number) => {
    // Skip tab names that are shown in the tab navigation
    if (content === 'P1–P3' || content === 'P4–P6') {
      return null;
    }
    
    // Handle section headers (text between ** **)
    if (content.startsWith('**') && content.endsWith('**')) {
      const text = content.slice(2, -2);
      return (
        <p key={index} className="font-semibold text-gray-900 mt-4 mb-2">
          {text}
        </p>
      );
    }
    // Handle bullet points
    else if (content.startsWith('• ')) {
      return (
        <li key={index} className="flex items-start mb-2">
          <span className={`${colors.text} mr-2 mt-1`}>•</span>
          <span className="text-gray-800">{content.substring(2)}</span>
        </li>
      );
    }
    // Handle regular paragraphs
      return (
      <p key={index} className="text-gray-700 mb-4 leading-relaxed">
        {content}
      </p>
    );
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
                {details.map((detail, index) => renderDetailItem(detail, index, details))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
