import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './ReelShowcase.css';

const reels = [
  { id: 1, src: '/assets/reel section/1.mp4' },
  { id: 2, src: '/assets/reel section/2.mp4' },
  { id: 3, src: '/assets/reel section/3.mp4' },
  { id: 4, src: '/assets/reel section/4.mp4' },
  { id: 5, src: '/assets/reel section/5.mp4' },
  { id: 6, src: '/assets/reel section/6.mp4' },
  { id: 7, src: '/assets/reel section/7.mp4' },
  { id: 8, src: '/assets/reel section/8.mp4' },
  { id: 9, src: '/assets/reel section/9.mp4' },
  { id: 10, src: '/assets/reel section/10.mp4' },
];

export default function ReelShowcase() {
  const ref = useScrollReveal();
  const [playingReel, setPlayingReel] = useState(null);

  return (
    <section className="reel-section section" id="reels" ref={ref}>
      <div className="container">
        <span className="section-tag-light reveal">— featured reels</span>
        <h2 className="section-heading-light reveal delay-1">Content Reels</h2>
        <p className="section-subheading-light reveal delay-2">
          Short-form video content — creative edits, event highlights, and more.
        </p>

        <div className="reels-scroll">
          {reels.map((reel, index) => (
            <div
              className={`reel-card reveal delay-${(index % 4) + 1}`}
              key={reel.id}
              onClick={() => setPlayingReel(playingReel === reel.id ? null : reel.id)}
            >
              <div className="reel-thumb">
                <video
                  src={reel.src}
                  className="reel-video-thumb"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onMouseEnter={(e) => e.target.play().catch(() => {})}
                  onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                />
                <div className="reel-play-overlay">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
                <span className="reel-badge">Reel {reel.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Reel Player */}
      {playingReel && (
        <div className="reel-fullscreen-overlay" onClick={() => setPlayingReel(null)}>
          <button className="photo-fs-close" onClick={() => setPlayingReel(null)}>✕</button>

          <button
            className="photo-fs-nav photo-fs-prev"
            onClick={(e) => {
              e.stopPropagation();
              const idx = reels.findIndex(r => r.id === playingReel);
              setPlayingReel(reels[(idx - 1 + reels.length) % reels.length].id);
            }}
          >
            ‹
          </button>

          <video
            src={reels.find(r => r.id === playingReel)?.src}
            className="reel-fs-video"
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="photo-fs-nav photo-fs-next"
            onClick={(e) => {
              e.stopPropagation();
              const idx = reels.findIndex(r => r.id === playingReel);
              setPlayingReel(reels[(idx + 1) % reels.length].id);
            }}
          >
            ›
          </button>

          <div className="photo-fs-counter">
            Reel {reels.findIndex(r => r.id === playingReel) + 1} / {reels.length}
          </div>
        </div>
      )}
    </section>
  );
}
