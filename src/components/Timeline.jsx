import { FaCode, FaReact, FaRocket, FaProjectDiagram, FaLayerGroup, FaStar } from 'react-icons/fa';
import useInView from '../hooks/useInView';
import './Timeline.css';

const entries = [
  {
    year: '2022',
    icon: FaCode,
    title: 'Started Coding',
    desc: 'Began my self-taught journey with HTML, CSS, and JavaScript fundamentals.',
  },
  {
    year: '2023',
    icon: FaLayerGroup,
    title: 'Expanded Foundations',
    desc: 'Learned Python and Java. Built my first complete projects.',
  },
  {
    year: '2024',
    icon: FaReact,
    title: 'Framework Years',
    desc: 'Mastered React, Next.js, TypeScript, and Node.js. Built OpenQRL — a QR code platform.',
  },
  {
    year: '2025',
    icon: FaProjectDiagram,
    title: 'Deepening Skills',
    desc: 'Built Pencak Silat Scoring with real-time Supabase. Started learning Kotlin, C++, C. Began contributing to open source.',
  },
  {
    year: '2026',
    icon: FaRocket,
    title: 'Shipped OpenQTR SDK',
    desc: 'Published a standalone QR generation SDK in vanilla JS — no framework or bundler needed.',
  },
  {
    year: 'Now',
    icon: FaStar,
    title: 'Still Building',
    desc: 'Exploring new technologies, contributing to OSS, and working on side projects.',
  },
];

export default function Timeline() {
  const [ref, visible] = useInView({ threshold: 0.05 });
  return (
    <section id="timeline" ref={ref}>
      <div className="container">
        <h2 className={`section-title fade-up ${visible ? 'visible' : ''}`}>Timeline</h2>
        <p className={`section-subtitle fade-up ${visible ? 'visible' : ''}`}>My journey so far</p>
        <div className="timeline">
          {entries.map((entry, i) => {
            const Icon = entry.icon;
            return (
              <div
                key={entry.year}
                className={`timeline-item ${i % 2 === 0 ? 'timeline-left' : 'timeline-right'} fade-up ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="timeline-dot">
                  <Icon />
                </div>
                <div className="timeline-card">
                  <span className="timeline-year">{entry.year}</span>
                  <h3 className="timeline-title">{entry.title}</h3>
                  <p className="timeline-desc">{entry.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
