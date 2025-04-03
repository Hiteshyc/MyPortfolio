// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          
        </div>
        
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact-section">Contact</a>
        </div>
        
        <div className="social-links">
          <a href="https://github.com/Hiteshyc" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/hitesh-chaudhari-010a3028b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          
        </div>
        
        <div className="copyright">
          <p>&copy; {currentYear} Developer Portfolio. All rights reserved.</p>
          <p>Made with React</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;