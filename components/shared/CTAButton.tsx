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
        className={`border-accent text-text hover:bg-accent/10 ${className}`}
      >
        {text}
      </Button>
    );
  }

  return (
    <Button
      onClick={onClick}
      className={`bg-accent hover:bg-primary text-text ${className}`}
    >
      {text}
    </Button>
  );
};

export default CTAButton;