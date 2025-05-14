"use client";

import React from 'react';

interface MotionProps extends React.HTMLAttributes<HTMLDivElement> {
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  transition?: Record<string, any>;
  children?: React.ReactNode;
}

export const motion = {
  div: ({ initial, animate, transition, ...props }: MotionProps) => {
    const [isClient, setIsClient] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      setIsClient(true);
      
      if (ref.current && initial && animate) {
        // Simple CSS transition setup
        const element = ref.current;
        const duration = transition?.duration || 0.3;
        const delay = transition?.delay || 0;
        
        // Set initial styles
        Object.entries(initial).forEach(([key, value]) => {
          if (key === 'opacity') {
            element.style.opacity = String(value);
          } else if (key === 'y') {
            element.style.transform = `translateY(${value}px)`;
          } else if (key === 'x') {
            element.style.transform = `translateX(${value}px)`;
          } else if (key === 'scale') {
            element.style.transform = `scale(${value})`;
          }
        });
        
        // Apply transition
        element.style.transition = `all ${duration}s ease-out ${delay}s`;
        
        // Set timeout to apply animated styles
        setTimeout(() => {
          Object.entries(animate).forEach(([key, value]) => {
            if (key === 'opacity') {
              element.style.opacity = String(value);
            } else if (key === 'y') {
              element.style.transform = `translateY(${value}px)`;
            } else if (key === 'x') {
              element.style.transform = `translateX(${value}px)`;
            } else if (key === 'scale') {
              element.style.transform = `scale(${value})`;
            }
          });
        }, 50);
      }
    }, [initial, animate, transition]);

    return isClient ? (
      <div 
        ref={ref} 
        style={{ 
          opacity: initial?.opacity !== undefined ? initial.opacity : 1,
          transform: `
            ${initial?.y !== undefined ? `translateY(${initial.y}px)` : ''} 
            ${initial?.x !== undefined ? `translateX(${initial.x}px)` : ''}
            ${initial?.scale !== undefined ? `scale(${initial.scale})` : ''}
          `.trim() || 'none',
          transition: 'all 0.3s ease-out',
        }} 
        {...props} 
      />
    ) : (
      <div {...props} />
    );
  }
};