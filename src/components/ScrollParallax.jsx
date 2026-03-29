import { useEffect, useRef, useState } from 'react';
import './ScrollParallax.css';

const codeSymbols = [
  { text: '{ }', x: 8, y: 15, layer: 1, size: 2.2 },
  { text: '< />', x: 78, y: 20, layer: 2, size: 1.8 },
  { text: '//', x: 25, y: 60, layer: 1, size: 1.5 },
  { text: '=>', x: 85, y: 55, layer: 3, size: 2 },
  { text: '[ ]', x: 15, y: 80, layer: 2, size: 1.6 },
  { text: '&&', x: 65, y: 75, layer: 1, size: 1.4 },
  { text: '( )', x: 50, y: 12, layer: 3, size: 1.7 },
  { text: '!=', x: 92, y: 40, layer: 2, size: 1.3 },
  { text: '::',  x: 40, y: 85, layer: 3, size: 1.5 },
  { text: '/**/', x: 5, y: 45, layer: 1, size: 1.2 },
  { text: '++', x: 72, y: 90, layer: 2, size: 1.6 },
  { text: '|>', x: 35, y: 30, layer: 3, size: 1.4 },
];

export default function ScrollParallax() {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const layerSpeed = { 1: 0.03, 2: 0.06, 3: 0.1 };

  return (
    <div className="scroll-parallax" ref={containerRef}>
      {codeSymbols.map((sym, i) => {
        const speed = layerSpeed[sym.layer];
        const yOffset = scrollY * speed;
        const opacity = sym.layer === 1 ? 0.08 : sym.layer === 2 ? 0.12 : 0.18;

        return (
          <span
            key={i}
            className={`parallax-symbol layer-${sym.layer}`}
            style={{
              left: `${sym.x}%`,
              top: `${sym.y}%`,
              fontSize: `${sym.size}rem`,
              transform: `translateY(${-yOffset}px) rotate(${scrollY * 0.02 * (i % 2 === 0 ? 1 : -1)}deg)`,
              opacity,
            }}
          >
            {sym.text}
          </span>
        );
      })}
    </div>
  );
}
