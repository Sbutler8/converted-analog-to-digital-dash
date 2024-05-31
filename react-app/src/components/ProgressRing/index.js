import { useState } from "react";

const ProgressRing = ({ ...props }) => {
  const [progress, setProgress] = useState(null);

  let normalizedRadius = radius - stroke * 2;
  let circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (props.speed / 100) * circumference;

  const interval = setInterval(() => {
    setProgress();
  });

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="white"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={this.circumference + " " + this.circumference}
        style={{ strokeDashoffset }}
        stroke-width={stroke}
        r={this.normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
};
