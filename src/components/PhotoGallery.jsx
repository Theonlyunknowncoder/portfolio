import { useState, useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './PhotoGallery.css';

const photos = [
  { id: 1, src: '/assets/photo section/IMG_20240418_180607.jpg', orientation: 'landscape' },
  { id: 2, src: '/assets/photo section/IMG_20250212_093519.jpg', orientation: 'landscape' },
  { id: 3, src: '/assets/photo section/IMG_20250504_004220.jpg', orientation: 'portrait' },
  { id: 4, src: '/assets/photo section/IMG_20250727_204838.jpg', orientation: 'portrait' },
  { id: 5, src: '/assets/photo section/IMG_20251026_124046.jpg', orientation: 'portrait' },
  { id: 6, src: '/assets/photo section/IMG_20260122_120907.jpg', orientation: 'portrait' },
  { id: 7, src: '/assets/photo section/IMG_20260122_152832.jpg', orientation: 'landscape' },
  { id: 8, src: '/assets/photo section/IMG_20260122_185536.jpg', orientation: 'portrait' },
  { id: 9, src: '/assets/photo section/IMG_20260127_121242.jpg', orientation: 'landscape' },
  { id: 10, src: '/assets/photo section/IMG_20260127_121314.jpg', orientation: 'landscape' },
  { id: 11, src: '/assets/photo section/Screenshot_2026-03-28-02-14-57-353_com.instagram.android-edit.jpg.jpeg', orientation: 'landscape' },
  { id: 12, src: '/assets/photo section/SnapInsta.to_601042131_18058968491641454_8133886737095538743_n.jpg', orientation: 'portrait' },
];

export default function PhotoGallery() {
  const ref = useScrollReveal();
  const [activePhoto, setActivePhoto] = useState(null);

  // Keyboard nav for fullscreen
  useEffect(() => {
    if (activePhoto === null) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setActivePhoto(null);
      if (e.key === 'ArrowRight') {
        setActivePhoto(prev => {
          const idx = photos.findIndex(p => p.id === prev);
          return photos[(idx + 1) % photos.length].id;
        });
      }
      if (e.key === 'ArrowLeft') {
        setActivePhoto(prev => {
          const idx = photos.findIndex(p => p.id === prev);
          return photos[(idx - 1 + photos.length) % photos.length].id;
        });
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activePhoto]);

  const activeData = photos.find(p => p.id === activePhoto);
  const activeIndex = photos.findIndex(p => p.id === activePhoto);

  return (
    <section className="gallery-section section" id="gallery" ref={ref}>
      <div className="container">
        <span className="section-tag-light reveal">— photo gallery</span>
        <h2 className="section-heading-light reveal delay-1">Moments Captured</h2>
        <p className="section-subheading-light reveal delay-2">
          A glimpse into the journey — events, memories, and the moments that matter.
        </p>

        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <div
              className={`gallery-item gallery-${photo.orientation} reveal delay-${(index % 4) + 1}`}
              key={photo.id}
              onClick={() => setActivePhoto(photo.id)}
            >
              <div className="gallery-image">
                <img src={photo.src} alt={`Photo ${photo.id}`} className="gallery-img-real" loading="lazy" />
                <div className="gallery-overlay">
                  <span className="gallery-zoom">🔍</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      {activeData && (
        <div className="photo-fullscreen-overlay" onClick={() => setActivePhoto(null)}>
          <button className="photo-fs-close" onClick={() => setActivePhoto(null)}>✕</button>

          <button
            className="photo-fs-nav photo-fs-prev"
            onClick={(e) => {
              e.stopPropagation();
              setActivePhoto(photos[(activeIndex - 1 + photos.length) % photos.length].id);
            }}
          >
            ‹
          </button>

          <img
            src={activeData.src}
            alt="Full size"
            className="photo-fs-image"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="photo-fs-nav photo-fs-next"
            onClick={(e) => {
              e.stopPropagation();
              setActivePhoto(photos[(activeIndex + 1) % photos.length].id);
            }}
          >
            ›
          </button>

          <div className="photo-fs-counter">
            {activeIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </section>
  );
}
