// src/components/Hero.jsx
import React, { useEffect, useState } from 'react';
import CodeAnimation from './CodeAnimation';

function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = [
    "Web Developer",
    "Android Developer",
    "Problem Solver"
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 80 : 150;
    
    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      setDisplayText(prev => {
        if (isDeleting) {
          return currentPhrase.substring(0, prev.length - 1);
        } else {
          return currentPhrase.substring(0, prev.length + 1);
        }
      });
      
      if (!isDeleting && displayText === currentPhrase) {
        // Wait at end of phrase
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
      }
    };
    
    const timer = setTimeout(type, typeSpeed);
    return () => clearTimeout(timer);
  }, [displayText, currentPhraseIndex, isDeleting, phrases]);

  return (
    <div className="hero-container">
      
      <div className="hero-content">
        <h1>
          <span className="greeting">Hello, I'm</span>
          <span className="name">Hitesh Chaudhari</span>
        </h1>
        <div className="typewriter">
          <span className="typed-text">{displayText}</span>
          <span className="cursor"></span>
        </div>
        <p className="hero-description">
        Motivated and adaptable undergraduate eager to learn, grow, and contribute with dedication and a strong work ethic.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">View My Work</a>
          <a href="/documents/resume.pdf" download className="btn secondary-btn">Download CV</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
