import { FaGithub, FaLinkedin, FaGitlab, FaArrowRight } from 'react-icons/fa';
import useInView from '../hooks/useInView';
import './Hero.css';

export default function Hero() {
  const [ref, visible] = useInView({ threshold: 0.1, once: false });

  return (
    <section id="hero" className="hero" ref={ref}>
      <div className="container hero-content">
        <div className={`terminal ${visible ? 'visible' : ''}`}>
          <div className="terminal-titlebar">
            <div className="terminal-dots">
              <span className="terminal-dot terminal-dot-red" />
              <span className="terminal-dot terminal-dot-yellow" />
              <span className="terminal-dot terminal-dot-green" />
            </div>
            <span className="terminal-title">bash — satir-is-a-dev</span>
          </div>
          <div className="terminal-body">
            <div className="terminal-output">
              <div className={`terminal-line ${visible ? 'visible' : ''}`} style={{ '--delay': '0.1s' }}>
                <span className="prompt">$</span>
                <span className="cmd"> whoami</span>
              </div>
              <div className={`terminal-line output ${visible ? 'visible' : ''}`} style={{ '--delay': '0.3s' }}>
                <span className="arrow">{'──>'}</span>
                <span className="val-name"> Syathir Khaalish</span>
              </div>
              <div className={`terminal-line ${visible ? 'visible' : ''}`} style={{ '--delay': '0.5s' }}>
                <span className="prompt">$</span>
                <span className="cmd"> role</span>
              </div>
              <div className={`terminal-line output ${visible ? 'visible' : ''}`} style={{ '--delay': '0.7s' }}>
                <span className="arrow">{'──>'}</span>
                <span className="val-role"> Full-Stack Developer</span>
              </div>
              <div className={`terminal-line ${visible ? 'visible' : ''}`} style={{ '--delay': '0.9s' }}>
                <span className="prompt">$</span>
                <span className="cmd"> cat tagline.txt</span>
              </div>
              <div className={`terminal-line output ${visible ? 'visible' : ''}`} style={{ '--delay': '1.1s' }}>
                <span className="arrow">{'──>'}</span>
                <span className="val-tagline"> I build clean, modern web applications with great user experiences.</span>
              </div>
              <div className={`terminal-line prompt-line ${visible ? 'visible' : ''}`} style={{ '--delay': '1.3s' }}>
                <span className="prompt">$</span>
                <span className="cursor">_</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`hero-actions ${visible ? 'visible' : ''}`}>
          <a href="#projects" className="btn btn-primary">
            View Projects <FaArrowRight size={14} />
          </a>
          <a href="#contact" className="btn btn-outline">Get in Touch</a>
        </div>
        <div className={`hero-social ${visible ? 'visible' : ''}`}>
          <a href="https://github.com/satirr" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub size={20} /></a>
          <a href="https://linkedin.com/in/satirr" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
          <a href="https://gitlab.com/satirr" target="_blank" rel="noopener noreferrer" aria-label="GitLab"><FaGitlab size={20} /></a>
        </div>
      </div>
    </section>
  );
}
