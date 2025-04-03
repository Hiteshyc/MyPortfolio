// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CodeAnimation from './components/CodeAnimation'; // Import the animation

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for a smoother entrance
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading Portfolio...</p>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Background Animation */}
      <div className="animation-container">
        <CodeAnimation />
      </div>

      <Navbar setIsContactOpen={setIsContactOpen} />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact-section">
          <Contact />
        </section>
      </main>
      <Footer />
      {isContactOpen && (
        <div className="contact-modal-overlay" onClick={() => setIsContactOpen(false)}>
          <div className="contact-modal-container" onClick={(e) => e.stopPropagation()}>
            <Contact isModal={true} onClose={() => setIsContactOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
