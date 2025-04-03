// src/components/Projects.jsx
import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "Mars Rover Prototype ",
      description: "Developed a rocker-bogie robot using Arduino Uno and C/C++, integrating an L298 motor driver for Bluetooth control, ensuring stability and obstacle traversal.o",
      longDescription: "I built a rocker-bogie robotic vehicle using an Arduino Uno, programmed in C/C++ for control. The system integrates an L298 motor driver and Bluetooth module for remote operation. Designed for enhanced stability and obstacle traversal, the vehicle efficiently navigates rough terrains, mimicking NASA’s Mars rovers.",
      technologies: ["Arduino IDE", "C", "C++"],
      imageUrl: "/images/mars.jpg",
      // demoUrl: "https://example.com/project1",
      // codeUrl: "https://github.com/yourusername/project1"
    },
    {
      id: 2,
      title: "3D Scanner",
      description: "Developed a DIY 3D scanner using Arduino Nano, stepper motors, and an IR sensor, processing data in C/C++ and converting to STL with MeshLab.",
      longDescription: "I built a DIY 3D scanner using an Arduino Nano, NEMA17 stepper motors, and an IR sensor to capture 3D point cloud data. The system, programmed in C/C++, controlled the stepper motors and processed scanned data. The captured point cloud was converted into STL files using MeshLab for 3D printing, enabling object reconstruction and digital fabrication.",
      technologies: ["Arduino IDE", "C", "C++", "Meshlab"],
      imageUrl: "/images/scanner.jpg",
      // demoUrl: "https://example.com/project2",
      // codeUrl: "https://github.com/yourusername/project2"
    }
  ];

  const handleProjectClick = (id) => {
    if (activeProject === id) {
      setActiveProject(null);
    } else {
      setActiveProject(id);
    }
  };

  return (
    <div className="projects-wrapper">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div 
            className={`project-card ${activeProject === project.id ? 'active' : ''}`}
            key={project.id}
          >
            <div className="project-image">
              <img src={project.imageUrl} alt={project.title} />
              <div className="project-overlay">
                <button 
                  className="details-btn"
                  onClick={() => handleProjectClick(project.id)}
                >
                  {activeProject === project.id ? 'Less Details' : 'More Details'}
                </button>
              </div>
            </div>
            
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-description">
                {activeProject === project.id ? project.longDescription : project.description}
              </p>
              
              <div className="tech-stack">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              {/* <div className="project-links">
                <a href={project.demoUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a href={project.codeUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Source Code
                </a>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
