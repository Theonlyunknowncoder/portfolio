import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './EventsPage.css';

const events = [
  {
    id: 1,
    title: 'Kickstart with GitHub & Open Source',
    role: 'Event & Management Head And Anchor',
    org: 'GeeksforGeeks Student Chapter — SSTC',
    period: '23/03/2025',
    date: 'COMPLETED',
    description: ' Organized and coordinated an offline technical session focused on GitHub and open-source contributions. The event introduced participants to version control, real-world project collaboration, and the fundamentals of contributing to open source. Featuring industry experts including a GitHub Campus Expert and academic leadership, the session provided hands-on insights and guided students toward starting their open-source journey.',
    highlights: ['Event Planning', 'Team Leadership', 'Technical Workshops', 'Student Engagement'],
    stats: { attendees: '50+',teamSize: '8', eventsRun: '1+' },
    photos: [
      '/assets/Kickstart with GitHub & Open Source/1.jpg',
      '/assets/Kickstart with GitHub & Open Source/2.jpg',
      '/assets/Kickstart with GitHub & Open Source/3.jpg',
      '/assets/Kickstart with GitHub & Open Source/4.jpg',
      '/assets/Kickstart with GitHub & Open Source/5.jpg',
    ],
    gradient: 'linear-gradient(135deg, #00c853 0%, #b2ff59 100%)',
    icon: '🔺',
    type: 'organized',
  },
  {
    id: 2,
    title: 'UAV Navigation and Control Boot Camp',
    role: 'Coordinator & Management Team',
    org: 'SSTC Hackathon Committee',
    period: '13/02/2026 - 17/02/2026',
    date: 'COMPLETED',
    description: 'Played a key role in organizing a 5-day technical bootcamp on UAV Navigation and Control, featuring expert-led sessions on aerodynamics, UAV modelling, and real-world applications. Managed event coordination, logistics, and participant engagement, contributing to a highly interactive and knowledge-driven learning experience.',
    highlights: [ 'Logistics', 'Participant Coordination', 'Mentor Management'],
    stats: { attendees: '200+', teamSize: '10+', eventsRun: '1' },
    photos: [
      '/assets/UAV Navigation and Control Boot Camp/1.JPG',
      '/assets/UAV Navigation and Control Boot Camp/2.jpg',
      '/assets/UAV Navigation and Control Boot Camp/3.jpg',
      '/assets/UAV Navigation and Control Boot Camp/4.jpg',
      '/assets/UAV Navigation and Control Boot Camp/5.jpg',
      '/assets/UAV Navigation and Control Boot Camp/6.jpg',
      '/assets/UAV Navigation and Control Boot Camp/7.jpg',
      '/assets/UAV Navigation and Control Boot Camp/8.jpg',
    ],
    gradient: 'linear-gradient(135deg, #ffd600 0%, #ff6d00 100%)',
    icon: '🔺',
    type: 'organized',
  },
  {
    id: 3,
    title: '  Cyber Awareness Program  ',
    role: 'Speaker',
    period: '10/02/2026',
    date: 'COMPLETED',
    description: 'Served as Coordinator & Management Team at HackBIOS, a 24-hour hackathon. Handled participant registration, venue logistics, mentor coordination, and ensured smooth execution of the event from setup to judging.',
    highlights: ['Technical Events', 'Workshops', 'Collaborative Learning', 'Competitions'],
    stats: { attendees: '80+', teamSize: '12+', eventsRun: '4+' },
    photos: [
      '/assets/Cyber Awareness Program/IMG-20260211-WA0004.jpg',
      '/assets/Cyber Awareness Program/IMG-20260211-WA0009.jpg',
      '/assets/Cyber Awareness Program/IMG-20260211-WA0015.jpg',
      '/assets/Cyber Awareness Program/IMG_20260210_143937_1.jpg',
    ],
    gradient: 'linear-gradient(135deg, #e040fb 0%, #536dfe 100%)',
    icon: '🔺',
    type: 'organized',
  },
  {
    id: 4,
    title: 'HackBIOS - Hackathon',
    role: 'Coordinator and Management',
    period: '17/11/2025 - 18/11/2025',
    date: 'COMPLETED',
    description: 'Served as Coordinator & Management Team at HackBIOS, a 24-hour hackathon. Handled participant registration, venue logistics, mentor coordination, and ensured smooth execution of the event from setup to judging.',
    highlights: ['Technical Events', 'Workshops', 'Collaborative Learning', 'Competitions'],
    stats: { attendees: '80+', teamSize: '12+', eventsRun: '4+' },
    photos: [
      '/assets/HackBIOS - Hackathon/DSC08851.JPG',
      '/assets/HackBIOS - Hackathon/PXL_20251117_050701697.RAW-01.COVER.jpg',
      '/assets/HackBIOS - Hackathon/PXL_20251117_052054146.RAW-01.COVER.jpg',
      '/assets/HackBIOS - Hackathon/PXL_20251118_110807167.jpg',
      '/assets/HackBIOS - Hackathon/PXL_20251118_110809939.MP.jpg',
      '/assets/HackBIOS - Hackathon/PXL_20251118_110810489.jpg',
      '/assets/HackBIOS - Hackathon/PXL_20251118_110811743.jpg',
      '/assets/HackBIOS - Hackathon/PXL_20251118_110816355.jpg',
    ],
    gradient: 'linear-gradient(135deg, #e040fb 0%, #536dfe 100%)',
    icon: '🔺',
    type: 'organized',
  },
   {
    id: 5,
    title: 'Dark Debug',
    role: 'Event Lead',
    org: 'Samid 2K25',
    period: '14/11/2025',
    date: 'COMPLETED',
    description: 'Organized and lead Dark Debug, a unique blindfold-based debugging challenge conducted during the annual fest Samvid. The event was designed as a duo challenge where one participant guided while the other solved problems without visual access, promoting communication, logic, and teamwork under pressure.',
    highlights: ['Blindfold Challenge',
    'Duo Problem Solving',
    'Team Coordination',
    'Creative Event Design'],
    stats: { attendees: '50+', teamSize: '25+', eventsRun: '1' },
    photos: [
      '/assets/dark-debug/1.jpg',
      '/assets/dark-debug/2.jpg',
      '/assets/dark-debug/3.jpg',
      '/assets/dark-debug/4.jpg',
      '/assets/dark-debug/5.jpg',
    ],
    gradient: 'linear-gradient(135deg, #e040fb 0%, #536dfe 100%)',
    icon: '🔺',
    type: 'organized',
  },
  {
    id: 6,
    title: 'Head of Events & Management and Social Media',
    role: ' GeeksforGeeks Student Chapter — SSTC',
    org: '',
    period: '2025 — Present',
    date: 'Ongoing',
    description: 'Led event planning, execution, and digital outreach as Head of Events & Management and Social Media. Coordinated teams, managed end-to-end event operations, and built an engaging online presence through strategic content, boosting participation and community visibility.',
    highlights: ['Community Building', 'Tech Meetups','Code Sprints'],
    stats: { attendees: '100+', teamSize: '8+', eventsRun: '5+' },
    hidePhotos: true,
    icon: '🔺',
    type: 'core-team',
  },
     {
    id: 7,
    title: 'Syntax Squad Community',
    role: 'Core Member',
    org: 'Syntax Squad Developer Community',
    period: '2025 — Present',
    date: 'Ongoing',
    description: 'Core member of the Syntax Squad Community, involved in organizing and engaging in tech-related initiatives and community-driven projects. Helped plan meetups, code sprints, and open-source contribution drives.',
    highlights: ['Community Building', 'Tech Meetups', 'Open Source', 'Code Sprints'],
    stats: { attendees: '2000+', teamSize: '50+', eventsRun: '10+' },
    hidePhotos: true,
    icon: '🔺',
    type: 'core-team',
  },
];

