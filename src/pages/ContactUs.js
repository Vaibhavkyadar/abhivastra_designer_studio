// src/pages/ContactUs.js
import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Message sent!');
  };

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message " value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: contact@abhivastra.com</p>
        <p>Phone: +1 (234) 567-8901</p>
        <div className="social-media">
          <h3>Follow Us</h3>
          <a href="https://facebook.com/abhivastra" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com/abhivastra" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com/abhivastra" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
      <div className="google-map">
        <h2>Our Location</h2>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509123!2d144.9537353153165!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0f0f0f%3A0x0!2sAbhivastra%20Designer%20Studio!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;