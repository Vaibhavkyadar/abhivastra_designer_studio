// src/components/Footer.js
import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSignup = (e) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    alert(`Thank you for signing up, ${email}!`);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        <a href="/returns">Returns</a>
      </div>
      <div className="social-media">
        <h3>Follow Us</h3>
        <a href="https://facebook.com/abhivastra" target="_blank" rel="noopener noreferrer">
          <img src="/path/to/facebook-icon.png" alt="Facebook" />
        </a>
        <a href="https://instagram.com/abhivastra" target="_blank" rel="noopener noreferrer">
          <img src="/path/to/instagram-icon.png" alt="Instagram" />
        </a>
        <a href="https://twitter.com/abhivastra" target="_blank" rel="noopener noreferrer">
          <img src="/path/to/twitter-icon.png" alt="Twitter" />
        </a>
      </div>
      <div className="newsletter-signup">
        <h3>Subscribe to Our Newsletter</h3>
        <form onSubmit={handleNewsletterSignup}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <p>&copy; {new Date().getFullYear()} Abhivastra Designer Studio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;