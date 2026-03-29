import useScrollReveal from '../hooks/useScrollReveal';
import './Extracurricular.css';

const activities = [
  {
    id: 1,
    title: 'Geeks For Geeks',
    description: 'Event & Management Head at the GeeksforGeeks Campus Body, leading event planning, coordination, and execution of technical activities.',
    icon: '💚',
    tags: ['Event Management', 'Leadership', 'Technical Activities'],
  },
  {
    id: 2,
    title: 'HackBIOS',
    description: 'Coordinator & Management Team Member at HackBIOS Hackathon, contributing to event organization, participant coordination, and smooth execution.',
    icon: '🏆',
    tags: ['Hackathon', 'Coordination', 'Event Organization'],
  },
  {
    id: 3,
    title: 'Syntax Squad Community',
    description: 'Core member of the Syntax Squad Community, involved in organizing and engaging in tech-related initiatives and community-driven projects.',
    icon: '💻',
    tags: ['Community', 'Tech Initiatives', 'Collaboration'],
  },
  {
    id: 4,
    title: 'Trinity Club',
    description: 'Active member of the Trinity Club at SSTC, contributing to technical events and collaborative learning activities.',
    icon: '🔺',
    tags: ['Technical Events', 'Learning', 'Collaboration'],
  },
];

export default function Extracurricular() {
  const ref = useScrollReveal();

  return (
    <section className="extra-section section" id="extracurricular" ref={ref}>
      <div className="container">
        <span className="section-tag reveal">// extracurricular</span>
        <h2 className="section-heading-dark reveal delay-1">Extracurricular</h2>
        <p className="section-subheading-dark reveal delay-2">
          Clubs, communities, and hackathons that shaped my leadership and teamwork.
        </p>

        <div className="extra-grid">
          {activities.map((act, index) => (
            <div className={`extra-card reveal delay-${index + 1}`} key={act.id}>
              <div className="extra-icon-wrap">
                <span className="extra-icon">{act.icon}</span>
              </div>
              <h3 className="extra-title">{act.title}</h3>
              <p className="extra-desc">{act.description}</p>
              <div className="extra-tags">
                {act.tags.map((tag) => (
                  <span className="extra-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
