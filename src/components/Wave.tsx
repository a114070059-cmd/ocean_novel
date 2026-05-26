import React from 'react';

interface WaveProps {
  direction?: 'top' | 'bottom';
  className?: string;
}

export default function Wave({ direction = 'bottom', className = '' }: WaveProps) {
  const rotation = direction === 'top' ? 'rotate-180' : '';
  
  return (
    <div className={`absolute left-0 w-full overflow-hidden ${direction === 'top' ? '-top-1' : '-bottom-1'} ${rotation} ${className}`}>
      <svg
        viewBox="0 0 1440 200"
        className="block w-full h-auto"
        fill="currentColor"
        preserveAspectRatio="none"
      >
        <path d="M0 64L48 58.7C96 53.3 192 42.7 288 42.7C384 42.7 480 53.3 576 74.7C672 96 768 128 864 133.3C960 138.7 1056 117.3 1152 112C1248 106.7 1344 117.3 1392 122.7L1440 128V200H0V64Z"></path>
      </svg>
    </div>
  );
}
