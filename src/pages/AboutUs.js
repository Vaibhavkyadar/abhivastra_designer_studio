// src/pages/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <section className="brand-story">
        <h2>Our Brand Story</h2>
        <p>
          At Abhivastra Designer Studio, we believe in the power of fashion to express individuality and culture. 
          Founded in 2025, our brand was born out of a passion for creating unique, high-quality clothing that 
          celebrates the rich heritage of [specific culture or region]. Our collections are designed to empower 
          individuals to embrace their style while honoring traditional craftsmanship.
        </p>
      </section>

      <section className="mission-vision">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide exquisite clothing that combines modern aesthetics with traditional techniques, 
          ensuring that every piece tells a story. We aim to inspire confidence and creativity in our customers 
          through our thoughtfully designed collections.
        </p>

        <h2>Our Vision</h2>
        <p>
          We envision a world where fashion is a medium for self-expression and cultural appreciation. 
          We strive to be a leading brand in sustainable fashion, promoting ethical practices and supporting local artisans.
        </p>
      </section>

      <section className="team-introduction">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <h3>[Team Member Name]</h3>
          <p>[Position]</p>
          <p>[Brief bio or description of their role]</p>
        </div>
        <div className="team-member">
          <h3>[Team Member Name]</h3>
          <p>[Position]</p>
          <p>[Brief bio or description of their role]</p>
        </div>
        {/* Add more team members as needed */}
      </section>

      <section className="sustainability-practices">
        <h2>Sustainability Practices</h2>
        <p>
          At Abhivastra Designer Studio, we are committed to sustainability and ethical practices. 
          We prioritize eco-friendly materials and processes in our production. Our collections are crafted 
          with care, ensuring minimal waste and a positive impact on the environment. 
          We also support local artisans and communities, promoting fair trade and responsible sourcing.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;