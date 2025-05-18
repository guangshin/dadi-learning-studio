import { Quote } from 'lucide-react';

interface TestimonialBannerProps {
  quote: string;
  author: string;
  color?: 'green' | 'yellow';
  className?: string;
}

export function TestimonialBanner({ 
  quote, 
  author, 
  color = 'green',
  className = '' 
}: TestimonialBannerProps) {
  const bgColor = color === 'green' ? 'bg-green-50' : 'bg-yellow-50';
  const textColor = color === 'green' ? 'text-green-700' : 'text-yellow-700';
  
  return (
    <div className={`py-12 ${bgColor} ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className={`w-8 h-8 mx-auto mb-4 ${textColor} opacity-50`} />
          <blockquote className="text-xl italic text-gray-700 mb-4">
            "{quote}"
          </blockquote>
          <p className="font-medium text-gray-600">— {author}</p>
        </div>
      </div>
    </div>
  );
}
