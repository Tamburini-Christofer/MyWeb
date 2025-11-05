/**
 * WebDeveloper.jsx
 * Pagina Web Developer - Portfolio competenze Boolean Careers
 */

import '../styles/pages/WebDeveloper.css';
import { useState } from 'react';
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiVite,
  SiNodedotjs, SiMysql,
  SiGit, SiGithub, SiNpm, SiPostman,
  SiBootstrap
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const WebDeveloper = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

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

  // Frontend Mentor Projects
  const frontendMentorProjects = [
    { image: '/images/Boolean/FrontendMentor/Sunnyside.png', title: 'Sunnyside Agency Landing', tags: ['HTML', 'CSS', 'JavaScript'] },
    { image: '/images/Boolean/FrontendMentor/Completato.png', title: 'Interactive Rating Component', tags: ['HTML', 'CSS', 'JavaScript'] },
    { image: '/images/Boolean/FrontendMentor/pagina.png', title: 'Product Preview Card', tags: ['HTML', 'CSS'] },
    { image: '/images/Boolean/FrontendMentor/pagina2.png', title: 'NFT Card Component', tags: ['HTML', 'CSS'] },
    { image: '/images/Boolean/FrontendMentor/pagina5.png', title: 'FAQ Accordion Card', tags: ['HTML', 'CSS', 'JavaScript'] },
    { image: '/images/Boolean/FrontendMentor/pagina10.png', title: 'Social Media Dashboard', tags: ['HTML', 'CSS'] },
    { image: '/images/Boolean/FrontendMentor/pagina15.png', title: 'Profile Card Component', tags: ['HTML', 'CSS'] },
    { image: '/images/Boolean/FrontendMentor/pagina18.png', title: 'Testimonials Grid', tags: ['HTML', 'CSS'] },
    { image: '/images/Boolean/FrontendMentor/pagina20.png', title: 'Four Card Feature', tags: ['HTML', 'CSS'] },
    { image: '/images/Boolean/FrontendMentor/pagina22.png', title: 'Pricing Component', tags: ['HTML', 'CSS', 'JavaScript'] },
    { image: '/images/Boolean/FrontendMentor/pagina23.png', title: 'Tip Calculator App', tags: ['JavaScript'] },
    { image: '/images/Boolean/FrontendMentor/image24.png', title: 'Stats Preview Card', tags: ['HTML', 'CSS', 'JavaScript'] },
  ];

  // Boolean Academy Projects
  const booleanProjects = [
    { image: '/images/Boolean/Boolean/spotify.png', title: 'Spotify Web Clone', tags: ['HTML', 'CSS', 'JavaScript'] },
    { image: '/images/Boolean/Boolean/discord.png', title: 'Discord UI Clone', tags: ['HTML', 'CSS'] },
    { image: '/images/Boolean/Boolean/Boolando.png', title: 'Boolando E-commerce', tags: ['HTML', 'CSS'] },
    { image: '/images/Boolean/Boolean/Dropbox.png', title: 'Dropbox Landing Page', tags: ['HTML', 'CSS'] },
    { image: '/images/Boolean/Boolean/booleanAccademy.png', title: 'Boolean Academy Website', tags: ['HTML', 'CSS'] },
    { image: '/images/Boolean/Boolean/home.png', title: 'Homepage Project', tags: ['HTML', 'CSS', 'React', 'JavaScript'] },
    { image: '/images/Boolean/Boolean/HomePage.png', title: 'Responsive Homepage', tags: ['HTML', 'CSS', 'JavaScript', 'React'] },
    { image: '/images/Boolean/Boolean/Immagine Readmi.png', title: 'DC Clone', tags: ['React', 'JavaScript'] },
  ];

  return (
    <div className="web-developer-page">
      {/* Sfondo con simboli di codice leggeri */}
      <div className="code-background"></div>

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
            {frontendMentorProjects.map((project, i) => (
              <div 
                key={i} 
                className="project-card"
                onClick={() => setFullscreenImage(project.image)}
              >
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                  />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className={`tag tag-${tag.toLowerCase()}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Boolean Academy Projects */}
        <section className="boolean-section">
          <h2 className="category-title">Boolean Academy Projects</h2>
          <p className="section-description">
            Full Stack Web Developer coursework and practice projects
          </p>
          <div className="projects-grid">
            {booleanProjects.map((project, i) => (
              <div 
                key={i} 
                className="project-card"
                onClick={() => setFullscreenImage(project.image)}
              >
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                  />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className={`tag tag-${tag.toLowerCase()}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div 
          className="fullscreen-modal"
          onClick={() => setFullscreenImage(null)}
        >
          <div className="fullscreen-modal-content">
            <img src={fullscreenImage} alt="Project fullscreen" />
            <button 
              className="close-modal"
              onClick={() => setFullscreenImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebDeveloper;
