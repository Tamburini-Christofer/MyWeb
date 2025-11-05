/**
 * Contact.jsx
 * Contact page with professional contact information and social links
 */

import { 
  SiGmail, 
  SiLinkedin, 
  SiGithub, 
  SiInstagram,
  SiWhatsapp 
} from 'react-icons/si';
import { TbMapPin, TbPhone, TbBrandTelegram } from 'react-icons/tb';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: <SiGmail />,
      label: "Email",
      value: "christofer.tamburini92@gmail.com",
      link: "mailto:christofer.tamburini92@gmail.com",
      color: "#EA4335"
    },
    {
      icon: <TbPhone />,
      label: "Phone",
      value: "+39 3473402835",
      link: "tel:+393473402835",
      color: "#4CAF50"
    },
    {
      icon: <TbMapPin />,
      label: "Location",
      value: "Italy, Trentino Alto Adige",
      link: null,
      color: "#FF5722"
    }
  ];

  const socialLinks = [
    {
      icon: <SiLinkedin />,
      name: "LinkedIn",
      username: "@christofer-tamburini",
      link: "https://www.linkedin.com/in/christofer-tamburini-6710b5346/",
      color: "#0A66C2"
    },
    {
      icon: <SiGithub />,
      name: "GitHub",
      username: "@Tamburini-Christofer",
      link: "https://github.com/Tamburini-Christofer",
      color: "#fff"
    },
    {
      icon: <SiInstagram />,
      name: "Instagram",
      username: "@christofer.tamburini",
      link: "https://www.instagram.com/christofer.tamburini/?__pwa=1",
      color: "#E4405F"
    },
    {
      icon: <SiWhatsapp />,
      name: "WhatsApp",
      username: "Contact me",
      link: "https://wa.me/393473402835",
      color: "#25D366"
    },
    {
      icon: <TbBrandTelegram />,
      name: "Telegram",
      username: "Contact me",
      link: "https://t.me/393473402835",
      color: "#0088cc"
    }
  ];

  return (
    <div className="contact-page">
      <div className="contact-background"></div>
      
      <div className="contact-content">
        {/* Hero Section */}
        <div className="contact-hero">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">Let's work together on your next project</p>
        </div>

        {/* Contact Information */}
        <section className="contact-info-section">
          <h2 className="section-title">Contact Information</h2>
          <div className="contact-grid">
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-card">
                {item.link ? (
                  <a 
                    href={item.link} 
                    className="contact-link"
                    style={{ '--hover-color': item.color }}
                  >
                    <div className="contact-icon" style={{ color: item.color }}>
                      {item.icon}
                    </div>
                    <div className="contact-details">
                      <h3>{item.label}</h3>
                      <p>{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="contact-link">
                    <div className="contact-icon" style={{ color: item.color }}>
                      {item.icon}
                    </div>
                    <div className="contact-details">
                      <h3>{item.label}</h3>
                      <p>{item.value}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Social Media */}
        <section className="social-section">
          <h2 className="section-title">Connect With Me</h2>
          <div className="social-grid">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
                style={{ '--social-color': social.color }}
              >
                <div className="social-icon" style={{ color: social.color }}>
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Footer Note */}
        <div className="contact-footer">
          <p>Available for freelance projects and collaborations</p>
          <p className="copyright">© 2025 Christofer Tamburini. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
