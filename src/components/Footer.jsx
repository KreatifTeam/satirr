import { FaGithub, FaWhatsapp, FaGitlab, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-social">
          <a href="https://github.com/satirrdev" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub size={18} /></a>
          <a href="https://wa.me/6287751322884" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp size={18} /></a>
          <a href="https://gitlab.com/satirr" target="_blank" rel="noopener noreferrer" aria-label="GitLab"><FaGitlab size={18} /></a>
          <a href="mailto:satirrdev@proton.me" aria-label="Email"><FaEnvelope size={18} /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Syathir Khaalish. All rights reserved.</p>
        <a href="#hero" className="back-to-top" aria-label="Back to top"><FaArrowUp size={16} /></a>
      </div>
    </footer>
  );
}
