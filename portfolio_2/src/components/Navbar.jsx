// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar({ setIsContactOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    // { name: 'Contact', href: '#contact-section' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <a href="#home">HC</a>
        </div>
        
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              onClick={handleNavClick}
              className="nav-item"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="/documents/resume.pdf" 
            className="resume-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
        
        <button className="contact-btn" onClick={() => setIsContactOpen(true)}>
          Contact Me
        </button>
        
        <div className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
