import { useState, useEffect, useRef } from 'react';
import './LoadingScreen.css';

const loadingMessages = [
  { text: '> booting systems...', at: 0 },
  { text: '> loading assets...', at: 8 },
  { text: '> importing stylesheets...', at: 18 },
  { text: '> compiling components...', at: 30 },
  { text: '> fetching projects data...', at: 42 },
  { text: '> rendering gallery...', at: 55 },
  { text: '> initializing scroll engine...', at: 68 },
  { text: '> preparing curtain animation...', at: 78 },
  { text: '> polishing pixels...', at: 88 },
  { text: '> experience ready. welcome.', at: 97 },
];

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0); // 0: loading, 1: text reveal, 2: exit
  const [visibleLogs, setVisibleLogs] = useState([]);
  const hasTriggeredComplete = useRef(false);

  useEffect(() => {
    // Slower, more deliberate progress — ~4.5 sec total
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Slower non-linear progress with pauses
        const remaining = 100 - prev;
        const speed = prev < 20 ? 0.04 : prev < 50 ? 0.035 : prev < 80 ? 0.03 : 0.05;
        const increment = Math.max(0.2, remaining * speed);
        return Math.min(100, prev + increment);
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // Add terminal log lines as progress increases
  useEffect(() => {
    const currentLogs = loadingMessages.filter(m => progress >= m.at);
    if (currentLogs.length > visibleLogs.length) {
      setVisibleLogs(currentLogs);
    }
  }, [progress, visibleLogs.length]);

  // Trigger completion phases
  useEffect(() => {
    if (progress >= 100 && !hasTriggeredComplete.current) {
      hasTriggeredComplete.current = true;
      setTimeout(() => setPhase(1), 400);
      setTimeout(() => setPhase(2), 1800);
      setTimeout(() => onComplete(), 2600);
    }
  }, [progress, onComplete]);

  return (
    <div className={`loading-screen ${phase === 2 ? 'loading-exit' : ''}`}>
      {/* Background grid */}
      <div className="loading-grid"></div>

      {/* Floating particles */}
      <div className="loading-particles">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
            }}
          />
        ))}
      </div>

      {/* Center content */}
      <div className="loading-center">
        {/* Logo */}
        <div className={`loading-logo ${phase >= 1 ? 'logo-reveal' : ''}`}>
          <span className="loading-bracket">&lt;</span>
          <span className="loading-name">Portfolio</span>
          <span className="loading-bracket">/&gt;</span>
        </div>

        {/* Tagline */}
        <p className={`loading-tagline ${phase >= 1 ? 'tagline-reveal' : ''}`}>
          Developer · Creator · Storyteller
        </p>

        {/* Terminal log */}
        <div className="loading-terminal">
          <div className="terminal-log-header">
            <span className="tlh-dot dot-r"></span>
            <span className="tlh-dot dot-y"></span>
            <span className="tlh-dot dot-g"></span>
            <span className="tlh-title">init.sh</span>
          </div>
          <div className="terminal-log-body">
            {visibleLogs.map((log, i) => (
              <p
                key={i}
                className={`tl-line ${i === visibleLogs.length - 1 ? 'tl-latest' : ''}`}
              >
                <span className="tl-prompt">$</span> {log.text}
              </p>
            ))}
            {progress < 100 && (
              <p className="tl-line">
                <span className="tl-prompt">$</span> <span className="tl-cursor">_</span>
              </p>
            )}
          </div>
        </div>

        {/* Progress bar */}
        <div className="loading-progress-container">
          <div className="loading-progress-track">
            <div
              className="loading-progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="loading-progress-info">
            <span className="loading-status">
              {progress < 100 ? 'initializing...' : '✓ complete'}
            </span>
            <span className="loading-percent">{Math.round(progress)}%</span>
          </div>
        </div>
      </div>

      {/* Exit curtains */}
      <div className={`loading-curtain-left ${phase === 2 ? 'curtain-exit' : ''}`}></div>
      <div className={`loading-curtain-right ${phase === 2 ? 'curtain-exit' : ''}`}></div>
    </div>
  );
}
