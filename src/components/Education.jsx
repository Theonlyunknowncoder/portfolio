import useScrollReveal from '../hooks/useScrollReveal';
import './Education.css';

const education = [
  {
    id: 1,
    degree: 'B.Tech in Computer Science',
    institution: 'Shri Shankaracharya Technical Campus',
    period: '2023 — 2027',
    description: 'Focused on computer science fundamentals, data structures, algorithms, and software engineering. Active in tech clubs, hackathons, and event management — leading GFG Student Chapter as Event & Management Head.',
    courses: ['Data Structures', 'Algorithms', 'Software Engineering', 'Database Management', 'Operating Systems'],
    icon: '🎓',
  },
  {
    id: 2,
    degree: 'Higher Secondary (XII)',
    institution: 'kendriya vidyalaya mahasamund',
    period: '2020 — 2022',
    description: 'Science stream with focus on Mathematics and Computer Science. Developed early interest in programming and visual storytelling.',
    courses: ['Mathematics', 'Physics', 'Computer Science','Chemistry'],
    icon: '📚',
  },
];

export default function Education() {
  const ref = useScrollReveal();

  return (
    <section className="education-section section" id="education" ref={ref}>
      <div className="container">
        <span className="section-tag reveal">// education</span>
        <h2 className="section-heading-dark reveal delay-1">Education</h2>
        <p className="section-subheading-dark reveal delay-2">
          The academic foundation behind the code and the creativity.
        </p>

        <div className="education-grid">
          {education.map((edu, index) => (
            <div className={`edu-card reveal delay-${index + 1}`} key={edu.id}>
              <div className="edu-icon-wrap">
                <span className="edu-icon">{edu.icon}</span>
              </div>
              <div className="edu-content">
                <div className="edu-header">
                  <div>
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <span className="edu-institution">{edu.institution}</span>
                  </div>
                  <span className="edu-period">{edu.period}</span>
                </div>
                <p className="edu-desc">{edu.description}</p>
                <div className="edu-courses">
                  {edu.courses.map((c) => (
                    <span className="edu-course" key={c}>{c}</span>
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
