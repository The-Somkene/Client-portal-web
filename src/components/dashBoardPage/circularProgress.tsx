import React from "react";

export default function CircularProgress({ percent }) {
  const radius = 90;
  const stroke = 24;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex justify-center items-center">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#E4DFF8"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#5D45F3"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="20"
          fill="#111827"
          fontWeight="bold"
        >
          {percent}%
        </text>
      </svg>
    </div>
  );
}
