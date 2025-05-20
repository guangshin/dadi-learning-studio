import React from "react";

/**
 * Da Di Learning Studio logo: Four colored circles with Chinese characters inside, English below.
 */
const circleData = [
  { char: "大", color: "#4C9A2A" },
  { char: "地", color: "#7BC043" },
  { char: "学", color: "#B2D732" },
  { char: "堂", color: "#FDE74C" },
];

export default function Logo({ style, className, height = 40 }: { style?: React.CSSProperties; className?: string; height?: number }) {
  // Maintain aspect ratio for width
  const aspect = 4.25; // 170/40
  const svgHeight = height;
  const svgWidth = height * aspect;

  return (
    <div 
      style={{ 
        display: "inline-block", 
        textAlign: "center", 
        lineHeight: 1.2, // Increased line height
        ...style 
      }} 
      className={className}
    >
      <svg 
        width={svgWidth} 
        height={svgHeight * 0.85} // Reduced height for circles to leave more room for text
        viewBox="0 0 170 36" // Adjusted viewBox
        preserveAspectRatio="xMidYMid meet"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {circleData.map((c, i) => (
          <g key={i}>
            <circle
              cx={21 + i * 42}
              cy={18} // Moved circles up slightly
              r={16} // Slightly smaller circles
              fill={c.color}
            />
            <text
              x={21 + i * 42}
              y={24} // Adjusted text position
              textAnchor="middle"
              fontSize="20" // Slightly smaller text
              fontWeight="bold"
              fill="#fff"
              fontFamily="'Noto Sans SC', 'Microsoft YaHei', 'Arial', sans-serif"
            >
              {c.char}
            </text>
          </g>
        ))}
      </svg>
      <div 
        style={{ 
          fontFamily: 'Montserrat, Arial, sans-serif', 
          fontWeight: 700, 
          fontSize: 13, 
          letterSpacing: 1, 
          marginTop: 2,
          paddingBottom: 2, // Added padding at the bottom
          overflow: "visible" // Ensure text isn't cut off
        }}
      >
        Da Di Learning Studio
      </div>
    </div>
  );
}
