// src/components/About.jsx
import React from 'react';

function About() {
  return (
    <div className="about-wrapper">
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        <div className="about-image">
          <div className="image-border">
            <img src="/MyPhoto.jpg" alt="Developer" />
          </div>
        </div>
        <div className="about-content">
        <p>
            I'm <strong>Hitesh Yuvaraj Chaudhari</strong>, a <strong>Computer Science and Engineering</strong> student at <strong>VIT Vellore</strong>, passionate about 
            <strong>technology, problem-solving, and innovation</strong>.
        </p>
        <p>
            I have experience in <strong>software and hardware development</strong>, working on projects like a <strong>DIY 3D Scanner</strong> and a 
            <strong>Mars Rover Prototype</strong> using <strong>Arduino and C++</strong>. Proficient in <strong>C, C++, Java, Python, JavaScript, and React</strong>, 
            I enjoy exploring new technologies and building efficient solutions.
        </p>
        <p>
            With a strong interest in <strong>AI, machine learning, and embedded systems</strong>, I continuously expand my knowledge to stay ahead in the tech industry. 
            I’m always eager to <strong>learn, collaborate, and take on new challenges</strong> to create impactful solutions.
        </p>
          <div className="about-buttons">
            <a href="#skills" className="btn primary-btn">My Skills</a>
            <a href="#projects" className="btn secondary-btn">See My Work</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;