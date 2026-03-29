import { useEffect, useRef, useState, lazy, Suspense } from 'react';
const ParticleField = lazy(() => import('./ParticleField'));
import './Transition.css';

export default function Transition() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);
  const targetRef = useRef(0);

  useEffect(() => {
    // Smooth interpolation loop for buttery animation
    const animate = () => {
      setProgress(prev => {
        const diff = targetRef.current - prev;
        if (Math.abs(diff) < 0.001) return targetRef.current;
        return prev + diff * 0.12; // Smooth lerp factor
      });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = rect.top - windowHeight;
      const end = rect.bottom;
      const total = end - start;
      const scrolled = -start;
      targetRef.current = Math.max(0, Math.min(1, scrolled / total));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Easing function
  const ease = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const curtainRaw = Math.max(0, Math.min(1, (progress - 0.15) / 0.50));
  const curtainProgress = ease(curtainRaw);
  const leftX = -curtainProgress * 105;
  const rightX = curtainProgress * 105;

  const textIn = Math.max(0, Math.min(1, (progress - 0.1) / 0.2));
  const textOut = Math.max(0, Math.min(1, (progress - 0.8) / 0.15));
  const textOpacity = Math.min(textIn, 1 - textOut);
  const textY = (1 - ease(textIn)) * 50;
  const textScale = 0.9 + ease(textIn) * 0.1;

  // Fabric sway — subtle sine wave per panel
  const sway = Math.sin(progress * Math.PI * 2) * 0.5;
  const gatherScale = 1 + curtainProgress * 0.4;

  return (
    <section className="curtain-section" ref={sectionRef}>
      {/* 3D Particle field behind curtains */}
      <Suspense fallback={null}><ParticleField progress={progress} /></Suspense>

      {/* Revealed warm world */}
      <div className="curtain-revealed">
        <div className="revealed-orb orb-1"></div>
        <div className="revealed-orb orb-2"></div>
        <div className="revealed-orb orb-3"></div>
        <div className="revealed-spotlight"></div>
      </div>

      {/* Curtain rod */}
      <div className="curtain-rod">
        <div className="rod-finial rod-finial-l"></div>
        <div className="rod-bar"></div>
        <div className="rod-finial rod-finial-r"></div>
      </div>

      {/* Rings left */}
      <div className="curtain-rings rings-left" style={{ transform: `translateX(${leftX}%)` }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div className="ring-group" key={`l${i}`}>
            <div className="ring-hook"></div>
            <div className="ring"></div>
          </div>
        ))}
      </div>
      {/* Rings right */}
      <div className="curtain-rings rings-right" style={{ transform: `translateX(${rightX}%)` }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div className="ring-group" key={`r${i}`}>
            <div className="ring-hook"></div>
            <div className="ring"></div>
          </div>
        ))}
      </div>

      {/* LEFT curtain */}
      <div
        className="curtain-panel curtain-left"
        style={{
          transform: `translateX(${leftX}%) skewY(${sway}deg)`,
        }}
      >
        <div className="velvet">
          <div className="drape d1"></div>
          <div className="drape d2"></div>
          <div className="drape d3"></div>
          <div className="drape d4"></div>
          <div className="drape d5"></div>
          <div className="drape d6"></div>
          <div className="drape d7"></div>
        </div>
        <div className="fabric-texture"></div>
        <div className="curtain-hem"></div>
        <div className="inner-shadow is-right"></div>
        <div className="curtain-gather-edge" style={{ transform: `scaleX(${gatherScale})` }}></div>
      </div>

      {/* RIGHT curtain */}
      <div
        className="curtain-panel curtain-right"
        style={{
          transform: `translateX(${rightX}%) skewY(${-sway}deg)`,
        }}
      >
        <div className="velvet velvet-mirror">
          <div className="drape d1"></div>
          <div className="drape d2"></div>
          <div className="drape d3"></div>
          <div className="drape d4"></div>
          <div className="drape d5"></div>
          <div className="drape d6"></div>
          <div className="drape d7"></div>
        </div>
        <div className="fabric-texture"></div>
        <div className="curtain-hem"></div>
        <div className="inner-shadow is-left"></div>
        <div className="curtain-gather-edge ge-left" style={{ transform: `scaleX(${gatherScale})` }}></div>
      </div>

      {/* Center text */}
      <div
        className="curtain-center"
        style={{
          opacity: textOpacity,
          transform: `translateY(${textY}px) scale(${textScale})`,
        }}
      >
        <div className="sparkle-row">
          <span className="sparkle">✦</span>
          <span className="sparkle s2">✧</span>
          <span className="sparkle">✦</span>
        </div>
        <h2 className="curtain-title">
          When I close the laptop...
        </h2>
        <p className="curtain-subtitle">
          the story doesn't end — it changes medium.
        </p>
        <div className="sparkle-row">
          <span className="sparkle">✦</span>
          <span className="sparkle s2">✧</span>
          <span className="sparkle">✦</span>
        </div>
      </div>

      <div className="curtain-bottom-blend"></div>
    </section>
  );
}
