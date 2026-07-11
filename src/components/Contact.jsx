import { FaGithub, FaLinkedin, FaGitlab, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import useInView from '../hooks/useInView';
import './Contact.css';

const EMAIL = 'satirrdev@proton.me';
const WHATSAPP = '+6287751322884';

export default function Contact() {
  const [ref, visible] = useInView({ threshold: 0.1 });
  return (
    <section id="contact" ref={ref}>
      <div className="container">
        <h2 className={`section-title fade-up ${visible ? 'visible' : ''}`}>Contact</h2>
        <p className={`section-subtitle fade-up ${visible ? 'visible' : ''}`}>Let's work together</p>
        <div className={`contact-card fade-up ${visible ? 'visible' : ''}`}>
          <div className="contact-item">
            <span className="contact-icon"><FaEnvelope size={18} /></span>
            <a href={`mailto:${EMAIL}`} className="contact-link">{EMAIL}</a>
          </div>
          <div className="contact-item">
            <span className="contact-icon"><FaPhoneAlt size={18} /></span>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="contact-link">
              {WHATSAPP}
            </a>
          </div>
          <div className="contact-divider" />
          <div className="contact-social">
            <a href="https://github.com/satirr" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/satirr" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href="https://gitlab.com/satirr" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitLab">
              <FaGitlab size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
