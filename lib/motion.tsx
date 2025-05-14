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
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
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

    // Always render the animated div, so SSR/CSR matches and content is visible immediately
    return (
      <div
        ref={ref}
        style={{
          opacity: animate?.opacity ?? initial?.opacity ?? 1,
          transform: `
            ${animate?.y !== undefined ? `translateY(${animate.y}px)` : initial?.y !== undefined ? `translateY(${initial.y}px)` : ''}
            ${animate?.x !== undefined ? `translateX(${animate.x}px)` : initial?.x !== undefined ? `translateX(${initial.x}px)` : ''}
            ${animate?.scale !== undefined ? `scale(${animate.scale})` : initial?.scale !== undefined ? `scale(${initial.scale})` : ''}
          `.trim() || 'none',
          transition: `all ${transition?.duration ?? 0.3}s ease-out ${transition?.delay ?? 0}s`,
        }}
        {...props}
      />
    );
  }
};