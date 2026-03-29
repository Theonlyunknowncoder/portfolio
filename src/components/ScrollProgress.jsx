import { useState, useEffect } from 'react';
import './ScrollProgress.css';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Interpolate teal → orange
  const r = Math.round(0 + progress * 255);
  const g = Math.round(255 - progress * 148);
  const b = Math.round(200 - progress * 147);
  const color = `rgb(${r}, ${g}, ${b})`;

  return (
    <div className="scroll-progress-container">
      <div className="scroll-progress-track">
        <div
          className="scroll-progress-fill"
          style={{
            height: `${progress * 100}%`,
            background: `linear-gradient(to bottom, #00ffc8, ${color})`,
            boxShadow: `0 0 12px ${color}40, 0 0 4px ${color}80`,
          }}
        />
        <div
          className="scroll-progress-dot"
          style={{
            top: `${progress * 100}%`,
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}, 0 0 20px ${color}60`,
          }}
        />
      </div>
    </div>
  );
}
