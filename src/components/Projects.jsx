import { FiExternalLink } from 'react-icons/fi';
import { useState } from 'react';
import useInView from '../hooks/useInView';
import './Projects.css';

const projects = [
  {
    title: 'OpenQRL',
    description: 'Open-source website for creating and customizing QR codes with an elegant Frutiger Aero dusk theme. Built with Next.js 15, TypeScript, and Tailwind CSS v4.',
    image: 'https://placehold.co/600x400/BAE6FD/0EA5E9?text=OpenQRL',
    demoUrl: 'https://openqrl.my.id',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    links: [
      { label: 'Website', url: 'https://openqrl.my.id' },
      { label: 'GitLab', url: 'https://gitlab.com/satirr/openqtr' },
    ],
  },
  {
    title: 'OpenQTR',
    description: 'Open QR Tool Renderer — a standalone browser SDK that lets anyone generate QR codes from any website. No React, no framework, no bundler needed.',
    image: 'https://placehold.co/600x400/A7F3D0/059669?text=OpenQTR+SDK',
    demoUrl: 'https://www.openqrl.my.id/GUIDE-API',
    tags: ['JavaScript', 'SDK', 'QR Code'],
    links: [
      { label: 'SDK', url: 'https://cdn.jsdelivr.net/npm/@satirr/openqtr/dist/sdk.js' },
      { label: 'Guide', url: 'https://www.openqrl.my.id/GUIDE-API' },
    ],
  },
  {
    title: 'Pencak Silat Scoring',
    description: 'A digital scoring system for web-based Pencak Silat competitions with real-time support using Supabase.',
    image: 'https://placehold.co/600x400/BAE6FD/0284C7?text=Pencak+Silat',
    demoUrl: 'https://pencak-silat-scoring.vercel.app/',
    tags: ['React', 'Supabase', 'Real-time'],
    links: [
      { label: 'Live Demo', url: 'https://pencak-silat-scoring.vercel.app/' },
    ],
  },
  {
    title: 'Drapp',
    description: 'Android open-source app downloader — a minimal alternative to F-Droid for discovering and installing APKs.',
    image: 'https://placehold.co/600x400/8B5CF6/A78BFA?text=Drapp',
    demoUrl: 'https://drapp-gold.vercel.app',
    tags: ['Android', 'APK', 'F-Droid'],
    links: [
      { label: 'Website', url: 'https://drapp-gold.vercel.app' },
      { label: 'GitHub', url: 'https://github.com/satirrdev/drapp' },
    ],
  },
  {
    title: 'Yakuza Game Booster',
    description: 'Rootless game booster with root-level features — unlock performance tweaks without rooting your device.',
    image: 'https://placehold.co/600x400/DC2626/FCA5A5?text=Yakuza+Booster',
    demoUrl: 'https://rebrand.ly/yakuzadl',
    tags: ['Android', 'Game Booster', 'Rootless'],
    links: [
      { label: 'Website', url: 'https://rebrand.ly/yakuzadl' },
      { label: 'GitHub', url: 'https://github.com/satirrdev/webyakuza' },
    ],
  },
];

function ProjectPreview({ project }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="project-img project-img-iframe">
      {!loaded && (
        <div className="iframe-loading">
          <div className="spinner" />
          <span>Loading preview...</span>
        </div>
      )}
      <iframe
        src={project.demoUrl}
        title={project.title}
        onLoad={() => setLoaded(true)}
        className={loaded ? 'iframe-loaded' : ''}
        loading="lazy"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
}

export default function Projects() {
  const [ref, visible] = useInView({ threshold: 0.05 });
  return (
    <section id="projects" ref={ref}>
      <div className="container">
        <h2 className={`section-title fade-up ${visible ? 'visible' : ''}`}>Projects</h2>
        <p className={`section-subtitle fade-up ${visible ? 'visible' : ''}`}>Things I've built</p>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <article
              key={i}
              className={`project-card stagger-item ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <ProjectPreview project={project} />
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FiExternalLink size={14} /> {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
