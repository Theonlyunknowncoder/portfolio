import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import ScrollParallax from './ScrollParallax';
import './Hero.css';

export default function Hero() {
  const ref = useScrollReveal();

  return (
    <section className="hero-scroll" id="hero" ref={ref}>
      <div className="hero-bg-grid"></div>
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>
      <ScrollParallax />

      <div className="container hero-content">
        <div className="hero-badge reveal">
          &gt; yuvraj_sahu.init()
        </div>

        <h1 className="hero-title reveal delay-1">
          Building <span className="gradient-text-coder">innovative solutions.</span>
          <br />
          Solving <span className="gradient-text-creator">complex problems.</span>
        </h1>

        <p className="hero-subtitle reveal delay-2">
          Computer Science Student • Java Developer • Flutter Enthusiast
          <br />
          Scroll to explore my journey.
        </p>

        <div className="hero-ctas reveal delay-3">
          <a href="#coder" className="btn btn-coder">
            ⟩ The Code Side
          </a>
          <a href="#creator" className="btn btn-outline-dark">
            🎨 The Creative Side
          </a>
        </div>

        <div className="hero-scroll-indicator reveal delay-4">
          <div className="scroll-line"></div>
          <span className="scroll-text">scroll to explore</span>
        </div>
      </div>

      {/* Floating Events Button — bottom right */}
      <Link to="/events" className="hero-events-float reveal delay-5">
        <div className="events-float-icon">🎪</div>
        <div className="events-float-content">
          <span className="events-float-label">Events I Organized</span>
          <span className="events-float-sub">4+ events • View Timeline →</span>
        </div>
        <div className="events-float-pulse"></div>
      </Link>
    </section>
  );
}
