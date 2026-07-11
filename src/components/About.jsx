import { FaCode, FaRocket, FaProjectDiagram, FaUser } from 'react-icons/fa';
import useInView from '../hooks/useInView';
import './About.css';

const stats = [
  { icon: FaProjectDiagram, value: '3+', label: 'Projects' },
  { icon: FaUser, value: '2+', label: 'Years Coding' },
  { icon: FaCode, value: '13+', label: 'Technologies' },
];

export default function About() {
  const [ref, visible] = useInView({ threshold: 0.1 });
  return (
    <section id="about" ref={ref}>
      <div className="container">
        <h2 className={`section-title fade-up ${visible ? 'visible' : ''}`}>About Me</h2>
        <p className={`section-subtitle fade-up ${visible ? 'visible' : ''}`}>A quick introduction</p>
        <div className="about-grid">
          <div className={`about-text fade-left ${visible ? 'visible' : ''}`}>
            <p>
              <FaCode className="about-icon" />
              I'm a passionate developer with experience building modern web applications.
              I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p>
              <FaRocket className="about-icon" />
              When I'm not coding, you'll find me exploring new technologies, contributing
              to open-source projects, or working on side projects that challenge my skills.
            </p>
          </div>
          <div className={`about-stats scale-in ${visible ? 'visible' : ''}`}>
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="stat-card" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <Icon className="stat-icon" />
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
