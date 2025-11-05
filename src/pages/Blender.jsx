/**
 * Blender.jsx
 * Pagina portfolio competenze Blender 3D
 */

import '../styles/pages/Blender.css';
import { 
  SiBlender,
  SiAdobephotoshop
} from 'react-icons/si';
import { 
  TbTopologyRing,
  TbCube3dSphere,
  TbBulb,
  TbPalette,
  TbCamera,
  TbMovie,
  TbTexture
} from 'react-icons/tb';
import InfiniteHorizontalCarousel from '../components/InfiniteHorizontalCarousel';

const Blender = () => {
  // Competenze Blender organizzate per categoria
  const skills = {
    modeling: [
      { name: "Modeling", icon: <TbCube3dSphere />, color: "#E87D0D" },
      { name: "Topology", icon: <TbTopologyRing />, color: "#265787" },
      { name: "UV Mapping", icon: <SiBlender />, color: "#F5792A" },
    ],
    materials: [
      { name: "Shading", icon: <TbPalette />, color: "#FF6B6B" },
      { name: "Texturing", icon: <TbTexture />, color: "#4ECDC4" },
      { name: "Lighting", icon: <TbBulb />, color: "#FFE66D" },
    ],
    rendering: [
      { name: "Camera Work", icon: <TbCamera />, color: "#95E1D3" },
      { name: "Rendering", icon: <TbMovie />, color: "#F38181" },
      { name: "Post-Production", icon: <SiAdobephotoshop />, color: "#31D2F2" },
    ],
  };

  const projects = [
    { title: "Hard Surface Modeling", description: "Mechanical and architectural objects" },
    { title: "Organic Modeling", description: "Characters and creatures" },
    { title: "Product Visualization", description: "Photorealistic product rendering" },
    { title: "Animation", description: "3D animation and motion graphics" },
    { title: "Environment Design", description: "Scene building, set dressing, lighting" },
    { title: "Procedural Modeling", description: "Geometry Nodes workflows and generators" },
    { title: "Simulation", description: "Physics, cloth, fluid and particles" },
    { title: "Rigging & Skinning", description: "Preparing models for animation" },
    { title: "Compositing", description: "Node-based post-production and lookdev" },
    { title: "Rendering Pipelines", description: "Cycles/Eevee optimization and rendering" },
    { title: "Motion Tracking", description: "Camera tracking and 3D integration" },
    { title: "3D Printing Prep", description: "Watertight meshes, scale and export" },
  ];

  return (
    <div className="blender-page">
      {/* Sfondo statico leggero */}
      <div className="blender-static-bg" aria-hidden="true"></div>

      {/* Contenuto principale */}
      <div className="blender-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="blender-icon-hero">
            <SiBlender />
          </div>
          <h1 className="main-title">Blender 3D Artist</h1>
          <p className="subtitle">Modeling • Texturing • Rendering</p>
          <div className="hero-divider"></div>
        </section>

        {/* Skills Grid */}
        <section className="skills-container">
          {/* Modeling */}
          <div className="skill-category">
            <h2 className="category-title">Modeling & Topology</h2>
            <div className="skills-grid">
              {skills.modeling.map((skill, index) => (
                <div key={index} className="skill-card" style={{ '--skill-color': skill.color }}>
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Materials & Shading */}
          <div className="skill-category">
            <h2 className="category-title">Materials & Shading</h2>
            <div className="skills-grid">
              {skills.materials.map((skill, index) => (
                <div key={index} className="skill-card" style={{ '--skill-color': skill.color }}>
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rendering */}
          <div className="skill-category">
            <h2 className="category-title">Rendering & Post-Production</h2>
            <div className="skills-grid">
              {skills.rendering.map((skill, index) => (
                <div key={index} className="skill-card" style={{ '--skill-color': skill.color }}>
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Types */}
        <section className="projects-section">
          <h2 className="category-title">Areas of Specialization</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Thumbnails Carousel */}
        <section className="projects-carousel" style={{ marginTop: '2rem' }}>
          <h2 className="category-title">Projects Preview</h2>
          <InfiniteHorizontalCarousel
            height={120}
            speed={0.6}
            gap={12}
            images={[
              { src: '/images/Boolean/Blender/BAGNO.png', alt: 'Bagno' },
              { src: '/images/Boolean/Blender/Castelli.jpg', alt: 'Castelli' },
              { src: '/images/Boolean/Blender/Cyber.jpg', alt: 'Cyber' },
              { src: '/images/Boolean/Blender/foto%201.jpg', alt: 'Foto 1' },
              { src: '/images/Boolean/Blender/Game%207.jpg', alt: 'Game 7' },
              { src: '/images/Boolean/Blender/Macro.png', alt: 'Macro' },
              { src: '/images/Boolean/Blender/Mini%20house.jpg', alt: 'Mini house' },
              { src: '/images/Boolean/Blender/Natale.jpg', alt: 'Natale' },
              { src: '/images/Boolean/Blender/Puffi.jpg', alt: 'Puffi' },
              { src: '/images/Boolean/Blender/Tunnel%202.jpg', alt: 'Tunnel 2' },
              { src: '/images/Boolean/Blender/untitled%20post.jpg', alt: 'Untitled post' },
              { src: '/images/Boolean/Blender/untitled.1png.jpg', alt: 'Untitled 1png' },
              { src: '/images/Boolean/Blender/untitled.jpg', alt: 'Untitled' },
              { src: '/images/Boolean/Blender/untitled2.jpg', alt: 'Untitled 2' },
            ]}
          />
        </section>
      </div>
    </div>
  );
};

export default Blender;
