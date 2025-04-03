import React, { useState } from 'react';
import { FaTimes, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Contact({ isModal = false, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    // ✅ Log user input to terminal
    console.log("Sending email with the following details:", formData);

    // ✅ Ensure all details are sent to EmailJS
    emailjs.send(
      'service_7c9itd2', // Your EmailJS Service ID
      'template_seaz7qy', // Your EmailJS Template ID
      {
        name: formData.name,      // ✅ Fix: Ensure "name" is passed
        email: formData.email,    // ✅ Fix: Ensure "email" is passed
        subject: formData.subject, // ✅ Fix: Ensure "subject" is passed
        message: formData.message, // ✅ Fix: Ensure "message" is passed
        time: new Date().toLocaleString() // ✅ Add time if needed
      },
      'sLqQXEA7Nr3CU-zGH' // Your EmailJS Public Key
    )
      .then(() => {
        setFormStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => {
          setFormStatus({ submitting: false, submitted: false, error: null });
          if (isModal && onClose) onClose();
        }, 3000);
      })
      .catch((error) => {
        console.error('Email send error:', error);
        setFormStatus({ submitting: false, submitted: false, error: 'Failed to send message. Please try again.' });
      });
  };


  return (
    <div className={`contact-wrapper ${isModal ? 'modal' : ''}`}>
      {isModal && (
        <button className="close-modal-btn" onClick={onClose}>
          <FaTimes />
        </button>
      )}

      <h2 className="section-title">{isModal ? 'Get In Touch' : 'Contact Me'}</h2>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-method">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <div>
              <h3>Email</h3>
              <p>hitesh.chaudhari2024@example.com</p>
            </div>
          </div>

          <div className="contact-method">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3>Location</h3>
              <p>New Delhi, India</p>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com/Hiteshyc" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/hitesh-chaudhari-010a3028b/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="contact-form-container">
          {formStatus.submitted ? (
            <div className="success-message">
              <h3>Thank you!</h3>
              <p>Your message has been sent successfully. I'll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {formStatus.error && <p className="error-message">{formStatus.error}</p>}

              <button
                type="submit"
                className="btn primary-btn submit-btn"
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