const totalStats = {
  eventsOrganized: '10+',
  hackathons: '1+',
  communitiesLed: '2',
  studentsImpacted: '1000+',
};

export default function EventsPage() {
  const [activeEvent, setActiveEvent] = useState(null);
  const [filter, setFilter] = useState('all');
  const [animateStats, setAnimateStats] = useState(false);
  const [fullscreenPhoto, setFullscreenPhoto] = useState(null); // { photos: [], index: 0 }

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setAnimateStats(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Keyboard navigation for fullscreen photo viewer
  useEffect(() => {
    if (!fullscreenPhoto) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setFullscreenPhoto(null);
      if (e.key === 'ArrowRight') {
        setFullscreenPhoto(prev => ({
          ...prev,
          index: (prev.index + 1) % prev.photos.length,
        }));
      }
      if (e.key === 'ArrowLeft') {
        setFullscreenPhoto(prev => ({
          ...prev,
          index: (prev.index - 1 + prev.photos.length) % prev.photos.length,
        }));
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [fullscreenPhoto]);

  const openFullscreen = (photos, index) => {
    setFullscreenPhoto({ photos, index });
  };

  const filteredEvents = filter === 'all' ? events : events.filter(e => e.type === filter);
  const activeEventData = events.find(e => e.id === activeEvent);

  const page = (
    <div className="events-page">
      {/* Background effects */}
      <div className="events-bg-grid"></div>
      <div className="events-glow events-glow-1"></div>
      <div className="events-glow events-glow-2"></div>
      <div className="events-glow events-glow-3"></div>

      {/* Back button */}
      <Link to="/" className="events-back-btn">
        <span className="back-arrow">←</span>
        <span className="back-text">Back to Portfolio</span>
      </Link>

      {/* Hero banner */}
      <header className="events-hero">
        <div className="container">
          <span className="events-tag animate-in">// events & leadership</span>
          <h1 className="events-title animate-in delay-1">
            Events I <span className="events-gradient-text">Organized</span> &
            <br />
            <span className="events-gradient-text-alt">Managed</span>
          </h1>
          <p className="events-subtitle animate-in delay-2">
            From hackathons to tech meetups — here's the timeline of events where I led, coordinated, or was part of the core team.
          </p>

          {/* Stats counters */}
          <div className={`events-stats ${animateStats ? 'stats-visible' : ''}`}>
            <div className="stat-item animate-in delay-2">
              <span className="stat-number">{totalStats.eventsOrganized}</span>
              <span className="stat-label">Events Organized</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item animate-in delay-3">
              <span className="stat-number">{totalStats.hackathons}</span>
              <span className="stat-label">Hackathons</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item animate-in delay-3">
              <span className="stat-number">{totalStats.communitiesLed}</span>
              <span className="stat-label">Communities</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item animate-in delay-4">
              <span className="stat-number">{totalStats.studentsImpacted}</span>
              <span className="stat-label">Students Impacted</span>
            </div>
          </div>
        </div>
      </header>

      {/* Filter tabs */}
      <div className="container">
        <div className="events-filters animate-in delay-4">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Events
          </button>
          <button
            className={`filter-btn ${filter === 'organized' ? 'active' : ''}`}
            onClick={() => setFilter('organized')}
          >
            🎯 Organized
          </button>
          <button
            className={`filter-btn ${filter === 'core-team' ? 'active' : ''}`}
            onClick={() => setFilter('core-team')}
          >
            🤝 Core Team
          </button>
        </div>
      </div>

      {/* Timeline */}
      <section className="events-timeline-section">
        <div className="container">
          <div className="events-timeline">
            {filteredEvents.map((event, index) => (
              <div
                className={`event-timeline-item animate-in delay-${(index % 4) + 1}`}
                key={event.id}
              >
                <div className="event-timeline-dot">
                  <span className="event-dot-icon">{event.icon}</span>
                </div>
                <div className="event-timeline-date">
                  <span>{event.date}</span>
                </div>
                <div
                  className="event-card"
                  onClick={() => setActiveEvent(activeEvent === event.id ? null : event.id)}
                >
                  <div className="event-card-accent" style={{ background: event.gradient }}></div>
                  <div className="event-card-header">
                    <div className="event-card-top">
                      <span className={`event-type-badge ${event.type}`}>
                        {event.type === 'organized' ? '🎯 Organized' : '🤝 Core Team'}
                      </span>
                      <span className="event-period">{event.period}</span>
                    </div>
                    <h3 className="event-title">{event.title}</h3>
                    <span className="event-role">{event.role}</span>
                    <span className="event-org">{event.org}</span>
                  </div>

                  <p className="event-desc">{event.description}</p>

                  {/* Mini stats */}
                  <div className="event-mini-stats">
                    <div className="mini-stat">
                      <span className="mini-stat-num">{event.stats.attendees}</span>
                      <span className="mini-stat-label">Attendees</span>
                    </div>
                    <div className="mini-stat">
                      <span className="mini-stat-num">{event.stats.teamSize}</span>
                      <span className="mini-stat-label">Team</span>
                    </div>
                    <div className="mini-stat">
                      <span className="mini-stat-num">{event.stats.eventsRun}</span>
                      <span className="mini-stat-label">Events</span>
                    </div>
                  </div>

                  {/* Photo strip — hidden for events with hidePhotos */}
                  {!event.hidePhotos && (
                  <div className="event-photo-strip">
                    {event.photos && event.photos.length > 0 ? (
                      event.photos.slice(0, 3).map((photo, i) => (
                        <img
                          src={photo}
                          alt={`${event.title} photo`}
                          className="event-photo-real"
                          key={i}
                          onClick={(e) => { e.stopPropagation(); openFullscreen(event.photos, i); }}
                        />
                      ))
                    ) : (
                      [1, 2, 3].map(i => (
                        <div
                          className="event-photo-placeholder"
                          key={i}
                          style={{ background: event.gradient, opacity: 0.3 + i * 0.2 }}
                        >
                          <span className="photo-placeholder-icon">📷</span>
                        </div>
                      ))
                    )}
                    
                    {event.photos && event.photos.length > 3 ? (
                      <div className="event-photo-more">+{event.photos.length - 3}</div>
                    ) : (
                      !event.photos || event.photos.length === 0 ? <div className="event-photo-more">+more</div> : null
                    )}
                  </div>
                  )}

                  <div className="event-tags">
                    {event.highlights.map(tag => (
                      <span className="event-tag" key={tag}>{tag}</span>
                    ))}
                  </div>

                  <span className="event-expand-hint">
                    {activeEvent === event.id ? '← Collapse' : 'Click to expand →'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {activeEventData && (
        <div className="event-lightbox" onClick={() => setActiveEvent(null)}>
          <div className="event-lightbox-inner" onClick={e => e.stopPropagation()}>
            <button className="event-lightbox-close" onClick={() => setActiveEvent(null)}>✕</button>
            <div className="event-lightbox-accent" style={{ background: activeEventData.gradient }}></div>
            <div className="event-lightbox-header">
              <span className="event-lightbox-icon">{activeEventData.icon}</span>
              <div>
                <h2 className="event-lightbox-title">{activeEventData.title}</h2>
                <span className="event-lightbox-role">{activeEventData.role} — {activeEventData.org}</span>
              </div>
            </div>
            <p className="event-lightbox-desc">{activeEventData.description}</p>

            <div className="event-lightbox-stats">
              <div className="lb-stat">
                <span className="lb-stat-num">{activeEventData.stats.attendees}</span>
                <span className="lb-stat-label">Attendees</span>
              </div>
              <div className="lb-stat">
                <span className="lb-stat-num">{activeEventData.stats.teamSize}</span>
                <span className="lb-stat-label">Team Size</span>
              </div>
              <div className="lb-stat">
                <span className="lb-stat-num">{activeEventData.stats.eventsRun}</span>
                <span className="lb-stat-label">Events Run</span>
              </div>
            </div>

            {/* Gallery — hidden for events with hidePhotos */}
            {!activeEventData.hidePhotos && (
            <div className="event-lightbox-gallery">
              {activeEventData.photos && activeEventData.photos.length > 0 ? (
                activeEventData.photos.map((photo, i) => (
                  <img
                    src={photo}
                    alt={`Gallery photo ${i+1}`}
                    className="lb-gallery-image"
                    key={i}
                    onClick={() => openFullscreen(activeEventData.photos, i)}
                  />
                ))
              ) : (
                [1, 2, 3, 4].map(i => (
                  <div
                    className="lb-gallery-item"
                    key={i}
                    style={{ background: activeEventData.gradient, opacity: 0.25 + i * 0.15 }}
                  >
                    <span>📷</span>
                    <span className="lb-gallery-label">Photo {i}</span>
                  </div>
                ))
              )}
            </div>
            )}

            <div className="event-lightbox-tags">
              {activeEventData.highlights.map(tag => (
                <span className="lb-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="events-footer container">
        <p>Events & Leadership • Portfolio © {new Date().getFullYear()}</p>
        <Link to="/" className="events-footer-link">← Back to Portfolio</Link>
      </footer>
    </div>
  );

  // Fullscreen photo overlay
  const fullscreenOverlay = fullscreenPhoto && (
    <div className="photo-fullscreen-overlay" onClick={() => setFullscreenPhoto(null)}>
      <button className="photo-fs-close" onClick={() => setFullscreenPhoto(null)}>✕</button>

      <button
        className="photo-fs-nav photo-fs-prev"
        onClick={(e) => {
          e.stopPropagation();
          setFullscreenPhoto(prev => ({
            ...prev,
            index: (prev.index - 1 + prev.photos.length) % prev.photos.length,
          }));
        }}
      >
        ‹
      </button>

      <img
        src={fullscreenPhoto.photos[fullscreenPhoto.index]}
        alt="Full size"
        className="photo-fs-image"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        className="photo-fs-nav photo-fs-next"
        onClick={(e) => {
          e.stopPropagation();
          setFullscreenPhoto(prev => ({
            ...prev,
            index: (prev.index + 1) % prev.photos.length,
          }));
        }}
      >
        ›
      </button>

      <div className="photo-fs-counter">
        {fullscreenPhoto.index + 1} / {fullscreenPhoto.photos.length}
      </div>
    </div>
  );

  return (
    <>
      {page}
      {fullscreenOverlay}
    </>
  );
}
