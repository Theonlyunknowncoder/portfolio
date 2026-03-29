import { useRef, useState, useEffect, lazy, Suspense } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
const MergeVisual3D = lazy(() => import('./MergeVisual3D'));
import './About.css';

export default function About() {
  const ref = useScrollReveal();
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = rect.top - windowHeight;
      const end = rect.bottom;
      const total = end - start;
      const scrolled = -start;
      setScrollProgress(Math.max(0, Math.min(1, scrolled / total)));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="about-scroll section" id="about" ref={(el) => { ref.current = el; sectionRef.current = el; }}>
      <div className="container">
        <div className="about-scroll-grid">
          <div className="about-scroll-content">
            <span className="section-tag-light reveal">— the bridge</span>
            <h2 className="section-heading-light reveal delay-1">
              Why Both Worlds Matter
            </h2>

            <p className="about-text-light reveal delay-2">
              I'm not two different people with separate skills — I'm a developer who understands
              human attention. Being a frontend lead makes my video animations more structured.
              Being a video creator makes my Flutter UIs feel more intuitive and engaging.
            </p>

            <p className="about-text-light reveal delay-3">
              Every animation I design is informed by engineering precision.
              Every interface I code is driven by narrative instinct.
              The two don't compete — they compound.
            </p>

            <div className="about-badges reveal delay-4">
              <div className="about-badge">
                <span className="badge-icon">⚡</span>
                <div>
                  <strong>Engineering Mind</strong>
                  <p>Systems thinking, clean architecture, scalable code</p>
                </div>
              </div>
              <div className="about-badge">
                <span className="badge-icon">🎬</span>
                <div>
                  <strong>Creative Engine</strong>
                  <p>Visual storytelling, audience engagement, narrative pacing</p>
                </div>
              </div>
              <div className="about-badge">
                <span className="badge-icon">🔗</span>
                <div>
                  <strong>The Compound Effect</strong>
                  <p>Each discipline makes the other fundamentally stronger</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-scroll-visual reveal-right delay-2">
            <Suspense fallback={null}><MergeVisual3D scrollProgress={scrollProgress} /></Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
