import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      <div className="navbar-inner container">
        <a href="#hero" className="navbar-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Portfolio</span>
          <span className="logo-bracket">/&gt;</span>
        </a>
        <div className="navbar-links">
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#coder" className="nav-link">Projects</a>
          <a href="#creator" className="nav-link">Creative</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
}
