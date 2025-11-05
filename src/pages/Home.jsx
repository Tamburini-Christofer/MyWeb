/**
 * Home.jsx
 * Pagina principale con testo rotante e sezione about me
 */

import { useState } from "react";
import RotatingText from "../components/RotatingText";
import './Home.css';

const Home = () => {
  // Palette di colori per lo sfondo rotante
  const colors = ["#6654ccff", "#EE9133", "#36b150ff", "#22afb6ff", "#bb13bbff"];
  const [bgColor, setBgColor] = useState(colors[0]);

  // Cambia colore di sfondo ad ogni cambio di testo
  const handleNext = (index) => {
    setBgColor(colors[index % colors.length]);
  };

  return (
    <div className="home-page">
      <div className="containerHome text-center text-white">
        <h1 className="home-welcome-title">Welcome to my Portfolio</h1>

        <div
          className="containerAnim flex justify-center items-center h-[70vh] rounded-xl"
          style={{
            backgroundColor: bgColor,
            transition: "background-color 2s ease",
          }}
        >
          <RotatingText
            texts={[
              "WEB DEVELOPER",
              "BLENDER",
              "PHOTOGRAPHY",
              "VIDEODRONE",
              "STAMPA3D",
            ]}
            mainClassName="px-4 py-2 text-white overflow-hidden justify-center rounded-lg"
            staggerFrom="last"
            initial={{ y: "60%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-60%", opacity: 0 }}
            staggerDuration={0}
            splitLevelClassName="overflow-hidden pb-1"
            transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
            rotationInterval={2000}
            onNext={handleNext}
          />
        </div>
        
        {/* Scroll Arrow */}
        <a href="#about-me" className="scroll-arrow">
          <span className="arrow-down"></span>
        </a>
      </div>

      {/* About Me Section */}
      <div id="about-me" className="about-section">
        <div className="about-container">
          <h2 className="about-title">About Me</h2>
          
          {/* Personal Info */}
          <div className="info-grid">
            <div className="info-card personal-info-card">
              <h3>Personal Information</h3>
              <div className="personal-info-grid">
                <div className="info-item">
                  <span className="info-label">Name</span>
                  <span className="info-value">Christofer Tamburini</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Born</span>
                  <span className="info-value">1992</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Phone</span>
                  <span className="info-value">+39 347 340 2835</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email</span>
                  <span className="info-value">christofer.tamburini92@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Education & Certification */}
            <div className="info-card education-card">
              <h3>Education</h3>
              <div className="education-item">
                <div className="edu-title">Full Stack Web Developer</div>
                <div className="edu-school">Boolean Careers</div>
                <div className="edu-status">In Progress</div>
              </div>
              <div className="education-item">
                <div className="edu-title">Professional Training</div>
                <div className="edu-school">CFP UPT Trentino Alto Adige</div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="info-card">
              <h3>Work Experience</h3>
              <div className="work-entry">
                <div className="work-title">Assistant Store Manager</div>
                <div className="work-company">Eurospin</div>
                <div className="work-period">2012 - 2025</div>
              </div>
              <div className="work-entry">
                <div className="work-title">Employee</div>
                <div className="work-company">Poli</div>
                <div className="work-period">2010 - 2012</div>
              </div>
            </div>

            {/* Passions */}
            <div className="info-card">
              <h3>Passions</h3>
              <div className="passions-list">
                <span className="passion-tag">🎮 Video Games</span>
                <span className="passion-tag">📚 Manga</span>
                <span className="passion-tag">🎬 Anime</span>
                <span className="passion-tag">📸 Photography</span>
                <span className="passion-tag">💻 Technology</span>
              </div>
            </div>

            {/* Skills */}
            <div className="info-card skills-card">
              <h3>Key Skills</h3>
              <ul className="skills-list">
                <li>Creative Problem Solving</li>
                <li>Team Leadership & Management</li>
                <li>Adaptability & Quick Learning</li>
                <li>Customer Relations</li>
                <li>Technical Proficiency</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
