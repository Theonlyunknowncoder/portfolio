import useScrollReveal from '../hooks/useScrollReveal';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: 'Java Development Intern',
    company: 'Cognifyz Technologies — Remote',
    period: 'May 2025 – June 2025',
    description: 'Worked on core Java development tasks, focusing on object-oriented programming principles and clean code practices. Assisted in building and debugging Java-based modules under the guidance of senior developers. Demonstrated strong attention to detail, timely task delivery, and eagerness to learn new concepts. Collaborated effectively with the team, enhancing communication and coordination skills in a remote work environment.',
    highlights: ['Java OOP', 'Clean Code', 'Module Debugging', 'Remote Collaboration'],
    icon: '☕',
  },
];

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section className="experience-section section" id="experience" ref={ref}>
      <div className="container">
        <span className="section-tag reveal">// experience</span>
        <h2 className="section-heading-dark reveal delay-1">Where I've Worked</h2>
        <p className="section-subheading-dark reveal delay-2">
          Gaining real-world industry experience through hands-on internships.
        </p>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className={`timeline-item reveal delay-${index + 1}`} key={exp.id}>
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="tc-header">
                  <div className="tc-left">
                    <span className="tc-icon">{exp.icon}</span>
                    <div>
                      <h3 className="tc-role">{exp.role}</h3>
                      <span className="tc-company">{exp.company}</span>
                    </div>
                  </div>
                  <span className="tc-period">{exp.period}</span>
                </div>
                <p className="tc-desc">{exp.description}</p>
                <div className="tc-highlights">
                  {exp.highlights.map((h) => (
                    <span className="tc-tag" key={h}>{h}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
