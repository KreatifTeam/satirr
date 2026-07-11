import { FaJava } from 'react-icons/fa';
import {
  SiJavascript, SiTypescript, SiHtml5, SiCss,
  SiReact, SiNextdotjs, SiTailwindcss, SiVite, SiBootstrap,
  SiNodedotjs, SiSupabase, SiGit, SiFirebase,
  SiPython, SiKotlin,
} from 'react-icons/si';
import useInView from '../hooks/useInView';
import './Skills.css';

const iconMap = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  HTML: SiHtml5,
  CSS: SiCss,
  React: SiReact,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  Vite: SiVite,
  Bootstrap: SiBootstrap,
  'Node.js': SiNodedotjs,
  Supabase: SiSupabase,
  Git: SiGit,
  Firebase: SiFirebase,
  Python: SiPython,
  Kotlin: SiKotlin,
  Java: FaJava,
};

const skillGroups = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python', 'Kotlin', 'Java'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Vite', 'Bootstrap'],
  },
  {
    title: 'Backend & Tools',
    skills: ['Node.js', 'Supabase', 'Git', 'Firebase'],
  },
];

export default function Skills() {
  const [ref, visible] = useInView({ threshold: 0.1 });
  return (
    <section id="skills" ref={ref}>
      <div className="container">
        <h2 className={`section-title fade-up ${visible ? 'visible' : ''}`}>Skills</h2>
        <p className={`section-subtitle fade-up ${visible ? 'visible' : ''}`}>Technologies I work with</p>
        <div className="skills-groups">
          {skillGroups.map((group, gi) => (
            <div key={group.title} className={`fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${gi * 0.15}s` }}>
              <h3 className="skill-group-title">{group.title}</h3>
              <div className="skill-grid">
                {group.skills.map((skill) => {
                  const Icon = iconMap[skill];
                  return (
                    <div key={skill} className="skill-card">
                      {Icon && <Icon className="skill-card-icon" />}
                      <span className="skill-card-name">{skill}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
