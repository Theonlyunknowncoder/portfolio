import useScrollReveal from '../hooks/useScrollReveal';
import TiltCard from './TiltCard';
import './CoderSection.css';

const projects = [
  {
    id: 1,
    title: 'Pomodoro Timer & Task Management App',
    role: 'Full-Stack Developer',
    description: 'Developed a cross-platform productivity application with Flutter featuring a Pomodoro timer and a responsive, modern task management system. Designed a user-friendly interface with adaptive theming (light/dark mode), persistent task lists with priority and due dates, and integrated Firebase authentication for secure user sessions.',
    tags: ['Flutter', 'Dart', 'Firebase', 'UI/UX Design', 'State Management'],
    icon: '⏱️',
  },
  {
    id: 2,
    title: 'Bluetooth-Based PC Remote Folder Access',
    role: 'Android & Desktop Developer',
    description: 'Developed an offline system to securely unlock a Windows PC using an Android app over Bluetooth. Integrated biometric and PIN authentication on Android with encrypted communication, enabled dynamic remote folder control, and implemented a custom Bluetooth RFCOMM protocol for bidirectional messaging with security audit logging.',
    tags: ['Kotlin', 'C#', 'WPF', 'Bluetooth RFCOMM', 'Encryption'],
    icon: '📡',
  },
];

const techStack = [
  { name: 'C/C++', icon: '⚙️' },
  { name: 'Java', icon: '☕' },
  { name: 'Flutter', icon: '📱' },
  { name: 'Dart', icon: '🎯' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'HTML', icon: '🌐' },
  { name: 'CSS', icon: '🎨' },
  { name: 'Git', icon: '🔀' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'Kotlin', icon: '🟣' },
  { name: 'Data Structures', icon: '🧩' },
  { name: 'Problem Solving', icon: '💡' },
];

export default function CoderSection() {
  const ref = useScrollReveal();

  return (
    <section className="coder-section section" id="coder" ref={ref}>
      <div className="container">
        {/* Section header */}
        <div className="coder-header">
          <span className="section-tag reveal">// projects</span>
          <h2 className="section-heading-dark reveal delay-1">What I've Built</h2>
          <p className="section-subheading-dark reveal delay-2">
            From productivity apps to embedded Bluetooth systems — engineering solutions that solve real problems.
          </p>
        </div>

        {/* Project cards grid — with 3D tilt */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className={`reveal delay-${index + 1}`}>
              <TiltCard className="project-card-dark">
                <div className="pcd-header">
                  <span className="pcd-icon">{project.icon}</span>
                  <span className="pcd-role">{project.role}</span>
                </div>
                <h3 className="pcd-title">{project.title}</h3>
                <p className="pcd-desc">{project.description}</p>
                <div className="pcd-tags">
                  {project.tags.map((tag) => (
                    <span className="pcd-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </TiltCard>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="tech-section">
          <span className="section-tag reveal">// tech_stack</span>
          <h3 className="section-heading-dark-sm reveal delay-1">Technologies I Work With</h3>
          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <div className={`tech-item reveal delay-${(index % 5) + 1}`} key={tech.name}>
                <span className="tech-icon">{tech.icon}</span>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
