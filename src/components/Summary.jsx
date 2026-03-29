import useScrollReveal from '../hooks/useScrollReveal';
import useCountUp from '../hooks/useCountUp';
import './Summary.css';

function AnimatedStat({ end, suffix = '', desc }) {
  const [ref, displayValue] = useCountUp(end, 2000, suffix);

  return (
    <div className="stat-card" ref={ref}>
      <span className="stat-number-lg">{displayValue}</span>
      <span className="stat-desc">{desc}</span>
    </div>
  );
}

export default function Summary() {
  const ref = useScrollReveal();

  return (
    <section className="summary-section section" id="summary" ref={ref}>
      <div className="container">
        <div className="summary-grid">
          <div className="summary-content">
            <span className="section-tag reveal">// summary</span>
            <h2 className="section-heading-dark reveal delay-1">
              At a Glance
            </h2>
            <p className="summary-text reveal delay-2">
              I am a motivated computer science student with a solid foundation in programming,
              data structures, and software development. I have experience in academic projects
              and coding competitions demonstrating problem-solving and teamwork skills.
            </p>
            <p className="summary-text reveal delay-3">
              I am actively seeking a software development internship to apply my technical
              knowledge in a real-world setting and gain valuable industry exposure. Beyond
              academics, I lead events and manage communities that drive student engagement in tech.
            </p>
          </div>

          <div className="summary-stats reveal-right delay-2">
            <AnimatedStat end={2} suffix="+" desc="Major Projects Built" />
            <AnimatedStat end={1} suffix="" desc="Industry Internship" />
            <AnimatedStat end={10} suffix="+" desc="Events Organized" />
            <AnimatedStat end={1000} suffix="+" desc="Students Impacted" />
          </div>
        </div>
      </div>
    </section>
  );
}
