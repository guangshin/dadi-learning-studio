import { ReactNode } from 'react';

type Card = {
  title: string;
  description: string;
  icon: ReactNode;
  color: 'green' | 'yellow' | 'blue';
};

interface CardGridProps {
  cards: Card[];
  className?: string;
}

const colorMap = {
  green: {
    bg: 'bg-green-50',
    text: 'text-green-700',
    border: 'border-green-200',
  },
  yellow: {
    bg: 'bg-yellow-50',
    text: 'text-yellow-700',
    border: 'border-yellow-200',
  },
  blue: {
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    border: 'border-blue-200',
  },
};

export function CardGrid({ cards, className = '' }: CardGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {cards.map((card, index) => {
        const colors = colorMap[card.color];
        return (
          <div 
            key={index} 
            className={`p-6 rounded-xl border ${colors.border} ${colors.bg} transition-all hover:shadow-md`}
          >
            <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center mb-4`}>
              <span className={`${colors.text} text-xl`}>
                {card.icon}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        );
      })}
    </div>
  );
}
