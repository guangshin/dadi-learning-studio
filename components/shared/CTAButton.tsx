"use client";

import { Button } from '@/components/ui/button';

interface CTAButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'default' | 'outline';
  className?: string;
}

const CTAButton = ({
  text,
  onClick,
  variant = 'default',
  className = '',
}: CTAButtonProps) => {
  if (variant === 'outline') {
    return (
      <Button
        variant="outline"
        onClick={onClick}
        className={`border-[#9BC53D] text-[#9BC53D] hover:bg-[#9BC53D]/10 ${className}`}
      >
        {text}
      </Button>
    );
  }

  return (
    <Button
      onClick={onClick}
      className={`bg-[#9BC53D] hover:bg-[#8AB22E] text-white ${className}`}
    >
      {text}
    </Button>
  );
};

export default CTAButton;