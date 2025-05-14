"use client";

import { useState, useEffect, useRef, RefObject } from 'react';

interface InViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useInView({
  threshold = 0,
  rootMargin = '0px',
  triggerOnce = false,
}: InViewOptions = {}) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const enteredViewRef = useRef(false);

  useEffect(() => {
    if (enteredViewRef.current && triggerOnce) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setInView(isIntersecting);

        if (isIntersecting) {
          enteredViewRef.current = true;
          
          if (triggerOnce && observerRef.current && ref.current) {
            observerRef.current.unobserve(ref.current);
          }
        }
      },
      { threshold, rootMargin }
    );

    observerRef.current = observer;

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current && observer) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, inView };
}