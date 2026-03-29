import useScrollReveal from '../hooks/useScrollReveal';
import './CreatorSection.css';

 

const creatorSkills = [
  { name: 'Scripting', icon: '✍️' },
  { name: 'Storyboarding', icon: '🎬' },
  { name: 'Animation', icon: '🎞️' },
  { name: 'Motion Graphics', icon: '✨' },
  { name: 'Video Editing', icon: '🎥' },
  { name: 'Visual Design', icon: '🎨' },
  { name: 'Research', icon: '🔍' },
  { name: 'Social Media', icon: '📲' },
  { name: 'Content Strategy', icon: '📋' },
    { name: 'Premire Pro', icon: '🎞️' },

  ];

export default function CreatorSection() {
  const ref = useScrollReveal();

  return (
    <section className="creator-section section" id="creator" ref={ref}>
      <div className="container">
        {/* Section header */}
        <div className="creator-header">
          <span className="section-tag-light reveal">— the creative engine</span>
          <h2 className="section-heading-light reveal delay-1">What I've Created</h2>
          <p className="section-subheading-light reveal delay-2">
             
          </p>
        </div>

        {/* Creator project cards */}
         
        {/* The Process */}
        <div className="process-section">
          <h3 className="section-heading-light-sm reveal">The Process</h3>
          <div className="process-steps">
            {['🔍 Research', '✍️ Script', '🎨 Storyboard', '🎞️ Animate', '🚀 Publish'].map((step, i) => (
              <div className={`process-step reveal delay-${i + 1}`} key={step}>
                <div className="process-number">{String(i + 1).padStart(2, '0')}</div>
                <span className="process-label">{step}</span>
                {i < 4 && <div className="process-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div className="creator-skills">
          <h3 className="section-heading-light-sm reveal">Creative Toolkit</h3>
          <div className="skills-grid">
            {creatorSkills.map((skill, index) => (
              <div className={`skill-item reveal delay-${(index % 5) + 1}`} key={skill.name}>
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
