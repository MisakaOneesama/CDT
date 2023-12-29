import React, { useEffect, useRef } from 'react';

const RoundCompletionGraph = ({ percentage }) => {
  const circleRef = useRef();

  useEffect(() => {
    const circle = circleRef.current;
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = ((100 - percentage) / 100) * circumference;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = offset;
  }, [percentage]);

  return (
    <svg height="100" width="100">
      <circle
        ref={circleRef}
        cx="50"
        cy="50"
        r="40"
        stroke="#3498db"
        strokeWidth="8"
        fill="transparent"
      />
    </svg>
  );
};

export default RoundCompletionGraph;
