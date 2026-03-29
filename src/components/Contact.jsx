import useScrollReveal from '../hooks/useScrollReveal';
import './Contact.css';

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section className="contact-scroll section" id="contact" ref={ref}>
      {/* Diagonal transition back to dark */}
      <div className="diagonal-dark-top">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,0 L1440,80 L0,80 Z" fill="#0a0a14" />
        </svg>
      </div>

      <div className="container">
        <div className="contact-scroll-inner">
          <span className="contact-tag reveal">// contact</span>
          <h2 className="contact-heading reveal delay-1">
            Let's Build. Let's Create.
          </h2>
          <p className="contact-subtext reveal delay-2">
            Got a project in mind? Need a frontend lead or a content creator? Let's talk.
          </p>

          <div className="contact-cards-grid reveal delay-3">
            <a href="mailto:sahuyuvraj043@gmail.com" className="contact-card-dark" id="contact-email">
              <span className="ccd-icon">✉️</span>
              <span className="ccd-label">Email</span>
              <span className="ccd-value">sahuyuvraj043@gmail.com</span>
            </a>
            <a href="tel:+917804949124" className="contact-card-dark" id="contact-phone">
              <span className="ccd-icon">📞</span>
              <span className="ccd-label">Phone</span>
              <span className="ccd-value">+91 7804949124</span>
            </a>
            <a href="https://linkedin.com/in/yuvraj-sahu--" target="_blank" rel="noopener noreferrer" className="contact-card-dark" id="contact-linkedin">
              <span className="ccd-icon">💼</span>
              <span className="ccd-label">LinkedIn</span>
              <span className="ccd-value">linkedin.com/in/yuvraj-sahu--</span>
            </a><a href="https://www.instagram.com/silents_creation/" target="_blank" rel="noopener noreferrer" className="contact-card-dark" id="contact-instagram">
              <span className="ccd-icon">🤩</span>
              <span className="ccd-label">Instagram</span>
              <span className="ccd-value">@silents_creation</span>
            </a>
            <a href="https://github.com/Theonlyunknowncoder" target="_blank" rel="noopener noreferrer" className="contact-card-dark" id="contact-github">
              <span className="ccd-icon">🐙</span>
              <span className="ccd-label">GitHub</span>
              <span className="ccd-value">Theonlyunknowncoder</span>
            </a>
          </div>

          {/* Terminal */}
          <div className="contact-terminal reveal delay-4">
            <div className="terminal-window">
              <div className="terminal-header">
                <span className="terminal-dot dot-red"></span>
                <span className="terminal-dot dot-yellow"></span>
                <span className="terminal-dot dot-green"></span>
                <span className="terminal-title">terminal</span>
              </div>
              <div className="terminal-body">
                <p><span className="tp">$</span> echo "Thanks for scrolling through my story."</p>
                <p className="to">Thanks for scrolling through my story.</p>
                <p><span className="tp">$</span> echo "The best projects start with a conversation."</p>
                <p className="to">The best projects start with a conversation.</p>
                <p className="tc"><span className="tp">$</span> <span className="cursor-blink">_</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
