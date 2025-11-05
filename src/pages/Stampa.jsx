/**
 * Stampa.jsx
 * 3D Printing page with expandable sections for Filament and Resin
 * Includes technical specs, materials, and project galleries
 */

import { useState } from 'react';
import './Stampa.css';

const Stampa = () => {
  // State to track which section is expanded (null, 'filament', or 'resin')
  const [expandedSection, setExpandedSection] = useState(null);

  // Toggle function to expand/collapse sections
  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Data for Filament section (FDM)
  const filamentData = {
    title: "Filament Printing (FDM)",
    description: "Fused Deposition Modeling Technology",
    // NOTE: Replace with your actual image
    mainImage: "https://picsum.photos/seed/fdm-printer/800/600",
    info: {
      printer: "FDM Printer - Layer-by-layer deposition",
      materials: "PLA, PETG, TPU, ABS, Nylon",
      layerHeight: "0.1mm - 0.3mm",
      buildVolume: "220 x 220 x 250 mm (typical)",
      speed: "40-80 mm/s",
      applications: "Functional prototypes, mechanical parts, everyday objects"
    },
    projects: [
      // NOTE: Replace with your actual project images
      { id: 1, src: "https://picsum.photos/seed/fdm-proj1/400/300", alt: "FDM Project 1" },
      { id: 2, src: "https://picsum.photos/seed/fdm-proj2/400/300", alt: "FDM Project 2" },
      { id: 3, src: "https://picsum.photos/seed/fdm-proj3/400/300", alt: "FDM Project 3" },
      { id: 4, src: "https://picsum.photos/seed/fdm-proj4/400/300", alt: "FDM Project 4" }
    ]
  };

  // Data for Resin section (SLA/DLP)
  const resinData = {
    title: "Resin Printing (SLA/DLP)",
    description: "Stereolithography / Digital Light Processing Technology",
    // NOTE: Replace with your actual image
    mainImage: "https://picsum.photos/seed/resin-printer/800/600",
    info: {
      printer: "SLA/DLP Printer - Photopolymer curing",
      materials: "Standard, Tough, Flexible, Castable, Dental resin",
      resolution: "25-50 micron XY, 25-100 micron Z",
      buildVolume: "120 x 68 x 150 mm (typical)",
      postProcessing: "IPA washing, UV curing",
      applications: "High-detail models, miniatures, jewelry, dental prototypes"
    },
    projects: [
      // NOTE: Replace with your actual project images
      { id: 1, src: "https://picsum.photos/seed/resin-proj1/400/300", alt: "Resin Project 1" },
      { id: 2, src: "https://picsum.photos/seed/resin-proj2/400/300", alt: "Resin Project 2" },
      { id: 3, src: "https://picsum.photos/seed/resin-proj3/400/300", alt: "Resin Project 3" },
      { id: 4, src: "https://picsum.photos/seed/resin-proj4/400/300", alt: "Resin Project 4" }
    ]
  };

  return (
    <div className="stampa-page">
      {/* Background Image - Replace with your own blurred 3D printing photo */}
      <div className="stampa-background"></div>
      
      <div className="stampa-content">
        {/* Hero Section */}
        <div className="hero-section">
          <h1 className="main-title">3D Printing</h1>
          <p className="subtitle">Additive Manufacturing & Rapid Prototyping</p>
        </div>

        {/* Filament Section */}
        <div className="tech-section">
          <div 
            className={`tech-card ${expandedSection === 'filament' ? 'expanded' : ''}`}
            onClick={() => toggleSection('filament')}
          >
            <div className="tech-header">
              <img 
                src={filamentData.mainImage} 
                alt={filamentData.title} 
                className="tech-image" 
              />
              <div className="tech-overlay">
                <h2>{filamentData.title}</h2>
                <p>{filamentData.description}</p>
              </div>
            </div>

            {expandedSection === 'filament' && (
              <div className="tech-details">
                <div className="info-grid">
                  <div className="info-item">
                    <h3>Printer</h3>
                    <p>{filamentData.info.printer}</p>
                  </div>
                  <div className="info-item">
                    <h3>Materials</h3>
                    <p>{filamentData.info.materials}</p>
                  </div>
                  <div className="info-item">
                    <h3>Layer Height</h3>
                    <p>{filamentData.info.layerHeight}</p>
                  </div>
                  <div className="info-item">
                    <h3>Build Volume</h3>
                    <p>{filamentData.info.buildVolume}</p>
                  </div>
                  <div className="info-item">
                    <h3>Speed</h3>
                    <p>{filamentData.info.speed}</p>
                  </div>
                  <div className="info-item">
                    <h3>Applications</h3>
                    <p>{filamentData.info.applications}</p>
                  </div>
                </div>

                <div className="projects-section">
                  <h3>Completed Projects</h3>
                  <div className="projects-grid">
                    {filamentData.projects.map(project => (
                      <div key={project.id} className="project-item">
                        <img src={project.src} alt={project.alt} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gallery Grid for Filament */}
                <div className="tech-gallery">
                  <h3>Gallery</h3>
                  <div className="gallery-grid">
                    {Array.from({ length: 30 }, (_, i) => (
                      <div key={i} className="gallery-item">
                        <img 
                          src={`https://picsum.photos/seed/filament${i}/400/400`} 
                          alt={`Filament print ${i + 1}`}
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Resin Section */}
        <div className="tech-section">
          <div 
            className={`tech-card ${expandedSection === 'resin' ? 'expanded' : ''}`}
            onClick={() => toggleSection('resin')}
          >
            <div className="tech-header">
              <img 
                src={resinData.mainImage} 
                alt={resinData.title} 
                className="tech-image" 
              />
              <div className="tech-overlay">
                <h2>{resinData.title}</h2>
                <p>{resinData.description}</p>
              </div>
            </div>

            {expandedSection === 'resin' && (
              <div className="tech-details">
                <div className="info-grid">
                  <div className="info-item">
                    <h3>Printer</h3>
                    <p>{resinData.info.printer}</p>
                  </div>
                  <div className="info-item">
                    <h3>Materials</h3>
                    <p>{resinData.info.materials}</p>
                  </div>
                  <div className="info-item">
                    <h3>Resolution</h3>
                    <p>{resinData.info.resolution}</p>
                  </div>
                  <div className="info-item">
                    <h3>Build Volume</h3>
                    <p>{resinData.info.buildVolume}</p>
                  </div>
                  <div className="info-item">
                    <h3>Post-Processing</h3>
                    <p>{resinData.info.postProcessing}</p>
                  </div>
                  <div className="info-item">
                    <h3>Applications</h3>
                    <p>{resinData.info.applications}</p>
                  </div>
                </div>

                <div className="projects-section">
                  <h3>Completed Projects</h3>
                  <div className="projects-grid">
                    {resinData.projects.map(project => (
                      <div key={project.id} className="project-item">
                        <img src={project.src} alt={project.alt} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gallery Grid for Resin */}
                <div className="tech-gallery">
                  <h3>Gallery</h3>
                  <div className="gallery-grid">
                    {Array.from({ length: 30 }, (_, i) => (
                      <div key={i} className="gallery-item">
                        <img 
                          src={`https://picsum.photos/seed/resin${i}/400/400`} 
                          alt={`Resin print ${i + 1}`}
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stampa;
