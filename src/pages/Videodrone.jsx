/**
 * Videodrone.jsx
 * Drone videography YouTube channel showcase page
 */

import { useState } from 'react';
import { SiYoutube } from 'react-icons/si';
import { TbDrone } from 'react-icons/tb';
import '../styles/pages/Videodrone.css';

const Videodrone = () => {
  const [isHovering, setIsHovering] = useState(false);

  const videoCategories = [
    {
      title: "Landscape & Nature",
      description: "Breathtaking aerial views of mountains, lakes, and forests",
      icon: "🏔️"
    },
    {
      title: "Urban Exploration",
      description: "City skylines and architectural masterpieces from above",
      icon: "🏙️"
    },
    {
      title: "Cinematic Shots",
      description: "Professional-grade footage for films and commercials",
      icon: "🎬"
    }
  ];

  return (
    <div className="videodrone-page">
      {/* Animated Background with Map */}
      <div 
        className={`videodrone-background ${isHovering ? 'paused' : ''}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      ></div>
      
      {/* Overlay Gradient */}
      <div className="videodrone-overlay"></div>

      <div className="videodrone-content">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="drone-icon-float">
            <TbDrone />
          </div>
          <h1 className="main-title">Aerial Videography</h1>
          <p className="subtitle">Capturing the world from a unique perspective</p>
          
          {/* YouTube CTA */}
          <a 
            href="https://www.youtube.com/@christofertamburiniChannel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="youtube-cta"
          >
            <SiYoutube />
            <span>Subscribe to my Channel</span>
          </a>
        </div>

        {/* Video Categories */}
        <div className="categories-section">
          <h2 className="section-title">What You'll Find</h2>
          <div className="categories-grid">
            {videoCategories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-bullet"></div>
              <div className="feature-text">
                <strong>4K Ultra HD</strong> - Crystal clear footage
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-bullet"></div>
              <div className="feature-text">
                <strong>Professional Equipment</strong> - Latest drone technology
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-bullet"></div>
              <div className="feature-text">
                <strong>Weekly Uploads</strong> - Fresh content every week
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-bullet"></div>
              <div className="feature-text">
                <strong>Behind the Scenes</strong> - Exclusive making-of content
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Footer */}
        <div className="cta-footer">
          <h3>Ready to see the world from above?</h3>
          <a 
            href="https://www.youtube.com/@christofertamburiniChannel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="secondary-cta"
          >
            Watch Latest Videos
          </a>
        </div>
      </div>
    </div>
  );
};

export default Videodrone;