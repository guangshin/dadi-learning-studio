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
    <div style={{ display: "inline-block", textAlign: "center", lineHeight: 1, ...style }} className={className}>
      <svg width={svgWidth} height={svgHeight} viewBox="0 0 170 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {circleData.map((c, i) => (
          <g key={i}>
            <circle
              cx={21 + i * 42}
              cy={20}
              r={18}
              fill={c.color}
            />
            <text
              x={21 + i * 42}
              y={27}
              textAnchor="middle"
              fontSize="22"
              fontWeight="bold"
              fill="#fff"
              fontFamily="'Noto Sans SC', 'Microsoft YaHei', 'Arial', sans-serif"
            >
              {c.char}
            </text>
          </g>
        ))}
      </svg>
      <div style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 700, fontSize: 13, letterSpacing: 1, marginTop: 2 }}>
        Da Di Learning Studio
      </div>
    </div>
  );
}
