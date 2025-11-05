/**
 * WebDeveloper.jsx
 * Pagina Web Developer - Portfolio competenze Boolean Careers
 */

import '../styles/pages/WebDeveloper.css';
import LetterGlitch from "../components/LetterGlitch";
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiVite,
  SiNodedotjs, SiMysql,
  SiGit, SiGithub, SiNpm, SiPostman,
  SiBootstrap
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const WebDeveloper = () => {
  // Competenze organizzate per categoria
  const skills = {
    frontend: [
      { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
      { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "React", icon: <SiReact />, color: "#61DAFB" },
      { name: "Vite", icon: <SiVite />, color: "#646CFF" },
    ],
    styling: [
      { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
    ],
    backend: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    ],
    tools: [
      { name: "Git", icon: <SiGit />, color: "#F05032" },
      { name: "GitHub", icon: <SiGithub />, color: "#181717" },
      { name: "VS Code", icon: <VscCode />, color: "#007ACC" },
      { name: "NPM", icon: <SiNpm />, color: "#CB3837" },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
    ],
  };

  return (
    <div className="web-developer-page">
      {/* Sfondo con effetto glitch */}
      <div className="glitch-background">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>

      {/* Contenuto principale */}
      <div className="web-developer-content">
        {/* Hero Section */}
        <section className="hero-section">
          <h1 className="main-title">Full Stack Web Developer</h1>
          <p className="subtitle">Boolean Careers • Junior Developer</p>
          <div className="hero-divider"></div>
        </section>

        {/* Skills Grid */}
        <section className="skills-container">
          {/* Frontend */}
          <div className="skill-category">
            <h2 className="category-title">Frontend Development</h2>
            <div className="skills-grid">
              {skills.frontend.map((skill, index) => (
                <div key={index} className="skill-card" style={{ '--skill-color': skill.color }}>
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Styling */}
          <div className="skill-category">
            <h2 className="category-title">CSS Frameworks & Preprocessors</h2>
            <div className="skills-grid">
              {skills.styling.map((skill, index) => (
                <div key={index} className="skill-card" style={{ '--skill-color': skill.color }}>
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="skill-category">
            <h2 className="category-title">Backend Development</h2>
            <div className="skills-grid">
              {skills.backend.map((skill, index) => (
                <div key={index} className="skill-card" style={{ '--skill-color': skill.color }}>
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="skill-category">
            <h2 className="category-title">Tools & Workflow</h2>
            <div className="skills-grid">
              {skills.tools.map((skill, index) => (
                <div key={index} className="skill-card" style={{ '--skill-color': skill.color }}>
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Soft Skills */}
        <section className="soft-skills-section">
          <h2 className="category-title">Competenze Trasversali</h2>
          <div className="soft-skills-list">
            <span className="soft-skill-tag">Problem Solving</span>
            <span className="soft-skill-tag">Team Collaboration</span>
            <span className="soft-skill-tag">Agile Methodology</span>
            <span className="soft-skill-tag">Responsive Design</span>
            <span className="soft-skill-tag">RESTful APIs</span>
          </div>
        </section>

        {/* Frontend Mentor Projects */}
        <section className="frontend-mentor-section">
          <h2 className="category-title">Frontend Mentor Challenges</h2>
          <p className="section-description">
            Real-world projects to sharpen my frontend development skills
          </p>
          <div className="projects-grid">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="project-card">
                <div className="project-image">
                  <img 
                    src={`https://picsum.photos/seed/project${i}/600/400`} 
                    alt={`Frontend Mentor Project ${i + 1}`}
                    loading="lazy"
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href="#" className="project-link" onClick={(e) => e.preventDefault()}>
                        <span>Live Demo</span>
                      </a>
                      <a href="#" className="project-link" onClick={(e) => e.preventDefault()}>
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h3>Project Title {i + 1}</h3>
                  <div className="project-tags">
                    <span className="tag">HTML</span>
                    <span className="tag">CSS</span>
                    <span className="tag">JavaScript</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default WebDeveloper;
