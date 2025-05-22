import React from "react";
import Image from "next/image";

/**
 * Da Di Learning Studio logo
 */
export default function Logo({ style, className, height = 60 }: { style?: React.CSSProperties; className?: string; height?: number }) {
  // Calculate width based on the aspect ratio of the SVG (approximately 4.25:1)
  const aspectRatio = 4.25;
  const width = Math.round(height * aspectRatio);

  return (
    <div 
      style={{ 
        display: "inline-block",
        position: 'relative',
        height: `${height}px`,
        width: `${width}px`,
        ...style 
      }} 
      className={className}
    >
      <Image 
        src="/dadi-logo.svg" 
        alt="Da Di Learning Studio Logo"
        width={width}
        height={height}
        priority
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          objectPosition: 'left center'
        }}
      />
    </div>
  );
}
